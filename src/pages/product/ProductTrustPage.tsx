import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { PageCta } from '../../components/common/PageCta';
import {
  ShieldCheckIcon,
  LockIcon,
  FileTextIcon,
  UserCheckIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  Globe2Icon,
} from 'lucide-react';

const SAMPLE_LEDGER_ENTRIES = [
  {
    id: 'JE-99401',
    time: '10:42:09 IST',
    member: 'mem_8412 (Vikram S.)',
    type: 'POS_EARN',
    debit: 'PROMO_EXPENSE_RETAIL (+82)',
    credit: 'MEMBER_LIABILITY (+82)',
    hash: 'sha256:8a4f...c92b',
    status: 'SEALED',
  },
  {
    id: 'JE-99408',
    time: '10:44:17 IST',
    member: 'mem_3190 (Aarti N.)',
    type: 'QUOTE_RESERVE',
    debit: 'MEMBER_AVAILABLE (-500)',
    credit: 'CHECKOUT_ESCROW (+500)',
    hash: 'sha256:1d7c...e402',
    status: 'LOCKED 15M',
  },
  {
    id: 'JE-99415',
    time: '10:46:52 IST',
    member: 'mem_3190 (Aarti N.)',
    type: 'REDEEM_COMMIT',
    debit: 'CHECKOUT_ESCROW (-500)',
    credit: 'VOUCHER_SETTLEMENT (+500)',
    hash: 'sha256:6f29...b118',
    status: 'SETTLED',
  },
  {
    id: 'JE-99429',
    time: '23:59:59 IST',
    member: 'LOT-2025-Q1 (Batch)',
    type: 'FIFO_EXPIRY',
    debit: 'MEMBER_LIABILITY (-1,420)',
    credit: 'BREAKAGE_REVENUE (+1,420)',
    hash: 'sha256:3c91...7a54',
    status: 'AUDITED',
  },
];

const COMPLIANCE_REGIONS = [
  {
    region: 'India (AWS ap-south-1 Mumbai)',
    regulations: 'DPDP Act 2023 · TRAI DLT · Ind AS 115',
    controls: 'Explicit unbundled counter consent receipts, DLT header auto-tagging, RBI closed-loop promotional caps.',
  },
  {
    region: 'Australia & NZ (AWS ap-southeast-2)',
    regulations: 'Privacy Act 1988 (APPs) · NZ Privacy Act 2020',
    controls: 'In-country PII storage, progressive profiling defaults, automated member data export in JSON/PDF.',
  },
  {
    region: 'UAE & GCC (AWS me-central-1 UAE)',
    regulations: 'UAE PDPL · Central Bank Financial Audit Controls',
    controls: 'Four-eyes maker-checker sign-off, sovereign encryption keys, Sharia audit traceability on card journals.',
  },
];

const TRUST_FAQS = [
  {
    q: 'Why does Punya Perks use a double-entry journal instead of mutating a single balance column?',
    a: 'Mutable counters silently lose history when partial order returns, reversals, or concurrent API retries collide. A double-entry journal records balancing debit and credit rows for every event, guaranteeing 0.00% variance during internal and statutory audits.',
  },
  {
    q: 'How do you handle GDPR / DPDP Right to Erasure without breaking 7-year tax accounting?',
    a: 'When a member submits a deletion request, Punya Perks cryptographically shreds personal identifiers (phone, name, email) into irreversible pseudonymous keys while preserving aggregate financial ledger postings intact for statutory audit.',
  },
  {
    q: 'Can fraud velocity rules stop cashier collusion at store checkout counters?',
    a: 'Yes. Built-in velocity policies cap daily earn scans per terminal and mobile number, flag suspiciously repeated guest receipts, and automatically quarantine irregular credits into Maker-Checker review queues.',
  },
];

export const ProductTrustPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="FRAUD, AUDIT & COMPLIANCE"
        title="The ledger internal audit and finance will sign off."
        description="Double-entry accounting journal, maker-checker workflows, velocity anomaly filters, and automated consent and DSR request management under DPDP, Privacy Act, and GDPR."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Trust & Compliance' }]}
        image="/images/products/user-web-home.png"
        imageAlt="Double-Entry Ledger & Compliance Controls"
      />

      {/* Core 4 Governance Pillars */}
      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-[28px] bg-white p-7 border border-[#E2D3B5] space-y-3 shadow-xs">
              <ShieldCheckIcon className="text-[#8E5B13]" size={24} />
              <h2 className="font-display font-bold text-lg text-[#1F1A17]">Double-Entry Journal</h2>
              <p className="text-xs text-[#5B534C] leading-relaxed">
                Debits and credits balance to the exact integer across earn, escrow hold, burn, and FIFO breakage.
              </p>
            </div>
            <div className="rounded-[28px] bg-white p-7 border border-[#E2D3B5] space-y-3 shadow-xs">
              <UserCheckIcon className="text-[#8E5B13]" size={24} />
              <h2 className="font-display font-bold text-lg text-[#1F1A17]">Maker-Checker Approval</h2>
              <p className="text-xs text-[#5B534C] leading-relaxed">
                Dual authorization required for manual goodwill adjustments, tier overrides, and high-liability rules.
              </p>
            </div>
            <div className="rounded-[28px] bg-white p-7 border border-[#E2D3B5] space-y-3 shadow-xs">
              <LockIcon className="text-[#8E5B13]" size={24} />
              <h2 className="font-display font-bold text-lg text-[#1F1A17]">Fraud &amp; Velocity Filters</h2>
              <p className="text-xs text-[#5B534C] leading-relaxed">
                Detect cashier collusion, duplicate receipt OCR scans, bot scraping, and burner mobile bursts.
              </p>
            </div>
            <div className="rounded-[28px] bg-white p-7 border border-[#E2D3B5] space-y-3 shadow-xs">
              <FileTextIcon className="text-[#8E5B13]" size={24} />
              <h2 className="font-display font-bold text-lg text-[#1F1A17]">Consent &amp; DSR Portal</h2>
              <p className="text-xs text-[#5B534C] leading-relaxed">
                Versioned opt-in trails with automated Data Subject Access and Right-to-Erasure pseudonymization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Append-Only Ledger Table + Maker-Checker Queue */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          {/* Ledger Table */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="font-mono text-[11px] font-bold text-[#8E5B13] uppercase tracking-widest">
                  SAMPLE AUDIT EXPORT
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#14100B]">
                  Immutable Double-Entry Point Journal
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-mono font-bold text-emerald-800">
                <CheckCircle2Icon size={13} /> Trial Balance Variance: 0.00%
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E2D3B5] bg-[#FAF5ED]/40">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#FAF5ED] border-b border-[#E2D3B5] text-[#5B534C] uppercase text-[10px]">
                  <tr>
                    <th className="py-3.5 px-4">Journal ID</th>
                    <th className="py-3.5 px-4">Timestamp</th>
                    <th className="py-3.5 px-4">Member / Batch</th>
                    <th className="py-3.5 px-4">Debit Posting</th>
                    <th className="py-3.5 px-4">Credit Posting</th>
                    <th className="py-3.5 px-4">Seal Hash</th>
                    <th className="py-3.5 px-4 text-right">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2D3B5] bg-white text-[#14100B]">
                  {SAMPLE_LEDGER_ENTRIES.map((entry) => (
                    <tr key={entry.id} className="hover:bg-[#FAF5ED]/40">
                      <td className="py-3.5 px-4 font-bold text-[#8E5B13]">{entry.id}</td>
                      <td className="py-3.5 px-4 text-[#5B534C]">{entry.time}</td>
                      <td className="py-3.5 px-4 font-body font-medium">{entry.member}</td>
                      <td className="py-3.5 px-4 text-rose-700">{entry.debit}</td>
                      <td className="py-3.5 px-4 text-emerald-700">{entry.credit}</td>
                      <td className="py-3.5 px-4 text-[#847C75]">{entry.hash}</td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="rounded-full bg-[#FAF5ED] border border-[#E2D3B5] px-2.5 py-0.5 text-[10px] font-bold">
                          {entry.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Maker-Checker & Velocity Anomaly Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 rounded-3xl bg-[#14100B] text-white p-7 sm:p-8 border border-[#3E2C20] space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#D4A147]">
                  MAKER-CHECKER SIGN-OFF QUEUE
                </span>
                <span className="text-[11px] font-mono text-white/60">2 Pending Reviews</span>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Rule Update: Festive 2.5x Multiplier Cap</span>
                    <span className="text-amber-300 font-mono text-[10px]">AWAITING CFO SIGN-OFF</span>
                  </div>
                  <p className="text-xs text-white/70">
                    Proposed by Retention Mgr (priya@) · Estimated Liability Exposure: ₹18.4L
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Bulk Goodwill Credit (+500 pts · 120 Orders)</span>
                    <span className="text-emerald-300 font-mono text-[10px]">APPROVED · 4-EYES OK</span>
                  </div>
                  <p className="text-xs text-white/70">
                    Counter-signed by Ops Lead (rohan@) · Courier SLA delay compensation
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl bg-[#FAF5ED] border border-[#E2D3B5] p-7 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E5B13] font-bold">
                  LIVE ANTI-ABUSE SIGNALS
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-rose-700 font-semibold">
                  <AlertTriangleIcon size={12} /> Auto-Quarantined
                </span>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-white border border-[#E2D3B5] p-4 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-[#14100B]">
                    <span>Blocked: Terminal Collusion Velocity #V-09</span>
                    <span className="font-mono text-[11px] text-[#8E5B13]">Store #MUM-14</span>
                  </div>
                  <p className="text-xs text-[#5B534C]">
                    7 consecutive unlinked bills credited to same phone within 14 minutes at Counter #3. Award quarantined automatically.
                  </p>
                </div>
                <div className="rounded-2xl bg-white border border-[#E2D3B5] p-4 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-[#14100B]">
                    <span>Blocked: Duplicate Receipt Perceptual Hash</span>
                    <span className="font-mono text-[11px] text-[#8E5B13]">OCR Gate #R-04</span>
                  </div>
                  <p className="text-xs text-[#5B534C]">
                    Cropped photo of invoice #INV-77102 rejected across second account using structural image hash match.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Residency & Privacy Compliance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPLIANCE_REGIONS.map((item) => (
              <div key={item.region} className="rounded-2xl border border-[#E2D3B5] bg-[#FAF5ED]/60 p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8E5B13]">
                  <Globe2Icon size={14} />
                  <span>{item.region}</span>
                </div>
                <h3 className="font-display font-bold text-base text-[#14100B]">{item.regulations}</h3>
                <p className="text-xs text-[#5B534C] leading-relaxed">{item.controls}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="AUDIT & SECURITY FAQ"
        title="Frequently Asked Questions"
        faqs={TRUST_FAQS}
        helpTitle="Need SOC 2 or Architecture Docs for InfoSec?"
        helpDescription="Request our encryption architecture brief, DPDP DPA templates, and sample financial audit trial packs."
        helpButtonText="Explore Security Portal"
        helpButtonHref="/platform/security"
      />

      <PageCta />
    </MainLayout>
  );
};
export default ProductTrustPage;
