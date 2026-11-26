import React from 'react';
import { Button } from '../common/Button';
import { Eyebrow } from '../common/Typography';
import { CheckCircle2Icon } from 'lucide-react';

export interface SplitSectionProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  description: string;
  bulletPoints?: string[];
  ctaText?: string;
  ctaHref?: string;
  imageNode?: React.ReactNode;
  reversed?: boolean;
  className?: string;
}

export const SplitSection: React.FC<SplitSectionProps> = ({
  eyebrow,
  badge,
  title,
  description,
  bulletPoints,
  ctaText,
  ctaHref,
  imageNode,
  reversed = false,
  className = '',
}) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${className}`}
    >
      <div
        className={`lg:col-span-6 space-y-4 ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {eyebrow && <Eyebrow badge={badge}>{eyebrow}</Eyebrow>}
        <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-pp-ink tracking-tight leading-[1.2]">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-pp-ink-secondary leading-relaxed">
          {description}
        </p>

        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="space-y-2.5 pt-2">
            {bulletPoints.map((bp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-pp-ink">
                <CheckCircle2Icon size={16} className="text-pp-primary shrink-0 mt-0.5" />
                <span>{bp}</span>
              </li>
            ))}
          </ul>
        )}

        {ctaText && ctaHref && (
          <div className="pt-4">
            <Button href={ctaHref} variant="primary" size="md">
              {ctaText}
            </Button>
          </div>
        )}
      </div>

      <div
        className={`lg:col-span-6 ${
          reversed ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        {imageNode ? (
          imageNode
        ) : (
          <div className="w-full aspect-[4/3] rounded-pp-bento bg-pp-panel border border-pp-border-subtle flex items-center justify-center p-6 text-center text-xs text-pp-ink-muted">
            Product Interface Slot
          </div>
        )}
      </div>
    </div>
  );
};
