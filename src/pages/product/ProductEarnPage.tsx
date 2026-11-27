import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { PageCta } from '../../components/common/PageCta';
import { CheckCircle2Icon } from 'lucide-react';

interface RulePreset {
  id: string;
  label: string;
  basket: string;
  exclusion: string;
  eligible: string;
  multiplier: string;
  capNote: string;
  pointsIssued: string;
  ledgerRef: string;
}

const RULE_PRESETS: RulePreset[] = [
  {
    id: 'retail',
    label: 'Apparel Retail POS',
    basket: '₹4,850.00',
    exclusion: 'excluded_tax (GST 18%): -₹738.00',
    eligible: '₹4,112.00',
    multiplier: 'tier_multiplier (GOLD 1.5x) + Flash +20 pts',
    capNote: 'max_daily_cap_check: PASS (Under 2,000 pts/day)',
    pointsIssued: '82 pts',
    ledgerRef: 'Ledger #L-48190 · Rule v4.2',
  },
  {
    id: 'qsr',
    label: 'Quick Service Café',
    basket: '₹640.00',
    exclusion: 'excluded_packaging & tax: -₹92.00',
    eligible: '₹548.00',
    multiplier: 'coffee_streak_bonus (Visit #3): +45 pts',
    capNote: 'anti_collusion_velocity: PASS (1st scan today)',
    pointsIssued: '67 pts',
    ledgerRef: 'Ledger #L-48214 · Rule v2.8',
  },
  {
    id: 'd2c',
    label: 'D2C Online Checkout',
    basket: '₹3,200.00',
    exclusion: 'gift_card_sku_exclusion: -₹500.00',
    eligible: '₹2,700.00',
    multiplier: 'tier_multiplier (PLATINUM 2.0x)',
    capNote: 'escrow_state: PENDING (Unlocks after 7d return window)',
    pointsIssued: '108 pts (Pending)',
    ledgerRef: 'Ledger #L-48259 · Rule v5.1',
  },
];

const EARN_FAQS = [
  {
    q: 'Can we exclude discounted clearance SKUs, GST, or gift cards from earning points?',
    a: 'Yes. Line-item SKU tags, category exclusions, payment-method filters, and tax deductions apply before points calculation—ensuring margin protection on clearance items.',
  },
  {
    q: 'What happens to earned points if a shopper returns two items from a five-item online order?',
    a: 'Partial return webhooks calculate exact pro-rata earned points for the returned SKUs and post a compensating reversal debit cleanly without touching unrelated orders.',
  },
  {
    q: 'How are rule edits safely rolled out without breaking mid-day store transactions?',
    a: 'Every earn policy is versioned immutably. Edits go through Maker-Checker preview first, and historical reversals always reference the exact rule version stamped on the original purchase.',
  },
];

export const ProductEarnPage: React.FC = () => {
  const [presetId, setPresetId] = useState<string>('retail');
  const activePreset = RULE_PRESETS.find((p) => p.id === presetId) || RULE_PRESETS[0];

  const mechanisms = [
    { title: 'In-Store POS Purchases', desc: 'Barcode scans at checkout counter with line-item tax exclusions and eligible basket spend filtering.' },
    { title: 'E-commerce Checkout', desc: 'Real-time cart webhooks evaluate tier multipliers before invoice generation and hold during return windows.' },
    { title: 'Two-Sided Referrals', desc: 'Credit both the referring member and the new friend only after qualifying first-order delivery.' },
    { title: 'Card-Linked Offers', desc: 'Direct bank transaction feed ingestion with Merchant Category Code (MCC) automated matching.' },
    { title: 'Receipt OCR Scanning', desc: 'Photo upload for FMCG and off-premise purchases with duplicate invoice perceptual-hash checks.' },
    { title: 'Milestones & Challenges', desc: 'Gamified streaks, birthday bonuses, product reviews, and weekend store check-in quests.' },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="EARN & RULES ENGINE"
        title="Every earning mechanism, one rule builder."
        description="Purchases in store and online, referrals, card-linked offers, receipt scans, birthdays, surveys and challenges. Tier multipliers, category caps and campaign bonuses stack in a defined order and are versioned at transaction time."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Earn & Rules Engine' }]}
        image="/images/products/user-web-earn.png"
        imageAlt="Kombee User Side Web — Ways to Earn"
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block">
                RULE EXECUTION ORDER
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#17140F] tracking-tight">
                Deterministic stacking. Zero reconciliation surprises.
              </h2>
              <p className="text-sm sm:text-base text-[#5B534C] leading-relaxed">
                Rules execute in an explicit mathematical order: Base Earn → Category Multiplier → Tier Bonus → Active Campaign Boost → Basket Exclusion Cap. Switch scenarios below to inspect live evaluation.
              </p>

              {/* Interactive Scenario Switcher */}
              <div className="flex flex-wrap gap-2">
                {RULE_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPresetId(p.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      presetId === p.id
                        ? 'bg-[#B5651A] text-white shadow-xs'
                        : 'bg-white border border-[#EBDFC6] text-[#17140F] hover:border-[#B5651A]'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div className="space-y-3 pt-1">
                {[
                  'Version-controlled rule sets with historical rollback capability',
                  'Sub-120ms execution time even during peak Diwali and Black Friday traffic',
                  'Maker-checker authorization required for rule changes above liability thresholds',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17140F] font-medium">
                    <CheckCircle2Icon size={16} className="text-[#B5651A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[24px] bg-[#17140F] text-white overflow-hidden shadow-2xl border border-[#3E2C20]">
                <div className="px-5 py-3.5 bg-[#1F1A17] border-b border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                    </div>
                    <span className="font-mono text-xs text-white/75 truncate">
                      rule_evaluation_engine.ts
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono text-[11px] font-semibold shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    EXEC_OK · 84ms
                  </span>
                </div>

                <div className="p-5 sm:p-7 font-mono text-xs sm:text-[13px] space-y-4">
                  <div className="text-[#E59846] font-semibold">
                    // Evaluation trace: {activePreset.label}
                  </div>
                  <div className="space-y-2 text-white/85 leading-relaxed">
                    <div className="flex gap-3">
                      <span className="text-white/30 select-none">01</span>
                      <span>gross_basket: <span className="text-[#F3E5CF] font-semibold">{activePreset.basket}</span></span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/30 select-none">02</span>
                      <span className="text-rose-300">{activePreset.exclusion}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/30 select-none">03</span>
                      <span>eligible_base_spend: <span className="text-[#F3E5CF] font-semibold">{activePreset.eligible}</span></span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/30 select-none">04</span>
                      <span className="text-[#E59846]">{activePreset.multiplier}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/30 select-none">05</span>
                      <span className="text-amber-300">{activePreset.capNote}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-emerald-300 font-semibold">
                    <span>→ points_issued: {activePreset.pointsIssued}</span>
                    <span className="text-[11px] text-white/55">{activePreset.ledgerRef}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanisms Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-2">
              SUPPORTED MECHANISMS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#17140F]">
              Built for Every Transaction Touchpoint
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanisms.map((m) => (
              <div key={m.title} className="rounded-3xl bg-[#FAF5ED]/70 hover:bg-[#FAF5ED] p-7 sm:p-8 border border-[#EBDFC6] shadow-xs hover:shadow-md hover:border-[#B5651A]/40 transition-all duration-300 space-y-3 group">
                <h3 className="font-display font-bold text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors">{m.title}</h3>
                <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="EARN & RULES FAQ"
        title="Frequently Asked Questions"
        faqs={EARN_FAQS}
        helpTitle="Want to Test Complex Stacking Caps Live?"
        helpDescription="Spin up a sandbox tenant with synthetic SKUs, tier multipliers, and sample POS receipts in minutes."
        helpButtonText="Start Free Sandbox"
        helpButtonHref="/start"
      />

      <PageCta />
    </MainLayout>
  );
};
export default ProductEarnPage;
