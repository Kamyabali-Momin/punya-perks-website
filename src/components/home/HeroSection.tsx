import React from 'react';
import { Button } from '../common/Button';
import { homeData } from '../../data/home';
import { ArrowRightIcon, CheckCircle2Icon, ShieldCheckIcon } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { hero } = homeData;

  return (
    <section
      className="relative w-full pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 overflow-hidden font-body bg-white border-b border-[#E2D3B5]"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(142, 91, 19, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(142, 91, 19, 0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10 space-y-8 sm:space-y-10">
        {/* 1. Split Executive Hero Row (Xoxoday Clarity + Antavo Stage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4E9D2] border border-[#CBB68E] px-3.5 py-1 text-[10px] sm:text-[11px] font-bold text-[#754A0F] tracking-[0.14em] uppercase animate-fade-in-up">
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#8E5B13]" />
              <span>{hero.eyebrow}</span>
            </div>

            <h1 className="font-display font-normal text-4xl sm:text-5xl xl:text-[60px] text-[#14100B] tracking-[-0.028em] leading-[1.06] animate-fade-in-up delay-100">
              Loyalty that{' '}
              <span className="italic text-[#8E5B13] underline decoration-[#C89232] decoration-2 underline-offset-[10px]">
                pays for itself.
              </span>
            </h1>

            <p className="font-body text-base sm:text-[17px] text-[#534A40] leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
              {hero.description}
            </p>

            {/* Dual Pill CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-3.5 animate-fade-in-up delay-300">
              <Button
                href={hero.primaryCta.href}
                variant="primary"
                size="lg"
                className="rounded-full px-8 py-3.5 text-sm font-semibold shadow-sm w-full sm:w-auto whitespace-nowrap bg-[#8E5B13] hover:bg-[#6E440B] text-white border border-[#754A0F] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {hero.primaryCta.text}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="ghost"
                size="lg"
                className="rounded-full px-8 py-3.5 text-sm font-semibold border border-[#14100B] text-[#14100B] hover:bg-[#14100B] hover:text-white w-full sm:w-auto whitespace-nowrap bg-white shadow-2xs transition-all cursor-pointer"
              >
                {hero.secondaryCta.text}
              </Button>
            </div>

            {/* Xoxoday-Style Scale & SLA Proof Strip inside Hero */}
            <div className="pt-5 border-t border-[#E2D3B5] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-350">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#14100B] pp-tabular">
                  3.4M+
                </div>
                <div className="text-[11px] font-mono text-[#7C7265] mt-0.5">Active Ledgers</div>
              </div>
              <div className="border-x border-[#E2D3B5] px-3">
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#8E5B13] pp-tabular">
                  &lt;110ms
                </div>
                <div className="text-[11px] font-mono text-[#7C7265] mt-0.5">Live POS Sync</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#16794C] pp-tabular">
                  0.00%
                </div>
                <div className="text-[11px] font-mono text-[#7C7265] mt-0.5">Ledger Variance</div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Deep Obsidian Stage Showcase */}
          <div className="lg:col-span-6 animate-fade-in delay-150">
            <div className="bg-[#14100B] border-2 border-[#8E5B13]/75 hover:border-[#C89232] rounded-[24px] overflow-hidden shadow-2xl min-h-[340px] sm:min-h-[390px] lg:min-h-[420px] flex flex-col justify-between relative transition-all duration-300 px-4 sm:px-6 pt-4 pb-0">
              {/* Crisp Top Bar Inside Stage */}
              <div className="relative z-30 flex items-center justify-between gap-2 pb-2.5 border-b border-white/10">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#F4E9D2]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-bold tracking-wide">KOMBEE LIVE SUITE · APP &amp; WEB</span>
                </div>
                <a
                  href="/product/member-app"
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#D4A147] hover:text-white transition-colors"
                >
                  <span>Inspect Platform</span>
                  <ArrowRightIcon size={11} />
                </a>
              </div>

              {/* Dual Real Product Screens */}
              <div className="relative z-10 w-full flex items-end justify-center gap-3 sm:gap-4 mt-auto pt-4">
                {/* User Side Web Portal */}
                <div className="hidden sm:flex flex-col w-[56%] max-w-[310px] rounded-t-xl bg-white border border-[#D4BE96] shadow-2xl overflow-hidden self-end -mr-6 mb-0 z-10 translate-y-1">
                  <div className="h-5 bg-[#FAF6EE] border-b border-[#E2D3B5] px-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E5B13]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C89232]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16794C]" />
                    </div>
                    <span className="font-mono text-[8px] text-[#534A40]">User Web Portal</span>
                  </div>
                  <img
                    src="/images/products/user-web-home.png"
                    alt="Kombee User Side Web Member Portal"
                    className="w-full h-[240px] lg:h-[280px] object-cover object-top select-none"
                    loading="eager"
                  />
                </div>

                {/* Kombee Loyalty Mobile App */}
                <div className="relative z-20 w-[205px] sm:w-[215px] lg:w-[225px] shrink-0 rounded-t-[28px] bg-[#241C13] p-2 pb-0 shadow-2xl border-2 border-b-0 border-[#8E5B13]/60">
                  <div className="rounded-t-[20px] overflow-hidden bg-white">
                    <img
                      src="/images/products/kombee-app-home.png"
                      alt="Kombee Loyalty Mobile App"
                      className="w-full h-[305px] sm:h-[330px] lg:h-[355px] object-cover object-top select-none"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Bottom 4-Tile Executive Summary Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch reveal-on-scroll delay-200">
          {/* Tile 1: Live Ledger */}
          <div className="bg-white border border-[#D4BE96] border-t-[3px] border-t-[#8E5B13] rounded-[18px] p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#8E5B13] uppercase tracking-[0.16em]">
                  LIVE LEDGER
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
              </div>
              <div className="mt-2 font-display text-3xl text-[#14100B] pp-tabular">
                {hero.ledgerPreview.availablePoints}
              </div>
              <div className="text-xs text-[#534A40] font-semibold mt-1">
                available · {hero.ledgerPreview.pendingPoints} pending · {hero.ledgerPreview.expiringPoints} expiring
              </div>
            </div>
            <div className="pt-3">
              <div className="w-full h-1.5 bg-[#EBDAB8] rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-[#8E5B13] rounded-full" />
              </div>
            </div>
          </div>

          {/* Tile 2: Obsidian Launch Card */}
          <div className="bg-[#14100B] text-white border border-[#8E5B13]/60 rounded-[18px] p-5 flex flex-col justify-between shadow-sm">
            <div>
              <span className="inline-block rounded-full bg-[#8E5B13]/30 border border-[#C89232]/50 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4A147]">
                TURNKEY ROLLOUT
              </span>
              <div className="font-display text-2xl sm:text-[26px] text-[#D4A147] leading-tight mt-2">
                Launch in 4 Weeks
              </div>
            </div>
            <p className="font-body text-xs text-[#E4D6BA] font-semibold pt-2 border-t border-white/10">
              provision → configure → connect → launch
            </p>
          </div>

          {/* Tile 3: Regional Compliance */}
          <div className="bg-white border border-[#D4BE96] rounded-[18px] p-5 flex flex-col justify-between shadow-xs">
            <span className="font-mono text-[10px] font-bold text-[#8E5B13] uppercase tracking-[0.16em] inline-flex items-center gap-1.5">
              <ShieldCheckIcon size={12} />
              <span>REGIONAL COMPLIANCE</span>
            </span>
            <div className="space-y-1.5 mt-2 text-xs text-[#14100B]">
              <div className="flex justify-between border-b border-[#E2D3B5] pb-1">
                <span className="font-bold">India</span>
                <span className="text-[#534A40] font-mono">DPDP · DLT · UPI</span>
              </div>
              <div className="flex justify-between border-b border-[#E2D3B5] pb-1">
                <span className="font-bold">Australia</span>
                <span className="text-[#534A40] font-mono">Privacy Act · AUD</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">New Zealand</span>
                <span className="text-[#534A40] font-mono">Privacy 2020 · NZD</span>
              </div>
            </div>
          </div>

          {/* Tile 4: Executive Quote */}
          <div className="bg-[#F4E9D2] border border-[#CBB68E] rounded-[18px] p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="font-display text-2xl text-[#8E5B13] leading-none mb-1">“</div>
              <p className="text-sm font-display italic text-[#14100B] leading-snug">
                {hero.ledgerPreview.socialProof}
              </p>
            </div>
            <p className="text-xs font-semibold text-[#534A40] pt-2 inline-flex items-center gap-1.5">
              <CheckCircle2Icon size={12} className="text-[#8E5B13] shrink-0" />
              <span>{hero.ledgerPreview.socialProofAuthor}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
