import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';

export const ComplianceArticlePage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="GUIDE · INDIA · 8 MIN READ"
        title="The loyalty compliance checklist for India: DPDP, TRAI DLT, RBI"
        description="What a retailer or bank must have in place before issuing cash-convertible points, running WhatsApp campaigns, or storing member KYC."
        breadcrumbs={[{ label: 'Resources', href: '/resources' }, { label: 'India Compliance Checklist' }]}
      />

      <article className="py-16 sm:py-20 bg-white border-b border-[#EADBC6] font-body text-[#220901]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 space-y-8 text-sm sm:text-base leading-relaxed">
          <div className="p-6 rounded-[24px] bg-[#F6EFE2] border border-[#EADBC6] text-xs space-y-2">
            <span className="font-mono font-bold text-[#BC3908] uppercase tracking-wider block">KEY TAKEAWAY</span>
            <p className="text-[#220901]/80">
              India's DPDP Act mandates that loyalty programmes collect explicit, itemized, and versioned consent. Passive enrollment during checkout is no longer compliant.
            </p>
          </div>

          <h2 className="font-display font-bold text-2xl text-[#220901] pt-4">
            1. Digital Personal Data Protection (DPDP) Act Readiness
          </h2>
          <p>
            When collecting phone numbers at the store counter or during checkout, brands must present a clear notice in accessible language (including regional Indian languages). Punya Perks captures and stores the exact notice timestamp, clause text, and IP or store register ID.
          </p>

          <h2 className="font-display font-bold text-2xl text-[#220901] pt-4">
            2. TRAI Distributed Ledger Technology (DLT) Registration
          </h2>
          <p>
            All SMS messages must strictly match pre-approved templates registered with telecom operators. Punya Perks provides pre-approved promotional and transactional DLT templates, preventing message drops and costly carrier penalties.
          </p>

          <h2 className="font-display font-bold text-2xl text-[#220901] pt-4">
            3. Reserve Bank of India (RBI) Prepaid & Cash-Out Rules
          </h2>
          <p>
            Points that can be redeemed for cash or transferred between members may trigger PPI (Prepaid Payment Instrument) regulations. Punya Perks integrates with licensed banking switch partners to ensure closed-loop compliance.
          </p>
        </div>
      </article>

      <PageCta />
    </MainLayout>
  );
};
export default ComplianceArticlePage;
