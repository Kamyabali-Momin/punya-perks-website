import React from 'react';

export interface StatisticsCardProps {
  value: string;
  label: string;
  description?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({
  value,
  label,
  description,
  prefix,
  suffix,
  className = '',
}) => {
  return (
    <div className={`p-6 sm:p-8 rounded-pp-lg bg-white border border-pp-border-subtle shadow-pp-sm ${className}`}>
      <div className="font-display font-bold text-4xl sm:text-5xl text-pp-ink tracking-tight pp-tabular">
        {prefix && <span className="text-pp-primary text-3xl mr-1">{prefix}</span>}
        <span>{value}</span>
        {suffix && <span className="text-pp-primary text-3xl ml-1">{suffix}</span>}
      </div>
      <h4 className="font-display font-semibold text-sm sm:text-base text-pp-ink mt-2">
        {label}
      </h4>
      {description && (
        <p className="text-xs text-pp-ink-muted mt-1 leading-normal">
          {description}
        </p>
      )}
    </div>
  );
};
