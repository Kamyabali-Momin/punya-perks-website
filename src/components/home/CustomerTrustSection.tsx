import React from 'react';

export const CustomerTrustSection: React.FC = () => {
  const brandLogos = [
    {
      id: 'tata-neu',
      name: 'Tata Neu',
      src: '/logos/tata-neu.svg',
      imgClass: 'h-11 sm:h-13 md:h-15 max-w-[160px] w-auto object-contain',
    },
    {
      id: 'croma',
      name: 'Croma',
      src: '/logos/croma.svg',
      imgClass: 'h-9 sm:h-11 md:h-13 max-w-[170px] w-auto object-contain',
    },
    {
      id: 'reliance-digital',
      name: 'Reliance Digital',
      src: '/logos/reliance-digital.svg',
      imgClass: 'h-9 sm:h-11 md:h-12 max-w-[190px] w-auto object-contain',
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle',
      src: '/logos/lifestyle.svg',
      imgClass: 'h-10 sm:h-12 md:h-14 max-w-[160px] w-auto object-contain',
    },
    {
      id: 'puma',
      name: 'Puma',
      src: '/logos/puma.svg',
      imgClass: 'h-11 sm:h-13 md:h-15 max-w-[130px] w-auto object-contain',
    },
    {
      id: 'ray-ban',
      name: 'Ray-Ban',
      src: '/logos/ray-ban.svg',
      imgClass: 'h-11 sm:h-13 md:h-15 max-w-[150px] w-auto object-contain',
    },
  ];

  // Quadruple the list for a seamless, continuous infinite loop
  const marqueeLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="w-full bg-[#FFFDF9] border-b border-[#EBDFC6] py-10 sm:py-12 font-body overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 reveal-on-scroll">
        {/* Eyebrow Label */}
        <div className="mb-6 text-center sm:text-left">
          <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase leading-tight inline-block">
            PROGRAMMES RUN ON PUNYA PERKS
          </span>
        </div>

        {/* Marquee Container with Gradient Fading Edges */}
        <div className="relative w-full overflow-hidden">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#FFFDF9] via-[#FFFDF9]/80 to-transparent z-10 pointer-events-none" />

          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#FFFDF9] via-[#FFFDF9]/80 to-transparent z-10 pointer-events-none" />

          {/* Seamless Horizontal Scroll Track (Logos without background) */}
          <div className="animate-marquee flex items-center gap-14 sm:gap-20 md:gap-24 py-4">
            {marqueeLogos.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="shrink-0 flex items-center justify-center transition-transform hover:scale-110 duration-200 cursor-pointer"
                title={brand.name}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`${brand.imgClass} filter drop-shadow-xs opacity-90 hover:opacity-100 transition-opacity`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
