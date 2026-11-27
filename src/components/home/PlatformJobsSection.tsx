import React, { useState } from 'react';

type JobTab = 'Retail' | 'Banks' | 'Hospitality' | 'E-commerce' | 'Coalition';

const TAB_SHOWCASES: Record<
  JobTab,
  {
    webImage: string;
    appImage: string;
    caption: string;
    urlLabel: string;
  }
> = {
  Retail: {
    webImage: '/images/products/user-web-home.png',
    appImage: '/images/products/kombee-app-home.png',
    caption: 'Omnichannel Member Portal & In-Store QR Card',
    urlLabel: 'members.novarewards.in/home',
  },
  Banks: {
    webImage: '/images/products/user-web-redeem.png',
    appImage: '/images/products/kombee-app-redeem.png',
    caption: 'KYC-Gated Rewards Catalog & Instant UPI Cash-Out',
    urlLabel: 'members.novarewards.in/redeem',
  },
  Hospitality: {
    webImage: '/images/products/user-web-campaigns.png',
    appImage: '/images/products/kombee-app-offers.png',
    caption: 'Visit Streaks, Challenges & Tier Fast-Track Offers',
    urlLabel: 'members.novarewards.in/campaigns',
  },
  'E-commerce': {
    webImage: '/images/products/user-web-earn.png',
    appImage: '/images/products/kombee-app-home.png',
    caption: 'Checkout Multipliers, Referrals & Activity Ledger',
    urlLabel: 'members.novarewards.in/earn',
  },
  Coalition: {
    webImage: '/images/products/user-web-home.png',
    appImage: '/images/products/kombee-app-offers.png',
    caption: 'Cross-Brand Tier Perks & Partner Catalog',
    urlLabel: 'members.novarewards.in/coalition',
  },
};

export const PlatformJobsSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<JobTab>('Retail');

  const tabs: JobTab[] = ['Retail', 'Banks', 'Hospitality', 'E-commerce', 'Coalition'];
  const active = TAB_SHOWCASES[selectedTab];

  return (
    <section className="w-full bg-[#FFFDF9] border-b border-[#E2D3B5] py-14 sm:py-20 lg:py-24 font-body" id="platform-jobs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & 5 Pill Tabs */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 reveal-on-scroll min-w-0">
            <span className="font-mono text-[11px] font-bold text-[#8E5B13] tracking-[0.2em] uppercase block">
              ONE PLATFORM, FOUR JOBS
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#14100B] tracking-tight leading-[1.12]">
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
                    type="button"
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#8E5B13] text-white shadow-sm'
                        : 'bg-[#F4ECDC] text-[#14100B] hover:bg-[#ede1ce] border border-[#E2D3B5]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#5B534C] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#8E5B13] shrink-0" />
              <span>{active.caption}</span>
            </div>
          </div>

          {/* Right Column: Clean Tablet/Web Browser Mockup + Kombee Loyalty Mobile App */}
          <div className="lg:col-span-7 relative reveal-on-scroll delay-150 min-w-0">
            <div className="relative pb-4 sm:pb-6 sm:pr-10 md:pr-12">
              {/* User Side Web Portal in Crisp Tablet/Browser Frame */}
              <div className="rounded-[20px] sm:rounded-[24px] bg-[#1F1A17] p-2 sm:p-3 shadow-2xl border border-[#3E2C20]">
                <div className="rounded-[14px] sm:rounded-[16px] overflow-hidden bg-white">
                  <div className="h-7 bg-[#FAF5ED] border-b border-[#E2D3B5] px-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#A36D1C]/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C9A15B]/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0F5C5A]/60" />
                    </div>
                    <span className="font-mono text-[10px] text-[#5B534C] truncate">
                      {active.urlLabel}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-[#8E5B13]">
                      {selectedTab}
                    </span>
                  </div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#FAF5ED]">
                    <img
                      src={active.webImage}
                      alt={`Kombee User Side Web — ${selectedTab}`}
                      className="w-full h-full object-cover object-top transition-opacity duration-300"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Kombee Loyalty Mobile App Inset (sm+ screens) */}
              <div className="hidden sm:block absolute bottom-0 right-0 w-[140px] md:w-[165px] xl:w-[180px] rounded-[24px] bg-[#14100B] p-1.5 shadow-2xl border-2 border-[#3E2C20] z-10">
                <div className="rounded-[18px] overflow-hidden bg-white">
                  <img
                    src={active.appImage}
                    alt={`Kombee Loyalty Mobile App — ${selectedTab}`}
                    className="w-full h-auto object-cover object-top"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
