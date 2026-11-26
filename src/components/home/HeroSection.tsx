import React from 'react';
import { Button } from '../common/Button';
import { homeData } from '../../data/home';

export const HeroSection: React.FC = () => {
  const { hero } = homeData;

  return (
    <section
      className="relative w-full pt-8 pb-14 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 overflow-hidden font-body bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundColor: "#FDF8F2",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* 1. Centered Hero Narrative */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="font-body text-[11px] sm:text-xs font-bold text-[#B5651A] tracking-[0.16em] uppercase animate-fade-in-up">
            {hero.eyebrow}
          </div>

          <h1 className="font-display font-normal text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] text-[#17140F] tracking-[-0.025em] leading-[1.06] animate-fade-in-up delay-100">
            Loyalty that <br className="hidden sm:inline" />
            <span className="italic text-[#B5651A]">pays for itself.</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-[#5B534C] leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
            {hero.description}
          </p>

          {/* Dual Pill Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 animate-fade-in-up delay-300">
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              size="lg"
              className="rounded-full px-8 py-3.5 text-sm font-semibold shadow-sm w-full sm:w-auto whitespace-nowrap bg-[#B5651A] hover:bg-[#9a5413] text-white border-none transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {hero.primaryCta.text}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="ghost"
              size="lg"
              className="rounded-full px-8 py-3.5 text-sm font-semibold border border-[#EBDFC6] text-[#17140F] hover:bg-white hover:border-[#B5651A]/40 w-full sm:w-auto whitespace-nowrap bg-white/90 shadow-2xs transition-all cursor-pointer"
            >
              {hero.secondaryCta.text}
            </Button>
          </div>

          <p className="text-xs text-[#847C75] pt-1 animate-fade-in-up delay-350">
            {hero.microcopy}
          </p>
        </div>

        {/* 2. 5-Tile Bento Grid Showcase (Mobile 1-col, Tablet 2-col with full-width product showcase, Desktop 12-col) */}
        <div className="mt-10 sm:mt-12 max-w-[1152px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch reveal-on-scroll delay-200">
          {/* Left Column (3 cols on lg+): Live Ledger + Launch */}
          <div className="order-2 lg:order-1 lg:col-span-3 flex flex-col sm:flex-row md:flex-col justify-between gap-5">
            {/* Tile 1: Live Ledger */}
            <div className="flex-1 bg-[#FBE9D6] border border-[#B5651A]/40 hover:border-[#B5651A]/70 rounded-[20px] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 min-h-[190px]">
              <div>
                <span className="font-body text-[10px] font-bold text-[#17140F] uppercase tracking-[0.16em]">
                  LIVE LEDGER
                </span>
                <div className="mt-2.5">
                  <div className="font-display font-normal text-4xl xl:text-[44px] text-[#17140F] pp-tabular tracking-[-0.025em] leading-tight">
                    {hero.ledgerPreview.availablePoints}
                  </div>
                  <div className="text-xs text-[#5B534C] font-bold mt-1.5 leading-snug">
                    available · {hero.ledgerPreview.pendingPoints} pending · {hero.ledgerPreview.expiringPoints} expiring
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="w-full h-1.5 bg-[#E8DCC9] rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#B5651A] rounded-full" />
                </div>
              </div>
            </div>

            {/* Tile 2: Launch Card */}
            <div
              className="flex-1 rounded-[20px] p-6 flex flex-col justify-between shadow-xs hover:shadow-md border border-[#B5651A]/40 hover:border-[#B5651A]/70 relative overflow-hidden bg-cover bg-center transition-all duration-300 min-h-[175px]"
              style={{
                backgroundImage: "url('/images/launch-tile-bg.png')",
              }}
            >
              <div>
                <div className="font-display font-normal text-3xl xl:text-[34px] text-[#A85208] tracking-[-0.025em] leading-[1.12]">
                  Launch in 4 Weeks
                </div>
              </div>

              <div className="pt-3">
                <p className="font-body text-xs sm:text-[13px] text-[#7A3F12] leading-snug font-bold">
                  provision → configure → connect → launch
                </p>
              </div>
            </div>
          </div>

          {/* Center Column (6 cols on lg+, full width on md): Actual Kombee Loyalty App & User Side Web */}
          <div
            className="order-1 md:col-span-2 lg:order-2 lg:col-span-6 border border-[#B5651A]/40 hover:border-[#B5651A]/70 rounded-[20px] overflow-hidden shadow-md hover:shadow-xl min-h-[360px] sm:min-h-[400px] lg:min-h-[430px] flex items-end justify-center relative bg-cover bg-center transition-all duration-300 px-4 sm:px-6 pt-5 sm:pt-6 pb-0"
            style={{
              backgroundImage: "url('/images/mockup-bg.jpg')",
            }}
          >
            {/* Subtle ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#17140F]/45 via-transparent to-transparent pointer-events-none" />

            {/* Dual Actual Product Showcase: User Side Web (back right/left) + Kombee Loyalty Mobile App (front) */}
            <div className="relative z-10 w-full flex items-end justify-center gap-3 sm:gap-4 h-full">
              {/* User Side Web Portal Card (Visible on sm+ alongside phone, clean layered preview) */}
              <div className="hidden sm:flex flex-col w-[56%] max-w-[300px] rounded-t-xl bg-white border border-[#EBDFC6] shadow-2xl overflow-hidden self-end -mr-6 mb-0 z-10 translate-y-1">
                <div className="h-5 bg-[#FAF5ED] border-b border-[#EBDFC6] px-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9822B]/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15B]/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C5A]/60" />
                  </div>
                  <span className="font-mono text-[8px] text-[#5B534C]">User Web Portal</span>
                </div>
                <img
                  src="/images/products/user-web-home.png"
                  alt="Kombee User Side Web Member Portal"
                  className="w-full h-[250px] lg:h-[290px] object-cover object-top select-none"
                  loading="eager"
                />
              </div>

              {/* Kombee Loyalty Mobile App (Actual Flutter App Screen) */}
              <div className="relative z-20 w-[205px] sm:w-[215px] lg:w-[225px] shrink-0 rounded-t-[28px] bg-[#17140F] p-2 pb-0 shadow-2xl border-2 border-b-0 border-[#3B2A1E]">
                <div className="rounded-t-[20px] overflow-hidden bg-white">
                  <img
                    src="/images/products/kombee-app-home.png"
                    alt="Kombee Loyalty Mobile App"
                    className="w-full h-[320px] sm:h-[345px] lg:h-[370px] object-cover object-top select-none"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Label Pill */}
            <div className="absolute bottom-3 left-3 sm:left-4 z-30 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#17140F]/85 backdrop-blur-xs border border-white/15 text-[10px] font-mono text-white/95 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52C485]" />
              <span>Kombee App · Member Web</span>
            </div>
          </div>

          {/* Right Column (3 cols on lg+): Markets + Social Proof Quote */}
          <div className="order-3 md:order-3 lg:col-span-3 flex flex-col sm:flex-row md:flex-col justify-between gap-5">
            {/* Tile 3: Markets */}
            <div className="flex-1 bg-[#FBE9D6] border border-[#B5651A]/40 hover:border-[#B5651A]/70 rounded-[20px] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
              <div>
                <span className="font-body text-[10px] font-bold text-[#17140F] uppercase tracking-[0.16em]">
                  MARKETS
                </span>

                <div className="space-y-2.5 mt-2.5">
                  <div className="border-b border-[#B5651A]/20 pb-2">
                    <div className="font-bold text-sm text-[#17140F]">India</div>
                    <div className="text-xs text-[#5B534C] font-body font-bold mt-0.5">DPDP · DLT · UPI</div>
                  </div>
                  <div className="border-b border-[#B5651A]/20 pb-2">
                    <div className="font-bold text-sm text-[#17140F]">Australia</div>
                    <div className="text-xs text-[#5B534C] font-body font-bold mt-0.5">Privacy Act · AUD</div>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#17140F]">New Zealand</div>
                    <div className="text-xs text-[#5B534C] font-body font-bold mt-0.5">Privacy Act 2020 · NZD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tile 4: Quote Card */}
            <div className="bg-[#FBE9D6] border border-[#B5651A]/40 hover:border-[#B5651A]/70 rounded-[20px] p-5 sm:p-6 flex flex-col justify-center shadow-xs hover:shadow-md transition-all duration-300">
              <p className="text-sm sm:text-base font-normal font-display italic text-[#17140F] leading-snug">
                “{hero.ledgerPreview.socialProof}”
              </p>
              <p className="text-xs text-[#5B534C] mt-2 block">
                {hero.ledgerPreview.socialProofAuthor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
