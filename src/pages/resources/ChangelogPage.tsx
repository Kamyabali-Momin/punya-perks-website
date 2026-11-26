import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { CheckCircle2, Mail } from 'lucide-react';

export const ChangelogPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Engine' | 'Compliance' | 'Connectors' | 'Member App'>('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const releases = [
    {
      version: 'v2.4.0',
      category: 'Compliance' as const,
      date: 'November 2026',
      title: 'DPDP Automated Data Erasure & Enhanced Multi-Tenant Clearinghouse',
      changes: [
        'Automated Data Principal Right-to-Erasure API conforming to India DPDP rules while preserving ledger audit totals.',
        'Clearinghouse settlement engine now supports multi-currency inter-tenant conversions (INR, AUD, NZD, AED).',
        'Holdout group split testing (5%–10% control cohorts) enabled natively inside campaign builder.',
      ],
    },
    {
      version: 'v2.3.0',
      category: 'Connectors' as const,
      date: 'October 2026',
      title: 'Pine Labs Android POS Cloud Connector & Apple Wallet Pass Bundling',
      changes: [
        'Turnkey cloud app on Pine Labs Android smart terminals with sub-120ms phone and QR barcode lookup.',
        'Automated Apple Wallet .pkpass & Google Wallet pass generation with dynamic tier coloring and push balance updates.',
        'Petpooja QSR connector updated with table-QR bill split points.',
      ],
    },
    {
      version: 'v2.2.0',
      category: 'Engine' as const,
      date: 'September 2026',
      title: 'Two-Phase Checkout Quote & Commit + Ind AS 115 Breakage Reports',
      changes: [
        '15-minute reservation hold protocol (/v1/redemptions/quote and /commit) prevents lost points on abandoned checkouts.',
        'One-click IFRS 15 / Ind AS 115 monthly breakage amortization exports for finance teams.',
        'Maker-checker dual authorization thresholds added for manual balance credits.',
      ],
    },
    {
      version: 'v2.1.0',
      category: 'Member App' as const,
      date: 'August 2026',
      title: 'WhatsApp QR Enrolment & Full Arabic RTL Member Experience',
      changes: [
        '10-second WhatsApp counter QR onboarding with pre-approved TRAI DLT receipt templates.',
        'Full Arabic RTL typography, localized Hindi strings, and dynamic Silver/Gold/Platinum tier themes.',
        'Two-sided referral milestone tracker with automated return-window verification.',
      ],
    },
  ];

  const visibleReleases = releases.filter((r) => filter === 'All' || r.category === filter);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <MainLayout>
      <PageHeader
        eyebrow="CHANGELOG"
        title="What shipped, by release."
        description="Transparent log of engine updates, API changes, regulatory templates, and connector launches."
        breadcrumbs={[{ label: 'Resources', href: '/resources' }, { label: 'Changelog' }]}
        primaryCtaText="View Developer API"
        primaryCtaHref="/platform/developers"
        secondaryCtaText="Start in sandbox"
        secondaryCtaHref="/start"
      />

      <section className="py-12 sm:py-20 bg-[#FAF7F2] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-10">
          {/* Filter Pills + Subscribe Release Notes */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#EBDFC6]">
            <div className="flex flex-wrap gap-2">
              {(['All', 'Engine', 'Compliance', 'Connectors', 'Member App'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    filter === cat
                      ? 'bg-[#B5651A] text-white shadow-xs'
                      : 'bg-white text-[#5B534C] border border-[#EBDFC6] hover:text-[#17140F]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#B5651A]/40 text-xs font-semibold text-[#B5651A]">
                <CheckCircle2 size={14} />
                <span>Subscribed to release notifications.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                <div className="relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#847C75]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work email for release notes"
                    className="h-10 pl-9 pr-4 rounded-full bg-white border border-[#EBDFC6] text-xs w-full sm:w-64 outline-none focus:border-[#B5651A]"
                  />
                </div>
                <button
                  type="submit"
                  className="h-10 px-5 rounded-full bg-[#17140F] hover:bg-black text-white text-xs font-semibold transition-colors cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* 2-Column Side-by-Side Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {visibleReleases.map((rel) => (
              <div
                key={rel.version}
                className="rounded-3xl bg-white p-7 sm:p-9 border border-[#EBDFC6] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-[#EBDFC6]">
                    <div className="flex items-center gap-2">
                      <span className="font-body text-sm font-bold text-[#B5651A] bg-[#FEF0E1] px-3 py-0.5 rounded-full border border-[#F3D7BD]">
                        {rel.version}
                      </span>
                      <span className="text-[11px] font-semibold text-[#5B534C] bg-[#FAF5ED] px-2.5 py-0.5 rounded-full border border-[#EBDFC6]">
                        {rel.category}
                      </span>
                    </div>
                    <span className="text-xs text-[#847C75] font-semibold">{rel.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#17140F] leading-snug">
                    {rel.title}
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B534C] list-disc pl-5 leading-relaxed pt-1">
                    {rel.changes.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
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
export default ChangelogPage;
