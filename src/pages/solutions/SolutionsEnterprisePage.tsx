import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { NetworkIcon, GlobeIcon, ShieldCheckIcon, LayersIcon } from 'lucide-react';

export const SolutionsEnterprisePage: React.FC = () => {
  const pillars = [
    {
      tag: 'INTER-TENANT EXCHANGE',
      title: 'Automated Clearinghouse',
      desc: 'Earn points at Airline or Retail Partner A and redeem at Hotel or Grocery Partner B with automated bilateral exchange rates and monthly invoicing.',
    },
    {
      tag: 'GLOBAL IDENTITY',
      title: 'Unified Member ID',
      desc: 'Single member credential with scoped OAuth/OIDC token access preserves strict subsidiary data privacy boundaries under DPDP & Privacy Act rules.',
    },
    {
      tag: 'CUSTOM SLA',
      title: 'Enterprise Reliability',
      desc: '99.95% uptime SLA guarantee, dedicated Principal Solutions Architect, isolated cloud cells, and 24/7 priority operational coverage.',
    },
  ];

  const capabilities = [
    {
      icon: NetworkIcon,
      title: 'Bilateral Settlement & Netting Engine',
      desc: 'Define distinct point valuation and liability settlement rules per coalition partner. Finance receives automated monthly debit/credit clearing statements.',
    },
    {
      icon: GlobeIcon,
      title: 'Multi-Region & Multi-Currency Cells',
      desc: 'Run one coalition programme spanning India (INR), Australia (AUD), New Zealand (NZD), and UAE (AED) while keeping regional data in sovereign AWS zones.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Consent-Scoped Cross-Brand Sharing',
      desc: 'Subsidiaries only see member balances and marketing preferences explicitly consented for their brand, satisfying strict privacy regulator audits.',
    },
    {
      icon: LayersIcon,
      title: 'High-Throughput Event Streaming',
      desc: 'Stream real-time earn, burn, and tier-upgrade events directly into Snowflake, Databricks, or enterprise Kafka topics with zero ETL lag.',
    },
  ];

  const faqs = [
    {
      q: 'How does inter-brand point settlement work across coalition subsidiaries?',
      a: 'When a member earns points at Brand A and redeems at Brand B, the clearinghouse records an inter-company payable from Brand A to Brand B at the configured bilateral exchange rate.',
    },
    {
      q: 'Can each brand in our conglomerate keep its own app theme while sharing one points wallet?',
      a: 'Yes. Each subsidiary can deploy its own white-label storefront or mobile theme backed by a unified member ID and shared or convertible point buckets.',
    },
    {
      q: 'Do you support migrating millions of historical members from legacy enterprise suites?',
      a: 'Yes. Our dual-write migration pipeline replays historical balances, tiers, and expiry lots from Capillary, Oracle, or custom legacy databases with zero customer disruption.',
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="SOLUTIONS · COALITION & ENTERPRISE"
        title="Multi-brand networks with autonomous clearinghouse settlement."
        description="Cross-brand currency exchange, isolated multi-tenant architecture, centralized member identities, and inter-company debit/credit balancing across corporate conglomerates."
        breadcrumbs={[{ label: 'Solutions' }, { label: 'Coalition & Enterprise' }]}
        image="/images/products/user-web-home.png"
        imageAlt="Punya Perks Enterprise Coalition Portal"
      />

      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-[28px] bg-white p-8 border border-[#EADBC6] space-y-3 shadow-xs">
                <span className="font-body text-xs font-bold text-[#BC3908] block">{p.tag}</span>
                <h3 className="font-display font-bold text-xl text-[#220901]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#220901]/75 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: '4 Regions', label: 'India, UAE, Australia & NZ residency' },
              { metric: '10M+', label: 'Members supported per coalition cell' },
              { metric: 'Zero ETL', label: 'Native Snowflake & Databricks sync' },
              { metric: '24/7', label: 'Dedicated Principal Architect SLA' },
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
              COALITION ARCHITECTURE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#220901]">
              Built for Multi-Brand Groups &amp; Partner Ecosystems
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
        eyebrow="ENTERPRISE FAQ"
        title="Questions conglomerate & coalition leaders ask"
        faqs={faqs}
        helpTitle="Designing a multi-brand coalition programme?"
        helpDescription="Speak with our enterprise solutions architects about clearinghouse settlement and sovereign cloud deployment."
        helpButtonText="Book architecture session"
        helpButtonHref="/demo"
      />

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsEnterprisePage;
