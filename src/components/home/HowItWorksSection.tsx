import React from 'react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Provision',
      description: 'Tenant, region, currency, plan and mechanisms set up by Punya Perks; your admins get SSO and roles.',
      image: '/images/workflow/step-provision.jpg',
    },
    {
      step: '02',
      title: 'Configure',
      description: 'Earn rules, tiers, catalog and consent clauses built from industry templates; theme applied to the member app.',
      image: '/images/workflow/step-configure.jpg',
    },
    {
      step: '03',
      title: 'Connect',
      description: 'POS, e-commerce, payments, KYC and messaging connectors activated; transaction feed verified against the ledger.',
      image: '/images/workflow/step-connect.jpg',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Pilot store or segment, reconciliation signed off by finance, then full launch with campaigns ready.',
      image: '/images/workflow/step-launch.jpg',
    },
  ];

  return (
    <section className="w-full bg-[#FDFBF7] border-b border-[#EADBC6] py-14 sm:py-16 lg:py-20 font-body" id="how-it-works">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 reveal-on-scroll">
          <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-2">
            HOW IT WORKS
          </span>
          <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#220901] tracking-tight leading-[1.2]">
            Live in four weeks, not four quarters.
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#826B63] mt-2.5 max-w-lg mx-auto">
            From initial multi-tenant provisioning to POS connectors and production launch.
          </p>
        </div>

        {/* 4 Cards Grid - Compact, natural, human design with reduced padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => (
            <div
              key={item.title}
              className={`rounded-[20px] bg-[#F6EFE2] p-4 sm:p-5 flex flex-col border border-[#F4D89C] hover:border-[#BC3908]/40 hover:shadow-md transition-all duration-300 group reveal-on-scroll ${
                idx === 1 ? 'delay-100' : idx === 2 ? 'delay-200' : idx === 3 ? 'delay-300' : ''
              }`}
            >
              {/* Clean Image without fake floating AI badges */}
              <div className="w-full h-[150px] sm:h-[160px] rounded-[14px] overflow-hidden bg-[#F6EFE2] mb-4 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Step & Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#BC3908]">
                  {item.step}.
                </span>
                <h3 className="font-display font-normal text-lg sm:text-xl text-[#220901]">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-body text-xs sm:text-[13px] text-[#563E37] leading-[1.55]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
