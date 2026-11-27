import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { PageCta } from '../../components/common/PageCta';

const CAMPAIGN_TEMPLATES = [
  {
    badge: 'RETAIL · FESTIVE',
    title: 'Diwali Gold-Tier Early Access',
    trigger: 'Gold & Platinum cohorts · Store + Shopify',
    incentive: '2.5x Points + ₹500 Bonus on ₹5,000+ basket',
    benchmark: '+38% Basket Lift',
  },
  {
    badge: 'RETENTION · WIN-BACK',
    title: '45-Day Dormant Buyer Nudge',
    trigger: 'RFM At-Risk cohort · WhatsApp Cloud',
    incentive: '+150 Bonus Points valid 72 hours',
    benchmark: '24% Reactivation',
  },
  {
    badge: 'QSR · STREAK',
    title: '3-Coffee Morning Habit Challenge',
    trigger: '3 store purchases before Friday 11 AM',
    incentive: 'Instant 4th Beverage Free Voucher',
    benchmark: '4.2x Visit Velocity',
  },
  {
    badge: 'BREAKAGE · EXPIRY',
    title: '14-Day FIFO Expiry Recovery',
    trigger: 'Lot expiring ≥ 300 pts in next 14d',
    incentive: 'Direct WhatsApp 1-tap burn link',
    benchmark: '19% Recovered Spend',
  },
];

const CAMPAIGNS_FAQS = [
  {
    q: 'How does the automatic Holdout Control Group prove campaign ROI?',
    a: 'Punya Perks randomly isolates 5%–10% of the eligible target audience as an unprompted control group before dispatch, then compares incremental gross margin between treatment and control cohorts automatically.',
  },
  {
    q: 'Can we cap total liability exposure before launching a national weekend promo?',
    a: 'Yes. Every campaign enforces both global point/budget ceilings and per-member redemption caps, automatically throttling issuance once thresholds are hit.',
  },
  {
    q: 'Can marketing teams schedule campaigns without engineering deployments?',
    a: 'Yes. Retention managers build, preview audience size, approve via Maker-Checker, and deploy omnichannel campaigns across POS, web, and WhatsApp in under an afternoon.',
  },
];

export const ProductCampaignsPage: React.FC = () => {
  const steps = [
    { num: '01', title: 'Target Audience', desc: 'Select dynamic RFM cohorts, lapsed members, or VIP tiers with instant count preview.' },
    { num: '02', title: 'Trigger Event', desc: 'Time-based schedule, geofence enter, purchase above threshold, or cart abandonment.' },
    { num: '03', title: 'Incentive & Multiplier', desc: 'Points multiplier (2x weekend), flat bonus, instant free voucher, or tier upgrade.' },
    { num: '04', title: 'Budget & Liability Caps', desc: 'Set overall campaign budget and per-member redemption limits to prevent liability runaway.' },
    { num: '05', title: 'Holdout Group', desc: 'Auto-isolate 5%–10% control group to prove true incremental lift vs organic baseline.' },
    { num: '06', title: 'Multi-Channel Dispatch', desc: 'Push notifications, WhatsApp messages, SMS, and in-store cashier prompts.' },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="CAMPAIGNS & OFFERS"
        title="Target, launch and measure in an afternoon."
        description="Six-step visual builder for targeted promotions, automated lifecycle triggers, and holdout groups for true incrementality measurement."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Campaigns & Offers' }]}
        image="/images/products/user-web-campaigns.png"
        imageAlt="Kombee User Side Web — Campaigns & Offers"
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-2">
              SIX-STEP WORKFLOW
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1F1A17]">
              From Concept to Customer in Minutes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-display font-extrabold text-3xl text-[#B5651A] block mb-3">{s.num}</span>
                  <h3 className="font-display font-bold text-xl text-[#1F1A17] mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-[#1F1A17]/75 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready-to-Deploy Campaign Playbook Benchmarks */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-2">
              PROVEN CAMPAIGN TEMPLATES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#17140F]">
              Sample Plays &amp; Historical Benchmarks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAMPAIGN_TEMPLATES.map((tpl) => (
              <div
                key={tpl.title}
                className="rounded-3xl bg-[#FAF5ED]/75 border border-[#EBDFC6] p-6 flex flex-col justify-between gap-4 hover:border-[#B5651A]/50 transition-all"
              >
                <div className="space-y-2.5">
                  <span className="inline-block rounded-full bg-white border border-[#EBDFC6] px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#B5651A]">
                    {tpl.badge}
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#17140F] leading-snug">
                    {tpl.title}
                  </h3>
                  <p className="text-xs text-[#5B534C]">
                    <span className="font-semibold text-[#17140F]">Trigger:</span> {tpl.trigger}
                  </p>
                  <p className="text-xs text-[#5B534C]">
                    <span className="font-semibold text-[#17140F]">Reward:</span> {tpl.incentive}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#EBDFC6] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#847C75]">Avg. Impact</span>
                  <span className="font-bold text-emerald-700">{tpl.benchmark}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Holdout Proof Banner */}
      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="rounded-[28px] bg-gradient-to-r from-[#17140F] via-[#241A13] to-[#17140F] text-white p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-xl border border-[#3E2C20] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B5651A]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D9822B]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="lg:col-span-7 space-y-4 relative z-10">
              <span className="font-mono text-[11px] font-bold text-[#F5B06B] uppercase tracking-[0.16em] inline-block px-3 py-1 rounded-full bg-[#B5651A]/15 border border-[#B5651A]/30">
                SCIENTIFIC HOLDOUT TESTING
              </span>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#FAF3E8] tracking-tight leading-[1.15]">
                Prove incrementality. Not just correlated spend.
              </h3>
              <p className="text-sm sm:text-base text-[#EBDFC6]/85 leading-relaxed font-body">
                Legacy systems count all purchases during a campaign as campaign revenue. Punya Perks isolates an unprompted control cohort to prove the exact net lift generated by your loyalty points liability.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#1F1710] rounded-[22px] p-6 sm:p-7 border border-[#3E2C20] shadow-md space-y-3.5 relative z-10">
              <div className="flex justify-between items-center text-xs font-mono text-[#EBDFC6]/80 pb-2 border-b border-white/10">
                <span>Holdout Control Group:</span>
                <span className="text-white font-bold">10% (25,000 members)</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-[#EBDFC6]/80 pb-2 border-b border-white/10">
                <span>Treatment Group Spend:</span>
                <span className="text-[#52C485] font-bold">₹1,840 AOV</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-[#EBDFC6]/80 pb-2 border-b border-white/10">
                <span>Control Group Spend:</span>
                <span className="text-white/60 font-medium">₹1,410 AOV</span>
              </div>
              <div className="pt-2 flex justify-between items-center text-sm font-display font-bold text-[#F5B06B]">
                <span>Net Incremental Lift:</span>
                <span className="text-base text-[#52C485] font-mono font-bold">+30.5% Lift</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="CAMPAIGNS FAQ"
        title="Frequently Asked Questions"
        faqs={CAMPAIGNS_FAQS}
        helpTitle="Want to Configure Your First Lifecycle Play?"
        helpDescription="Explore pre-built Win-Back, Tier Fast-Track, and Store Opening triggers with our product team."
        helpButtonText="Book Product Demo"
        helpButtonHref="/demo"
      />

      <PageCta />
    </MainLayout>
  );
};
export default ProductCampaignsPage;
