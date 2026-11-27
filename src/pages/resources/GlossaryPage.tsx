import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { 
  SearchIcon, 
  CheckIcon, 
  CopyIcon, 
  ChevronDownIcon, 
  BookOpenIcon, 
  ShieldCheckIcon, 
  HelpCircleIcon 
} from 'lucide-react';

interface GlossaryTerm {
  term: string;
  slug: string;
  category: 'Ledger & Accounting' | 'Point Mechanics' | 'Compliance & Legal' | 'POS & Architecture' | 'Tiers & Campaigns';
  shortDefinition: string;
  detailedExplanation: string;
  formulaOrStandard?: string;
  whyItMatters: string;
  punyaApproach: string;
  relatedTerms: string[];
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Append-Only Ledger',
    slug: 'append-only-ledger',
    category: 'Ledger & Accounting',
    shortDefinition: 'A cryptographically verifiable database where point transactions can only ever be inserted, never edited or deleted.',
    detailedExplanation: 'In traditional SQL tables, rows can be updated or silently deleted by database administrators. An append-only ledger treats every earn, burn, balance adjustment, and expiry as an immutable immutable event log, guaranteeing complete chronological fidelity for financial audits.',
    formulaOrStandard: 'Balance(t) = Sum(All Credit Events [0..t]) - Sum(All Debit Events [0..t])',
    whyItMatters: 'Protects CFOs and internal audit teams against balance manipulation, accidental data corruption, and rogue developer overrides.',
    punyaApproach: 'Punya Perks utilizes an immutable event-sourced ledger architecture backed by cryptographic hashing and multi-region replication.',
    relatedTerms: ['Double-Entry Journal', 'Point Liability', 'Maker-Checker']
  },
  {
    term: 'Breakage',
    slug: 'breakage',
    category: 'Ledger & Accounting',
    shortDefinition: 'The percentage of issued loyalty points that expire or are estimated to never be redeemed by members.',
    detailedExplanation: 'Under accounting standards like Ind AS 115 / IFRS 15, unredeemed points represent deferred revenue that may eventually be recognized into the company’s profit and loss statement, calculated via actuarial breakage forecasting.',
    formulaOrStandard: 'Breakage % = (Total Expired or Unclaimed Points / Total Issued Points) * 100',
    whyItMatters: 'Accurate breakage estimation prevents over-reserving financial liabilities and unlocks legitimate deferred earnings on corporate balance sheets.',
    punyaApproach: 'Punya Perks provides actuarial breakage modeling tools that track vintage curves across cohorts, letting finance teams recognize revenue safely.',
    relatedTerms: ['Breakage Reserve', 'Point Liability', 'Lots (FIFO / LIFO)']
  },
  {
    term: 'Breakage Reserve',
    slug: 'breakage-reserve',
    category: 'Ledger & Accounting',
    shortDefinition: 'A dedicated balance sheet financial liability reserve set aside to cover future point redemptions.',
    detailedExplanation: 'When a customer earns points, the business incurs a liability equivalent to the fair monetary value of goods or rewards the points can be exchanged for. The breakage reserve reflects this liability net of anticipated unredeemed points.',
    formulaOrStandard: 'Liability = Outstanding Points * Fair Value Per Point * (1 - Forecast Breakage Rate)',
    whyItMatters: 'Mandatory for statutory financial reporting. Prevents liquidity shortfalls during high-volume holiday redemption spikes.',
    punyaApproach: 'Generates automated, auditor-ready balance sheet schedules reconciled to the rupee at the end of every fiscal month.',
    relatedTerms: ['Breakage', 'Double-Entry Journal', 'Point Liability']
  },
  {
    term: 'Cash-Back Ratio',
    slug: 'cash-back-ratio',
    category: 'Point Mechanics',
    shortDefinition: 'The effective monetary rebate percentage a customer receives relative to their total basket spend.',
    detailedExplanation: 'If a customer spends ₹1,000 and receives 100 points worth ₹25 in reward merchandise or billing discounts, the effective cash-back ratio is 2.5%. This ratio varies dynamically by tier level and SKU categories.',
    formulaOrStandard: 'Rebate % = (Points Earned * Monetary Value Per Point / Transaction Subtotal) * 100',
    whyItMatters: 'Retailers must strike the optimal balance between customer reward perception and gross margin preservation.',
    punyaApproach: 'Punya Perks lets merchandise directors configure dynamic earn ratios by SKU category, preventing margin erosion on low-margin items.',
    relatedTerms: ['Tier Ladder', 'Lots (FIFO / LIFO)']
  },
  {
    term: 'Double-Entry Journal',
    slug: 'double-entry-journal',
    category: 'Ledger & Accounting',
    shortDefinition: 'An accounting method where every loyalty transaction requires matching debit and credit entries to maintain ledger equilibrium.',
    detailedExplanation: 'Whenever points are awarded to a customer, the system credits the Member Balance account and debits the Enterprise Point Liability Reserve. Point issuance cannot occur in isolation without a matching offsetting record.',
    formulaOrStandard: 'Total Debits - Total Credits = 0.00 (Zero Drift Condition)',
    whyItMatters: 'Eliminates phantom points, unauthorized inflation, and irreconcilable ledger discrepancies during quarterly external audits.',
    punyaApproach: 'Every API endpoint in Punya Perks enforces strict double-entry mechanics before committing transactions to the distributed store.',
    relatedTerms: ['Append-Only Ledger', 'Point Liability', 'Breakage Reserve']
  },
  {
    term: 'DPDP Act 2023',
    slug: 'dpdp-act-2023',
    category: 'Compliance & Legal',
    shortDefinition: 'India’s Digital Personal Data Protection Act, mandating explicit consent, purpose limitation, and member data rights.',
    detailedExplanation: 'The DPDP Act governs how companies collect, store, and process personal data (including phone numbers, purchase histories, and loyalty profiles) in India. Brands must provide clear consent notices, honor right-to-erasure requests, and observe regional data residency.',
    formulaOrStandard: 'Statutory Compliance: Consent Manager + Right to Correction/Erasure + Data Localization',
    whyItMatters: 'Non-compliance penalties reach up to ₹250 Crores per violation under Indian statutory regulations.',
    punyaApproach: 'Punya Perks maintains sovereign data storage in AWS Mumbai / Hyderabad, zero cross-tenant surveillance, and native automated erasure workflows.',
    relatedTerms: ['Tokenization', 'Escheatment']
  },
  {
    term: 'Escheatment',
    slug: 'escheatment',
    category: 'Compliance & Legal',
    shortDefinition: 'The legal process of transferring unclaimed or abandoned customer balances to state governmental authorities.',
    detailedExplanation: 'In jurisdictions such as Australia (under state Unclaimed Monies Acts) and certain US states, balances or gift credits dormant for 3 to 7 years may legally be deemed abandoned property and required to be remitted to the state treasury.',
    formulaOrStandard: 'Dormancy Threshold (Typically 3–5 Years Inactivity) ==> State Treasury Remittance',
    whyItMatters: 'Loyalty programs operating across Australia, the US, or the UK must track dormancy age to avoid statutory non-compliance fines.',
    punyaApproach: 'Punya Perks includes automatic dormancy age tracking and jurisdiction-aware notification alerts before escheatment triggers.',
    relatedTerms: ['Lots (FIFO / LIFO)', 'Breakage']
  },
  {
    term: 'Lots (FIFO / LIFO)',
    slug: 'lots-fifo-lifo',
    category: 'Point Mechanics',
    shortDefinition: 'Granular batches of points tracked with individual timestamps and expiry rules, typically redeemed on a First-In, First-Out basis.',
    detailedExplanation: 'Rather than treating a member’s balance as a single monolithic counter, the ledger records points in discrete "lots". Under FIFO, points expiring soonest are consumed first during redemptions, maximizing member value.',
    formulaOrStandard: 'Burn Rule: Lot[Earliest_Expiry_Timestamp] burns first until consumed',
    whyItMatters: 'Ensures fairness to members, satisfies consumer protection standards, and avoids premature point expiries that generate customer disputes.',
    punyaApproach: 'Every point issuance creates a granular lot record with microsecond precision, fully tracked across its entire lifecycle.',
    relatedTerms: ['Breakage', 'Point Liability']
  },
  {
    term: 'Maker-Checker',
    slug: 'maker-checker',
    category: 'Compliance & Legal',
    shortDefinition: 'A mandatory four-eyes authorization principle where one operator creates an action and a second senior operator approves it.',
    detailedExplanation: 'In high-value loyalty setups, manual balance credits, emergency point reversals, or campaign rule alterations cannot be completed by a single operator. A maker initiates the draft, and a distinct checker validates and digitally signs the change.',
    formulaOrStandard: 'Operator_1 (Maker) + Operator_2 (Checker) ==> Verified Ledger Execution',
    whyItMatters: 'Prevents internal employee fraud, collusive point minting at retail counters, and catastrophic accidental campaign multipliers.',
    punyaApproach: 'Configurable approval workflows for all administrative adjustments exceeding pre-set point or rupee thresholds.',
    relatedTerms: ['Append-Only Ledger', 'Double-Entry Journal']
  },
  {
    term: 'Point Liability',
    slug: 'point-liability',
    category: 'Ledger & Accounting',
    shortDefinition: 'The cumulative financial obligation an enterprise owes to its active member base in redeemable currency or goods.',
    detailedExplanation: 'Every outstanding point held by an active customer is a financial promise. When calculating balance sheets, this liability is recognized as deferred revenue until the points are redeemed or officially expired.',
    formulaOrStandard: 'Net Liability = Outstanding Member Points * Cost Per Point Valuation',
    whyItMatters: 'High-growth loyalty programs can accumulate tens of crores in unrecognized liabilities if not properly hedged and tracked.',
    punyaApproach: 'Provides real-time liability dashboards with scenario stress-testing across different customer redemption spikes.',
    relatedTerms: ['Breakage Reserve', 'Double-Entry Journal']
  },
  {
    term: 'POS Offline Sync',
    slug: 'pos-offline-sync',
    category: 'POS & Architecture',
    shortDefinition: 'The ability of retail cash counter systems to authenticate members and queue transactions locally during internet outages.',
    detailedExplanation: 'If a retail store loses internet connectivity, checkout lines cannot stop. Offline sync uses cryptographically signed local vouchers or cached member quotas to authorize redemptions offline, syncing to the cloud ledger immediately upon reconnection.',
    formulaOrStandard: 'Local Queue + Idempotency Key ==[Reconnection]==> Cloud Event Ingestion',
    whyItMatters: 'Prevents retail register freezes and long billing queues at busy mall outlets and airport storefronts.',
    punyaApproach: 'Lightweight edge SDKs for Pine Labs, Posist, Shopify POS, and custom ERPs with sub-120ms response guarantees.',
    relatedTerms: ['Sub-120ms Latency', 'Tokenization']
  },
  {
    term: 'Prepaid Payment Instrument (PPI)',
    slug: 'ppi-compliance',
    category: 'Compliance & Legal',
    shortDefinition: 'Regulatory classification under Reserve Bank of India (RBI) guidelines governing stored-value closed and semi-closed wallets.',
    detailedExplanation: 'Closed-system loyalty points (redeemable only at the issuing merchant for their own goods) operate under specific exemptions, whereas co-branded semi-closed wallets (redeemable across network partners) require regulated PPI licensing and escrow account structures.',
    formulaOrStandard: 'Master Direction on PPIs (RBI/DPSS/2021-22/82) Regulatory Framework',
    whyItMatters: 'Designing multi-brand coalition loyalty programs without proper PPI structuring can attract severe regulatory penalties.',
    punyaApproach: 'Punya Perks features native compliance boundaries separating closed-loop merchant points from regulated financial instruments.',
    relatedTerms: ['DPDP Act 2023', 'Maker-Checker']
  },
  {
    term: 'Sub-120ms Latency',
    slug: 'sub-120ms-latency',
    category: 'POS & Architecture',
    shortDefinition: 'The strict response time SLA required for real-time loyalty balance lookups and point burns at retail checkouts.',
    detailedExplanation: 'Retail cashier ergonomics demand instantaneous feedback. If a loyalty lookup or OTP verification takes longer than 120ms, cashiers bypass the loyalty prompt, hurting program adoption and frustrating customers.',
    formulaOrStandard: 'Round-Trip Latency: DNS + TLS + DB Read/Write <= 120ms at p99',
    whyItMatters: 'Directly impacts retail store throughput and customer satisfaction during high-volume festive shopping rushes.',
    punyaApproach: 'Distributed edge caching across AWS regional points-of-presence, ensuring sub-120ms p99 response times worldwide.',
    relatedTerms: ['POS Offline Sync', 'Velocity Throttling']
  },
  {
    term: 'Tier Ladder',
    slug: 'tier-ladder',
    category: 'Tiers & Campaigns',
    shortDefinition: 'A structured progression of member statuses (e.g., Bronze, Silver, Gold, Platinum) with increasing reward multipliers.',
    detailedExplanation: 'Members qualify for higher tiers by meeting rolling spend thresholds or transaction counts within a fixed qualification period (typically 12 months). Higher tiers unlock perks like faster point accumulation, free shipping, or dedicated concierge access.',
    formulaOrStandard: 'Tier Status = Evaluated over Rolling Window(Spend [t-365..t]) >= Tier Threshold',
    whyItMatters: 'Drives visit frequency and average order value (AOV) by giving high-value customers a aspirational goal to maintain status.',
    punyaApproach: 'Supports automated real-time tier evaluation, soft downgrades, grace periods, and tier-specific promotional multipliers.',
    relatedTerms: ['Cash-Back Ratio', 'Velocity Throttling']
  },
  {
    term: 'Tokenization',
    slug: 'tokenization',
    category: 'POS & Architecture',
    shortDefinition: 'Replacing sensitive customer identifiers (such as phone numbers or card numbers) with non-sensitive surrogate tokens.',
    detailedExplanation: 'Rather than exposing cleartext phone numbers across POS billing screens, store terminals, and marketing webhooks, tokenization substitutes an irreversible alphanumeric identifier that only resolves within the isolated security enclave.',
    formulaOrStandard: 'Cleartext Identifier ==[Secure Vault / HMAC-SHA256]==> Ephemeral Loyalty Token',
    whyItMatters: 'Shields customer privacy at store counters, thwarts eavesdropping, and drastically shrinks PCI-DSS and DPDP compliance attack surfaces.',
    punyaApproach: 'Tenant-isolated token vaults with AES-256 KMS encryption and automated key rotation.',
    relatedTerms: ['DPDP Act 2023', 'Append-Only Ledger']
  },
  {
    term: 'Velocity Throttling',
    slug: 'velocity-throttling',
    category: 'POS & Architecture',
    shortDefinition: 'Automated rate-limiting rules preventing suspicious bursts of point accruals or redemptions within tight time intervals.',
    detailedExplanation: 'Velocity rules detect and block anomalous behaviors, such as a single cashier scanning the same loyalty barcode across 20 successive customer orders, or a bot attempting hundreds of rapid redemption calls.',
    formulaOrStandard: 'Max Transactions Per Member / Terminal <= N per Rolling M Minutes',
    whyItMatters: 'Stops retail cashier fraud and automated API credential stuffing attacks in their tracks before loss occurs.',
    punyaApproach: 'Real-time telemetry and anomaly detection engine that flags and temporarily freezes suspect transactions for review.',
    relatedTerms: ['Maker-Checker', 'Sub-120ms Latency']
  }
];

const CATEGORIES = [
  'All',
  'Ledger & Accounting',
  'Point Mechanics',
  'Compliance & Legal',
  'POS & Architecture',
  'Tiers & Campaigns'
] as const;

export const GlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Set of available first letters
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    GLOSSARY_TERMS.forEach((item) => {
      letters.add(item.term[0].toUpperCase());
    });
    return letters;
  }, []);

  // Filtered terms
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Letter filter
      if (selectedLetter !== 'All' && !item.term.toUpperCase().startsWith(selectedLetter)) {
        return false;
      }
      // Search filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesTerm = item.term.toLowerCase().includes(query);
        const matchesShort = item.shortDefinition.toLowerCase().includes(query);
        const matchesDetail = item.detailedExplanation.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesRelated = item.relatedTerms.some((rt) => rt.toLowerCase().includes(query));
        return matchesTerm || matchesShort || matchesDetail || matchesCategory || matchesRelated;
      }
      return true;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, selectedCategory, selectedLetter]);

  const copyTermLink = (slug: string) => {
    const url = `${window.location.origin}/glossary#${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedLetter('All');
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative w-full border-b border-[#EADBC6] pt-14 pb-20 text-center overflow-hidden font-body"
        style={{
          backgroundImage: "radial-gradient(ellipse 65% 55% at 15% 15%, rgba(246, 170, 28, 0.14), transparent 70%), radial-gradient(ellipse 55% 50% at 85% 80%, rgba(188, 57, 8, 0.09), transparent 70%), linear-gradient(135deg, #FDFBF7 0%, #F6EFE2 100%)",
          backgroundColor: "#F6EFE2",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs font-semibold flex items-center justify-center gap-2 mb-6 text-[#826B63]">
            <Link to="/" className="hover:text-[#BC3908] transition-colors">Home</Link>
            <span className="text-[#826B63]/60">/</span>
            <Link to="/resources" className="hover:text-[#BC3908] transition-colors">Resources</Link>
            <span className="text-[#826B63]/60">/</span>
            <span className="text-[#220901] font-bold">Glossary</span>
          </nav>

          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#BC3908] mb-3">
            PUNYA PERKS TERMINOLOGY GLOSSARY
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#220901] tracking-tight mb-4 leading-tight">
            Loyalty, in plain English.
          </h1>

          <p className="font-body text-sm sm:text-base text-[#563E37] max-w-2xl mx-auto mb-8 leading-relaxed">
            Authoritative definitions, legal compliance nuances, mathematical liability formulas, and architectural standards for modern loyalty ledgers and enterprise reward mechanics.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-6">
            <SearchIcon className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search terms, concepts, formulas (e.g. Breakage, FIFO, Maker-Checker)..."
              className="w-full pl-12 pr-16 py-3.5 rounded-2xl bg-white border border-[#EADBC6] text-[#220901] placeholder-neutral-400 text-xs sm:text-sm focus:outline-none focus:border-[#BC3908] focus:ring-2 focus:ring-[#BC3908]/20 shadow-md transition-all font-body"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-[#220901] text-xs font-semibold px-2 py-0.5 rounded bg-neutral-100 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedLetter('All');
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#BC3908] text-white font-bold shadow-sm'
                      : 'bg-white/90 text-[#563E37] hover:text-[#220901] border border-[#EADBC6]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sticky Alphabet Filter Bar */}
      <section className="bg-white border-b border-[#EADBC6] sticky top-16 sm:top-20 z-30 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 py-3">
          <div className="flex items-center justify-center gap-1 overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedLetter('All')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedLetter === 'All'
                  ? 'bg-[#F6AA1C] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-[#220901] hover:bg-[#FDFBF7]'
              }`}
            >
              ALL
            </button>
            {alphabet.map((letter) => {
              const hasTerms = availableLetters.has(letter);
              const isSelected = selectedLetter === letter;
              return (
                <button
                  key={letter}
                  type="button"
                  disabled={!hasTerms}
                  onClick={() => setSelectedLetter(letter)}
                  className={`w-7 h-7 flex items-center justify-center rounded-md text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#F6AA1C] text-white shadow-xs'
                      : hasTerms
                      ? 'text-[#220901] hover:bg-[#FDFBF7] cursor-pointer'
                      : 'text-neutral-300 cursor-not-allowed'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glossary Terms Grid Section */}
      <section className="py-12 lg:py-16 bg-[#FDFBF7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#220901]">
                {selectedCategory === 'All' ? 'All Glossary Terms' : selectedCategory}
                {selectedLetter !== 'All' && ` — Starting with "${selectedLetter}"`}
              </h2>
              <p className="font-body text-xs sm:text-sm text-neutral-600 mt-1">
                Showing {filteredTerms.length} of {GLOSSARY_TERMS.length} curated loyalty architecture & accounting concepts
              </p>
            </div>

            {(searchTerm || selectedCategory !== 'All' || selectedLetter !== 'All') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-bold text-[#BC3908] hover:text-[#BC3908] hover:underline cursor-pointer self-start sm:self-auto"
              >
                Reset all filters
              </button>
            )}
          </div>

          {/* Empty State */}
          {filteredTerms.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#EADBC6] max-w-lg mx-auto p-8 shadow-sm">
              <BookOpenIcon className="w-12 h-12 text-[#BC3908]/40 mx-auto mb-3" />
              <h3 className="font-display text-lg font-bold text-[#220901]">No matching loyalty terms found</h3>
              <p className="font-body text-xs sm:text-sm text-neutral-500 mt-1 max-w-xs mx-auto">
                We couldn't find any terms matching your current search or filter criteria.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-5 px-5 py-2.5 bg-[#F6AA1C] text-white text-xs font-bold rounded-xl hover:bg-[#BC3908] transition-all cursor-pointer shadow-sm"
              >
                Clear search & filters
              </button>
            </div>
          ) : (
            /* Cards Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {filteredTerms.map((item) => {
                const isExpanded = expandedSlug === item.slug;
                const isCopied = copiedSlug === item.slug;

                return (
                  <article
                    key={item.slug}
                    id={item.slug}
                    className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EADBC6] shadow-[0_2px_12px_rgba(28,22,16,0.04)] hover:shadow-[0_8px_24px_rgba(28,22,16,0.08)] hover:border-[#BC3908]/50 transition-all duration-300 flex flex-col justify-between group scroll-mt-36"
                  >
                    <div>
                      {/* Top Category Badge & Copy Action */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#F6EFE2] text-[#BC3908] border border-[#F4D89C]">
                          {item.category}
                        </span>
                        <button
                          type="button"
                          onClick={() => copyTermLink(item.slug)}
                          className="text-neutral-400 hover:text-[#BC3908] transition-colors p-1.5 rounded-lg hover:bg-[#FDFBF7]"
                          title="Copy link to this term"
                        >
                          {isCopied ? (
                            <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                              <CheckIcon className="w-3.5 h-3.5" /> Copied
                            </span>
                          ) : (
                            <CopyIcon className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* Term Title */}
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#220901] group-hover:text-[#BC3908] transition-colors tracking-tight mb-3">
                        {item.term}
                      </h3>

                      {/* Short Definition */}
                      <p className="font-body text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal mb-4">
                        {item.shortDefinition}
                      </p>

                      {/* Formula / Standard Box */}
                      {item.formulaOrStandard && (
                        <div className="mb-4 p-3 rounded-xl bg-[#FDFBF7] border border-[#EADBC6] font-mono text-xs text-[#220901]">
                          <span className="text-[10px] font-bold uppercase text-neutral-500 block mb-1">
                            Standard / Formula:
                          </span>
                          {item.formulaOrStandard}
                        </div>
                      )}

                      {/* Expanded Section */}
                      {isExpanded && (
                        <div className="space-y-4 pt-3 border-t border-[#EADBC6] mt-4 text-xs leading-relaxed animate-fade-in font-body">
                          <div>
                            <h4 className="font-bold text-[#220901] uppercase tracking-wider text-[11px] mb-1">
                              Detailed Explanation
                            </h4>
                            <p className="text-neutral-600 leading-relaxed">
                              {item.detailedExplanation}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-bold text-[#220901] uppercase tracking-wider text-[11px] mb-1">
                              Why It Matters
                            </h4>
                            <p className="text-neutral-600 leading-relaxed">
                              {item.whyItMatters}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-[#F6EFE2]/60 border border-[#F4D89C]">
                            <h4 className="font-bold text-[#BC3908] uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                              <ShieldCheckIcon className="w-4 h-4 text-[#BC3908]" />
                              Punya Perks Approach
                            </h4>
                            <p className="text-neutral-700 leading-relaxed">
                              {item.punyaApproach}
                            </p>
                          </div>

                          {item.relatedTerms && item.relatedTerms.length > 0 && (
                            <div className="pt-2">
                              <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider mr-2">
                                Related Terms:
                              </span>
                              <div className="inline-flex flex-wrap gap-1.5 mt-1">
                                {item.relatedTerms.map((rt) => (
                                  <button
                                    key={rt}
                                    type="button"
                                    onClick={() => setSearchTerm(rt)}
                                    className="px-2 py-0.5 rounded-lg bg-[#FDFBF7] hover:bg-[#F6EFE2] text-[#220901] text-[11px] font-medium border border-[#EADBC6] transition-colors cursor-pointer"
                                  >
                                    {rt}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Expand Toggle & Anchor */}
                    <div className="mt-5 pt-3 border-t border-[#EADBC6] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setExpandedSlug(isExpanded ? null : item.slug)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BC3908] hover:text-[#BC3908] transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? 'Collapse definition' : 'Read full explanation & benchmarks'}</span>
                        <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <span className="text-[11px] font-mono font-semibold text-neutral-400">
                        #{item.slug}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Community Question / Feedback Banner matching reference design with Luxury Dark Gold Background */}
      <section
        className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#220901] via-[#4A1106] to-[#621708] text-white border-b border-[#621708] overflow-hidden font-body"
      >
        <div className="absolute -right-24 top-0 w-96 h-96 bg-[#F6AA1C]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          <div className="max-w-2xl space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-xs font-semibold text-[#220901] border border-white/40 shadow-xs">
              <HelpCircleIcon className="w-3.5 h-3.5 text-[#BC3908]" />
              <span>Have a loyalty term or compliance nuance we should cover?</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.2]">
              Engineered for high-trust enterprise loyalty & accounting
            </h2>

            <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
              Explore how Punya Perks applies these financial standards in live retail and fintech production environments with sub-120ms response and zero ledger drift.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-[#BC3908] hover:bg-[#941B0C] text-white font-medium text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                Schedule platform walkthrough
              </Link>
              <Link
                to="/platform/security"
                className="px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-[#220901] font-medium text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
              >
                Explore Security & Compliance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};

export default GlossaryPage;
