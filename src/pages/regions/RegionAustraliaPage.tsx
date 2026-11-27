import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  MailCheck,
  Server,
  DollarSign,
  FileCheck2,
  Store,
  ArrowRight,
} from 'lucide-react';

export const RegionAustraliaPage: React.FC = () => {
  const complianceHighlights = [
    {
      country: 'AUSTRALIA',
      icon: ShieldCheck,
      title: 'Australian Privacy Principles (APPs)',
      desc: 'Full alignment with the 13 APPs, including strict collection notice requirements, opt-out mechanisms, and transparent data disclosure.',
    },
    {
      country: 'AUSTRALIA',
      icon: MailCheck,
      title: 'Spam Act Commercial Consent',
      desc: 'Explicit opt-in recording, mandatory business sender identification, and functional unsubscribe links honored within statutory timeframes.',
    },
    {
      country: 'AUSTRALIA',
      icon: DollarSign,
      title: 'State Unclaimed-Money Rules',
      desc: 'Automated escheatment tracking and dormancy handling where cash-convertible points meet state treasury thresholds.',
    },
    {
      country: 'AUSTRALIA',
      icon: Server,
      title: 'Sydney AWS Region Cell',
      desc: 'Dedicated database cell hosted in Sydney (ap-southeast-2) with in-country backups and sub-30ms nationwide latency.',
    },
    {
      country: 'NEW ZEALAND',
      icon: FileCheck2,
      title: 'Privacy Act 2020 Compliance',
      desc: 'Information Privacy Principles (IPPs), cross-border data transfer safeguards, and mandatory breach notification workflows.',
    },
    {
      country: 'NEW ZEALAND',
      icon: Store,
      title: 'Shopify & POS Connectors for NZ',
      desc: 'Pre-configured integrations with Lightspeed, Square, Shopify Plus, and local ERPs with native NZD currency support.',
    },
  ];

  const faqs = [
    {
      q: 'Can we operate a combined programme across Australia and New Zealand?',
      a: 'Yes. Punya Perks supports multi-currency ledgers allowing members in Australia to earn and redeem in AUD while members in New Zealand transact in NZD, all under local compliance rules.',
    },
    {
      q: 'Where is customer data stored?',
      a: 'All data for Australia and New Zealand tenants is hosted in our dedicated AWS Sydney region cell with redundant in-region backups and cross-border transfer records.',
    },
    {
      q: 'How does Punya Perks handle the Spam Act and UEMA for messaging?',
      a: 'Our messaging router enforces strict transactional vs. marketing categorization, respects quiet hours, and synchronizes real-time unsubscribe status across email, SMS, and WhatsApp.',
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="LOYALTY PROGRAMME SOFTWARE · AUSTRALIA & NEW ZEALAND"
        title="Three markets. Three rulebooks. One platform."
        description="Australian Privacy Principles, Spam Act consent for promotional messages, state unclaimed-money rules for cash-convertible points, Privacy Act 2020 notices, Unsolicited Electronic Messages Act compliance, and AUD/NZD settlement."
        breadcrumbs={[{ label: 'Solutions', href: '/solutions/retail' }, { label: 'Australia & New Zealand' }]}
        image="/images/products/user-web-home.png"
        imageAlt="Punya Perks Australia & New Zealand Platform"
      />

      {/* Grid Section */}
      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-2">
              REGULATORY & INFRASTRUCTURE MAP
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#220901]">
              Built for Australian and New Zealand Enterprise Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white p-7 sm:p-8 border border-[#EADBC6] shadow-xs hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#BC3908] px-2.5 py-0.5 rounded-full bg-[#F6EFE2] border border-[#EADBC6]">
                      {item.country}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] border border-[#EADBC6] flex items-center justify-center text-[#BC3908]">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#220901]">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#563E37] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <InternalPageFaq
        eyebrow="REGIONAL FAQ"
        title="Frequently asked questions for ANZ operators"
        faqs={faqs}
        helpTitle="Launching across Australia or New Zealand?"
        helpDescription="Speak with a solutions engineer who has deployed loyalty infrastructure in your market."
        helpButtonText="Book ANZ Walkthrough"
        helpButtonHref="/demo"
      />

      {/* Page CTA */}
      <PageCta
        title="Ready to launch compliant loyalty in Australia & NZ?"
        subtitle="ENTERPRISE LOYALTY INFRASTRUCTURE"
        description="Run point ledgers in AUD or NZD with built-in Privacy Act and Spam Act compliance. Request your sandbox walkthrough today."
        buttonText="Talk to an expert"
        buttonHref="/demo"
        secondaryText="Start in sandbox"
        secondaryHref="/start"
      />
    </MainLayout>
  );
};

export default RegionAustraliaPage;
