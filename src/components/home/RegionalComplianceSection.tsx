import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export const RegionalComplianceSection: React.FC = () => {
  const markets = [
    {
      country: 'INDIA',
      laws: 'DPDP, DLT, UPI',
      description: 'Versioned consent under the DPDP Act, TRAI DLT templates for SMS, WhatsApp-first enrolment, UPI cash-out through licensed partners, India data-residency cell.',
      linkText: 'Loyalty software for India →',
      href: '/regions/india',
    },
    {
      country: 'AUSTRALIA',
      laws: 'Privacy Act, Spam Act, AUD',
      description: 'Australian Privacy Principles, Spam Act consent for promotional messages, state unclaimed-money rules for cash-convertible points, AUD pricing, Sydney region cell.',
      linkText: 'Loyalty software for Australia →',
      href: '/regions/australia',
    },
    {
      country: 'NEW ZEALAND',
      laws: 'Privacy Act 2020, NZD',
      description: 'Privacy Act 2020 notices, Unsolicited Electronic Messages Act compliance, Shopify and POS connectors common in NZ retail, NZD pricing.',
      linkText: 'Loyalty software for New Zealand →',
      href: '/regions/new-zealand',
    },
  ];

  return (
    <section className="w-full bg-[#FFFDF9] border-b border-[#E2D3B5] py-16 sm:py-20 lg:py-24 font-body" id="by-market">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-[11px] font-bold text-[#8E5B13] tracking-[0.2em] uppercase block mb-2">
            BY MARKET
          </span>
          <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#14100B] tracking-tight leading-[1.15]">
            Three markets. Three rulebooks. <br className="hidden sm:inline" />
            One platform.
          </h2>
        </div>

        {/* 3 Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {markets.map((m) => (
            <div
              key={m.country}
              className="rounded-[24px] bg-[#F4ECDC] p-7 sm:p-9 border border-[#E2D3B5] flex flex-col justify-between group hover:border-[#8E5B13]/40 transition-colors shadow-xs"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#8E5B13] tracking-wider block mb-2">
                  {m.country}
                </span>
                <h3 className="font-display font-normal text-xl sm:text-2xl text-[#14100B] mb-4">
                  {m.laws}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2D3B5]">
                <a
                  href={m.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8E5B13] hover:text-[#6E440B] transition-colors"
                >
                  <span>{m.linkText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
