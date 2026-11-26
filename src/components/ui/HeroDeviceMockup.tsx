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
}: HeroDeviceMockupProps) {
  return (
    <div className={`relative w-full max-w-[560px] mx-auto group ${className}`}>
      {/* Radiant Amber / Marigold Ambient Light behind Mockup */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full bg-gradient-to-tr from-[#B5651A]/20 via-[#EBDFC6]/30 to-[#D9822B]/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0"
      />

      {/* Styled Card Mockup with 16/10 aspect ratio matching About and all inner pages */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EBDFC6] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10] bg-[#FAF5ED] w-full max-h-[360px] sm:max-h-[380px]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 select-none"
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3.5 left-4 right-4 text-white text-[11px] font-mono flex items-center justify-between pointer-events-none">
          <span className="bg-[#B5651A]/90 px-2.5 py-0.5 rounded-md backdrop-blur-xs shadow-xs font-semibold">
            Platform Console
          </span>
          <span className="text-white/90 font-medium">
            Verified Sub-120ms Architecture
          </span>
        </div>
      </div>
    </div>
  );
}

