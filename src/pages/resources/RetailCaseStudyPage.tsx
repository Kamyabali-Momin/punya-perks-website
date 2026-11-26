import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { CheckCircle2Icon } from 'lucide-react';

export const RetailCaseStudyPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="CASE STUDY · RETAIL · INDIA"
        title="A national fashion retailer unified store and online loyalty"
        description="Separate POS and e-commerce programmes became one ledger with a tier-adaptive app and WhatsApp enrolment; campaigns now launch in an afternoon."
        breadcrumbs={[{ label: 'Customers', href: '/customers' }, { label: 'Retail Case Study' }]}
      />

      <section className="py-16 sm:py-20 bg-white border-b border-[#E8DCC9] font-body text-[#1F1A17]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-[28px] bg-[#F3EBDD] border border-[#E8DCC9]">
            <div className="text-center">
              <div className="font-display font-extrabold text-4xl text-[#D9822B]">+34%</div>
              <div className="font-mono text-xs font-bold uppercase text-[#1F1A17]/70 mt-1">Repeat Purchase Lift</div>
            </div>
            <div className="text-center">
              <div className="font-display font-extrabold text-4xl text-[#D9822B]">140 Stores</div>
              <div className="font-mono text-xs font-bold uppercase text-[#1F1A17]/70 mt-1">Unified POS Counters</div>
            </div>
            <div className="text-center">
              <div className="font-display font-extrabold text-4xl text-[#D9822B]">4 Weeks</div>
              <div className="font-mono text-xs font-bold uppercase text-[#1F1A17]/70 mt-1">Total Time to Launch</div>
            </div>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-[#1F1A17]/80">
            <h2 className="font-display font-bold text-2xl text-[#1F1A17]">The Challenge</h2>
            <p>
              The retailer operated 140 brick-and-mortar stores alongside a high-growth Shopify storefront. Store billing counters ran legacy POS terminals that stored points in disconnected local databases. Shoppers frequently complained when store points failed to appear online, and marketing required 3 weeks of IT tickets to configure seasonal holiday discounts.
            </p>

            <h2 className="font-display font-bold text-2xl text-[#1F1A17]">The Solution</h2>
            <p>
              Punya Perks deployed its unified append-only ledger in AWS Mumbai. POS terminals were integrated via pre-built Pine Labs connectors, while the e-commerce store connected through the turnkey Shopify plugin. Customers enrolled in seconds at checkout via WhatsApp QR code.
            </p>

            <h2 className="font-display font-bold text-2xl text-[#1F1A17]">The Outcome</h2>
            <p>
              In the first 90 days following rollout, repeat purchase frequency lifted by 34%, campaign setup time collapsed from 3 weeks to an afternoon, and finance reconciled the quarterly balance sheet with zero discrepancy.
            </p>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default RetailCaseStudyPage;
