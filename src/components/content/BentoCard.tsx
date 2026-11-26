import React from 'react';
import { Badge } from '../common/Badge';

export interface BentoCardProps {
  children?: React.ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  badge?: string;
  metric?: string;
  metricLabel?: string;
  colSpan?: '1' | '2' | '3' | 'full';
  variant?: 'panel' | 'deep' | 'primary' | 'white';
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  eyebrow,
  title,
  description,
  badge,
  metric,
  metricLabel,
  colSpan = '1',
  variant = 'panel',
  className = '',
}) => {
  const colSpanClasses = {
    '1': 'col-span-1',
    '2': 'col-span-1 md:col-span-2',
    '3': 'col-span-1 md:col-span-3',
    'full': 'col-span-full',
  };

  const variantClasses = {
    panel: 'bg-pp-panel text-pp-ink border border-pp-border-subtle',
    deep: 'bg-pp-panel-deep text-pp-ink border border-pp-border-strong',
    primary: 'bg-pp-primary text-white border border-pp-primary-dark',
    white: 'bg-white text-pp-ink border border-pp-border-subtle shadow-pp-sm',
  };

  return (
    <div
      className={`rounded-pp-bento p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${colSpanClasses[colSpan]} ${variantClasses[variant]} ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          {eyebrow && (
            <span className={`pp-eyebrow ${variant === 'primary' ? 'text-pp-accent-soft' : 'text-pp-primary'}`}>
              {eyebrow}
            </span>
          )}
          {badge && <Badge variant={variant === 'primary' ? 'outline' : 'primary'} size="sm">{badge}</Badge>}
        </div>

        <h3 className={`font-display font-semibold text-xl md:text-2xl tracking-tight leading-snug ${variant === 'primary' ? 'text-white' : 'text-pp-ink'}`}>
          {title}
        </h3>

        {description && (
          <p className={`text-sm mt-2.5 leading-relaxed ${variant === 'primary' ? 'text-white/80' : 'text-pp-ink-secondary'}`}>
            {description}
          </p>
        )}

        {metric && (
          <div className="mt-5 pt-4 border-t border-pp-border-strong/40">
            <span className="font-display font-bold text-3xl md:text-4xl pp-tabular block">
              {metric}
            </span>
            {metricLabel && (
              <span className={`text-xs mt-1 block font-medium ${variant === 'primary' ? 'text-white/70' : 'text-pp-ink-muted'}`}>
                {metricLabel}
              </span>
            )}
          </div>
        )}
      </div>

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};
