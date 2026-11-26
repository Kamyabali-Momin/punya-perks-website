import React from 'react';
import { QuoteIcon } from 'lucide-react';

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  metric?: string;
  metricLabel?: string;
  avatarUrl?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  company,
  metric,
  metricLabel,
  avatarUrl,
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-pp-bento p-6 sm:p-8 border border-pp-border-subtle shadow-pp-sm flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <QuoteIcon size={24} className="text-pp-primary opacity-60" />
          {metric && (
            <span className="text-xs font-bold text-pp-primary bg-pp-primary-soft px-3 py-1 rounded-pp-pill">
              {metric} {metricLabel && <span className="font-normal opacity-80">· {metricLabel}</span>}
            </span>
          )}
        </div>
        <p className="font-display font-medium text-base sm:text-lg text-pp-ink leading-relaxed italic">
          "{quote}"
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-pp-border-subtle flex items-center gap-3">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-10 h-10 rounded-full object-cover border border-pp-border-strong"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-pp-primary-soft text-pp-primary font-bold flex items-center justify-center text-sm">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-display font-semibold text-sm text-pp-ink">{name}</h4>
          <p className="text-xs text-pp-ink-muted">
            {role}, <span className="font-medium text-pp-ink-secondary">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
