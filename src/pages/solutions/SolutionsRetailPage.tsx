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

      <section className="py-16 sm:py-20 bg-white border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="rounded-[28px] bg-[#D9822B] text-white p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="font-mono text-xs font-bold text-[#C9A15B] uppercase tracking-wider">PROVEN RETAIL METRIC</span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl">+34% Repeat Purchase Lift</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                National fashion retailer unified 140 physical outlets with their e-commerce storefront in four weeks.
              </p>
            </div>
            <a href="/customers/retail-national" className="px-6 py-3 rounded-full bg-white text-[#D9822B] font-display font-semibold text-xs sm:text-sm shadow-sm hover:bg-[#F3EBDD] shrink-0">
              Read Customer Case Study
            </a>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsRetailPage;
