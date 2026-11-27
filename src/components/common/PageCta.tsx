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
  className = 'w-full bg-[#F6EFE2] py-16 sm:py-20 font-body',
}) => {
  return (
    <section className={className} aria-labelledby="page-cta-title">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[24px] bg-gradient-to-br from-[#220901] via-[#621708] to-[#941B0C] px-8 py-10 md:flex-row md:items-center md:px-12 shadow-2xl border border-[#941B0C]/40 relative overflow-hidden reveal-on-scroll">
          {/* Subtle Silk Radial Ambient Glows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(60% 90% at 85% 20%, rgba(246,170,28,0.14) 0%, transparent 65%), radial-gradient(45% 80% at 10% 100%, rgba(188,57,8,0.22) 0%, transparent 60%)',
            }}
          />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full border border-[#F6AA1C]/10 pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#BC3908]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Content */}
          <div className="flex-1 relative z-10 max-w-2xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#F6AA1C] mb-2.5 font-body">
              {subtitle}
            </div>
            <h2
              id="page-cta-title"
              className="font-display text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.2]"
            >
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#EADBC6]/90 mt-2.5 max-w-xl font-body leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right: Dual Pill Action Buttons */}
          <div className="flex shrink-0 flex-wrap items-center gap-3 relative z-10">
            <a
              href={buttonHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#BC3908] hover:bg-[#941B0C] px-7 text-xs sm:text-sm font-semibold text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-body"
            >
              <span>{buttonText}</span>
              <ArrowRightIcon size={14} className="text-white" />
            </a>
            {secondaryText && secondaryHref && (
              <a
                href={secondaryHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-6 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer font-body"
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
