import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { Link } from 'react-router-dom';
import {
  Mail,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Building2,
  Send,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Enterprise Deployment & Custom SLA',
    teamSize: '50,001–200,000 members',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const locations = [
    {
      city: 'Surat, India',
      address: '517–520, 5th Floor, Homeland City, University Rd, Piplod, Surat 395007',
      email: 'india@punyaperks.com',
      hours: '9:00 AM – 6:30 PM IST',
    },
    {
      city: 'Melbourne, Australia',
      address: '2.03/202 Jells Road, Wheelers Hill & 8 Archer Grove, Rowville, VIC 3178',
      email: 'apac@punyaperks.com',
      hours: '8:30 AM – 5:30 PM AEST',
    },
    {
      city: 'Auckland, New Zealand',
      address: 'Level 2, 221 Ihumatao Road, Mangere, Auckland 2022',
      email: 'nz@punyaperks.com',
      hours: '8:30 AM – 5:00 PM NZST',
    },
    {
      city: 'Dubai, UAE',
      address: 'Dubai Internet City, Building 14, Enterprise Square, Dubai',
      email: 'mena@punyaperks.com',
      hours: '9:00 AM – 6:00 PM GST (Sun–Thu)',
    },
  ];

  const contactFaqs = [
    {
      q: 'How fast does your enterprise sales team respond?',
      a: 'Enterprise inquiries are assigned to a regional solutions engineer within 4 business hours. If you need immediate assistance, email sales@punyaperks.com directly.',
    },
    {
      q: "Can you complete our company's security questionnaire?",
      a: 'Yes. We regularly complete SOC 2, ISO 27001, GDPR, and DPDP Act compliance questionnaires for enterprise clients. Attach or mention your vendor assessment requirements in your message.',
    },
    {
      q: 'Do you offer custom master services agreements (MSAs) and SLAs?',
      a: 'Yes. For high-volume multi-store retail and banking tenants, we provide custom enterprise MSAs, 99.99% ledger uptime SLAs, dedicated solutions pods, and tailored currency settlement terms.',
    },
    {
      q: 'Can we request a private cloud or single-tenant deployment?',
      a: 'We support dedicated single-tenant AWS/Azure instances in Mumbai, Sydney, Frankfurt, and Dubai with customer-managed encryption keys and strict data residency guarantees.',
    },
  ];

  return (
    <MainLayout>
      {/* 1. Hero & Inquiry Form Split Section with Inner Hero Background */}
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
            <span className="text-[#17140F] font-bold">Contact Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 min-w-0 max-w-full">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-3">
                ENTERPRISE SALES & SUPPORT
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.2] text-[#17140F] mb-6">
                Talk to our team.{' '}
                <span className="text-[#B5651A] italic">We reply within 4 hours.</span>
              </h1>
              <p className="font-body text-base sm:text-lg text-[#5B534C] leading-relaxed mb-6">
                Have questions about enterprise loyalty deployment, custom SLAs, volume pricing, or security compliance? Our solutions architects are ready to assist.
              </p>

              {/* Direct Contacts Row */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#5B534C] mb-8 pt-1">
                <a
                  href="mailto:sales@punyaperks.com"
                  className="flex items-center gap-1.5 hover:text-[#B5651A] transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 text-[#B5651A]" />
                  <span>sales@punyaperks.com</span>
                </a>
                <span className="text-[#EBDFC6]">·</span>
                <a
                  href="mailto:security@punyaperks.com"
                  className="flex items-center gap-1.5 hover:text-[#B5651A] transition-colors font-medium"
                >
                  <ShieldCheck className="w-4 h-4 text-[#B5651A]" />
                  <span>security@punyaperks.com</span>
                </a>
              </div>

              {/* Global Presence & Regional Support Quick Grid */}
              <div className="pt-6 border-t border-[#EBDFC6]">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-3.5">
                  GLOBAL PRESENCE & REGIONAL SUPPORT
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs text-[#5B534C]">
                  {locations.map((loc) => (
                    <div key={loc.city} className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#B5651A] shrink-0" />
                      <span className="truncate">{loc.city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Inquiry Form Card */}
            <div className="lg:col-span-7 min-w-0 max-w-full w-full">
              <div className="w-full rounded-2xl border border-[#EBDFC6]/80 bg-white shadow-2xl overflow-hidden text-[#17140F]">
                <div className="p-6 sm:p-8 md:p-10 bg-white">
                  {submitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-14 h-14 rounded-full bg-[#FEF0E1] text-[#B5651A] flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-[#17140F]">
                        Message Received!
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5B534C] max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{formData.name}</strong>. Our enterprise solutions squad has received your inquiry regarding <strong>{formData.inquiryType}</strong> and will reply to <strong>{formData.email}</strong> within 4 business hours.
                      </p>
                      <div className="pt-4 flex items-center justify-center gap-4 text-xs">
                        <Link to="/" className="inline-flex items-center gap-1 font-bold text-[#B5651A] hover:underline">
                          <span>Return to home page</span>
                          <ArrowRight size={13} />
                        </Link>
                        <span className="text-slate-300">·</span>
                        <Link to="/demo" className="font-semibold text-[#847C75] hover:text-[#17140F]">
                          Book live demo instead
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      <div className="mb-2">
                        <h3 className="font-display font-bold text-xl text-[#17140F]">
                          Send us a message
                        </h3>
                        <p className="text-xs text-[#847C75] mt-0.5">
                          Fill out the details below and we will route you to the appropriate specialist.
                        </p>
                      </div>

                      {/* Row 1: Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Your full name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Keyur Mehta"
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EBDFC6] bg-[#FAF6F0] text-[#17140F] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#B5651A] focus:ring-2 focus:ring-[#B5651A]/10"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Work email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="keyur@enterprise.com"
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EBDFC6] bg-[#FAF6F0] text-[#17140F] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#B5651A] focus:ring-2 focus:ring-[#B5651A]/10"
                          />
                        </div>
                      </div>

                      {/* Row 2: Company & Transacting Base */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Company name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Retail Conglomerate Ltd"
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EBDFC6] bg-[#FAF6F0] text-[#17140F] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#B5651A] focus:ring-2 focus:ring-[#B5651A]/10"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Estimated transacting base
                          </label>
                          <select
                            value={formData.teamSize}
                            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EBDFC6] bg-[#FAF6F0] text-[#17140F] focus:bg-white focus:outline-none focus:border-[#B5651A]"
                          >
                            <option value="10,000–50,000 members">10,000–50,000 members</option>
                            <option value="50,001–200,000 members">50,001–200,000 members</option>
                            <option value="200,001–500,000 members">200,001–500,000 members</option>
                            <option value="500,000+ members (Enterprise)">500,000+ members (Enterprise)</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 3: Inquiry Subject */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Inquiry subject *
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EBDFC6] bg-[#FAF6F0] text-[#17140F] focus:bg-white focus:outline-none focus:border-[#B5651A]"
                        >
                          <option value="Enterprise Deployment & Custom SLA">Enterprise Deployment & Custom SLA</option>
                          <option value="Pricing & Volume Discount Inquiry">Pricing & Volume Discount Inquiry</option>
                          <option value="Security & Compliance Questionnaire">Security & Compliance Questionnaire</option>
                          <option value="Partner & Reseller Program">Partner & Reseller Program</option>
                          <option value="General Product Inquiry">General Product Inquiry</option>
                        </select>
                      </div>

                      {/* Row 4: Message */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Your message *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your loyalty setup, retail POS timeline, or specific compliance requirements..."
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EBDFC6] bg-[#FAF6F0] text-[#17140F] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#B5651A] focus:ring-2 focus:ring-[#B5651A]/10 resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-[#B5651A] hover:bg-[#9a5413] text-white font-bold text-xs transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message →</span>
                      </button>

                      <p className="text-[11px] text-slate-500 text-center pt-1">
                        By submitting you agree to our{' '}
                        <Link to="/legal/privacy" className="underline hover:text-[#17140F]">
                          Privacy Policy
                        </Link>
                        . We never share customer data with third parties.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Direct Locations / Regional Hubs Section (Deskmerit Direct Locations Pattern) */}
      <section className="w-full py-16 lg:py-24 border-b border-[#EBDFC6] bg-white font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A]">
            DIRECT LOCATIONS
          </span>
          <h2 className="font-display font-medium text-2xl sm:text-3xl text-[#17140F] mt-1.5">
            Our regional hubs & local support
          </h2>
          <p className="text-sm text-[#5B534C] mt-2">
            Reach out directly to your local desk for regional billing, statutory currency invoicing, and support SLAs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="group rounded-2xl bg-white border border-[#EBDFC6] p-6 shadow-xs hover:border-[#B5651A] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] text-[#17140F] group-hover:bg-[#B5651A] group-hover:text-white flex items-center justify-center transition-colors mb-4 border border-[#EBDFC6]/60">
                  <Building2 className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display font-bold text-base text-[#17140F] group-hover:text-[#B5651A] transition-colors">
                  {loc.city}
                </h3>
                <p className="text-xs text-[#5B534C] mt-1 leading-relaxed">
                  {loc.address}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EBDFC6]/70 space-y-1.5">
                <div className="text-[11px] text-[#847C75] flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#B5651A]" />
                  <span>{loc.hours}</span>
                </div>
                <a
                  href={`mailto:${loc.email}`}
                  className="text-xs font-bold text-[#B5651A] hover:underline block"
                >
                  {loc.email}
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* 3. Frequently Asked Enterprise Questions */}
      <InternalPageFaq
        title="Frequently Asked Enterprise Questions"
        eyebrow="FAQS"
        faqs={contactFaqs}
        helpTitle="Need an immediate architectural response?"
        helpDescription="Our solutions engineers are available across IST, GST, and AEST timezones to review your integration specs."
        helpButtonText="Book live demo instead"
        helpButtonHref="/demo"
      />

      {/* 4. Closing CTA */}
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

export default ContactPage;
