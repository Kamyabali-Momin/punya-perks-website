import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Badge } from '../common/Badge';

export interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  href?: string;
  linkText?: string;
  stepNumber?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  badge,
  href,
  linkText = 'Learn more',
  stepNumber,
  className = '',
}) => {
  return (
    <div
      className={`group relative bg-white rounded-pp-lg p-6 sm:p-7 border border-pp-border-subtle hover:border-pp-primary/30 shadow-pp-sm hover:shadow-pp-md transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          {stepNumber && (
            <span className="font-display text-xs font-bold text-pp-primary bg-pp-primary-soft px-2.5 py-1 rounded-pp-pill">
              {stepNumber}
            </span>
          )}
          {icon && !stepNumber && (
            <div className="w-10 h-10 rounded-pp-md bg-pp-panel text-pp-primary flex items-center justify-center p-2.5 border border-pp-border-subtle group-hover:bg-pp-primary group-hover:text-white transition-colors">
              {icon}
            </div>
          )}
          {badge && <Badge variant="accent" size="sm">{badge}</Badge>}
        </div>

        <h3 className="font-display font-semibold text-lg text-pp-ink group-hover:text-pp-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-pp-ink-secondary mt-2 leading-relaxed">
          {description}
        </p>
      </div>

      {href && (
        <div className="mt-5 pt-4 border-t border-pp-border-subtle/60">
          <a
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-pp-primary group-hover:text-pp-primary-dark transition-colors"
          >
            <span>{linkText}</span>
            <ArrowRightIcon size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      )}
    </div>
  );
};
