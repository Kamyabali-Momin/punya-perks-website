import React from 'react';
import { Button } from '../common/Button';
import { homeData } from '../../data/home';
import { ArrowRightIcon, CheckCircle2Icon, ShieldCheckIcon } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { hero } = homeData;

  return (
    <section
      className="relative w-full pt-7 pb-12 sm:pt-9 sm:pb-14 md:pt-10 md:pb-16 overflow-hidden font-body bg-[#FAF6EE] border-b border-[#E2D3B5]"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(142, 91, 19, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(142, 91, 19, 0.055) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    >
      {/* Flat Subtle Geometric Ring Framing (Zero Blurry Gradients) */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[960px] h-[420px] border-x border-b border-[#D4BE96]/40 rounded-b-full opacity-60" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        {/* 1. Centered Hero Narrative */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-3.5">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F4E9D2] border border-[#D4BE96] px-3.5 py-1 text-[10px] sm:text-[11px] font-bold text-[#754A0F] tracking-[0.14em] uppercase animate-fade-in-up">
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#8E5B13]" />
            <span>{hero.eyebrow}</span>
          </div>

          <h1 className="font-display font-normal text-4xl sm:text-5xl lg:text-[62px] text-[#14100B] tracking-[-0.028em] leading-[1.05] animate-fade-in-up delay-100">
            Loyalty that{' '}
            <span className="italic text-[#8E5B13] underline decoration-[#C89232] decoration-2 underline-offset-[10px]">
              pays for itself.
            </span>
          </h1>

          <p className="font-body text-base sm:text-[17px] text-[#534A40] leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200 pt-1">
            {hero.description}
          </p>

          {/* Dual Pill Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 animate-fade-in-up delay-300">
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
              className="rounded-full px-8 py-3.5 text-sm font-semibold border border-[#CBB68E] text-[#14100B] hover:bg-[#14100B] hover:text-white hover:border-[#14100B] w-full sm:w-auto whitespace-nowrap bg-white shadow-2xs transition-all cursor-pointer"
            >
              {hero.secondaryCta.text}
            </Button>
          </div>

          {/* Crisp Telemetry Micro-Bar */}
          <div className="pt-1.5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px] font-mono font-medium text-[#534A40] animate-fade-in-up delay-350">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2Icon size={13} className="text-[#8E5B13]" />
              <span>Sub-110ms POS Sync</span>
            </span>
            <span className="text-[#CBB68E]">•</span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheckIcon size={13} className="text-[#8E5B13]" />
              <span>0.00% Double-Entry Variance</span>
            </span>
            <span className="text-[#CBB68E]">•</span>
            <span>{hero.microcopy}</span>
          </div>
        </div>

        {/* 2. 5-Tile Executive Bento Showcase */}
        <div className="mt-8 sm:mt-10 max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch reveal-on-scroll delay-200">
          {/* Left Column (3 cols on lg+): Live Ledger + Launch in 4 Weeks */}
          <div className="order-2 lg:order-1 lg:col-span-3 flex flex-col sm:flex-row md:flex-col justify-between gap-4 sm:gap-5">
            {/* Tile 1: Live Ledger (Flat White Architectural Card + Top Gold Rule) */}
            <div className="flex-1 bg-white border border-[#D4BE96] border-t-[3px] border-t-[#8E5B13] hover:border-[#8E5B13] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 min-h-[180px]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#8E5B13] uppercase tracking-[0.16em]">
                    LIVE LEDGER
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                </div>
                <div className="mt-2.5">
                  <div className="font-display font-normal text-4xl xl:text-[44px] text-[#14100B] pp-tabular tracking-[-0.025em] leading-tight">
                    {hero.ledgerPreview.availablePoints}
                  </div>
                  <div className="text-xs text-[#534A40] font-semibold mt-1.5 leading-snug">
                    available · {hero.ledgerPreview.pendingPoints} pending · {hero.ledgerPreview.expiringPoints} expiring
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-1.5">
                <div className="w-full h-1.5 bg-[#EBDAB8] rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#8E5B13] rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#7C7265]">
                  <span>Gold Tier · 75%</span>
                  <span className="text-[#8E5B13] font-bold">0.00% Drift</span>
                </div>
              </div>
            </div>

            {/* Tile 2: Obsidian Gold Launch Card (Zero Gradients) */}
            <div className="flex-1 rounded-[20px] p-5 sm:p-6 flex flex-col justify-between bg-[#14100B] text-white border border-[#8E5B13]/60 shadow-md hover:border-[#C89232] transition-all duration-300 min-h-[175px]">
              <div className="space-y-2">
                <span className="inline-block rounded-full bg-[#8E5B13]/30 border border-[#C89232]/50 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4A147]">
                  TURNKEY ROLLOUT
                </span>
                <div className="font-display font-normal text-3xl xl:text-[32px] text-[#D4A147] tracking-[-0.02em] leading-[1.12]">
                  Launch in 4 Weeks
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <p className="font-body text-xs text-[#E4D6BA] leading-snug font-semibold">
                  provision → configure → connect → launch
                </p>
              </div>
            </div>
          </div>

          {/* Center Column (6 cols on lg+): Solid Obsidian Stage for Actual Kombee App & Member Web */}
          <div className="order-1 md:col-span-2 lg:order-2 lg:col-span-6 bg-[#14100B] border-2 border-[#8E5B13]/70 hover:border-[#C89232] rounded-[22px] overflow-hidden shadow-xl min-h-[360px] sm:min-h-[395px] lg:min-h-[415px] flex flex-col justify-between relative transition-all duration-300 px-4 sm:px-6 pt-4 pb-0">
            {/* Crisp Top Bar Inside Stage */}
            <div className="relative z-30 flex items-center justify-between gap-2 pb-2 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#F4E9D2]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold tracking-wide">KOMBEE LIVE SUITE</span>
              </div>
              <a
                href="/product/member-app"
                className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#D4A147] hover:text-white transition-colors"
              >
                <span>Inspect App &amp; Web</span>
                <ArrowRightIcon size={11} />
              </a>
            </div>

            {/* Dual Actual Product Showcase */}
            <div className="relative z-10 w-full flex items-end justify-center gap-3 sm:gap-4 mt-auto pt-3">
              {/* User Side Web Portal */}
              <div className="hidden sm:flex flex-col w-[56%] max-w-[300px] rounded-t-xl bg-white border border-[#D4BE96] shadow-2xl overflow-hidden self-end -mr-6 mb-0 z-10 translate-y-1">
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
                  className="w-full h-[245px] lg:h-[280px] object-cover object-top select-none"
                  loading="eager"
                />
              </div>

              {/* Kombee Loyalty Mobile App */}
              <div className="relative z-20 w-[205px] sm:w-[215px] lg:w-[225px] shrink-0 rounded-t-[28px] bg-[#241C13] p-2 pb-0 shadow-2xl border-2 border-b-0 border-[#8E5B13]/60">
                <div className="rounded-t-[20px] overflow-hidden bg-white">
                  <img
                    src="/images/products/kombee-app-home.png"
                    alt="Kombee Loyalty Mobile App"
                    className="w-full h-[315px] sm:h-[335px] lg:h-[358px] object-cover object-top select-none"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (3 cols on lg+): Markets + Quote */}
          <div className="order-3 md:order-3 lg:col-span-3 flex flex-col sm:flex-row md:flex-col justify-between gap-4 sm:gap-5">
            {/* Tile 3: Markets */}
            <div className="flex-1 bg-white border border-[#D4BE96] hover:border-[#8E5B13] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#8E5B13] uppercase tracking-[0.16em]">
                  REGIONAL COMPLIANCE
                </span>

                <div className="space-y-2.5 mt-3">
                  <div className="border-b border-[#E2D3B5] pb-2">
                    <div className="font-bold text-sm text-[#14100B]">India</div>
                    <div className="text-xs text-[#534A40] font-body font-bold mt-0.5">DPDP · DLT · UPI</div>
                  </div>
                  <div className="border-b border-[#E2D3B5] pb-2">
                    <div className="font-bold text-sm text-[#14100B]">Australia</div>
                    <div className="text-xs text-[#534A40] font-body font-bold mt-0.5">Privacy Act · AUD</div>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#14100B]">New Zealand</div>
                    <div className="text-xs text-[#534A40] font-body font-bold mt-0.5">Privacy Act 2020 · NZD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tile 4: Warm Champagne Gold Quote Card */}
            <div className="bg-[#F4E9D2] border border-[#CBB68E] hover:border-[#8E5B13] rounded-[20px] p-5 sm:p-6 flex flex-col justify-center shadow-sm transition-all duration-300">
              <div className="font-display text-2xl text-[#8E5B13] leading-none mb-1">“</div>
              <p className="text-sm sm:text-base font-normal font-display italic text-[#14100B] leading-snug">
                {hero.ledgerPreview.socialProof}
              </p>
              <p className="text-xs font-semibold text-[#534A40] mt-2.5 block">
                — {hero.ledgerPreview.socialProofAuthor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
