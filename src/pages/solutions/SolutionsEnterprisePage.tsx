import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';

export const SolutionsEnterprisePage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="SOLUTIONS · COALITION & ENTERPRISE"
        title="Multi-brand networks with autonomous clearinghouse settlement."
        description="Cross-brand currency exchange, isolated multi-tenant architecture, centralized member identities, and inter-company debit/credit balancing across corporate conglomerates."
        breadcrumbs={[{ label: 'Solutions' }, { label: 'Coalition & Enterprise' }]}
      />

      <section className="py-16 sm:py-20 bg-[#F3EBDD] border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
            <span className="font-mono text-xs font-bold text-[#D9822B]">INTER-TENANT EXCHANGE</span>
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">Automated Clearinghouse</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">Earn points at Airline Partner and redeem at Hotel Partner with transparent inter-company exchange rates.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
            <span className="font-mono text-xs font-bold text-[#D9822B]">GLOBAL IDENTITY</span>
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">Unified Member ID</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">Single member credential with scoped token access preserves subsidiary data privacy boundaries.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
            <span className="font-mono text-xs font-bold text-[#D9822B]">CUSTOM SLA</span>
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">Enterprise Reliability</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">99.99% uptime guarantee, dedicated Solutions Architect, and 24/7 priority operational coverage.</p>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsEnterprisePage;
