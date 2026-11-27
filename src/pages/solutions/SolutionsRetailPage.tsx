import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { CheckCircle2Icon, ShoppingBagIcon, SmartphoneIcon, BarChart3Icon, LayersIcon } from 'lucide-react';

export const SolutionsRetailPage: React.FC = () => {
  const problems = [
    {
      problem: 'POS and web siloed into separate point systems',
      solution: 'One unified append-only ledger synchronizes in-store billing counter scans and online checkout in real time.',
    },
    {
      problem: 'Campaigns take weeks of IT coordination',
      solution: 'Marketing launches seasonal promotions, tier multipliers, and category boosts in an afternoon without code.',
    },
    {
      problem: 'Cashier checkout friction and barcode delays',
      solution: 'Instant phone number or WhatsApp QR lookup with sub-120ms rule evaluation before receipt printing.',
    },
  ];

  const capabilities = [
    {
      icon: ShoppingBagIcon,
      title: 'SKU & Margin-Protected Earn Rules',
      desc: 'Automatically exclude discounted clearance racks, GST/VAT taxes, and gift card purchases from base earn while boosting private-label margins with 2x multipliers.',
    },
    {
      icon: SmartphoneIcon,
      title: 'Tier-Adaptive Member App & Wallet Pass',
      desc: 'Customers carry Silver, Gold, and Platinum passes with live QR checkout barcodes, store locators, and personalized offer trays across iOS, Android, and Apple Wallet.',
    },
    {
      icon: LayersIcon,
      title: 'Omnichannel Returns & Partial Reversals',
      desc: 'Buy online, return in-store without manual adjustments. Punya Perks reverses prorated points automatically on partial returns and keeps the ledger balanced.',
    },
    {
      icon: BarChart3Icon,
      title: 'Store-Level & Cohort Incrementality',
      desc: 'Track repeat visit lift, basket size expansion, and redemption velocity across flagship stores, franchisees, and online storefronts with 5% holdout cohorts.',
    },
  ];

  const rolloutSteps = [
    { week: 'Week 1', title: 'Brand & Catalog Provisioning', desc: 'Configure store hierarchy, SKU category exclusions, and regional GST/tax rules in your sandbox.' },
    { week: 'Week 2', title: 'Tier Ladder & App Theming', desc: 'Set rolling 12-month tier thresholds and brand your white-label member portal and WhatsApp bot.' },
    { week: 'Week 3', title: 'POS & E-commerce Connect', desc: 'Activate Pine Labs, Lightspeed, or Shopify Plus connectors and verify live transaction replay.' },
    { week: 'Week 4', title: 'Flagship Pilot & Launch', desc: 'Run 10-store pilot, sign off finance ledger reconciliation, and roll out nationwide.' },
  ];

  const faqs = [
    {
      q: 'Can shoppers earn points in-store using just their mobile number?',
      a: 'Yes. Cashiers enter the customer phone number or scan their WhatsApp/App QR barcode right on the POS screen. Sub-120ms lookup confirms tier status and eligible burn balance before billing completes.',
    },
    {
      q: 'How are points handled when a customer returns one item from a multi-item bill?',
      a: 'Our line-item ingestion engine tracks earn per SKU. When a single item is returned in-store or online, only the proportional points for that SKU are reversed cleanly in the append-only ledger.',
    },
    {
      q: 'Do we need customers to download an app to participate?',
      a: 'No. Shoppers can enroll via WhatsApp QR at the billing counter in under 10 seconds, receive points receipts in chat, and upgrade to the full member portal or native app whenever they want.',
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="SOLUTIONS · RETAIL & FASHION"
        title="Omnichannel loyalty for retail."
        description="Earn in store and online with one balance, run seasonal campaigns in days, and keep breakage and liability visible to finance."
        breadcrumbs={[{ label: 'Solutions' }, { label: 'Retail & Fashion' }]}
        image="/images/products/user-web-home.png"
        imageAlt="Punya Perks Retail Member Experience"
      />

      {/* Section 1: Challenges & Solutions */}
      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-12">
            <span className="font-body text-[11px] font-bold text-[#8E5B13] tracking-[0.2em] uppercase block mb-2">
              PROBLEMS WE SOLVE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#14100B]">
              Engineered for Multi-Store Retail Realities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-white p-7 sm:p-8 border border-[#E2D3B5] shadow-xs hover:shadow-md hover:border-[#8E5B13]/40 transition-all duration-300 space-y-4">
                <span className="font-body text-xs font-bold text-[#8E5B13] block">CHALLENGE 0{idx + 1}</span>
                <h4 className="font-display font-bold text-lg text-[#14100B]">{item.problem}</h4>
                <div className="pt-3 border-t border-[#E2D3B5]/60">
                  <span className="font-body text-[11px] font-bold text-[#8E5B13] block mb-1">PUNYA PERKS SOLUTION</span>
                  <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Benchmarks & Core Retail Capabilities */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: '+34%', label: 'Average 90-day repeat purchase lift' },
              { metric: '<120ms', label: 'POS checkout lookup & quote SLA' },
              { metric: '85%+', label: 'WhatsApp receipt open rate in-store' },
              { metric: '0.00%', label: 'Finance vs. marketing ledger drift' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-[#FAF5ED] border border-[#E2D3B5] text-center">
                <div className="font-display font-bold text-3xl sm:text-4xl text-[#8E5B13]">{stat.metric}</div>
                <p className="text-xs text-[#5B534C] mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="p-7 rounded-3xl bg-[#FCF8F2] border border-[#E2D3B5] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#E2D3B5] flex items-center justify-center text-[#8E5B13] shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-[#14100B]">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: 4-Week Rollout */}
      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-body text-[11px] font-bold text-[#8E5B13] tracking-[0.2em] uppercase block mb-2">
              DEPLOYMENT BLUEPRINT
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#14100B]">
              From Legacy Silos to Unified Retail Loyalty in 4 Weeks
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rolloutSteps.map((s) => (
              <div key={s.week} className="p-6 rounded-3xl bg-white border border-[#E2D3B5] space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F4E9D2] text-[#8E5B13] text-[11px] font-bold">
                  {s.week}
                </span>
                <h3 className="font-display font-bold text-base text-[#14100B] pt-1">{s.title}</h3>
                <p className="text-xs text-[#5B534C] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="RETAIL FAQ"
        title="Questions retail & fashion leaders ask"
        faqs={faqs}
        helpTitle="Planning an omnichannel POS cutover?"
        helpDescription="Walk through our Pine Labs, Lightspeed, and Shopify Plus connectors with a retail solutions engineer."
        helpButtonText="Book retail walkthrough"
        helpButtonHref="/demo"
      />

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsRetailPage;
