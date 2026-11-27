import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
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
  ChevronRight,
  Sparkles,
  Clock,
  ThumbsUp,
  ThumbsDown,
  X,
  FileText,
  Send,
} from 'lucide-react';

type CategoryId = 'all' | 'setup' | 'pos' | 'whatsapp' | 'ledger' | 'security';

interface HelpGuide {
  id: string;
  category: Exclude<CategoryId, 'all'>;
  categoryLabel: string;
  audience: 'Admin' | 'Developer' | 'Operations' | 'Finance';
  readTime: string;
  title: string;
  summary: string;
  steps: Array<{ title: string; detail: string }>;
  snippet?: string;
}

interface FaqItem {
  question: string;
  answer: string;
  category: Exclude<CategoryId, 'all'>;
  categoryLabel: string;
}

const HELP_GUIDES: HelpGuide[] = [
  {
    id: 'quickstart-sandbox-provisioning',
    category: 'setup',
    categoryLabel: 'Quickstart & Onboarding',
    audience: 'Admin',
    readTime: '4 min read',
    title: 'Provision your tenant sandbox & configure initial tier rules',
    summary: 'Spin up an isolated sandbox with synthetic member balances, test POS events, and custom brand colors in under 15 minutes.',
    steps: [
      { title: 'Create your sandbox workspace', detail: 'Sign in at /start, select your primary residency region (India, Australia, NZ, or UAE) and base currency.' },
      { title: 'Select an industry rulebook template', detail: 'Choose Retail, Banking, Hospitality, or D2C defaults to preload earn ratios, tax exclusions, and Silver/Gold/Platinum thresholds.' },
      { title: 'Generate scoped API keys', detail: 'Navigate to Settings → API Tokens to generate a sandbox secret and test an earn transaction against /v1/events/earn.' },
    ],
    snippet: 'POST /v1/events/earn  { "memberId": "NR-7729", "amount": 1800, "currency": "INR" }',
  },
  {
    id: 'historical-balance-migration',
    category: 'setup',
    categoryLabel: 'Quickstart & Onboarding',
    audience: 'Operations',
    readTime: '6 min read',
    title: 'Migrate historical points & FIFO expiry lots with zero downtime',
    summary: 'Replay member balances, tier qualifiers, and pending expiry lots from Capillary, Xoxoday, or custom SQL tables.',
    steps: [
      { title: 'Export member snapshot & lot expiry CSV', detail: 'Include member_id, mobile_e164, available_points, pending_points, tier_code, and earliest_expiry_date.' },
      { title: 'Run dry-run ledger reconciliation', detail: 'Upload to the Migration Validator to verify 0.00% variance against your finance liability report.' },
      { title: 'Enable dual-write & cut over webhooks', detail: 'Stream live POS transactions to both legacy and Punya Perks for 48 hours before switching DNS/webhook endpoints.' },
    ],
  },
  {
    id: 'pos-offline-edge-sync',
    category: 'pos',
    categoryLabel: 'POS & Integrations',
    audience: 'Developer',
    readTime: '5 min read',
    title: 'Configure Pine Labs & Lightspeed POS offline edge queuing',
    summary: 'Keep store billing counters running at sub-120ms lookup speed even when local store internet drops.',
    steps: [
      { title: 'Enable encrypted SQLite buffer in the POS plugin', detail: 'Toggle offline_queue: true inside your connector configuration to store signed earn payloads locally.' },
      { title: 'Attach deterministic idempotency keys', detail: 'Pass receipt_id + terminal_id as the Idempotency-Key header so network retries never double-credit points.' },
      { title: 'Verify automatic replay upon reconnection', detail: 'Monitor the Connector Health dashboard to confirm buffered counter transactions drain sequentially.' },
    ],
    snippet: 'Idempotency-Key: pos_store14_reg02_inv99418',
  },
  {
    id: 'checkout-quote-commit',
    category: 'pos',
    categoryLabel: 'POS & Integrations',
    audience: 'Developer',
    readTime: '5 min read',
    title: 'Implement two-phase Checkout Quote & Commit for e-commerce',
    summary: 'Prevent orphaned point deductions on abandoned carts or failed payment gateway redirects.',
    steps: [
      { title: 'Reserve points at checkout initiation', detail: 'Call POST /v1/redemptions/quote to hold the member’s burn points for a 15-minute checkout window.' },
      { title: 'Commit on payment gateway webhook success', detail: 'Once Razorpay or Stripe confirms capture, finalize the burn via POST /v1/redemptions/commit.' },
      { title: 'Auto-release expired holds', detail: 'If the shopper abandons checkout, the temporary reservation expires automatically with zero manual tickets.' },
    ],
    snippet: 'POST /v1/redemptions/quote -> { "quoteId": "qt_8912", "expiresInSec": 900 }',
  },
  {
    id: 'whatsapp-dlt-onboarding',
    category: 'whatsapp',
    categoryLabel: 'WhatsApp & Member Bot',
    audience: 'Operations',
    readTime: '4 min read',
    title: 'Connect Meta Cloud API & TRAI DLT templates for counter QR enrolment',
    summary: 'Onboard shoppers in 10 seconds at checkout via WhatsApp QR without requiring an app download.',
    steps: [
      { title: 'Link your Meta Business Manager WABA ID', detail: 'Authorize your verified brand number inside Channels → WhatsApp Business Cloud.' },
      { title: 'Map pre-approved DLT / utility templates', detail: 'Bind transaction_earn_receipt, otp_burn_verify, and expiry_reminder_7d templates.' },
      { title: 'Print store-specific counter QR tents', detail: 'Each store QR embeds store_id and captures explicit DPDP marketing opt-in on first tap.' },
    ],
  },
  {
    id: 'ind-as-breakage-reconciliation',
    category: 'ledger',
    categoryLabel: 'Ledger & Calculations',
    audience: 'Finance',
    readTime: '7 min read',
    title: 'Reconcile monthly point liability & Ind AS 115 / IFRS 15 breakage',
    summary: 'Export penny-exact double-entry audit journals and deferred revenue schedules for statutory auditors.',
    steps: [
      { title: 'Open Finance → Ledger Statements', detail: 'Filter by currency (INR, AUD, NZD, AED) and fiscal closing period.' },
      { title: 'Inspect Issued, Burned, Expired & Reversed buckets', detail: 'Every debit and credit row links back to its immutable transaction hash and rule version.' },
      { title: 'Download IFRS 15 / Ind AS 115 Breakage Pack', detail: 'Export CSV + signed PDF reconciliation pack ready for ERP journal posting.' },
    ],
  },
  {
    id: 'maker-checker-thresholds',
    category: 'ledger',
    categoryLabel: 'Ledger & Calculations',
    audience: 'Finance',
    readTime: '3 min read',
    title: 'Enforce Maker-Checker approvals for manual point adjustments',
    summary: 'Require dual-operator cryptographic sign-off whenever a support or marketing user credits points manually.',
    steps: [
      { title: 'Define adjustment threshold in Governance', detail: 'Set automatic Maker-Checker triggers for any single credit exceeding e.g. 500 points.' },
      { title: 'Assign Approver roles (Finance / Ops Lead)', detail: 'Reviewers receive instant Slack/email notifications with member history before approving.' },
    ],
  },
  {
    id: 'dpdp-dsr-erasure',
    category: 'security',
    categoryLabel: 'Compliance & Security',
    audience: 'Admin',
    readTime: '5 min read',
    title: 'Process DPDP & Privacy Act Right-to-Erasure (DSR) requests',
    summary: 'Pseudonymize member PII upon deletion request while keeping financial ledger totals 100% auditable.',
    steps: [
      { title: 'Receive DSR via Member Portal or API', detail: 'Members trigger erasure from Privacy Settings or via DELETE /v1/members/{id}/pii.' },
      { title: 'Verify 30-day legal hold checks', detail: 'Confirm no pending chargebacks or KYC payout holds block immediate erasure.' },
      { title: 'Issue cryptographic erasure receipt', detail: 'Personal fields are wiped from tenant tables while anonymized ledger entries preserve accounting math.' },
    ],
  },
];

const CATEGORIES: Array<{
  id: CategoryId;
  name: string;
  desc: string;
  icon: React.ElementType;
}> = [
  { id: 'all', name: 'All Topics', desc: 'Guides & answers', icon: Sparkles },
  { id: 'setup', name: 'Quickstart & Onboarding', desc: 'Sandbox & migrations', icon: BookOpen },
  { id: 'pos', name: 'POS & Integrations', desc: 'Counters & webhooks', icon: Terminal },
  { id: 'whatsapp', name: 'WhatsApp & Member Bot', desc: 'DLT & QR flows', icon: MessageSquare },
  { id: 'ledger', name: 'Ledger & Calculations', desc: 'Audit & breakage', icon: CreditCard },
  { id: 'security', name: 'Compliance & Security', desc: 'DPDP, KYC & SOC 2', icon: ShieldCheck },
];

const FAQS: FaqItem[] = [
  {
    category: 'setup',
    categoryLabel: 'Quickstart',
    question: 'How fast can we launch our loyalty program on Punya Perks?',
    answer:
      'Cloud sandbox setup takes under 15 minutes. Pre-built POS and e-commerce connectors (Pine Labs, Shopify, Lightspeed, Petpooja) take 2–5 business days to verify, and full omnichannel programmes go live in 4 weeks.',
  },
  {
    category: 'setup',
    categoryLabel: 'Quickstart',
    question: 'Can we import historical points and tiers from an existing platform?',
    answer:
      'Yes. Punya Perks provides an audited Migration Tool that imports CSV/JSON snapshots, preserves FIFO expiry lots and rolling tier qualifiers, and reconciles balances into our append-only ledger.',
  },
  {
    category: 'pos',
    categoryLabel: 'POS & Sync',
    question: 'How does POS offline fallback work during store network drops?',
    answer:
      'Our edge connector buffers member lookups and earn events locally in encrypted SQLite storage. When store internet restores, queued events sync sequentially with idempotency keys to guarantee zero duplicate or lost points.',
  },
  {
    category: 'pos',
    categoryLabel: 'POS & Sync',
    question: 'Do you support multi-currency points across India, Australia, NZ, and UAE?',
    answer:
      'Yes. Punya Perks natively supports multi-region currency ledgers (INR, AUD, NZD, AED, USD) with local GST/VAT tax exclusions and sovereign data residency in AWS Mumbai, Sydney, and UAE.',
  },
  {
    category: 'whatsapp',
    categoryLabel: 'WhatsApp',
    question: 'What is required to verify our WhatsApp Business API account for loyalty?',
    answer:
      'You only need a verified Meta Business Manager account and a dedicated brand phone number. Punya Perks handles the official WhatsApp Cloud API integration, TRAI DLT templates, and 2-way interactive flows.',
  },
  {
    category: 'whatsapp',
    categoryLabel: 'WhatsApp',
    question: 'How do customers redeem points inside WhatsApp without downloading an app?',
    answer:
      'Customers scan a counter QR or send "Hi" on WhatsApp. The bot shows live available points, lets them pick a voucher or discount, and generates a single-use OTP or dynamic barcode for the cashier.',
  },
  {
    category: 'ledger',
    categoryLabel: 'Ledger',
    question: 'Why does Punya Perks use a double-entry ledger instead of a mutable balance column?',
    answer:
      'Mutable balance columns are vulnerable to race conditions, partial return bugs, and audit drift. Our append-only journal records immutable debit/credit entries for every earn, hold, burn, and expiry so finance and marketing always match to the penny.',
  },
  {
    category: 'ledger',
    categoryLabel: 'Ledger',
    question: 'How does point expiration work, and are reminder notices automated?',
    answer:
      'You can configure rolling expiry (e.g., 12 months after last purchase) or fixed calendar expiry. Automated D-30 and D-7 reminder notifications dispatch via WhatsApp, push, or email to drive repeat visits before points lapse.',
  },
  {
    category: 'security',
    categoryLabel: 'Compliance',
    question: 'Is Punya Perks compliant with India DPDP Act 2023 and Australia Privacy Act 1988?',
    answer:
      'Yes. We provide unbundled consent capture, TRAI DLT compliance, automated Right-to-Erasure (DSR) workflows, AES-256 tenant-isolated KMS encryption, and SOC 2 Type II aligned controls.',
  },
];

export const HelpCenterPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [activeGuide, setActiveGuide] = useState<HelpGuide | null>(null);
  const [helpfulVote, setHelpfulVote] = useState<'yes' | 'no' | null>(null);

  // Support ticket modal state
  const [ticketOpen, setTicketOpen] = useState(false);
  const [ticketEmail, setTicketEmail] = useState('');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketSeverity, setTicketSeverity] = useState('P2 · Standard Technical Question');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const q = searchQuery.trim().toLowerCase();

  const filteredGuides = HELP_GUIDES.filter((g) => {
    const matchesCat = activeCategory === 'all' || g.category === activeCategory;
    const matchesQ =
      !q ||
      g.title.toLowerCase().includes(q) ||
      g.summary.toLowerCase().includes(q) ||
      g.categoryLabel.toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesQ =
      !q ||
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });

  const getCategoryCount = (id: CategoryId) => {
    if (id === 'all') return HELP_GUIDES.length + FAQS.length;
    return (
      HELP_GUIDES.filter((g) => g.category === id).length +
      FAQS.filter((f) => f.category === id).length
    );
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticketEmail.trim() && ticketSubject.trim()) {
      setTicketSubmitted(true);
    }
  };

  return (
    <MainLayout>
      {/* 1. Compact, Consistent Hero with Breadcrumb & Search */}
      <section
        className="relative pt-10 pb-14 sm:pt-14 sm:pb-16 overflow-hidden border-b border-[#EBDFC6] bg-cover bg-bottom bg-no-repeat font-body"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: '#FAF3E8',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-[#847C75] mb-5">
            <Link to="/" className="hover:text-[#B5651A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/resources" className="hover:text-[#B5651A] transition-colors">Resources</Link>
            <ChevronRight size={12} />
            <span className="text-[#17140F] font-bold">Help Centre</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/85 border border-[#EBDFC6] shadow-2xs mb-4">
            <LifeBuoy className="w-3.5 h-3.5 text-[#B5651A]" />
            <span className="text-[11px] font-bold text-[#B5651A] tracking-[0.16em] uppercase">
              HELP CENTRE &amp; KNOWLEDGE BASE
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-[#17140F] tracking-tight max-w-3xl mx-auto leading-[1.12]">
            How can we help your loyalty team today?
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#5B534C] max-w-2xl mx-auto leading-relaxed">
            Step-by-step setup guides, POS troubleshooting, double-entry ledger audits, and direct engineering support.
          </p>

          {/* Search Box */}
          <div className="mt-7 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-[#8C827A] absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides & answers: POS sync, WhatsApp OTP, ledger audit, DPDP..."
                className="w-full pl-12 pr-20 py-3.5 sm:py-4 rounded-full bg-white border border-[#D5C5AC] text-sm sm:text-base text-[#17140F] placeholder-[#8C827A] outline-none shadow-md focus:border-[#B5651A] focus:ring-2 focus:ring-[#B5651A]/20 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-xs font-semibold text-[#5B534C] hover:text-[#17140F] bg-[#FAF3E8] px-3 py-1 rounded-full cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-[#5B534C]">
              <span className="font-semibold text-[#17140F]">Popular:</span>
              {['POS offline', 'WhatsApp', 'ledger', 'DPDP', 'Pine Labs'].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setSearchQuery(term)}
                  className="px-2.5 py-0.5 rounded-full bg-white/80 border border-[#EBDFC6] hover:border-[#B5651A] hover:text-[#B5651A] transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Knowledge Base Area */}
      <section className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          {/* Category Filter Cards with Accurate Counts */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[118px] ${
                    isActive
                      ? 'bg-white border-[#B5651A] shadow-md ring-1 ring-[#B5651A]/40'
                      : 'bg-white/90 border-[#EBDFC6] hover:bg-white hover:border-[#B5651A]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-[#B5651A] text-white' : 'bg-[#FAF3E8] text-[#B5651A]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-bold text-[#847C75]">{count}</span>
                  </div>
                  <div className="pt-3">
                    <div className="text-xs font-bold text-[#17140F] leading-snug">{cat.name}</div>
                    <div className="text-[11px] text-[#847C75] mt-0.5">{cat.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* 2-Column Main Content: Guides + FAQs (8 cols) | Support Sidebar (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 8 Columns: Playbooks + FAQs */}
            <div className="lg:col-span-8 space-y-12 min-w-0">
              {/* Step-by-Step Knowledge Base Guides */}
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#EBDFC6]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B5651A] block">
                      PLAYBOOKS &amp; HOW-TO GUIDES
                    </span>
                    <h2 className="font-display font-bold text-2xl text-[#17140F]">
                      Implementation &amp; Operations Guides
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-[#847C75]">
                    {filteredGuides.length} {filteredGuides.length === 1 ? 'guide' : 'guides'}
                  </span>
                </div>

                {filteredGuides.length === 0 ? (
                  <div className="p-8 text-center bg-white rounded-2xl border border-[#EBDFC6]">
                    <FileText className="w-8 h-8 text-[#8C827A] mx-auto mb-2" />
                    <p className="text-sm font-bold text-[#17140F]">No guides match this filter</p>
                    <button
                      type="button"
                      onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                      className="mt-3 px-4 py-1.5 rounded-full bg-[#17140F] text-white text-xs font-semibold cursor-pointer"
                    >
                      Show all topics
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredGuides.map((guide) => (
                      <button
                        key={guide.id}
                        type="button"
                        onClick={() => { setActiveGuide(guide); setHelpfulVote(null); }}
                        className="text-left p-5 rounded-2xl bg-white border border-[#EBDFC6] hover:border-[#B5651A] hover:shadow-md transition-all flex flex-col justify-between gap-4 group cursor-pointer"
                      >
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FEF0E1] text-[#B5651A] border border-[#F6DECA]">
                              {guide.categoryLabel}
                            </span>
                            <span className="text-[11px] text-[#847C75] inline-flex items-center gap-1">
                              <Clock size={11} />
                              {guide.readTime}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-base sm:text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-snug">
                            {guide.title}
                          </h3>
                          <p className="text-xs text-[#5B534C] leading-relaxed line-clamp-2">
                            {guide.summary}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#FAF3E8] flex items-center justify-between text-xs">
                          <span className="font-semibold text-[#847C75]">For {guide.audience}</span>
                          <span className="font-semibold text-[#B5651A] inline-flex items-center gap-1">
                            Read guide <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Developer Documentation Callout */}
              <div className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#17140F] via-[#241A13] to-[#17140F] border border-[#3E2C20] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="relative z-10">
                  <div className="text-xs font-semibold text-[#E59846] uppercase tracking-wider mb-1">
                    API &amp; Webhook Docs
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#FAF3E8]">
                    Looking for OpenAPI specs &amp; SDKs?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D5C7B7] mt-1 max-w-lg leading-relaxed">
                    Explore typed TypeScript/Python SDKs, HMAC webhook verification samples, and sandbox endpoints.
                  </p>
                </div>
                <Link
                  to="/platform/developers"
                  className="relative z-10 px-5 py-2.5 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white text-xs font-semibold transition-all shrink-0 inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Visit Developer Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right 4 Columns: Support & Diagnostics Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Live Support Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#EBDFC6] shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF3E8] border border-[#EBDFC6] flex items-center justify-center text-[#B5651A] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#17140F]">Need human support?</h3>
                    <span className="text-[11px] font-semibold text-[#1B8756] inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1B8756]" />
                      Engineers online · IST, GST &amp; AEST
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#5B534C] leading-relaxed">
                  Reach our technical account managers for POS debugging, webhook logs, or ledger reconciliation checks.
                </p>

                <div className="space-y-2 text-xs pt-3 border-t border-[#EBDFC6]">
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

                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => { setTicketOpen(true); setTicketSubmitted(false); }}
                    className="w-full py-2.5 px-4 rounded-full bg-[#17140F] hover:bg-black text-white text-center text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Open Support Ticket
                  </button>
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
                  <span className="text-xs font-bold text-[#17140F] uppercase tracking-wider">All Systems Normal</span>
                </div>
                <p className="text-xs text-[#5B534C] leading-relaxed">
                  Real-time telemetry across AWS Mumbai, Sydney, and UAE data clusters is at 99.99% operational uptime.
                </p>
                <Link
                  to="/status"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B5651A] hover:underline"
                >
                  View Live Status &amp; Regional Latency <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Quick Self-Serve Links */}
              <div className="bg-white rounded-2xl p-6 border border-[#EBDFC6] space-y-3">
                <h4 className="font-display font-bold text-sm text-[#17140F]">Self-Serve Reference</h4>
                <div className="space-y-2 text-xs">
                  <Link to="/changelog" className="flex items-center justify-between py-1.5 text-[#5B534C] hover:text-[#B5651A] transition-colors border-b border-[#FAF3E8]">
                    <span>Platform Changelog &amp; Release Notes</span>
                    <ArrowRight size={12} />
                  </Link>
                  <Link to="/glossary" className="flex items-center justify-between py-1.5 text-[#5B534C] hover:text-[#B5651A] transition-colors border-b border-[#FAF3E8]">
                    <span>Loyalty Terminology Glossary</span>
                    <ArrowRight size={12} />
                  </Link>
                  <Link to="/platform/security" className="flex items-center justify-between py-1.5 text-[#5B534C] hover:text-[#B5651A] transition-colors">
                    <span>Security, DPDP &amp; Trust Centre</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Website-Standard Split FAQ Section */}
      {filteredFaqs.length > 0 ? (
        <InternalPageFaq
          eyebrow={`HELP CENTRE FAQ · ${filteredFaqs.length} ${filteredFaqs.length === 1 ? 'ANSWER' : 'ANSWERS'}`}
          title="Frequently Answered Questions"
          faqs={filteredFaqs}
          helpTitle="Need Direct Engineering Support?"
          helpDescription="Connect with our technical account managers across IST, GST, and AEST timezones for POS sync checks, webhooks, or ledger audits."
          helpButtonText="Contact Support"
          helpButtonHref="/contact"
        />
      ) : (
        <section className="w-full py-16 bg-[#FFFDF9] border-t border-[#EBDFC6] font-body">
          <div className="max-w-xl mx-auto px-4 text-center space-y-3">
            <p className="text-base font-bold text-[#17140F]">No FAQs match “{searchQuery}”</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-5 py-2.5 bg-[#17140F] text-white rounded-full text-xs font-semibold cursor-pointer"
            >
              Reset Search &amp; Topic Filters
            </button>
          </div>
        </section>
      )}

      {/* Guide Reader Modal */}
      {activeGuide && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-[#EBDFC6] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-body">
            <div className="bg-[#17140F] text-white px-6 py-5 flex items-start justify-between gap-4">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#E59846] mb-1">
                  {activeGuide.categoryLabel} · For {activeGuide.audience} · {activeGuide.readTime}
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
                  {activeGuide.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveGuide(null)}
                aria-label="Close guide"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-sm text-[#5B534C] leading-relaxed">{activeGuide.summary}</p>

              <div className="space-y-4">
                {activeGuide.steps.map((step, i) => (
                  <div key={step.title} className="p-4 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-[#B5651A] text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-display font-bold text-sm text-[#17140F]">{step.title}</div>
                      <p className="text-xs text-[#5B534C] mt-1 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {activeGuide.snippet && (
                <div className="p-4 rounded-xl bg-[#17140F] text-[#E59846] font-[ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace] text-xs overflow-x-auto">
                  {activeGuide.snippet}
                </div>
              )}

              <div className="pt-4 border-t border-[#EBDFC6] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold text-[#5B534C]">Was this guide helpful?</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setHelpfulVote('yes')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition-colors ${
                      helpfulVote === 'yes'
                        ? 'bg-[#1B8756] text-white border-[#1B8756]'
                        : 'bg-white text-[#17140F] border-[#EBDFC6] hover:border-[#B5651A]'
                    }`}
                  >
                    <ThumbsUp size={13} /> Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setHelpfulVote('no')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition-colors ${
                      helpfulVote === 'no'
                        ? 'bg-[#17140F] text-white border-[#17140F]'
                        : 'bg-white text-[#17140F] border-[#EBDFC6] hover:border-[#B5651A]'
                    }`}
                  >
                    <ThumbsDown size={13} /> Needs detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Support Ticket Modal */}
      {ticketOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#EBDFC6] shadow-2xl space-y-5 font-body">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B5651A]">
                  ENGINEERING SUPPORT DESK
                </span>
                <h3 className="font-display font-bold text-xl text-[#17140F] mt-1">
                  Open a Support Ticket
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setTicketOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#FAF5ED] cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {ticketSubmitted ? (
              <div className="p-5 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-2 text-center">
                <CheckCircle2 size={28} className="text-emerald-600 mx-auto" />
                <div className="font-display font-bold text-base text-[#17140F]">
                  Ticket #PP-4821 Created
                </div>
                <p className="text-xs text-[#5B534C]">
                  Confirmation sent to {ticketEmail}. An on-call solutions engineer will respond per your SLA.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTicketSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#17140F] mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={ticketEmail}
                    onChange={(e) => setTicketEmail(e.target.value)}
                    placeholder="ops@company.com"
                    className="w-full h-11 px-4 rounded-xl border border-[#EBDFC6] text-sm outline-none focus:border-[#B5651A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#17140F] mb-1">Priority / Severity</label>
                  <select
                    value={ticketSeverity}
                    onChange={(e) => setTicketSeverity(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl border border-[#EBDFC6] bg-white text-sm outline-none focus:border-[#B5651A]"
                  >
                    <option>P1 · Production POS / Checkout Blocker</option>
                    <option>P2 · Standard Technical Question</option>
                    <option>P3 · Sandbox or Feature Guidance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#17140F] mb-1">Summary</label>
                  <textarea
                    required
                    rows={3}
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    placeholder="Describe the connector, endpoint, or ledger question..."
                    className="w-full p-3 rounded-xl border border-[#EBDFC6] text-sm outline-none focus:border-[#B5651A]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-11 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send size={14} />
                  <span>Submit Ticket</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <PageCta />
    </MainLayout>
  );
};

export default HelpCenterPage;
