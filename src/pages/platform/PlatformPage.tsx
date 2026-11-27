import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import {
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Globe,
  Layers,
  ArrowRight,
  Lock,
} from 'lucide-react';

export const PlatformPage: React.FC = () => {
  const pillars = [
    {
      icon: Database,
      title: 'Tenant Isolation',
      desc: 'Schema-per-tenant isolation with individual tenant encryption keys, preventing cross-tenant data leaks and noisy neighbor impact.',
      badge: 'SECURITY',
    },
    {
      icon: Server,
      title: 'Dedicated Bank Cells',
      desc: 'Physically isolated VPCs and dedicated database clusters in local AWS regions for regulated banking and fintech institutions.',
      badge: 'ENTERPRISE',
    },
    {
      icon: Cpu,
      title: '< 120ms Rule SLA',
      desc: 'High-performance in-memory rule engine evaluates multi-tier basket multipliers and SKU exclusions at physical retail line speed.',
      badge: 'PERFORMANCE',
    },
    {
      icon: ShieldCheck,
      title: 'Append-Only Journal',
      desc: 'Cryptographic log verification ensures every transaction is tamper-evident and can be reconciled down to the individual cent.',
      badge: 'AUDITABILITY',
    },
  ];

  const platformFaqs = [
    {
      q: 'Can a bank or healthcare brand host Punya Perks in a dedicated sovereign cloud?',
      a: 'Yes. For enterprise and financial clients, we deploy dedicated sovereign cells in AWS Mumbai, Sydney, or Dublin with dedicated KMS keys, custom VPC peering, and zero cross-tenant infrastructure.',
    },
    {
      q: 'How does Punya Perks maintain < 120ms latency during peak holiday flash sales?',
      a: 'Our core transaction processing engine is stateless and horizontally scalable, paired with distributed in-memory cache clusters and optimized PostgreSQL append-only journals. Basket evaluation happens in sub-30ms.',
    },
    {
      q: 'What disaster recovery and backup guarantees are provided?',
      a: 'We maintain continuous WAL streaming replication across availability zones with 5-minute RPO and < 15-minute RTO. Nightly automated cryptographic snapshot verification is standard on all tiers.',
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="ENTERPRISE PLATFORM"
        title="Multi-tenant by design. Dedicated when you need it."
        description="Schema-per-tenant isolation on shared cloud infrastructure for high-growth brands; physically isolated cloud cells for regulated banks and enterprise retail conglomerates."
        breadcrumbs={[{ label: 'Platform' }]}
        primaryCtaText="Read security brief"
        primaryCtaHref="/platform/security"
        secondaryCtaText="Talk to an architect"
        secondaryCtaHref="/demo"
        image="/images/products/user-web-home.png"
        imageAlt="Punya Perks Architecture & Member Portal"
      />

      {/* 4 Architectural Cards */}
      <section className="py-16 sm:py-24 bg-[#FAF5ED] border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-12">
            <span className="font-body text-[11px] font-bold text-[#8E5B13] tracking-[0.16em] uppercase block mb-2">
              FOUNDATIONAL INFRASTRUCTURE
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#14100B]">
              Engineered for zero downtime and financial precision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-7 border border-[#E2D3B5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF5ED] text-[#8E5B13] flex items-center justify-center mb-5 group-hover:bg-[#8E5B13] group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="font-body text-[10px] font-bold text-[#8E5B13] bg-[#F4E9D2] px-2.5 py-0.5 rounded-full border border-[#8E5B13]/20 uppercase">
                      {item.badge}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#14100B] mt-3 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-[#E2D3B5]/60">
                    <a
                      href="/platform/security"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8E5B13] hover:text-[#6E440B] transition-colors"
                    >
                      <span>Read security spec</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Split FAQ Section */}
      <InternalPageFaq
        title="Enterprise platform & deployment questions"
        eyebrow="PLATFORM FAQ"
        faqs={platformFaqs}
        helpTitle="Have complex multi-market data residency needs?"
        helpDescription="Speak directly with our Chief Architect to design VPC topologies, HSM key rotations, and isolated data residency cells."
        helpButtonText="Book technical consultation"
        helpButtonHref="/demo"
      />

      {/* Modern Dark Gradient CTA Band */}
      <PageCta
        title="Review our enterprise architecture & compliance brief."
        subtitle="ENTERPRISE INFRASTRUCTURE"
        description="Learn how our append-only double-entry ledger protects point liabilities while scaling across millions of daily billing transactions."
        buttonText="Schedule architecture review"
        buttonHref="/demo"
        secondaryText="View security & compliance"
        secondaryHref="/platform/security"
      />
    </MainLayout>
  );
};
export default PlatformPage;
