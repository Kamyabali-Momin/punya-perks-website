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
        {/* 1. Centered Hero Narrative - Figma Node 5737:4712 */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {/* Eyebrow Label: Plus Jakarta Sans 12px, 700, 0.16em tracking, #B5651A */}
          <div className="font-body text-[11px] sm:text-xs font-bold text-[#B5651A] tracking-[0.16em] uppercase animate-fade-in-up">
            {hero.eyebrow}
          </div>

          {/* Headline 1: DM Serif Display, 66px, line-height 1.06, tracking -2.5%, italic accent */}
          <h1 className="font-display font-normal text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] text-[#17140F] tracking-[-0.025em] leading-[1.06] animate-fade-in-up delay-100">
            Loyalty that <br className="hidden sm:inline" />
            <span className="italic text-[#B5651A]">pays for itself.</span>
          </h1>

          {/* Subheadline Paragraph: Plus Jakarta Sans, 17-18px, #0A0908 */}
          <p className="font-body text-base sm:text-lg text-[#5B534C] leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
            {hero.description}
          </p>

          {/* Dual Pill Buttons - Figma Node 5737:4719 */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 animate-fade-in-up delay-300">
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              size="lg"
              className="rounded-full px-8 py-3.5 text-sm font-semibold shadow-sm w-full sm:w-auto bg-[#B5651A] hover:bg-[#9a5413] text-white border-none transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {hero.primaryCta.text}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="ghost"
              size="lg"
              className="rounded-full px-8 py-3.5 text-sm font-semibold border border-[#EBDFC6] text-[#17140F] hover:bg-white hover:border-[#B5651A]/40 w-full sm:w-auto bg-white/90 shadow-2xs transition-all cursor-pointer"
            >
              {hero.secondaryCta.text}
            </Button>
          </div>

          {/* Microcopy: 12px, #847C75 */}
          <p className="text-xs text-[#847C75] pt-1 animate-fade-in-up delay-350">
            {hero.microcopy}
          </p>
        </div>

        {/* 2. 5-Tile Bento Grid Showcase - Figma Node 5737:4729 (max width: 1152px, height: 416px) */}
        <div className="mt-10 sm:mt-12 max-w-[1152px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch reveal-on-scroll delay-200">
          {/* Left Column (3 cols / 280px): Live Ledger + Launch */}
          <div className="md:col-span-3 flex flex-col justify-between gap-5 md:h-[416px]">
            {/* Tile 1: Live Ledger (Figma Node 5737:4731 - height 211px) */}
            <div className="bg-[#FBE9D6] border border-[#B5651A]/40 hover:border-[#B5651A]/70 rounded-[20px] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 md:h-[211px]">
              <div>
                <span className="font-body text-[10px] font-bold text-[#17140F] uppercase tracking-[0.16em]">
                  LIVE LEDGER
                </span>
                <div className="mt-2.5">
                  <div className="font-display font-normal text-4xl sm:text-[44px] text-[#17140F] pp-tabular tracking-[-0.025em] leading-tight">
                    {hero.ledgerPreview.availablePoints}
                  </div>
                  <div className="text-xs text-[#5B534C] mt-1.5 leading-snug">
                    available · {hero.ledgerPreview.pendingPoints} pending · {hero.ledgerPreview.expiringPoints} expiring
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <div className="w-full h-1.5 bg-[#E8DCC9] rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#B5651A] rounded-full" />
                </div>
              </div>
            </div>

            {/* Tile 2: Launch Card (Figma Node 5737:4741 - height 185px) */}
            <div
              className="rounded-[20px] p-6 flex flex-col justify-between shadow-xs hover:shadow-md border border-[#B5651A]/40 hover:border-[#B5651A]/70 relative overflow-hidden bg-cover bg-center transition-all duration-300 md:h-[185px]"
              style={{
                backgroundImage: "url('/images/launch-tile-bg.png')",
              }}
            >
              <div>
                <span className="font-body text-[11px] sm:text-xs font-bold text-[#A8581C] uppercase tracking-[0.18em] block">
                  LAUNCH
                </span>
                <div className="font-display font-normal text-4xl sm:text-[44px] text-[#A85208] tracking-[-0.025em] leading-tight mt-1.5">
                  4 wks
                </div>
              </div>

              <div className="pt-2">
                <p className="font-body text-xs sm:text-[13px] text-[#925524] leading-snug font-normal">
                  provision → configure → connect →<br />
                  launch
                </p>
              </div>
            </div>
          </div>

          {/* Center Column (6 cols / 560px): Mockup container with user provided luxury golden background */}
          <div
            className="md:col-span-6 border border-[#B5651A]/40 hover:border-[#B5651A]/70 rounded-[20px] overflow-hidden shadow-md hover:shadow-xl md:h-[416px] flex items-center justify-center relative bg-cover bg-center transition-all duration-300"
            style={{
              backgroundImage: "url('/images/mockup-bg.jpg')",
            }}
          >
            <img
              src="/images/hero-phones-figma.png"
              alt="Punya Perks Member Experience"
              className="w-full h-full object-cover object-top scale-100 drop-shadow-2xl"
              loading="eager"
            />
          </div>

          {/* Right Column (3 cols / 280px): Markets + Social Proof Quote */}
          <div className="md:col-span-3 flex flex-col justify-between gap-5 md:h-[416px]">
            {/* Tile 3: Markets (Figma Node 5737:4863 - height 271px) */}
            <div className="bg-[#FBE9D6] border border-[#B5651A]/40 hover:border-[#B5651A]/70 rounded-[20px] p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 md:h-[271px]">
              <div>
                <span className="font-body text-[10px] font-bold text-[#17140F] uppercase tracking-[0.16em]">
                  MARKETS
                </span>

                <div className="space-y-2.5 mt-2.5">
                  <div className="border-b border-[#B5651A]/20 pb-2">
                    <div className="font-bold text-sm text-[#17140F]">India</div>
                    <div className="text-xs text-[#847C75] font-mono mt-0.5">DPDP · DLT · UPI</div>
                  </div>
                  <div className="border-b border-[#B5651A]/20 pb-2">
                    <div className="font-bold text-sm text-[#17140F]">Australia</div>
                    <div className="text-xs text-[#847C75] font-mono mt-0.5">Privacy Act · AUD</div>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#17140F]">New Zealand</div>
                    <div className="text-xs text-[#847C75] font-mono mt-0.5">Privacy Act 2020 · NZD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tile 4: Quote Card (Figma Node 5737:4883 - height 125px) */}
            <div className="bg-[#FBE9D6] border border-[#B5651A]/40 hover:border-[#B5651A]/70 rounded-[20px] p-5 sm:p-6 flex flex-col justify-center shadow-xs hover:shadow-md transition-all duration-300 md:h-[125px]">
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
