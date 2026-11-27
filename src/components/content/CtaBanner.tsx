import React from 'react';
import { Button } from '../common/Button';

export interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  microcopy?: string;
  className?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  eyebrow = "READY TO SCALE?",
  title,
  description,
  primaryCtaText = "Request a demo",
  primaryCtaHref = "/demo",
  secondaryCtaText = "Start in sandbox",
  secondaryCtaHref = "/start",
  microcopy = "Free sandbox, no credit card required. Multi-currency pricing in INR, AUD, NZD and USD.",
  className = '',
}) => {
  return (
    <div
      className={`rounded-pp-bento bg-pp-primary text-white p-8 sm:p-12 md:p-16 text-center shadow-pp-lg relative overflow-hidden ${className}`}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        {eyebrow && (
          <span className="pp-eyebrow text-pp-accent-soft tracking-[0.2em]">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href={primaryCtaHref}
            variant="accent"
            size="lg"
            className="w-full sm:w-auto font-semibold"
          >
            {primaryCtaText}
          </Button>
          <Button
            href={secondaryCtaHref}
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10"
          >
            {secondaryCtaText}
          </Button>
        </div>

        {microcopy && (
          <p className="text-xs text-white/60 pt-2">{microcopy}</p>
        )}
      </div>
    </div>
  );
};
