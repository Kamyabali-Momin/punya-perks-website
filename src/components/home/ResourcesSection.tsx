import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const articles = [
    {
      tag: 'GUIDE',
      regionTime: 'INDIA · 8 MIN',
      title: 'The loyalty compliance checklist for India: DPDP, TRAI DLT, RBI',
      description: 'What a retailer or bank must have in place before issuing cash-convertible points.',
      href: '/resources/india-compliance-checklist',
    },
    {
      tag: 'BENCHMARK',
      regionTime: 'ANZ · 6 MIN',
      title: 'Loyalty benchmarks 2026: Australia and New Zealand retail',
      description: 'Enrolment, active rate, redemption rate and breakage across [N] programmes.',
      href: '/resources/anz-benchmarks-2026',
    },
    {
      tag: 'COMPARISON',
      regionTime: 'INDIA · 10 MIN',
      title: 'Punya Perks vs Capillary, Xoxoday and EasyRewardz',
      description: 'An honest feature and pricing comparison for Indian enterprises.',
      href: '/resources/punya-perks-vs-competitors',
    },
  ];

  return (
    <section className="w-full bg-[#FDF8F2] border-b border-[#E2D3B5] py-16 sm:py-20 lg:py-24 font-body" id="resources">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-12">
          <h2 className="font-display font-normal text-2xl sm:text-3xl text-[#14100B] tracking-tight">
            Latest from the loyalty desk
          </h2>
          <a
            href="/resources"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8E5B13] hover:text-[#6E440B] transition-colors shrink-0"
          >
            <span>View all →</span>
          </a>
        </div>

        {/* 3 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="rounded-[24px] bg-[#FFFDF9] p-7 sm:p-8 border border-[#E2D3B5] shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[#8E5B13]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#5B534C] mb-4 pb-2 border-b border-[#E2D3B5]">
                  <span className="text-[#8E5B13]">{art.tag}</span>
                  <span>{art.regionTime}</span>
                </div>
                <h3 className="font-display font-normal text-lg sm:text-xl text-[#14100B] mb-3 leading-snug">
                  <a href={art.href} className="hover:text-[#8E5B13] transition-colors">
                    {art.title}
                  </a>
                </h3>
                <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                  {art.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2D3B5]">
                <a
                  href={art.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8E5B13] hover:text-[#6E440B] transition-colors"
                >
                  <span>Read article</span>
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
