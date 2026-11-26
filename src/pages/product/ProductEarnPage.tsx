import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { CheckCircle2Icon, SlidersIcon, ShieldAlertIcon, RefreshCwIcon, TerminalIcon } from 'lucide-react';

export const ProductEarnPage: React.FC = () => {
  const mechanisms = [
    { title: 'In-Store POS Purchases', desc: 'Barcode scans at checkout counter with line-item tax exclusions and eligible basket spend filtering.' },
    { title: 'E-commerce Checkout', desc: 'Real-time cart webhooks evaluate tier multipliers before invoice generation.' },
    { title: 'Two-Sided Referrals', desc: 'Credit both the referring member and the new friend after first qualifying purchase verification.' },
    { title: 'Card-Linked Offers', desc: 'Direct bank transaction feed ingestion with Merchant Category Code (MCC) automated matching.' },
    { title: 'Receipt OCR Scanning', desc: 'Photo upload for FMCG and off-premise purchases with duplicate receipt prevention.' },
    { title: 'Milestones & Challenges', desc: 'Gamified streaks, birthday bonuses, review submissions, and seasonal community quests.' },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="EARN & RULES ENGINE"
        title="Every earning mechanism, one rule builder."
        description="Purchases in store and online, referrals, card-linked offers, receipt scans, birthdays, surveys and challenges. Tier multipliers, category caps and campaign bonuses stack in a defined order and are versioned at transaction time."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Earn & Rules Engine' }]}
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
                Rules execute in an explicit mathematical order: Base Earn → Category Multiplier → Tier Bonus → Active Campaign Boost → Basket Exclusion Cap. Every transaction logs which rule version was applied.
              </p>

              <div className="space-y-3 pt-2">
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
              <div className="rounded-[24px] bg-[#17140F] text-white p-6 sm:p-8 font-mono text-xs space-y-4 shadow-xl border border-white/10">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-white/60">
                  <span>rule_evaluation_engine.ts</span>
                  <span className="text-emerald-400">● EXEC_OK (84ms)</span>
                </div>
                <div className="text-[#E59846] font-bold">// Evaluation sequence for POS basket #TXN-9182</div>
                <div className="space-y-1 text-white/80">
                  <div>1. gross_basket: ₹4,850.00</div>
                  <div>2. excluded_tax (GST 18%): -₹738.00</div>
                  <div>3. eligible_base_spend: ₹4,112.00</div>
                  <div>4. tier_multiplier (GOLD): 1.5x</div>
                  <div>5. active_flash_campaign: +20 bonus pts</div>
                  <div className="pt-2 text-emerald-300 font-bold">→ points_issued: 82 pts (Ledger Entry #L-48190)</div>
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

      <PageCta />
    </MainLayout>
  );
};
export default ProductEarnPage;
