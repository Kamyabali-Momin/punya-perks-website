import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { ShoppingBagIcon, CheckCircle2Icon, ArrowRightIcon } from 'lucide-react';

export const SolutionsRetailPage: React.FC = () => {
  const problems = [
    { problem: 'POS and web siloed into separate point systems', solution: 'One unified append-only ledger synchronizes in-store billing counter scans and online checkout in real time.' },
    { problem: 'Campaigns take weeks of IT coordination', solution: 'Marketing launches seasonal promotions, tier multipliers, and category boosts in an afternoon without code.' },
    { problem: 'Cashier checkout friction and barcode delays', solution: 'Instant phone number or WhatsApp QR lookup with sub-120ms rule evaluation before receipt printing.' },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="SOLUTIONS · RETAIL & FASHION"
        title="Omnichannel loyalty for retail."
        description="Earn in store and online with one balance, run seasonal campaigns in days, and keep breakage and liability visible to finance."
        breadcrumbs={[{ label: 'Solutions' }, { label: 'Retail & Fashion' }]}
      />

      <section className="py-16 sm:py-20 bg-[#F3EBDD] border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-12">
            <span className="font-mono text-[11px] font-bold text-[#D9822B] tracking-[0.2em] uppercase block mb-2">
              PROBLEMS WE SOLVE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1F1A17]">
              Engineered for Multi-Store Retail Realities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((item, idx) => (
              <div key={idx} className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] shadow-sm space-y-4">
                <span className="font-mono text-xs font-bold text-red-600 block">CHALLENGE {idx + 1}</span>
                <h4 className="font-display font-bold text-base text-[#1F1A17]">{item.problem}</h4>
                <div className="pt-3 border-t border-[#E8DCC9]/60">
                  <span className="font-mono text-xs font-bold text-[#D9822B] block mb-1">PUNYA PERKS SOLUTION</span>
                  <p className="text-xs sm:text-sm text-[#1F1A17]/75 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="rounded-[28px] bg-gradient-to-r from-[#17140F] via-[#241A13] to-[#17140F] text-white p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-[#3E2C20] relative overflow-hidden">
            {/* Ambient Warm Glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#B5651A]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 max-w-xl relative z-10">
              <span className="font-mono text-[11px] font-bold text-[#D9822B] uppercase tracking-[0.16em] inline-block px-3 py-1 rounded-full bg-[#B5651A]/15 border border-[#B5651A]/30">
                PROVEN RETAIL METRIC
              </span>
              <h3 className="font-display font-semibold text-3xl sm:text-4xl text-[#FAF3E8] tracking-tight leading-[1.15]">
                +34% Repeat Purchase Lift
              </h3>
              <p className="text-sm sm:text-base text-[#EBDFC6]/85 leading-relaxed font-body">
                National fashion retailer unified 140 physical outlets with their e-commerce storefront in four weeks.
              </p>
            </div>
            <a
              href="/customers/retail-national"
              className="relative z-10 px-7 py-3.5 rounded-full bg-[#B5651A] hover:bg-[#D9822B] text-white font-body font-semibold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer"
            >
              Read Customer Case Study →
            </a>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsRetailPage;
