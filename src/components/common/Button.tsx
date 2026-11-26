import React from 'react';

export type ButtonVariant = 'primary' | 'ink' | 'ghost' | 'light' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  href,
  as = 'button',
  ...props
}) => {
  // Base classes with pill radius
  const baseClasses =
    'inline-flex items-center justify-center font-medium font-body transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-pp-pill';

  // Variant classes mapped to --pp-* tokens
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-pp-primary text-white hover:bg-pp-primary-dark active:scale-[0.98] shadow-pp-sm hover:shadow-pp-md focus-visible:ring-pp-primary',
    ink:
      'bg-pp-ink text-white hover:bg-black active:scale-[0.98] shadow-pp-sm focus-visible:ring-pp-ink',
    ghost:
      'bg-transparent text-pp-ink border border-pp-border-strong hover:bg-pp-panel active:scale-[0.98] focus-visible:ring-pp-primary',
    light:
      'bg-pp-primary-soft text-pp-primary hover:bg-pp-panel-deep active:scale-[0.98] focus-visible:ring-pp-primary',
    accent:
      'bg-pp-accent text-white hover:bg-pp-accent-dark active:scale-[0.98] shadow-pp-sm focus-visible:ring-pp-accent',
  };

  // Size classes
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  if (as === 'a' || href) {
    return (
      <a href={href} className={combinedClasses} role="button">
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {!isLoading && iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {!isLoading && iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!isLoading && iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {!isLoading && iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </button>
  );
};
