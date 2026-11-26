import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  Lock,
  MapPin,
  Phone,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Building2,
  Users,
  Award,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const beliefs = [
    {
      title: 'Trust first & append-only',
      desc: 'Point balances are financial liabilities. Every earn, burn, multiplier, and expiration is an immutable ledger entry. No manual overrides without dual-authorization audit trails.',
      icon: ShieldCheck,
    },
    {
      title: 'Sub-120ms at the point of sale',
      desc: 'Billing queues at retail cash counters cannot wait for sluggish cloud round-trips. We engineer lightweight local queueing, optimistic validation, and instant POS response.',
      icon: Zap,
    },
    {
      title: 'Your member data stays yours',
      desc: 'Zero cross-tenant surveillance or third-party ad network piggybacking. Strict database-level tenant isolation, regional data residency, and full exportability on demand.',
      icon: Lock,
    },
  ];

  const offices = [
    {
      country: 'India',
      city: 'Surat',
      tag: 'Development Center',
      address: '517–520, 5th Floor, Homeland City, University Rd, Piplod, Surat, Gujarat 395007',
      phone: '+91 97695 63055',
      zone: 'IST Zone (UTC+5:30)',
    },
    {
      country: 'Australia',
      city: 'Melbourne',
      tag: 'Regional Office',
      address: '2.03/202 Jells Road, Wheelers Hill & 8 Archer Grove, Rowville, VIC 3178',
      phone: '+61 468 016 333',
      zone: 'AEST Zone (UTC+10)',
    },
    {
      country: 'New Zealand',
      city: 'Auckland',
      tag: 'Regional Office',
      address: 'Level 2, 221 Ihumatao Road, Mangere, Auckland 2022',
      phone: '+61 468 016 333',
      zone: 'NZST Zone (UTC+12)',
    },
    {
      country: 'United Arab Emirates',
      city: 'Dubai',
      tag: 'Middle East Operations',
      address: 'Dubai Internet City, Building 14, Enterprise Square, Dubai',
      phone: '+971 4 429 8800',
      zone: 'GST Zone (UTC+4)',
    },
  ];

  const teamMembers = [
    {
      name: 'Keyur Mehta',
      role: 'Managing Director',
      image: '/images/team/keyur-mehta.jpg',
    },
    {
      name: 'Dishant Mehta',
      role: 'Chief Technology Officer',
      image: '/images/team/dishant-mehta.jpg',
    },
    {
      name: 'Zil Mehta',
      role: 'Sr. Project Manager',
      image: '/images/team/zil-mehta.jpg',
    },
    {
      name: 'Sohail Khan',
      role: 'Head of Strategy and Growth',
      image: '/images/team/sohail-khan.jpg',
    },
    {
      name: 'Anshika Mishra',
      role: 'Project Manager',
      image: '/images/team/anshika-mishra.jpg',
    },
    {
      name: 'Shivani Mehta',
      role: 'Technical Project Manager',
      image: '/images/team/shivani-mehta.jpg',
    },
    {
      name: 'Himali Jaiswal',
      role: 'Lead – Account Management',
      image: '/images/team/himali-jaiswal.jpg',
    },
    {
      name: 'Shashi Gupta',
      role: 'Human Resource Manager',
      image: '/images/team/shashi-gupta.jpg',
    },
  ];

  const aboutFaqs = [
    {
      q: "What is Punya Perks' founding mission and philosophy?",
      a: 'Punya Perks was founded on the conviction that retail and banking enterprises deserve modern, auditable loyalty software without brittle legacy monoliths or vendor lock-in. We build high-trust loyalty infrastructure that operates on immutable append-only ledgers.',
    },
    {
      q: 'What is the architectural vision behind Punya Perks?',
      a: 'Punya Perks is engineered as an enterprise-grade digital loyalty operating system. After delivering transaction clearing engines and custom loyalty ledgers for major international retailers across APAC, we productized this technology into the dedicated Punya Perks platform.',
    },
    {
      q: 'Where is our customer data and transaction history stored?',
      a: 'You can choose your primary data region based on local compliance needs: AWS Mumbai/Hyderabad (India DPDP Act), Sydney/Melbourne (Australia Privacy Act), or Frankfurt (EU GDPR). All records are encrypted at rest with AES-256 and in transit with TLS 1.3.',
    },
    {
      q: 'Can we visit your offices or request on-site implementation workshops?',
      a: 'Yes. Our solutions engineering pods in Surat, Melbourne, Auckland, and Dubai regularly conduct on-site discovery workshops, architecture audits, and live POS integration sprints for enterprise partners.',
    },
  ];

  return (
    <MainLayout>
      {/* 1. Hero Section (Deskmerit Dark Gradient Architecture) */}
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
            <span className="text-[#17140F] font-bold">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-3">
                ABOUT PUNYA PERKS
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.2] text-[#17140F] mb-6">
                We believe loyalty ledgers should be honest —{' '}
                <span className="text-[#B5651A] italic">and fair to both sides.</span>
              </h1>
              <p className="font-body text-base sm:text-lg text-[#5B534C] leading-relaxed max-w-xl mb-8">
                Punya Perks is engineered with append-only ledger precision, serving multi-brand retail conglomerates, banking institutions, and e-commerce leaders globally.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-row items-center gap-3 sm:gap-4 pt-1">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap shrink-0 group"
                >
                  <span>Request a demo</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/platform"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#17140F] font-bold text-xs sm:text-sm border border-[#EBDFC6] transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
                >
                  <span>Explore our platform</span>
                </Link>
              </div>
            </div>

            {/* Right Media Preview Card */}
            <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EBDFC6] aspect-[16/10] sm:aspect-[4/3] group bg-[#FAF5ED] w-full max-w-full">
                <img
                  src="/images/platform-portal-tablet.png"
                  alt="Punya Perks Global Platform Console"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono flex items-center justify-between">
                  <span className="bg-[#B5651A]/90 px-2.5 py-1 rounded-md backdrop-blur-xs shadow-xs">
                    Multi-Tenant Loyalty Console
                  </span>
                  <span className="text-white flex items-center gap-1 font-bold">
                    <ShieldCheck size={13} />
                    Verified Ledger v2.4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy / What We Believe Section (Deskmerit 3-Pillar Pattern) */}
      <section className="py-20 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-2">
              OUR PHILOSOPHY
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#17140F] tracking-tight">
              What we believe
            </h2>
            <p className="text-sm text-[#847C75] mt-3 leading-relaxed">
              Guiding architectural principles behind every ledger event, API contract, and point redemption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beliefs.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="p-8 rounded-2xl bg-white border border-[#EBDFC6] shadow-xs hover:border-[#B5651A] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6] text-[#17140F] group-hover:bg-[#B5651A] group-hover:border-[#B5651A] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-200 shadow-xs">
                      <Icon className="w-5 h-5 transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#17140F] group-hover:text-[#B5651A] transition-colors mb-3">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Executive Leadership & Core Team Section (Deskmerit 8-Member Grid) */}
      <section className="py-20 bg-[#FAF5ED] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-2">
              EXECUTIVE LEADERSHIP & CORE TEAM
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#17140F] tracking-tight">
              The team building high-trust software
            </h2>
            <p className="text-sm text-[#5B534C] mt-3 leading-relaxed">
              Senior systems engineers, product designers, and client success leaders committed to ethical proof of work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group flex flex-col">
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#FAF5ED] border border-[#EBDFC6] group-hover:border-[#B5651A] group-hover:shadow-md transition-all duration-300 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3.5">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B534C] mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Footprint Section (Deskmerit Across the Globe) */}
      <section className="py-20 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-2">
              GLOBAL FOOTPRINT
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#17140F] tracking-tight">
              Punya Perks Across the Globe
            </h2>
            <p className="text-sm sm:text-base text-[#5B534C] mt-3 leading-relaxed">
              Operating centralized engineering powerhouses with regional client relationship hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((off) => (
              <div
                key={off.country + off.city}
                className="p-7 rounded-2xl bg-white border border-[#EBDFC6] hover:border-[#B5651A] transition-all hover:shadow-md shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF5ED] border border-[#EBDFC6] flex items-center justify-center text-[#B5651A] group-hover:scale-110 transition-transform shadow-2xs">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold text-base text-[#17140F] group-hover:text-[#B5651A] transition-colors">
                        {off.country}
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FEF0E1] text-[#B5651A] border border-[#F6DECA] shadow-2xs">
                      {off.tag}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#17140F] mb-1">
                    {off.city} Hub
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#5B534C] leading-relaxed mb-6 font-normal">
                    {off.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBDFC6]/80 flex items-center justify-between text-xs text-[#17140F]">
                  <a
                    href={`tel:${off.phone.replace(/[^+\d]/g, '')}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#17140F] group-hover:text-[#B5651A] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B5651A]" />
                    <span>{off.phone}</span>
                  </a>
                  <span className="text-[11px] text-[#B5651A] font-mono font-medium">
                    {off.zone.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Company & Partnership FAQs (Deskmerit Style FAQ with Partner Box) */}
      <InternalPageFaq
        title="Company & Partnership FAQs"
        eyebrow="FAQS"
        faqs={aboutFaqs}
        helpTitle="Looking to Partner with Punya Perks?"
        helpDescription="Whether you are an MSP reseller, agency, or retail technology ISV, connect with our alliances team to explore partnership tiers."
        helpButtonText="Contact our team"
        helpButtonHref="/contact"
      />

      {/* 6. Closing Enterprise Call to Action */}
      <PageCta
        title="Join forward-thinking brands operating on Punya Perks."
        subtitle="ENTERPRISE LOYALTY INFRASTRUCTURE"
        description="Whether you run 10 physical stores or 10,000 POS terminals nationwide, discover how Punya Perks unifies your loyalty stack."
        buttonText="Book a platform walkthrough"
        buttonHref="/demo"
        secondaryText="View open positions"
        secondaryHref="/careers"
      />
    </MainLayout>
  );
};

export default AboutPage;
