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
        <div className="relative rounded-[36px] bg-[#14100B] p-2.5 shadow-2xl border-2 border-[#8E5B13]/60">
          <div className="rounded-[28px] overflow-hidden bg-[#FAF6EE]">
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
      {/* Flat Obsidian & Gold Architectural Frame (Zero Gradients) */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#CBB68E] bg-white w-full">
        <div className="h-7 bg-[#F4E9D2] border-b border-[#E2D3B5] px-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8E5B13]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C89232]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#16794C]" />
          </div>
          <span className="font-mono text-[10px] text-[#534A40] tracking-wide truncate max-w-[200px]">
            members.novarewards.in
          </span>
          <span className="text-[10px] font-mono font-semibold text-[#16794C] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16794C]" />
            Live
          </span>
        </div>

        <div className="aspect-[16/10] w-full overflow-hidden bg-[#FAF6EE]">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500 select-none"
            loading={priority ? 'eager' : 'lazy'}
          />
        </div>
      </div>
    </div>
  );
}
