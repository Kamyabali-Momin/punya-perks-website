import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';

export const PartnersPage: React.FC = () => {
  const tracks = [
    {
      name: 'White-Label & Reseller',
      desc: 'Deliver Punya Perks under your own agency brand with custom domain URL, your logo, and unified client billing.',
      benefit: '30% recurring margin',
      features: [
        'Custom white-label domain & SSL certificates',
        'Branded client onboarding & merchant portal',
        'Multi-tenant master administration console',
        'Dedicated reseller partner success manager',
      ],
      href: '/partners/apply',
    },
    {
      name: 'MSP & Systems Integrator',
      desc: 'Standardize client loyalty and transaction reconciliation across all your enterprise retail and banking transformation contracts.',
      benefit: 'Volume tiered discounts',
      features: [
        'Consolidated partner billing & unified invoicing',
        'Centralized multi-client tenant management',
        'Priority 24/7 technical support & 99.99% API SLAs',
        'Co-selling collateral, training & certification',
      ],
      href: '/partners/apply',
    },
    {
      name: 'Integration & ISV Partner',
      desc: 'Build native bidirectional plugins connecting Punya Perks with POS hardware, ERP, e-commerce, or payment gateways.',
      benefit: 'Ecosystem co-marketing',
      features: [
        'Dedicated developer sandbox & mock event feeds',
        'Featured listing in official Partner Directory',
        'Joint press releases, webinars & launch case studies',
        'Direct architectural access to core engineering',
      ],
      href: '/partners/apply',
    },
  ];

  const partnerFaqs = [
    {
      q: 'How does the reseller and agency revenue-share model work?',
      a: 'Reseller partners receive up to 30% recurring monthly margin on all subscription and transaction tiers for the lifetime of every onboarded merchant account. Margins scale as aggregate transaction volume increases.',
    },
    {
      q: 'Can we rebrand the member application and merchant portal?',
      a: 'Yes. Our White-Label tier includes complete styling freedom, custom DNS domains (e.g. loyalty.youragency.com), custom transactional email/SMS sender IDs, and branded mobile apps published under your enterprise developer accounts.',
    },
    {
      q: 'What developer tools and support do ISV partners receive?',
      a: 'ISVs get full access to our sandbox environment with pre-populated dummy transaction streams, automated webhook test runners, comprehensive Postman collections, and a dedicated Slack channel with our core systems architects.',
    },
  ];

  return (
    <MainLayout>
      {/* 1. Hero Section with Inner Hero Background */}
      <section
        className="relative w-full border-b border-[#EBDFC6] pt-10 pb-16 lg:pt-14 lg:pb-24 font-body bg-cover bg-bottom bg-no-repeat overflow-hidden text-[#17140F]"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: "#FAF3E8",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="text-xs text-[#847C75] font-medium flex items-center gap-2 mb-6">
            <Link to="/" className="hover:text-[#B5651A] transition-colors">
              Home
            </Link>
            <span className="text-[#847C75]/60">/</span>
            <span className="text-[#847C75]">Company</span>
            <span className="text-[#847C75]/60">/</span>
            <span className="text-[#17140F] font-bold">Partners</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-3">
                PARTNER ECOSYSTEM
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.2] text-[#17140F] mb-6">
                Grow your consulting practice with{' '}
                <span className="text-[#B5651A] italic">transparent loyalty infrastructure.</span>
              </h1>
              <p className="font-body text-base sm:text-lg text-[#5B534C] leading-relaxed max-w-xl mb-8">
                Whether you want to white-label Punya Perks under your agency domain, earn recurring referral commissions, or build custom POS & ERP integrations, we give partners high margins and dedicated engineering backing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <Link
                  to="/partners/apply"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap shrink-0 group"
                >
                  <span>Apply as Partner</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#partner-tracks"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#17140F] font-bold text-xs sm:text-sm border border-[#EBDFC6] transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
                >
                  <span>Explore partner tracks</span>
                </a>
              </div>
            </div>

            {/* Right Media Preview Card */}
            <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EBDFC6] aspect-[16/10] sm:aspect-[4/3] group bg-[#FAF5ED] w-full max-w-full">
                <img
                  src="/images/products/user-web-redeem.png"
                  alt="Punya Perks Global Partner Portal"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono flex items-center justify-between">
                  <span className="bg-[#B5651A]/90 px-2.5 py-1 rounded-md backdrop-blur-xs shadow-xs">
                    Multi-Client Tenant Console
                  </span>
                  <span className="text-white flex items-center gap-1 font-bold">
                    <Sparkles size={13} />
                    Tiered Rev-Share Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3-Tier Partner Tracks Section (Deskmerit Partner Grid Pattern) */}
      <section id="partner-tracks" className="py-20 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-2">
              PARTNERSHIP TIERS
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#17140F] tracking-tight">
              Choose your partner engagement model
            </h2>
            <p className="text-sm text-[#847C75] mt-3 leading-relaxed">
              Designed for digital agencies, MSPs, system integrators, and independent software vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-2xl bg-[#FAF5ED]/50 border border-[#EBDFC6] shadow-xs hover:border-[#B5651A] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FEF0E1] text-[#B5651A] border border-[#F6DECA] inline-block mb-4">
                    {t.benefit}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#17140F] group-hover:text-[#B5651A] transition-colors mb-3">
                    {t.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed mb-6">
                    {t.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#EBDFC6]/80 mb-8">
                    {t.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-xs text-[#17140F]">
                        <Check size={14} className="text-[#1B8756] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={t.href}
                  className="w-full py-3 px-4 rounded-xl bg-[#17140F] group-hover:bg-[#B5651A] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Apply for this tier</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Partner FAQs Section */}
      <InternalPageFaq
        title="Partner & Reseller FAQs"
        eyebrow="FAQS"
        faqs={partnerFaqs}
        helpTitle="Looking for Custom Alliances or White-Label Tiers?"
        helpDescription="Speak directly with our partnership director regarding master licensing agreements and co-marketing programs."
        helpButtonText="Schedule partner call"
        helpButtonHref="/contact"
      />

      {/* 4. Closing Enterprise CTA */}
      <PageCta
        title="Join forward-thinking brands operating on Punya Perks."
        subtitle="ENTERPRISE LOYALTY INFRASTRUCTURE"
        description="Whether you run 10 physical stores or 10,000 POS terminals nationwide, discover how Punya Perks unifies your loyalty stack."
        buttonText="Apply to partner program"
        buttonHref="/partners/apply"
        secondaryText="Explore platform docs"
        secondaryHref="/platform"
      />
    </MainLayout>
  );
};

export default PartnersPage;
