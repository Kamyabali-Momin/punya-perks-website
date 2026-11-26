import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import {
  Key,
  Webhook,
  Zap,
  FileCode2,
  Terminal,
  Code2,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  Server,
  Database,
  ArrowRight,
} from 'lucide-react';

export const DevelopersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'api' | 'webhooks' | 'sdks'>('overview');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const pillars = [
    {
      icon: Key,
      title: 'Scoped Personal Access Tokens',
      desc: 'Generate granular API keys with least-privilege permissions: read-only ledger events, POS transaction emission, or full campaign administration.',
      badge: 'AUTH & RBAC',
    },
    {
      icon: Webhook,
      title: 'Deterministic Signed Webhooks',
      desc: 'Receive HMAC-SHA256 signed payloads with replay protection, timestamp verification, and 5 automated exponential backoff retries.',
      badge: 'REAL-TIME',
    },
    {
      icon: Zap,
      title: 'Sub-120ms High Throughput Engine',
      desc: 'Engineered for retail scale with 2,500 requests/minute default limits, automated backoff headers, and 99.95% API uptime SLA.',
      badge: 'PERFORMANCE',
    },
    {
      icon: FileCode2,
      title: 'Idiomatic TypeScript & Python SDKs',
      desc: 'First-party typed client libraries with automatic rate-limit handling, idempotency key injections, and complete type definitions.',
      badge: 'CLIENT LIBS',
    },
  ];

  const apiEndpoints = [
    {
      method: 'POST',
      path: '/v1/transactions/commit',
      title: 'Commit Point Transaction',
      desc: 'Evaluates real-time rulebooks, applies eligible tier multipliers, exclusions, and writes an atomic entry to the ledger.',
      auth: 'Bearer token',
    },
    {
      method: 'GET',
      path: '/v1/members/:id/ledger',
      title: 'Query Member Ledger',
      desc: 'Returns append-only transaction history, balance breakdown (available vs pending), tier progress, and active reward vouchers.',
      auth: 'Read-only token',
    },
    {
      method: 'POST',
      path: '/v1/redemptions/issue-voucher',
      title: 'Redeem Reward Voucher',
      desc: 'Debits member points atomically, issues a unique single-use barcode/QR voucher, and dispatches an instant WhatsApp confirmation.',
      auth: 'Bearer token',
    },
    {
      method: 'POST',
      path: '/v1/campaigns/simulate',
      title: 'Simulate Campaign Rulebook',
      desc: 'Validates promotional multi-tier logic against past basket transactions before launching to customer production groups.',
      auth: 'Admin token',
    },
  ];

  const codeExample = `// TypeScript: Commit offline retail transaction with automatic multiplier
import { PunyaPerksClient } from '@punyaperks/sdk';

const perks = new PunyaPerksClient({
  apiKey: process.env.PUNYA_API_KEY,
  environment: 'production',
});

const result = await perks.transactions.commit({
  memberId: 'PP-84920',
  storeId: 'blr_flagship_14',
  currency: 'INR',
  totalSpend: 4850,
  eligibleSpend: 4112,
  items: [
    { sku: 'SHIRT-L-BLUE', price: 2499, category: 'apparel' },
    { sku: 'BELT-LEATHER', price: 1613, category: 'accessories' },
  ],
  idempotencyKey: 'tx_pos_20261125_84920_14',
  channel: 'pos',
});

console.log(\`Points Awarded: \${result.pointsAwarded} (Tier: \${result.memberTier})\`);
// SLA Response Time: 42ms`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const devFaqs = [
    {
      q: 'Where do I obtain developer API tokens and sandbox credentials?',
      a: 'Log into the Punya Perks Console, navigate to Settings > Developer Keys, and click "Generate Scoped Token". You can set permissions for Read Ledger, Write Transactions, or Webhook Administration.',
    },
    {
      q: 'How does idempotency prevent double-awarding points during POS offline sync?',
      a: 'Every write endpoint accepts an Idempotency-Key header. If a network drop causes the POS terminal to retry a transaction, Punya Perks recognizes the duplicate key and returns the original committed response without duplicating points.',
    },
    {
      q: 'What are the default API rate limits and throughput guarantees?',
      a: 'Growth plans support 600 requests per minute with automated 429 Retry-After headers. Enterprise plans scale beyond 2,500 req/min with dedicated clusters and custom SLA agreements.',
    },
    {
      q: 'How are webhooks retried when our consumer endpoint is down?',
      a: 'We implement an exponential backoff schedule (5 retries across 24 hours). Every payload contains an X-Punya-Signature HMAC-SHA256 header with timestamp verification for payload integrity.',
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="DEVELOPERS & PLATFORM API"
        title="Built for engineers who demand clean, deterministic APIs."
        description="Strict OpenAPI 3.1 specifications, typed client libraries, sub-120ms append-only transaction settlement, and replayable HMAC signed webhooks."
        breadcrumbs={[{ label: 'Platform', href: '/platform' }, { label: 'Developers' }]}
        primaryCtaText="Start in sandbox"
        primaryCtaHref="/start"
        secondaryCtaText="View API reference"
        secondaryCtaHref="/start"
        image="/images/platform-portal-tablet.png"
        imageAlt="Punya Perks Developer Console"
      />

      {/* Tabs Navigation (Deskmerit Style) */}
      <section className="bg-white border-b border-[#EBDFC6] sticky top-16 z-20 font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {[
              { id: 'overview', label: 'Platform Overview' },
              { id: 'api', label: 'REST API Catalog' },
              { id: 'webhooks', label: 'Webhooks & Events' },
              { id: 'sdks', label: 'Client SDKs & Tools' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#B5651A] text-white shadow-xs'
                    : 'text-[#5B534C] hover:text-[#17140F] hover:bg-[#FAF5ED]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Architectural Pillars */}
      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-12">
            <span className="font-body text-[11px] font-bold text-[#B5651A] tracking-[0.16em] uppercase block mb-2">
              DEVELOPER FOUNDATION
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17140F]">
              Designed for high-concurrency loyalty infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-7 border border-[#EBDFC6] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5ED] text-[#B5651A] flex items-center justify-center mb-5 group-hover:bg-[#B5651A] group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="font-body text-[10px] font-bold text-[#B5651A] bg-[#FBE9D6] px-2.5 py-0.5 rounded-full border border-[#B5651A]/20 uppercase">
                      {item.badge}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#17140F] mt-3 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-[#EBDFC6]/60">
                    <a
                      href="/start"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B5651A] hover:text-[#9a5413] transition-colors"
                    >
                      <span>Read specification</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Showcase & REST Endpoints Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Interactive API Catalog */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-body text-[11px] font-bold text-[#B5651A] tracking-[0.16em] uppercase block mb-2">
                  REST ENDPOINTS
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#17140F]">
                  Deterministic endpoints for every loyalty event
                </h2>
                <p className="text-sm text-[#5B534C] mt-2">
                  Predictable resource-oriented URLs, form-encoded requests, JSON-encoded responses, and standard HTTP response codes.
                </p>
              </div>

              <div className="space-y-4">
                {apiEndpoints.map((ep, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#EBDFC6] bg-[#FAF5ED]/50 p-5 hover:bg-[#FAF5ED] transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-md uppercase ${
                            ep.method === 'POST'
                              ? 'bg-[#B5651A] text-white'
                              : 'bg-[#17140F] text-[#EBDFC6]'
                          }`}
                        >
                          {ep.method}
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-semibold text-[#17140F]">
                          {ep.path}
                        </span>
                      </div>
                      <span className="text-[10px] font-medium text-[#847C75] bg-white px-2 py-0.5 rounded border border-[#EBDFC6]">
                        {ep.auth}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#17140F]">
                      {ep.title}
                    </h4>
                    <p className="text-xs text-[#5B534C] mt-1 leading-relaxed">
                      {ep.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Code Sample Console (Deskmerit style) */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl bg-[#17140F] text-white p-6 shadow-2xl border border-[#3E2C20] relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="font-mono text-xs text-[#EBDFC6]/70 ml-2">transaction-commit.ts</span>
                  </div>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1.5 text-xs text-[#EBDFC6] hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedSnippet ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="font-mono text-[11px] sm:text-xs text-[#EBDFC6] leading-relaxed overflow-x-auto p-2 bg-[#120F0B] rounded-xl border border-white/5">
                  <code>{codeExample}</code>
                </pre>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#847C75]">
                  <span>Punya Perks TypeScript SDK v2.4</span>
                  <a href="/start" className="text-[#D9822B] hover:underline flex items-center gap-1">
                    <span>View on NPM</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split FAQ Section */}
      <InternalPageFaq
        title="Developer & API architecture questions"
        eyebrow="DEVELOPER FAQ"
        faqs={devFaqs}
        helpTitle="Need custom ERP or high-throughput POS advice?"
        helpDescription="Speak directly with our platform engineers to test mock payloads, review rate ceilings, and structure webhooks for your POS topology."
        helpButtonText="Schedule developer call"
        helpButtonHref="/demo"
      />

      {/* Modern Dark Gradient CTA Band */}
      <PageCta
        title="Ready to build on an append-only loyalty engine?"
        subtitle="INTERACTIVE SANDBOX ENVIRONMENT"
        description="Get your API key in seconds. Test ledger commits, explore webhooks, and integrate POS endpoints with mock transaction payloads."
        buttonText="Get sandbox API key"
        buttonHref="/start"
        secondaryText="View API documentation"
        secondaryHref="/start"
      />
    </MainLayout>
  );
};
export default DevelopersPage;
