import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { PageCta } from '../../components/common/PageCta';
import {
  BarChart3Icon,
  TrendingUpIcon,
  UsersIcon,
  LayersIcon,
  CheckCircle2Icon,
  ArrowUpRightIcon,
} from 'lucide-react';

interface SegmentRow {
  id: string;
  name: string;
  members: string;
  share: string;
  aov: string;
  frequency: string;
  recommendedAction: string;
}

const RFM_SEGMENTS: SegmentRow[] = [
  {
    id: 'champions',
    name: 'Champions (High Frequency & Spend)',
    members: '148,200',
    share: '19.4%',
    aov: '₹4,850',
    frequency: '4.6x / quarter',
    recommendedAction: 'Invite to Platinum early-access drops & concierge perks',
  },
  {
    id: 'loyal',
    name: 'Loyal Regulars (Steady Repeaters)',
    members: '312,450',
    share: '40.8%',
    aov: '₹2,910',
    frequency: '2.8x / quarter',
    recommendedAction: 'Trigger 2x weekend category multiplier to boost basket depth',
  },
  {
    id: 'at-risk',
    name: 'At-Risk High Spend (42+ Days Lapsed)',
    members: '84,600',
    share: '11.1%',
    aov: '₹3,640',
    frequency: '1.1x / quarter',
    recommendedAction: 'Send WhatsApp FIFO expiry alert + +150 bonus win-back boost',
  },
  {
    id: 'new',
    name: 'Newly Enrolled (First 30 Days)',
    members: '219,800',
    share: '28.7%',
    aov: '₹1,720',
    frequency: '1.3x / quarter',
    recommendedAction: 'Complete 2nd-visit streak within 21 days for +100 starter points',
  },
];

const COHORT_RETENTION = [
  { cohort: 'Q1 Launch (Shopify + POS)', enrolled: '94,200', m1: '68%', m3: '54%', m6: '47%', m12: '41%', lift: '+36%' },
  { cohort: 'Q2 Monsoon Omni Cohort', enrolled: '118,500', m1: '71%', m3: '58%', m6: '50%', m12: '—', lift: '+34%' },
  { cohort: 'Q3 Festive WhatsApp QR', enrolled: '204,800', m1: '76%', m3: '63%', m6: '—', m12: '—', lift: '+39%' },
  { cohort: 'Q4 App + Store Wallet', enrolled: '142,100', m1: '74%', m3: '—', m6: '—', m12: '—', lift: '+32%' },
];

const ANALYTICS_FAQS = [
  {
    q: 'Does Punya Perks replace our warehouse or sync cleanly into Snowflake / BigQuery?',
    a: 'Both. Our built-in Analytics & CDP gives retention and finance teams instant RFM cohorts, breakage forecasts, and holdout incrementality without waiting on data engineers, while CDC streams export raw event tables into Snowflake, BigQuery, or Redshift.',
  },
  {
    q: 'How are Ind AS 115 and IFRS 15 breakage forecasts calculated?',
    a: 'Because Punya Perks tracks points on a FIFO earn-lot basis rather than a flat counter, actuarial breakage rates calculate automatically by vintage, channel, and historical expiry redemption curve.',
  },
  {
    q: 'Can we push dynamic CDP segments straight to Klaviyo, MoEngage, or WhatsApp?',
    a: 'Yes. Any RFM or churn-risk cohort syncs via webhook or native CRM connector in real time whenever a member enters or exits a segment.',
  },
];

export const ProductAnalyticsPage: React.FC = () => {
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>('champions');
  const activeSegment = RFM_SEGMENTS.find((s) => s.id === selectedSegmentId) || RFM_SEGMENTS[0];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="ANALYTICS, CDP & PERSONALISATION"
        title="Understand customer value, not just point velocity."
        description="Unified customer profiles, RFM segmentation, predictive churn scoring, and native cohort retention analytics across your entire ecosystem."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Analytics & CDP' }]}
        image="/images/products/user-web-home.png"
        imageAlt="Punya Perks Member Profile & Cohort Analytics"
      />

      {/* Top Executive KPI Strip */}
      <section className="py-12 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: 'ACTIVE 90-DAY MEMBERS', value: '64.8%', sub: '+19 pts above industry median' },
              { label: 'INCREMENTAL REPEAT LIFT', value: '+34.2%', sub: 'Verified against 10% holdouts' },
              { label: 'MEMBER VS GUEST AOV', value: '1.48x', sub: '₹3,240 member vs ₹2,190 guest' },
              { label: 'DEFERRED LIABILITY', value: '₹1.42 Cr', sub: 'Ind AS 115 breakage reconciled daily' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] p-6">
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#847C75]">
                  {stat.label}
                </div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#B5651A] mt-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#5B534C] mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core CDP Capabilities */}
      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FEF0E1] text-[#B5651A] flex items-center justify-center">
                <TrendingUpIcon size={20} />
              </div>
              <span className="font-mono text-xs font-bold text-[#B5651A] block">COHORT RETENTION</span>
              <h2 className="font-display font-bold text-xl text-[#1F1A17]">Month-over-Month Curves</h2>
              <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                Track repeat order behaviour 30, 60, 90, and 365 days after WhatsApp or store POS enrolment.
              </p>
            </div>
            <div className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FEF0E1] text-[#B5651A] flex items-center justify-center">
                <UsersIcon size={20} />
              </div>
              <span className="font-mono text-xs font-bold text-[#B5651A] block">RFM SEGMENTATION</span>
              <h2 className="font-display font-bold text-xl text-[#1F1A17]">Autonomous Value Tiers</h2>
              <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                Recency, Frequency, and Monetary clusters computed nightly across in-store and online receipts without SQL scripts.
              </p>
            </div>
            <div className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FEF0E1] text-[#B5651A] flex items-center justify-center">
                <LayersIcon size={20} />
              </div>
              <span className="font-mono text-xs font-bold text-[#B5651A] block">BREAKAGE MODELING</span>
              <h2 className="font-display font-bold text-xl text-[#1F1A17]">Actuarial Accounting</h2>
              <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                Forecast unredeemed points expiration and FIFO breakage reserves aligned to Ind AS 115 and IFRS 15 audit standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive RFM CDP Explorer + Cohort Table */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-14">
          {/* Interactive Segment Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block">
                LIVE CDP AUDIENCE SNAPSHOT
              </span>
              <h2 className="font-display font-extrabold text-3xl text-[#17140F] leading-tight">
                Select any RFM cohort to inspect behaviour &amp; next action.
              </h2>
              <p className="text-sm text-[#5B534C] leading-relaxed">
                Sample distribution from a 765,050-member omnichannel retail tenant. Click a cluster to preview real-time campaign routing.
              </p>

              <div className="space-y-2.5 pt-2">
                {RFM_SEGMENTS.map((seg) => {
                  const isActive = seg.id === activeSegment.id;
                  return (
                    <button
                      key={seg.id}
                      type="button"
                      onClick={() => setSelectedSegmentId(seg.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isActive
                          ? 'bg-[#FAF5ED] border-[#B5651A] shadow-xs'
                          : 'bg-white border-[#EBDFC6] hover:border-[#B5651A]/40'
                      }`}
                    >
                      <div>
                        <div className="font-display font-bold text-sm text-[#17140F]">{seg.name}</div>
                        <div className="text-xs text-[#847C75] font-mono mt-0.5">{seg.members} profiles</div>
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white border border-[#EBDFC6] text-[#B5651A]">
                        {seg.share}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 rounded-3xl bg-[#17140F] text-white p-7 sm:p-9 border border-[#3E2C20] shadow-xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5B06B]">
                    ACTIVE SEGMENT TELEMETRY
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-0.5">
                    {activeSegment.name}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 text-xs font-mono text-emerald-300">
                  Synced to WhatsApp &amp; Klaviyo
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-[10px] font-mono uppercase text-white/60">Member Count</div>
                  <div className="font-display font-bold text-2xl text-white mt-1">{activeSegment.members}</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-[10px] font-mono uppercase text-white/60">Average Order Value</div>
                  <div className="font-display font-bold text-2xl text-[#F5B06B] mt-1">{activeSegment.aov}</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="text-[10px] font-mono uppercase text-white/60">Purchase Frequency</div>
                  <div className="font-display font-bold text-2xl text-emerald-300 mt-1">{activeSegment.frequency}</div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#241A13] border border-[#B5651A]/40 p-5 flex items-start gap-3">
                <CheckCircle2Icon size={18} className="text-[#F5B06B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase text-[#F5B06B] font-bold">Recommended Automated Play</div>
                  <p className="text-sm text-white/90 mt-1 leading-relaxed">{activeSegment.recommendedAction}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cohort Retention Table */}
          <div className="rounded-3xl border border-[#EBDFC6] bg-[#FAF5ED]/60 p-6 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-mono text-[11px] font-bold text-[#B5651A] uppercase tracking-wider">
                  QUARTERLY RETENTION MATRIX
                </span>
                <h3 className="font-display font-bold text-2xl text-[#17140F]">
                  30 / 90 / 180 / 365-Day Repeat Purchase Cohorts
                </h3>
              </div>
              <span className="text-xs font-mono text-[#5B534C] inline-flex items-center gap-1">
                <BarChart3Icon size={14} className="text-[#B5651A]" /> Sample Apparel &amp; Retail Benchmark
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#EBDFC6] bg-white">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#FAF5ED] border-b border-[#EBDFC6] font-mono text-[11px] uppercase text-[#5B534C]">
                  <tr>
                    <th className="py-3.5 px-4">Acquisition Cohort</th>
                    <th className="py-3.5 px-4">Enrolled</th>
                    <th className="py-3.5 px-4">30-Day</th>
                    <th className="py-3.5 px-4">90-Day</th>
                    <th className="py-3.5 px-4">180-Day</th>
                    <th className="py-3.5 px-4">365-Day</th>
                    <th className="py-3.5 px-4 text-right">Net Lift vs Control</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2EAE0] text-[#17140F]">
                  {COHORT_RETENTION.map((row) => (
                    <tr key={row.cohort} className="hover:bg-[#FAF5ED]/40 transition-colors">
                      <td className="py-3.5 px-4 font-semibold">{row.cohort}</td>
                      <td className="py-3.5 px-4 font-mono text-[#5B534C]">{row.enrolled}</td>
                      <td className="py-3.5 px-4 font-mono">{row.m1}</td>
                      <td className="py-3.5 px-4 font-mono">{row.m3}</td>
                      <td className="py-3.5 px-4 font-mono">{row.m6}</td>
                      <td className="py-3.5 px-4 font-mono">{row.m12}</td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-700 inline-flex items-center justify-end gap-1 w-full">
                        <span>{row.lift}</span>
                        <ArrowUpRightIcon size={13} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="ANALYTICS & CDP FAQ"
        title="Frequently Asked Questions"
        faqs={ANALYTICS_FAQS}
        helpTitle="Want to Model Your Retention Uplift?"
        helpDescription="Run your historical transaction CSV through our cohort & breakage simulator with a solutions engineer."
        helpButtonText="Book Analytics Walkthrough"
        helpButtonHref="/demo"
      />

      <PageCta />
    </MainLayout>
  );
};
export default ProductAnalyticsPage;
