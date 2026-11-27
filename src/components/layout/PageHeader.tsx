import React from 'react';
import { HeroDeviceMockup } from '../ui/HeroDeviceMockup';

export interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  microcopy?: string;
  image?: string;
  imageAlt?: string;
  aside?: React.ReactNode;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  badge,
  breadcrumbs,
  primaryCtaText = 'Request a demo',
  primaryCtaHref = '/demo',
  secondaryCtaText = 'Start in sandbox',
  secondaryCtaHref = '/start',
  microcopy = 'Free sandbox, no credit card. Pricing in INR, AUD and NZD.',
  image = '/images/products/user-web-home.png',
  imageAlt,
  aside,
  children,
}) => {
  const hasVisual = Boolean(aside || image);

  return (
    <section
      className="relative w-full border-b border-[#E2D3B5] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18 font-body bg-[#F7F1E4] overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(142, 91, 19, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(142, 91, 19, 0.045) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-[#7C7265] mb-6 font-body">
            <a href="/" className="hover:text-[#8E5B13] transition-colors">Home</a>
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <span>/</span>
                {bc.href ? (
                  <a href={bc.href} className="hover:text-[#8E5B13] transition-colors">{bc.label}</a>
                ) : (
                  <span className="text-[#14100B] font-semibold">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className={hasVisual ? 'lg:col-span-6 space-y-5' : 'lg:col-span-9 space-y-5'}>
            <div className="flex items-center gap-3 animate-fade-in-up">
              <span className="font-body text-[11px] font-bold text-[#8E5B13] tracking-[0.16em] uppercase">
                {eyebrow}
              </span>
              {badge && (
                <span className="font-body text-[10px] font-bold bg-[#F4E9D2] text-[#754A0F] px-2.5 py-0.5 rounded-full border border-[#CBB68E]">
                  {badge}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] text-[#14100B] tracking-tight leading-[1.14] animate-fade-in-up delay-100">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-[#534A40] leading-relaxed max-w-2xl font-body animate-fade-in-up delay-200">
              {description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in-up delay-300">
              {primaryCtaText && (
                <a
                  href={primaryCtaHref}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#8E5B13] hover:bg-[#6E440B] text-white font-body font-semibold text-xs sm:text-sm transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>{primaryCtaText}</span>
                </a>
              )}
              {secondaryCtaText && (
                <a
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-[#14100B] hover:text-white text-[#14100B] border border-[#CBB68E] font-body font-semibold text-xs sm:text-sm transition-all shadow-2xs cursor-pointer"
                >
                  <span>{secondaryCtaText}</span>
                </a>
              )}
            </div>

            {microcopy && (
              <p className="text-xs text-[#534A40] pt-1 font-body animate-fade-in-up delay-350 inline-block bg-white px-3 py-1 rounded-full border border-[#E2D3B5]">
                {microcopy}
              </p>
            )}
          </div>

          {hasVisual && (
            <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end animate-fade-in delay-200">
              {aside ? (
                aside
              ) : image ? (
                <HeroDeviceMockup
                  src={image}
                  alt={imageAlt || title}
                  priority={true}
                  type="tablet"
                />
              ) : null}
            </div>
          )}
        </div>

        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
};
