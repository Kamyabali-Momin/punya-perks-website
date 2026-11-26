import React from 'react';

export const MetricsSection: React.FC = () => {
  const stats = [
    {
      value: '4',
      label: 'data-residency regions: India, UAE, Australia, US',
    },
    {
      value: '3',
      label: 'transaction ingestion paths: plugin, webhook, batch',
    },
    {
      value: '9',
      label: 'API families with sandbox and webhooks',
    },
    {
      value: '<2s',
      label: 'checkout quote on cached catalog',
    },
  ];

  return (
    <section className="w-full bg-[#FFFDF9] border-b border-[#EBDFC6] py-16 sm:py-20 lg:py-24 font-body overflow-hidden" id="by-the-numbers">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Split Row: Left Headline + Center 3D Bag Graphic + Right 2x2 Stat Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block">
              BY THE NUMBERS
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[44px] text-[#17140F] tracking-tight leading-[1.12]">
              Built for scale,<br className="hidden sm:inline" /> measured in the open.
            </h2>
          </div>

          {/* Center Column: 3D Shopping Bag with Loyalty Card Graphic */}
          <div className="lg:col-span-3 flex justify-center items-center">
            <div className="relative w-full max-w-[240px] sm:max-w-[270px] mx-auto flex items-center justify-center">
              <img
                src="/images/scale-bag-transparent.png"
                alt="Built for scale loyalty shopping bag and member card"
                className="w-full h-auto max-h-[200px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Rounded Bordered Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#17140F]/80 p-5 sm:p-6 text-center flex flex-col items-center justify-center min-h-[125px] bg-white shadow-2xs hover:border-[#B5651A] transition-colors"
              >
                <div className="font-display font-normal text-4xl sm:text-5xl text-[#B5651A] tracking-tight leading-none">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-[13px] text-[#5B534C] mt-2.5 leading-snug font-normal max-w-[190px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
