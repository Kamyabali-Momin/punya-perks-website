import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const values = [
    {
      emoji: '🌍',
      title: 'Remote-First & Async',
      desc: 'We judge outcomes, not green status dots. Work when and where you are most productive across flexible hours.',
    },
    {
      emoji: '🦀',
      title: 'High Craft Standards',
      desc: 'Rust & Go on the transaction broker, TypeScript on the web, robust event streaming. We care deeply about sub-120ms interactions.',
    },
    {
      emoji: '🤝',
      title: 'Ethical Integrity',
      desc: "We never build features we wouldn't want managing our own personal payment accounts or member balances.",
    },
  ];

  const openings = [
    {
      title: 'Senior Distributed Systems Engineer (Rust / Go)',
      dept: 'Platform Core',
      location: 'Surat or Remote (India / APAC)',
      type: 'Full-Time',
      desc: 'Optimize Punya Perks append-only ledger, sub-120ms POS syncing engine, and high-concurrency event brokers handling millions of daily transactions.',
    },
    {
      title: 'Staff Full-Stack Engineer (React & TypeScript)',
      dept: 'Web & Analytics Platform',
      location: 'Bengaluru, Pune or Remote',
      type: 'Full-Time',
      desc: 'Build lightning-fast loyalty consoles, real-time financial simulation tools, and responsive merchant onboarding dashboards.',
    },
    {
      title: 'Integration Solutions Architect',
      dept: 'Customer Engineering',
      location: 'Dubai or Mumbai',
      type: 'Full-Time',
      desc: 'Design and deploy mission-critical integrations connecting Punya Perks with enterprise ERPs, cloud POS hardware, and core banking ledgers.',
    },
    {
      title: 'Enterprise Customer Success Lead',
      dept: 'Growth & Alliances',
      location: 'Melbourne or Sydney',
      type: 'Full-Time',
      desc: 'Partner with retail CTOs, VP Loyalty, and finance leaders rolling out multi-brand reward programs across 500+ store networks.',
    },
  ];

  const careersFaqs = [
    {
      q: 'What does the engineering interview process look like?',
      a: 'We respect your time. Our typical process includes an initial 30-minute introductory conversation, a practical system design or coding exercise modeled on real platform challenges, and a culture alignment chat with leadership. No arbitrary trick puzzles.',
    },
    {
      q: 'Are all roles truly remote-friendly?',
      a: 'Yes. Most of our engineering, customer success, and product roles are remote-first across India, UAE, and Australia/NZ time zones. We also maintain physical engineering hubs in Surat and Melbourne if you prefer on-site collaboration.',
    },
    {
      q: 'What equipment and home-office allowance do you offer?',
      a: 'Every full-time team member receives top-tier hardware (Apple MacBook Pro M-series or high-spec Linux workstation) plus a dedicated home office stipend to set up an ergonomic workstation.',
    },
  ];

  return (
    <MainLayout>
      {/* 1. Hero Section with Inner Hero Background */}
      <section
        className="relative w-full border-b border-[#E2D3B5] pt-10 pb-16 lg:pt-14 lg:pb-24 font-body overflow-hidden text-[#14100B]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(142, 91, 19, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(142, 91, 19, 0.045) 1px, transparent 1px)",
          backgroundColor: "#F7F1E4", backgroundSize: "56px 56px",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="text-xs text-[#847C75] font-medium flex items-center gap-2 mb-6">
            <Link to="/" className="hover:text-[#8E5B13] transition-colors">
              Home
            </Link>
            <span className="text-[#847C75]/60">/</span>
            <span className="text-[#847C75]">Company</span>
            <span className="text-[#847C75]/60">/</span>
            <span className="text-[#14100B] font-bold">Careers</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#8E5B13] mb-3">
                CAREERS AT PUNYA PERKS
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.2] text-[#14100B] mb-6">
                Build software that respects{' '}
                <span className="text-[#8E5B13] italic">the craft of knowledge work.</span>
              </h1>
              <p className="font-body text-base sm:text-lg text-[#5B534C] leading-relaxed max-w-xl mb-8">
                We are a distributed engineering and product team solving one of the most fraught challenges in commerce: honest, auditable customer loyalty without fragile legacy monoliths.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <a
                  href="#open-positions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#8E5B13] hover:bg-[#6E440B] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap shrink-0 group"
                >
                  <span>View Open Positions</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#culture"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#14100B] font-bold text-xs sm:text-sm border border-[#E2D3B5] transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
                >
                  <span>Learn about our culture</span>
                </a>
              </div>
            </div>

            {/* Right Media Preview Card */}
            <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2D3B5] aspect-[16/10] sm:aspect-[4/3] group bg-[#FAF5ED] w-full max-w-full">
                <img
                  src="/images/products/user-web-campaigns.png"
                  alt="Punya Perks Collaborative Product Experience"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono flex items-center justify-between">
                  <span className="bg-[#8E5B13]/90 px-2.5 py-1 rounded-md backdrop-blur-xs shadow-xs">
                    Engineering Culture & Pods
                  </span>
                  <span className="text-white flex items-center gap-1 font-bold">
                    <CheckCircle2 size={13} />
                    Remote-First
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Values & Culture (Deskmerit 3-Card Pattern) */}
      <section id="culture" className="py-16 sm:py-20 bg-white border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-7 sm:p-8 rounded-2xl bg-[#FAF5ED]/50 border border-[#E2D3B5] shadow-xs hover:border-[#8E5B13] hover:bg-white hover:shadow-md transition-all group"
              >
                <span className="text-3xl mb-4 block">{v.emoji}</span>
                <h3 className="font-display font-bold text-lg text-[#14100B] group-hover:text-[#8E5B13] transition-colors mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Positions Section (Deskmerit Jobs Pattern) */}
      <section id="open-positions" className="py-20 bg-[#FAF5ED] border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8E5B13] mb-2 block">
              JOIN OUR ENGINEERING TEAM
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#14100B] tracking-tight">
              Open Positions
            </h2>
            <p className="text-sm text-[#5B534C] mt-2 leading-relaxed">
              Explore current engineering, customer architecture, and growth openings across our distributed teams.
            </p>
          </div>

          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E2D3B5] hover:border-[#8E5B13] transition-all shadow-xs hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#14100B] group-hover:text-[#8E5B13] transition-colors">
                      {job.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F4E9D2] text-[#8E5B13] border border-[#F6DECA] text-[10px] font-mono font-bold">
                      {job.type}
                    </span>
                  </div>
                  <div className="text-xs text-[#847C75] font-mono">
                    {job.dept} · {job.location}
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed pt-1 max-w-2xl">
                    {job.desc}
                  </p>
                </div>

                <a
                  href={`mailto:careers@punyaperks.com?subject=Application: ${encodeURIComponent(job.title)}`}
                  className="px-5 py-2.5 rounded-xl bg-[#14100B] hover:bg-[#8E5B13] text-white font-bold text-xs shrink-0 transition-all flex items-center justify-center gap-1.5 self-start md:self-center cursor-pointer shadow-xs"
                >
                  <span>Apply for role</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Careers FAQs */}
      <InternalPageFaq
        title="Careers & Culture FAQs"
        eyebrow="FAQS"
        faqs={careersFaqs}
        helpTitle="Have a Question About Engineering Roles?"
        helpDescription="Reach out directly to our talent team for confidential inquiries regarding leadership and specialized engineering opportunities."
        helpButtonText="Email our team"
        helpButtonHref="mailto:careers@punyaperks.com"
      />

      {/* 5. Closing CTA */}
      <PageCta
        title="Join forward-thinking brands operating on Punya Perks."
        subtitle="ENTERPRISE LOYALTY INFRASTRUCTURE"
        description="Whether you run 10 physical stores or 10,000 POS terminals nationwide, discover how Punya Perks unifies your loyalty stack."
        buttonText="Book a platform walkthrough"
        buttonHref="/demo"
        secondaryText="View open positions"
        secondaryHref="#open-positions"
      />
    </MainLayout>
  );
};

export default CareersPage;
