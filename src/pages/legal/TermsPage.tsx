import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';

export const TermsPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="LEGAL · TERMS OF SERVICE"
        title="Terms of service"
        description="Enterprise service agreements, acceptable use policies, and operational uptime commitments."
        breadcrumbs={[{ label: 'Legal' }, { label: 'Terms' }]}
        primaryCtaText=""
        secondaryCtaText=""
        microcopy=""
      />

      <article className="py-16 sm:py-20 bg-white border-b border-[#E8DCC9] font-body text-[#1F1A17]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 space-y-6 text-sm sm:text-base leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-[#1F1A17]">1. Service Level Agreements</h2>
          <p>
            Punya Perks provides guaranteed 99.95% uptime for Growth tenants and 99.99% for Enterprise dedicated cells. Rule engine evaluations are targeted under 120ms latency.
          </p>
          <h2 className="font-display font-bold text-2xl text-[#1F1A17]">2. Data Ownership & Portability</h2>
          <p>
            Tenants retain 100% ownership of all member records, rules, and transaction ledgers. Full cryptographic exports can be executed at any time in standard formats.
          </p>
        </div>
      </article>
    </MainLayout>
  );
};
export default TermsPage;
