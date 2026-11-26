import React from 'react';

export interface IconWrapperProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'panel' | 'accent' | 'ghost';
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  size = 'md',
  variant = 'panel',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-pp-md p-1.5',
    md: 'w-11 h-11 rounded-pp-md p-2.5',
    lg: 'w-14 h-14 rounded-pp-lg p-3.5',
  };

  const variantClasses = {
    panel: 'bg-pp-panel text-pp-primary border border-pp-border-subtle',
    primary: 'bg-pp-primary text-white shadow-pp-sm',
    accent: 'bg-pp-accent-soft text-pp-accent-dark border border-pp-accent/20',
    ghost: 'bg-transparent text-pp-primary',
  };

  return (
    <div className={`inline-flex items-center justify-center shrink-0 transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {icon}
    </div>
  );
};
