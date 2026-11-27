import React from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { CheckCircle2Icon, QuoteIcon } from 'lucide-react';

export const RetailCaseStudyPage: React.FC = () => {
  const modulesUsed = [
    { name: 'Earn & Rules Engine', href: '/product/earn' },
    { name: 'Tier-Adaptive Member App', href: '/product/member-app' },
    { name: 'WhatsApp Loyalty QR', href: '/product/whatsapp' },
    { name: 'Pine Labs & Shopify Connectors', href: '/product/integrations' },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="CASE STUDY · RETAIL · INDIA"
        title="A national fashion retailer unified store and online loyalty"
        description="Separate POS and e-commerce programmes became one ledger with a tier-adaptive app and WhatsApp enrolment; campaigns now launch in an afternoon."
        breadcrumbs={[{ label: 'Customers', href: '/customers' }, { label: 'Retail Case Study' }]}
        image="/images/products/user-web-home.png"
        imageAlt="Unified Retail Loyalty Member Portal"
      />

      <section className="py-16 sm:py-20 bg-white border-b border-[#E2D3B5] font-body text-[#1F1A17]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-[28px] bg-[#FAF5ED] border border-[#E2D3B5]">
            <div className="text-center">
              <div className="font-display font-extrabold text-4xl text-[#8E5B13]">+34%</div>
              <div className="font-body text-xs font-bold uppercase text-[#1F1A17]/70 mt-1">Repeat Purchase Lift</div>
            </div>
            <div className="text-center">
              <div className="font-display font-extrabold text-4xl text-[#8E5B13]">140 Stores</div>
              <div className="font-body text-xs font-bold uppercase text-[#1F1A17]/70 mt-1">Unified POS Counters</div>
            </div>
            <div className="text-center">
              <div className="font-display font-extrabold text-4xl text-[#8E5B13]">4 Weeks</div>
              <div className="font-body text-xs font-bold uppercase text-[#1F1A17]/70 mt-1">Total Time to Launch</div>
            </div>
          </div>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#1F1A17]/80">
            <h2 className="font-display font-bold text-2xl text-[#1F1A17]">The Challenge</h2>
            <p>
              The retailer operated 140 brick-and-mortar stores alongside a high-growth Shopify storefront. Store billing counters ran legacy POS terminals that stored points in disconnected local databases. Shoppers frequently complained when store points failed to appear online, and marketing required 3 weeks of IT tickets to configure seasonal holiday discounts.
            </p>

            <h2 className="font-display font-bold text-2xl text-[#1F1A17]">The Solution</h2>
            <p>
              Punya Perks deployed its unified append-only ledger in AWS Mumbai. POS terminals were integrated via pre-built Pine Labs connectors, while the e-commerce store connected through the turnkey Shopify plugin. Customers enrolled in seconds at checkout via WhatsApp QR code.
            </p>

            <h2 className="font-display font-bold text-2xl text-[#1F1A17]">The Results</h2>
            <ul className="space-y-2.5 pt-1">
              {[
                '+34% repeat purchase frequency within 90 days of omnichannel rollout',
                'Campaign configuration time dropped from 3 weeks to under 30 minutes',
                '0.00% variance between marketing liability dashboards and finance audit journals',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#1F1A17] font-medium">
                  <CheckCircle2Icon size={16} className="text-[#8E5B13] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote Callout per Sitemap */}
          <div className="p-8 rounded-[28px] bg-[#FAF5ED] border border-[#E2D3B5] space-y-4">
            <QuoteIcon size={24} className="text-[#8E5B13]" />
            <p className="font-display italic text-xl sm:text-2xl text-[#14100B] leading-snug">
              “Finance and marketing finally look at the exact same number. Our store managers love how fast WhatsApp enrolment is at peak weekend checkout.”
            </p>
            <div className="text-xs font-semibold text-[#5B534C]">
              Head of Digital Operations · National Apparel Retail Group
            </div>
          </div>

          {/* Modules Used per Sitemap */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#8E5B13]">
              Modules Deployed
            </div>
            <div className="flex flex-wrap gap-2.5">
              {modulesUsed.map((m) => (
                <Link
                  key={m.href}
                  to={m.href}
                  className="px-4 py-2 rounded-full bg-[#FAF5ED] hover:bg-[#F4E9D2] border border-[#E2D3B5] text-xs font-semibold text-[#14100B] hover:text-[#8E5B13] transition-colors"
                >
                  {m.name} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default RetailCaseStudyPage;
