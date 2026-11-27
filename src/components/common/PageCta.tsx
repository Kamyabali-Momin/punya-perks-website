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
  className = 'w-full bg-[#F4ECE0] py-16 sm:py-20 font-body',
}) => {
  return (
    <section className={className} aria-labelledby="page-cta-title">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[24px] bg-[#14100B] px-8 py-10 md:flex-row md:items-center md:px-12 shadow-xl border border-[#8E5B13]/60 relative overflow-hidden reveal-on-scroll">
          {/* Subtle Flat Geometric Hairline Watermark (No Gradients) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-20 pointer-events-none">
            <svg width="360" height="360" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="28" stroke="#C89232" strokeWidth="1.5" strokeDasharray="4 4" />
              <path
                d="M 21 44 L 21 20 A 11 11 0 1 1 43 32"
                stroke="#E2D3B5"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="32" cy="32" r="5" fill="#C89232" />
            </svg>
          </div>

          <div className="flex-1 relative z-10 max-w-2xl">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4A147] mb-2 font-body">
              {subtitle}
            </div>
            <h2
              id="page-cta-title"
              className="font-display text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.2]"
            >
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#E2D3B5]/85 mt-2.5 max-w-xl font-body leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3 relative z-10">
            <a
              href={buttonHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#8E5B13] hover:bg-[#6E440B] px-7 text-xs sm:text-sm font-semibold text-white border border-[#C89232]/40 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-body"
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
