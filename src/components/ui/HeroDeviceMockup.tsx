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
  // Sizing container based on image type
  const maxWidth =
    type === 'mobile' || type === 'tray'
      ? 'max-w-[360px] sm:max-w-[400px]'
      : type === 'card' || type === 'compact'
      ? 'max-w-[520px] sm:max-w-[580px] lg:max-w-[620px]'
      : 'max-w-full sm:max-w-[640px] lg:max-w-[680px]';

  return (
    <div className={`relative w-full ${maxWidth} mx-auto group ${className}`}>
      {/* Radiant Amber / Marigold Ambient Light behind Mockup */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-full bg-gradient-to-tr from-[#B5651A]/30 via-[#EBDFC6]/40 to-[#D9822B]/25 blur-2xl sm:blur-3xl opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out pointer-events-none -z-0"
      />

      {/* Clean native Mockup image with drop shadow */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-auto block object-contain select-none drop-shadow-[0_16px_36px_rgba(23,20,15,0.20)] group-hover:drop-shadow-[0_24px_48px_rgba(23,20,15,0.30)] transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:-translate-y-1 rounded-2xl"
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
}
