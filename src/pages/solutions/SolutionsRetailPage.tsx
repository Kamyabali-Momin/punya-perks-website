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

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-12">
            <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-2">
              PROBLEMS WE SOLVE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#17140F]">
              Engineered for Multi-Store Retail Realities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-white p-7 sm:p-8 border border-[#EBDFC6] shadow-xs hover:shadow-md hover:border-[#B5651A]/40 transition-all duration-300 space-y-4">
                <span className="font-mono text-xs font-bold text-[#B5651A] block">CHALLENGE {idx + 1}</span>
                <h4 className="font-display font-bold text-lg text-[#17140F]">{item.problem}</h4>
                <div className="pt-3 border-t border-[#EBDFC6]/60">
                  <span className="font-mono text-[11px] font-bold text-[#B5651A] block mb-1">PUNYA PERKS SOLUTION</span>
                  <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsRetailPage;
