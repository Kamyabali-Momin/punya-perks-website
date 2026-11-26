import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="LEGAL · LAST UPDATED NOVEMBER 2026"
        title="Privacy policy"
        description="How Punya Perks collects, uses and protects personal data, with regional notices for India, Australia, New Zealand, the UAE and the EU."
        breadcrumbs={[{ label: 'Legal' }, { label: 'Privacy Policy' }]}
        primaryCtaText=""
        secondaryCtaText=""
        microcopy=""
      />

      <article className="py-16 sm:py-20 bg-white border-b border-[#EBDFC6] font-body text-[#1F1A17]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 space-y-8 text-sm sm:text-base leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-[#1F1A17]">1. Who We Are</h2>
          <p>
            Punya Perks is an enterprise loyalty platform registered with operations across India, the United Arab Emirates, Australia, and New Zealand. When our platform processes loyalty data on behalf of a tenant, we act as a Data Processor / Data Fiduciary partner.
          </p>

          <h2 className="font-display font-bold text-2xl text-[#1F1A17]">2. What Data We Process</h2>
          <p>
            We process member identifier tokens (hashed mobile numbers, loyalty account IDs), transactional basket records for points calculation, and operational audit logs. All member records are encrypted at rest with tenant-isolated KMS keys.
          </p>

          <h2 className="font-display font-bold text-2xl text-[#1F1A17]">3. Regional Regulatory Notices</h2>
          <p>
            <strong>India:</strong> Under the DPDP Act 2023, data principals have the right to withdraw consent and request data deletion. Automated DSR tools are available directly through tenant administrative dashboards.<br />
            <strong>Australia & New Zealand:</strong> We comply with the Australian Privacy Principles (APPs) and NZ Privacy Act 2020.
          </p>
        </div>
      </article>
    </MainLayout>
  );
};
export default PrivacyPolicyPage;
