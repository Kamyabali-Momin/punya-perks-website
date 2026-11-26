import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { LandmarkIcon, CheckCircle2Icon, ShieldCheckIcon } from 'lucide-react';

export const SolutionsBankingPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="SOLUTIONS · BANKS & FINTECH"
        title="Cash-convertible points with banking-grade audit."
        description="Card-linked points feeds, merchant category rules, instant UPI cash-out with KYC gating, and double-entry accounting journals signed off by internal audit."
        breadcrumbs={[{ label: 'Solutions' }, { label: 'Banks & Fintech' }]}
      />

      <section className="py-16 sm:py-20 bg-[#F3EBDD] border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
              <span className="font-mono text-xs font-bold text-[#D9822B]">01 // SETTLEMENT AUDIT</span>
              <h3 className="font-display font-bold text-xl text-[#1F1A17]">0.00% Balance Discrepancy</h3>
              <p className="text-xs sm:text-sm text-[#1F1A17]/75">Double-entry accounting journal guarantees every point liability is strictly backed by balance sheet provisions.</p>
            </div>
            <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
              <span className="font-mono text-xs font-bold text-[#D9822B]">02 // KYC GATING</span>
              <h3 className="font-display font-bold text-xl text-[#1F1A17]">Automated Identity Verification</h3>
              <p className="text-xs sm:text-sm text-[#1F1A17]/75">Cash-out to bank account or UPI automatically gates until UIDAI / Pan or local government KYC check completes.</p>
            </div>
            <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
              <span className="font-mono text-xs font-bold text-[#D9822B]">03 // DEDICATED CELL</span>
              <h3 className="font-display font-bold text-xl text-[#1F1A17]">Isolated Data Residency</h3>
              <p className="text-xs sm:text-sm text-[#1F1A17]/75">Single-tenant isolated cloud cell deployed in AWS Mumbai or Sydney ensuring complete sovereignty.</p>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsBankingPage;
