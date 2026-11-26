import React from 'react';

export interface HeroDeviceMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  type?: 'tablet' | 'laptop' | 'mobile' | 'tray' | 'card' | 'compact';
}

export function HeroDeviceMockup({
  src,
  alt,
  priority = true,
  className = '',
  type = 'tablet',
}: HeroDeviceMockupProps) {
  if (type === 'mobile') {
    return (
      <div className={`relative w-full max-w-[280px] mx-auto group ${className}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full bg-gradient-to-tr from-[#B5651A]/20 via-[#EBDFC6]/35 to-[#D9822B]/20 blur-2xl opacity-80 pointer-events-none" />
        <div className="relative rounded-[36px] bg-[#17140F] p-2.5 shadow-2xl border-2 border-[#3E2C20]">
          <div className="rounded-[28px] overflow-hidden bg-[#FAF5ED]">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto object-cover object-top select-none"
              loading={priority ? 'eager' : 'lazy'}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full max-w-[580px] mx-auto group ${className}`}>
      {/* Radiant Amber / Marigold Ambient Light behind Mockup */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108%] h-[108%] rounded-full bg-gradient-to-tr from-[#B5651A]/20 via-[#EBDFC6]/30 to-[#D9822B]/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0"
      />

      {/* Sleek Browser / Web Portal Frame showcasing real User Side Web UI */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D5C5AC] bg-white w-full">
        {/* Clean Browser Window Chrome */}
        <div className="h-7 bg-[#F3EBDD] border-b border-[#EBDFC6] px-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9822B]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A15B]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#0F5C5A]/50" />
          </div>
          <span className="font-mono text-[10px] text-[#5B534C] tracking-wide truncate max-w-[200px]">
            members.novarewards.in
          </span>
          <span className="text-[10px] font-mono font-semibold text-[#1B8756] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B8756]" />
            Live
          </span>
        </div>

        <div className="aspect-[16/10] w-full overflow-hidden bg-[#FAF5ED]">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 select-none"
            loading={priority ? 'eager' : 'lazy'}
          />
        </div>
      </div>
    </div>
  );
}

