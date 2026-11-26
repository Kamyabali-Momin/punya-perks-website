import React from 'react';

export type BadgeVariant = 'default' | 'primary' | 'accent' | 'success' | 'outline' | 'warning';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  icon,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center font-medium font-body rounded-pp-pill tracking-wide transition-colors';

  const variantClasses: Record<BadgeVariant, string> = {
    default: 'bg-pp-panel text-pp-ink-secondary border border-pp-border-subtle',
    primary: 'bg-pp-primary-soft text-pp-primary border border-pp-primary/20',
    accent: 'bg-pp-accent-soft text-pp-accent-dark border border-pp-accent/20',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    outline: 'bg-transparent text-pp-ink-secondary border border-pp-border-strong',
  };

  const sizeClasses: Record<BadgeSize, string> = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
