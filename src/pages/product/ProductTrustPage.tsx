import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { ShieldCheckIcon, LockIcon, FileTextIcon, UserCheckIcon } from 'lucide-react';

export const ProductTrustPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="FRAUD, AUDIT & COMPLIANCE"
        title="The ledger internal audit and finance will sign off."
        description="Double-entry accounting journal, maker-checker workflows, velocity anomaly filters, and automated consent and DSR request management under DPDP, Privacy Act, and GDPR."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Trust & Compliance' }]}
      />

      <section className="py-16 sm:py-20 bg-[#F3EBDD] border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-[28px] bg-white p-7 border border-[#E8DCC9] space-y-3">
              <ShieldCheckIcon className="text-[#D9822B]" size={24} />
              <h3 className="font-display font-bold text-lg text-[#1F1A17]">Double-Entry Journal</h3>
              <p className="text-xs text-[#1F1A17]/75 leading-relaxed">Debits and credits match to the exact integer. Never lose track of points liabilities.</p>
            </div>
            <div className="rounded-[28px] bg-white p-7 border border-[#E8DCC9] space-y-3">
              <UserCheckIcon className="text-[#D9822B]" size={24} />
              <h3 className="font-display font-bold text-lg text-[#1F1A17]">Maker-Checker Approval</h3>
              <p className="text-xs text-[#1F1A17]/75 leading-relaxed">Dual authorization required for manual point adjustments, rule edits, and campaign launches.</p>
            </div>
            <div className="rounded-[28px] bg-white p-7 border border-[#E8DCC9] space-y-3">
              <LockIcon className="text-[#D9822B]" size={24} />
              <h3 className="font-display font-bold text-lg text-[#1F1A17]">Fraud & Velocity Filters</h3>
              <p className="text-xs text-[#1F1A17]/75 leading-relaxed">Detect cashier collusion, receipt reuse, automated bot scraping, and burner account velocity.</p>
            </div>
            <div className="rounded-[28px] bg-white p-7 border border-[#E8DCC9] space-y-3">
              <FileTextIcon className="text-[#D9822B]" size={24} />
              <h3 className="font-display font-bold text-lg text-[#1F1A17]">Consent & DSR Portal</h3>
              <p className="text-xs text-[#1F1A17]/75 leading-relaxed">Versioned consent capture with automated Data Subject Access and Right to be Forgotten requests.</p>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default ProductTrustPage;
