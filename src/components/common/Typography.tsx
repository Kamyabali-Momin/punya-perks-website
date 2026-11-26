import React from 'react';

// Heading Component
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingVisual = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  visual?: HeadingVisual;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 'h2',
  visual,
  children,
  className = '',
  ...props
}) => {
  const visualToUse = visual || level;

  const visualClasses: Record<HeadingVisual, string> = {
    display: 'text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.12]',
    h1: 'text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.16]',
    h2: 'text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-[1.20]',
    h3: 'text-xl sm:text-2xl font-semibold tracking-tight leading-[1.25]',
    h4: 'text-lg sm:text-xl font-semibold leading-[1.30]',
    h5: 'text-base sm:text-lg font-semibold leading-[1.35]',
    h6: 'text-sm sm:text-base font-semibold leading-[1.40]',
  };

  const combinedClass = `font-display text-pp-ink ${visualClasses[visualToUse]} ${className}`;

  if (level === 'h1') return <h1 className={combinedClass} {...props}>{children}</h1>;
  if (level === 'h2') return <h2 className={combinedClass} {...props}>{children}</h2>;
  if (level === 'h3') return <h3 className={combinedClass} {...props}>{children}</h3>;
  if (level === 'h4') return <h4 className={combinedClass} {...props}>{children}</h4>;
  if (level === 'h5') return <h5 className={combinedClass} {...props}>{children}</h5>;
  return <h6 className={combinedClass} {...props}>{children}</h6>;
};

// Text Component
export type TextVariant = 'bodyLarge' | 'bodyRegular' | 'bodySmall' | 'caption';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export const Text: React.FC<TextProps> = ({
  variant = 'bodyRegular',
  children,
  className = '',
  as = 'p',
  ...props
}) => {
  const variantClasses: Record<TextVariant, string> = {
    bodyLarge: 'text-lg sm:text-xl leading-relaxed text-pp-ink-secondary',
    bodyRegular: 'text-base leading-relaxed text-pp-ink-secondary',
    bodySmall: 'text-sm leading-normal text-pp-ink-secondary',
    caption: 'text-xs leading-normal text-pp-ink-muted',
  };

  const combinedClass = `font-body ${variantClasses[variant]} ${className}`;

  if (as === 'span') return <span className={combinedClass} {...props}>{children}</span>;
  if (as === 'div') return <div className={combinedClass} {...props}>{children}</div>;
  return <p className={combinedClass} {...props}>{children}</p>;
};

// Eyebrow Component
export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  className = '',
  badge,
}) => {
  return (
    <div className={`inline-flex items-center gap-2 mb-2 ${className}`}>
      <span className="pp-eyebrow">{children}</span>
      {badge && (
        <span className="text-[10px] font-semibold bg-pp-primary-soft text-pp-primary px-2 py-0.5 rounded-full uppercase tracking-wider">
          {badge}
        </span>
      )}
    </div>
  );
};
