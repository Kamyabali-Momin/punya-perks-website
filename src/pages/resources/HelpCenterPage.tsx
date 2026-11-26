import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { 
  Search, 
  BookOpen, 
  LifeBuoy, 
  MessageSquare, 
  Terminal, 
  ShieldCheck, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink,
  ChevronDown,
  Sparkles
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const HelpCenterPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics', count: 18 },
    { id: 'setup', name: 'Quickstart & Onboarding', count: 4, icon: BookOpen },
    { id: 'pos', name: 'POS & Integrations', count: 4, icon: Terminal },
    { id: 'whatsapp', name: 'WhatsApp & Member Bot', count: 3, icon: MessageSquare },
    { id: 'ledger', name: 'Ledger & Calculations', count: 4, icon: CreditCard },
    { id: 'security', name: 'Compliance & Security', count: 3, icon: ShieldCheck },
  ];

  const faqs: FaqItem[] = [
    {
      category: 'setup',
      question: 'How fast can we launch our loyalty program on Punya Perks?',
      answer: 'Standard cloud sandbox setup takes under 15 minutes. Pre-built POS connectors (Pine Labs, Shopify, Oracle Micros, Petpooja) typically take 2-5 business days for testing and pilot store rollout. Full multi-tier programs go live in under 2 weeks.'
    },
    {
      category: 'setup',
      question: 'Can we import historical points and tiers from an existing platform?',
      answer: 'Yes. Punya Perks provides a cryptographically audited Migration Tool. We accept CSV/JSON snapshots, reconcile balances into our immutable double-entry ledger, and notify members with personalized welcome messages via WhatsApp or SMS.'
    },
    {
      category: 'pos',
      question: 'How does POS offline fallback work during network drops?',
      answer: 'Our edge SDK buffers member scans and purchase events locally in encrypted SQLite storage. As soon as POS internet connectivity restores, events are synced with sequential timestamps to guarantee zero lost points or double-redemptions.'
    },
    {
      category: 'pos',
      question: 'Do you support multi-currency points across India, UAE, and Australia?',
      answer: 'Yes. Punya Perks natively supports multi-region currency ledgers (INR, AED, AUD, NZD, USD) with dynamic FX conversion rates, regional tax compliance (GST, VAT), and sovereign data residency in AWS Mumbai, UAE, and Sydney.'
    },
    {
      category: 'whatsapp',
      question: 'What is required to verify our WhatsApp Business API account for loyalty?',
      answer: 'You only need a verified Meta Business Manager account and a dedicated phone number. Punya Perks handles the official WhatsApp Cloud API integration, template message approvals, and 2-way conversational interactive flows.'
    },
    {
      category: 'whatsapp',
      question: 'How do customers redeem points inside WhatsApp without downloading an app?',
      answer: 'Customers scan a QR at checkout or ping "Hi" on WhatsApp. Our bot displays real-time points balance, available discount vouchers, and generates an expiring single-use 6-digit OTP or dynamic QR code that the cashier scans directly.'
    },
    {
      category: 'ledger',
      question: 'Why does Punya Perks use a double-entry ledger instead of a simple database balance?',
      answer: 'A simple balance field is vulnerable to race conditions, fraud, and audit failure. Our append-only immutable ledger records debit/credit entries for every earn, burn, transfer, and expiry, making it 100% auditable by statutory chartered accountants.'
    },
    {
      category: 'ledger',
      question: 'How does point expiration work, and are reminder notices automated?',
      answer: 'You can configure rolling expiry (e.g. 12 months after last purchase) or fixed calendar expiry. Automated D-30 and D-7 reminder messages trigger through WhatsApp and email to drive last-minute store footfall and reduce unredeemed liability.'
    },
    {
      category: 'security',
      question: 'Is Punya Perks compliant with India DPDP Act and Australia Privacy Act 1988?',
      answer: 'Yes. We are SOC 2 Type II certified, ISO 27001 compliant, and provide native regional data isolation with complete Right-to-be-Forgotten (DSR) automated workflows.'
    },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesQuery = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <MainLayout>
      {/* Hero Section matching Site Specification */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-[#EBDFC6] bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: '#FAF3E8',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-[#E8DCC9] shadow-xs mb-6">
            <LifeBuoy className="w-4 h-4 text-[#B5651A]" />
            <span className="font-mono text-[11px] font-bold text-[#17140F] tracking-wide uppercase">
              Help Centre & Knowledge Base
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-[#17140F] tracking-tight max-w-4xl mx-auto leading-[1.12]">
            How can we help your loyalty team succeed today?
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#5B534C] max-w-2xl mx-auto font-body leading-relaxed">
            Search developer documentation, POS integration guides, double-entry ledger audits, and live operational troubleshooting.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-2xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-[#8C827A] absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search keywords: POS sync, WhatsApp OTP, ledger audit, points expiry..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white border-2 border-[#E8DCC9] text-base text-[#17140F] placeholder-[#8C827A] outline-none shadow-md focus:border-[#B5651A] focus:ring-2 focus:ring-[#B5651A]/20 transition-all font-body"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-xs font-semibold text-[#8C827A] hover:text-[#17140F] bg-[#FAF3E8] px-2.5 py-1 rounded-full cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-[#5B534C]">
              <span className="font-medium text-[#17140F]">Popular queries:</span>
              <button onClick={() => setSearchQuery('POS offline')} className="underline hover:text-[#B5651A] cursor-pointer">POS offline</button>
              <span>·</span>
              <button onClick={() => setSearchQuery('WhatsApp OTP')} className="underline hover:text-[#B5651A] cursor-pointer">WhatsApp OTP</button>
              <span>·</span>
              <button onClick={() => setSearchQuery('ledger')} className="underline hover:text-[#B5651A] cursor-pointer">Double-entry ledger</button>
              <span>·</span>
              <button onClick={() => setSearchQuery('DPDP Act')} className="underline hover:text-[#B5651A] cursor-pointer">DPDP compliance</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          
          {/* Quick Category Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {categories.map(cat => {
              const Icon = cat.icon || Sparkles;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between h-28 ${
                    isActive
                      ? 'bg-white border-[#B5651A] shadow-md ring-1 ring-[#B5651A]'
                      : 'bg-white/80 border-[#E8DCC9] hover:bg-white hover:border-[#B5651A]/40'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#B5651A]' : 'text-[#8C827A]'}`} />
                  <div>
                    <div className="text-xs font-bold text-[#17140F] leading-tight">{cat.name}</div>
                    <div className="text-[11px] text-[#8C827A] mt-0.5">{cat.count} articles</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Grid Layout: FAQs + Support Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* FAQ Accordion List (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EBDFC6]">
                <h2 className="font-display font-bold text-xl text-[#17140F]">
                  Frequently Answered Questions
                </h2>
                <span className="text-xs text-[#8C827A] font-mono">
                  Showing {filteredFaqs.length} results
                </span>
              </div>

              {filteredFaqs.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-[#E8DCC9]">
                  <HelpCircle className="w-10 h-10 text-[#8C827A] mx-auto mb-3" />
                  <p className="text-[#17140F] font-bold">No articles match "{searchQuery}"</p>
                  <p className="text-xs text-[#5B534C] mt-1">Try another keyword or talk to our live support engineers.</p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="mt-4 px-4 py-2 bg-[#17140F] text-white rounded-full text-xs font-semibold cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-[#EBDFC6] border-y border-[#EBDFC6]">
                  {filteredFaqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="py-5 sm:py-5.5 transition-colors">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                        >
                          <span className="font-body font-semibold text-base sm:text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-snug">
                            {faq.question}
                          </span>
                          <span className="shrink-0 w-7 h-7 rounded-full bg-[#FAF6F0] border border-[#EBDFC6] flex items-center justify-center text-[#17140F] group-hover:border-[#B5651A]/40 transition-all">
                            <ChevronDown
                              size={15}
                              className={`transition-transform duration-300 ease-in-out ${
                                isOpen ? 'rotate-180 text-[#B5651A]' : 'text-[#847C75]'
                              }`}
                            />
                          </span>
                        </button>
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-xs sm:text-[13.5px] text-[#5B534C] leading-relaxed pr-6 font-body">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Developer Documentation Callout */}
              <div className="relative overflow-hidden mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#17140F] via-[#241A13] to-[#17140F] border border-[#3E2C20] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="absolute top-0 right-1/3 w-48 h-48 bg-[#B5651A]/15 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="font-mono text-xs font-semibold text-[#D9822B] uppercase tracking-wider mb-1.5">
                    API & Webhook Docs
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#FAF3E8] tracking-tight">
                    Looking for REST APIs & SDKs?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D5C7B7] mt-1.5 max-w-lg leading-relaxed font-body">
                    Access our interactive Postman collection, OpenAPI 3.1 specifications, rate limit policies, and webhook verification code samples.
                  </p>
                </div>
                <a
                  href="/developers"
                  className="relative z-10 px-5 py-2.5 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white text-xs font-semibold transition-all shrink-0 inline-flex items-center gap-2 shadow-sm hover:scale-105 cursor-pointer font-body"
                >
                  <span>Visit Developer Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Assistance Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Live Support Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8DCC9] shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF3E8] border border-[#E8DCC9] flex items-center justify-center text-[#B5651A]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#17140F]">Need human support?</h3>
                  <p className="text-xs text-[#5B534C] mt-1 leading-relaxed">
                    Our technical account managers and solution architects are available across IST, GST, and AEST timezones.
                  </p>
                </div>

                <div className="space-y-2 text-xs pt-2 border-t border-[#EBDFC6]">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#8C827A]">Enterprise SLA</span>
                    <span className="font-semibold text-[#17140F]">&lt; 15 min response</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#8C827A]">Growth Plan SLA</span>
                    <span className="font-semibold text-[#17140F]">&lt; 2 hour response</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#8C827A]">Direct Support</span>
                    <span className="font-semibold text-[#17140F]">support@punyaperks.com</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="/contact"
                    className="w-full py-2.5 px-4 rounded-full bg-[#17140F] hover:bg-black text-white text-center text-xs font-semibold transition-colors"
                  >
                    Open Support Ticket
                  </a>
                  <a
                    href="https://wa.me/919999999999?text=Hi%20Punya%20Perks%20Support"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-full bg-[#25D366]/10 text-[#0F6B32] border border-[#25D366]/30 hover:bg-[#25D366]/20 text-center text-xs font-semibold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Priority Desk
                  </a>
                </div>
              </div>

              {/* System Status Link Card */}
              <div className="bg-[#FAF3E8] rounded-2xl p-6 border border-[#EBDFC6] space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[#17140F] uppercase">All Systems Normal</span>
                </div>
                <p className="text-xs text-[#5B534C] leading-relaxed">
                  Real-time telemetry across AWS Mumbai, Sydney, and UAE data clusters is at 99.99% operational uptime.
                </p>
                <a
                  href="/status"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B5651A] hover:underline"
                >
                  View Live Status & Regional Latency <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HelpCenterPage;
