import React, { useState } from 'react';

export const PlatformJobsSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'Retail' | 'Banks' | 'Hospitality' | 'E-commerce' | 'Coalition'>('Retail');

  const tabs: Array<'Retail' | 'Banks' | 'Hospitality' | 'E-commerce' | 'Coalition'> = [
    'Retail',
    'Banks',
    'Hospitality',
    'E-commerce',
    'Coalition',
  ];

  return (
    <section className="w-full bg-[#FFFDF9] border-b border-[#EBDFC6] py-16 sm:py-20 lg:py-24 font-body" id="platform-jobs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & 5 Pill Tabs */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block">
              ONE PLATFORM, FOUR JOBS
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#17140F] tracking-tight leading-[1.12]">
              Earn, redeem, engage, <span className="italic text-[#C4681A]">operate.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5B534C] leading-relaxed">
              Every mechanism your programme needs is built in and governed by one ledger, so finance, marketing and engineering see the same number. Retail wants omnichannel earning; banks need cash-convertible points with KYC; hospitality runs on visits. Choose the playbook, keep the platform.
            </p>

            {/* 5 Pill Tabs */}
            <div className="pt-2 flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const isSelected = selectedTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#B5651A] text-white shadow-sm'
                        : 'bg-[#F4ECDC] text-[#17140F] hover:bg-[#ede1ce] border border-[#EBDFC6]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Tablet Device Mockup matching user reference */}
          <div className="lg:col-span-7 flex items-center justify-center relative">
            <div className="w-full relative group">
              <img
                src="/images/platform-portal-tablet.png"
                alt="Punya Perks Member & Operator Portal Mockup"
                className="w-full h-auto object-contain drop-shadow-2xl group-hover:scale-[1.01] transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
