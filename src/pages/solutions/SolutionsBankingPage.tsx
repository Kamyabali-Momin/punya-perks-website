import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { ShieldCheckIcon, LandmarkIcon, ServerIcon, LockIcon } from 'lucide-react';

export const SolutionsBankingPage: React.FC = () => {
  const pillars = [
    {
      num: '01 // SETTLEMENT AUDIT',
      title: '0.00% Balance Discrepancy',
      desc: 'Double-entry accounting journal guarantees every point liability is strictly backed by balance sheet provisions and Ind AS 115 / IFRS 15 breakage schedules.',
    },
    {
      num: '02 // KYC GATING',
      title: 'Automated Identity Verification',
      desc: 'Cash-out to bank account or UPI automatically gates until UIDAI, PAN, or local regional KYC verification completes with maker-checker oversight.',
    },
    {
      num: '03 // DEDICATED CELL',
      title: 'Isolated Data Residency',
      desc: 'Single-tenant isolated cloud cell deployed in AWS Mumbai or Sydney with customer-managed KMS keys ensuring complete regulatory sovereignty.',
    },
  ];

  const capabilities = [
    {
      icon: LandmarkIcon,
      title: 'MCC-Aware Card-Linked Earning',
      desc: 'Ingest real-time ISO 8583 or core-banking transaction webhooks, apply Merchant Category Code (MCC) multipliers, and enforce monthly spend caps automatically.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Maker-Checker Four-Eyes Controls',
      desc: 'Manual credit adjustments, campaign liability limits, and bulk point imports enforce cryptographic dual-operator approval with immutable audit logs.',
    },
    {
      icon: ServerIcon,
      title: 'RBI, APRA & RBNZ Readiness',
      desc: 'Built-in Prepaid Payment Instrument (PPI) rule boundaries, consent audit trails, and automated suspicious velocity alerts for fraud operations teams.',
    },
    {
      icon: LockIcon,
      title: 'SSO, OIDC & Core-Banking Embed',
      desc: 'Embed the member rewards portal directly inside your existing mobile banking app via SAML 2.0 / OIDC SSO or consume headless REST & GraphQL APIs.',
    },
  ];

  const faqs = [
    {
      q: 'Can cardholders redeem points directly to UPI or bank accounts?',
      a: 'Yes. Verified KYC members can convert points into instant bank or UPI cash-outs through licensed payment switch partners with automated TDS and daily velocity limits.',
    },
    {
      q: 'How does finance reconcile unredeemed point liability at quarter-end?',
      a: 'Every credit, burn, expiry, and reversal writes an immutable double-entry ledger row. Finance teams export automated Ind AS 115 / IFRS 15 breakage and liability reports with penny-exact precision.',
    },
    {
      q: 'Do you support dedicated VPC deployment for regulated banks?',
      a: 'Yes. Enterprise banking clients run on isolated single-tenant cells in AWS Mumbai, Sydney, or UAE with dedicated KMS encryption keys and private link peering.',
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="SOLUTIONS · BANKS & FINTECH"
        title="Cash-convertible points with banking-grade audit."
        description="Card-linked points feeds, merchant category rules, instant UPI cash-out with KYC gating, and double-entry accounting journals signed off by internal audit."
        breadcrumbs={[{ label: 'Solutions' }, { label: 'Banks & Fintech' }]}
        image="/images/products/user-web-redeem.png"
        imageAlt="Punya Perks Banking Rewards & Cash-Out Portal"
      />

      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.num} className="rounded-[28px] bg-white p-8 border border-[#EADBC6] space-y-3 shadow-xs">
                <span className="font-body text-xs font-bold text-[#BC3908] block">{p.num}</span>
                <h3 className="font-display font-bold text-xl text-[#220901]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#220901]/75 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: '99.95%', label: 'Dedicated bank cell uptime SLA' },
              { metric: 'AES-256', label: 'Tenant-isolated KMS encryption' },
              { metric: '4-Eyes', label: 'Maker-checker adjustment control' },
              { metric: '500+', label: 'Gift card, airline & UPI burn options' },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-white border border-[#EADBC6] text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#BC3908]">{s.metric}</div>
                <p className="text-xs text-[#563E37] mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-body text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-2">
              ARCHITECTURAL CONTROLS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#220901]">
              Built to Pass InfoSec and Internal Audit Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="p-7 rounded-3xl bg-[#FDFBF7] border border-[#EADBC6] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#EADBC6] flex items-center justify-center text-[#BC3908] shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-[#220901]">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-[#563E37] leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="BANKING & FINTECH FAQ"
        title="Security, KYC & reconciliation questions"
        faqs={faqs}
        helpTitle="Evaluating loyalty for cardholders or neo-bank accounts?"
        helpDescription="Review our SOC 2 readiness report, KYC webhook specs, and sovereign VPC deployment options."
        helpButtonText="Schedule architecture review"
        helpButtonHref="/demo"
      />

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsBankingPage;
