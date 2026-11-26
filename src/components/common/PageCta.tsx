import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export interface PageCtaProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export const PageCta: React.FC<PageCtaProps> = ({
  title = 'Ready to launch your loyalty operating system?',
  subtitle = 'PUNYA PERKS INFRASTRUCTURE',
  description = 'Join high-growth retail, hospitality, and e-commerce brands running multi-tender ledgers, instant WhatsApp statements, and dynamic tier engines.',
  buttonText = 'Talk to an expert',
  buttonHref = '/demo',
  secondaryText = 'Start in sandbox',
  secondaryHref = '/start',
  className = 'w-full bg-[#FAF5ED] py-16 sm:py-20 font-body',
}) => {
  return (
    <section className={className} aria-labelledby="page-cta-title">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[24px] bg-gradient-to-r from-[#17140F] via-[#241A13] to-[#17140F] px-8 py-10 md:flex-row md:items-center md:px-12 shadow-xl border border-[#3E2C20] relative overflow-hidden">
          {/* Subtle Ambient Marigold Glow & Geometry Watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-15 pointer-events-none">
            <svg width="360" height="360" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="28" stroke="#B5651A" strokeWidth="2" strokeDasharray="4 4" />
              <path
                d="M 21 44 L 21 20 A 11 11 0 1 1 43 32"
                stroke="#EBDFC6"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <circle cx="32" cy="32" r="5" fill="#B5651A" />
            </svg>
          </div>
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#B5651A]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Content */}
          <div className="flex-1 relative z-10 max-w-2xl">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#D9822B] mb-2 font-body">
              {subtitle}
            </div>
            <h2
              id="page-cta-title"
              className="font-display text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.2]"
            >
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#EBDFC6]/80 mt-2.5 max-w-xl font-body leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right: Dual Pill Action Buttons */}
          <div className="flex shrink-0 flex-wrap items-center gap-3 relative z-10">
            <a
              href={buttonHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#B5651A] hover:bg-[#9a5413] px-7 text-xs font-bold text-white shadow-md hover:scale-105 transition-all cursor-pointer font-body"
            >
              <span>{buttonText}</span>
              <ArrowRightIcon size={14} className="text-white" />
            </a>
            {secondaryText && secondaryHref && (
              <a
                href={secondaryHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/5 hover:bg-white/15 px-6 text-xs font-semibold text-white transition-all cursor-pointer font-body"
              >
                {secondaryText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
