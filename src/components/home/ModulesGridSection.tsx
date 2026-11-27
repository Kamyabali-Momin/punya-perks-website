import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export const ModulesGridSection: React.FC = () => {
  const modules = [
    {
      title: 'Earn & rules',
      description: 'Purchases, referrals, card-linked offers, receipt scans, birthdays, challenges. Tier multipliers and a visual rule builder.',
      href: '/product/earn',
      image: '/images/modules/module-earn-3d.png',
    },
    {
      title: 'Redeem & catalog',
      description: 'Vouchers, merchandise, cash-out to bank or UPI, donations, partner currencies, experiences, paid tiers.',
      href: '/product/redeem',
      image: '/images/modules/module-redeem-3d.png',
    },
    {
      title: 'Campaigns & offers',
      description: 'Six-step builder, segments, combining rules, quotas and lift measurement with holdouts.',
      href: '/product/campaigns',
      image: '/images/modules/module-campaigns-3d.png',
    },
    {
      title: 'Trust & compliance',
      description: 'Append-only ledger, maker-checker, fraud detection, consent centre and data-subject requests.',
      href: '/product/trust',
      image: '/images/modules/module-trust-3d.png',
    },
  ];

  return (
    <section
      className="w-full bg-[#FDFBF7] border-b border-[#EADBC6] py-16 sm:py-20 lg:py-24 font-body relative"
      style={{
        backgroundImage: "radial-gradient(circle at 80% 10%, rgba(246, 170, 28, 0.1), transparent 45%)",
      }}
      id="modules"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-on-scroll">
          <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-3">
            MODULES
          </span>
          <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#220901] tracking-tight leading-[1.18]">
            Everything a programme needs, <br />
            nothing bolted on.
          </h2>
        </div>

        {/* 4 Cards Grid with 3D Icons directly from Figma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((mod, idx) => (
            <div
              key={mod.title}
              className={`rounded-[20px] bg-white p-6 sm:p-7 border border-[#EADBC6] hover:border-[#BC3908]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group min-h-[300px] reveal-on-scroll ${
                idx === 1 ? 'delay-100' : idx === 2 ? 'delay-200' : idx === 3 ? 'delay-300' : ''
              }`}
            >
              <div>
                <h3 className="font-display font-normal text-xl sm:text-[22px] text-[#220901] leading-[1.3] mb-3">
                  {mod.title}
                </h3>
                <p className="font-body text-[13.5px] sm:text-[14px] leading-[1.5] text-[#563E37] font-normal">
                  {mod.description}
                </p>
              </div>

              {/* Bottom Action + 3D Illustration */}
              <div className="flex items-end justify-between pt-6 mt-auto">
                <a
                  href={mod.href}
                  className="inline-flex items-center gap-1.5 font-body font-semibold text-[12px] tracking-[0.05em] uppercase text-[#BC3908] hover:text-[#621708] transition-colors pb-1 group-hover:gap-2"
                >
                  <span>LEARN MORE</span>
                  <ArrowRightIcon size={12} />
                </a>

                <div className="w-[82px] h-[82px] shrink-0 -mr-2 -mb-2 flex items-end justify-end pointer-events-none">
                  <img
                    src={mod.image}
                    alt={mod.title}
                    className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
