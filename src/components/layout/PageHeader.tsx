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
      className="relative w-full border-b border-[#EADBC6] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 font-body overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(ellipse 65% 55% at 15% 15%, rgba(246, 170, 28, 0.14), transparent 70%), radial-gradient(ellipse 55% 50% at 85% 80%, rgba(188, 57, 8, 0.09), transparent 70%), linear-gradient(135deg, #FDFBF7 0%, #F6EFE2 100%)",
          backgroundColor: "#F6EFE2",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-[#826B63] mb-6 font-body">
            <a href="/" className="hover:text-[#BC3908] transition-colors">Home</a>
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <span>/</span>
                {bc.href ? (
                  <a href={bc.href} className="hover:text-[#BC3908] transition-colors">{bc.label}</a>
                ) : (
                  <span className="text-[#220901] font-semibold">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* 2-Column Split Hero Layout (Deskmerit Structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className={hasVisual ? "lg:col-span-6 space-y-5" : "lg:col-span-9 space-y-5"}>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 animate-fade-in-up">
              <span className="font-body text-[11px] font-bold text-[#BC3908] tracking-[0.16em] uppercase">
                {eyebrow}
              </span>
              {badge && (
                <span className="font-body text-[10px] font-bold bg-[#FDF0D5] text-[#BC3908] px-2.5 py-0.5 rounded-full border border-[#BC3908]/20">
                  {badge}
                </span>
              )}
            </div>

            {/* Display Heading: DM Serif Display */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] text-[#220901] tracking-tight leading-[1.14] animate-fade-in-up delay-100">
              {title}
            </h1>

            {/* Subtitle with high readability */}
            <p className="text-base sm:text-lg text-[#563E37] leading-relaxed max-w-2xl font-body animate-fade-in-up delay-200">
              {description}
            </p>

            {/* Dual Pill CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in-up delay-300">
              {primaryCtaText && (
                <a
                  href={primaryCtaHref}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#BC3908] hover:bg-[#941B0C] text-white font-body font-semibold text-xs sm:text-sm transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>{primaryCtaText}</span>
                </a>
              )}
              {secondaryCtaText && (
                <a
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-[#F6EFE2] text-[#220901] border border-[#EADBC6] font-body font-semibold text-xs sm:text-sm transition-all shadow-2xs hover:border-[#BC3908]/40 cursor-pointer"
                >
                  <span>{secondaryCtaText}</span>
                </a>
              )}
            </div>

            {microcopy && (
              <p className="text-xs text-[#563E37] pt-1 font-body animate-fade-in-up delay-350 inline-block bg-[#F6EFE2]/80 backdrop-blur-[2px] px-3 py-1 rounded-full border border-[#EADBC6]/60">
                {microcopy}
              </p>
            )}
          </div>

          {/* Right Column: Hero Device Mockup / Aside */}
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

        {/* Optional Header Hero Slot */}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
};
