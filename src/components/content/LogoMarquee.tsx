import React from 'react';

export interface LogoItem {
  name: string;
  logoUrl?: string;
  svg?: React.ReactNode;
}

export interface LogoMarqueeProps {
  title?: string;
  logos: LogoItem[];
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  title = "PROGRAMMES RUN ON PUNYA PERKS",
  logos,
  className = '',
}) => {
  // Duplicate array to create a seamless infinite marquee effect
  const marqueeLogos = [...logos, ...logos];

  return (
    <div className={`w-full overflow-hidden py-8 font-body ${className}`}>
      {title && (
        <div className="text-center mb-6">
          <span className="pp-eyebrow text-pp-ink-muted tracking-[0.2em]">{title}</span>
        </div>
      )}
      <div className="relative w-full flex overflow-x-hidden mask-gradient-x">
        <div className="flex items-center gap-10 sm:gap-14 animate-marquee whitespace-nowrap shrink-0">
          {marqueeLogos.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="inline-flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200 px-4 py-2"
            >
              {item.svg ? (
                item.svg
              ) : (
                <span className="font-display font-semibold text-base tracking-wider text-pp-ink-muted border border-pp-border-strong px-4 py-1.5 rounded-pp-md bg-white/70">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
