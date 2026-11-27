import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import {
  Key,
  Webhook,
  Zap,
  FileCode2,
  Check,
  Copy,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';

type DevTab = 'overview' | 'api' | 'webhooks' | 'sdks';

export const DevelopersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DevTab>('overview');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const pillars = [
    {
      slug: 'scoped-access-tokens',
      icon: Key,
      title: 'Scoped Personal Access Tokens',
      desc: 'Generate granular API keys with least-privilege permissions: read-only ledger events, POS transaction emission, or full campaign administration.',
      badge: 'AUTH & RBAC',
    },
    {
      slug: 'deterministic-signed-webhooks',
      icon: Webhook,
      title: 'Deterministic Signed Webhooks',
      desc: 'Receive HMAC-SHA256 signed payloads with replay protection, timestamp verification, and 5 automated exponential backoff retries.',
      badge: 'REAL-TIME',
    },
    {
      slug: 'sub-120ms-throughput-engine',
      icon: Zap,
      title: 'Sub-120ms High Throughput Engine',
      desc: 'Engineered for retail scale with 2,500 requests/minute default limits, automated backoff headers, and 99.95% API uptime SLA.',
      badge: 'PERFORMANCE',
    },
    {
      slug: 'typescript-python-sdks',
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
      path: '/v1/redemptions/quote',
      title: 'Reserve Checkout Redemption Quote',
      desc: 'Locks member points cleanly for 15 minutes prior to UPI/Card payment capture without orphaned debits.',
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

  const webhookEvents = [
    {
      method: 'EVENT',
      path: 'ledger.transaction.committed',
      title: 'Ledger Credit / Reversal Settled',
      desc: 'Emitted synchronously after store POS earn, online capture unlock, or partial SKU return reversal.',
      auth: 'HMAC-SHA256',
    },
    {
      method: 'EVENT',
      path: 'redemption.committed',
      title: 'Two-Phase Redemption Completed',
      desc: 'Carries voucher issuance barcode, debited FIFO point lots, and updated net available balance.',
      auth: 'HMAC-SHA256',
    },
    {
      method: 'EVENT',
      path: 'tier.upgraded',
      title: 'Member Promoted to Gold / Platinum',
      desc: 'Triggers automated Apple Wallet card restyling, WhatsApp welcome notes, and VIP concierge sync.',
      auth: 'HMAC-SHA256',
    },
    {
      method: 'EVENT',
      path: 'fraud.velocity.quarantined',
      title: 'Store Terminal Anomaly Flagged',
      desc: 'Notifies security & loss-prevention SIEM endpoints when collusive scan caps trigger.',
      auth: 'HMAC-SHA256',
    },
  ];

  const sdkGuides = [
    {
      method: 'NPM',
      path: '@punyaperks/sdk (v2.4.3)',
      title: 'TypeScript / Node.js & Edge Client',
      desc: 'Zero-dependency typed SDK supporting Node 18+, Cloudflare Workers, and Deno with automatic Idempotency-Key generation.',
      auth: 'MIT License',
    },
    {
      method: 'PYPI',
      path: 'punyaperks (v2.4.1)',
      title: 'Python Async & Sync Client',
      desc: 'Built on httpx and Pydantic v2 with first-class FastAPI/Django HMAC webhook middleware.',
      auth: 'MIT License',
    },
    {
      method: 'POS EDGE',
      path: 'punyaperks/pos-edge-relay:2.2',
      title: 'Store LAN Offline Relay Container',
      desc: 'Lightweight Linux/Windows sidecar keeping cash register lookups under 90ms during ISP outages.',
      auth: 'Docker / Binary',
    },
  ];

  const tabSnippets: Record<DevTab, { filename: string; code: string; footerLabel: string; footerHref: string }> = {
    overview: {
      filename: 'transaction-commit.ts',
      footerLabel: 'Punya Perks TypeScript SDK v2.4',
      footerHref: '/platform/developers/typescript-python-sdks',
      code: `// TypeScript: Commit offline retail transaction with automatic multiplier
import { PunyaPerksClient } from '@punyaperks/sdk';

const perks = new PunyaPerksClient({
  apiKey: process.env.PUNYA_API_KEY!,
  environment: 'production',
});

const result = await perks.transactions.commit({
  memberId: 'PP-84920',
  storeId: 'blr_flagship_14',
  currency: 'INR',
  totalSpend: 4850,
  eligibleSpend: 4112,
  idempotencyKey: 'tx_pos_20261125_84920_14',
  channel: 'pos',
});

console.log(\`Points Awarded: \${result.pointsAwarded} (Tier: \${result.memberTier})\`);`,
    },
    api: {
      filename: 'quote-and-commit.sh',
      footerLabel: 'REST Engine <120ms Spec',
      footerHref: '/platform/developers/sub-120ms-throughput-engine',
      code: `# Step 1: Reserve points before opening UPI / Card payment sheet
curl -X POST https://api.in.punyaperks.com/v1/redemptions/quote \\
  -H "Authorization: Bearer pp_live_..." \\
  -d '{ "memberId": "PP-84920", "points": 500, "orderRef": "ORD-8821" }'

# Step 2: Finalize atomically after payment capture webhook
curl -X POST https://api.in.punyaperks.com/v1/redemptions/commit \\
  -H "Authorization: Bearer pp_live_..." \\
  -H "Idempotency-Key: pay_ord_8821" \\
  -d '{ "quoteId": "qt_71b9c" }'`,
    },
    webhooks: {
      filename: 'verify-webhook.ts',
      footerLabel: 'Webhook Signature Spec',
      footerHref: '/platform/developers/deterministic-signed-webhooks',
      code: `import crypto from 'crypto';

export function verifySignature(rawBody: string, sig: string, ts: string, secret: string) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(\`\${ts}.\${rawBody}\`)
    .digest('hex');

  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}
// Replay protection rejects timestamps older than 300 seconds`,
    },
    sdks: {
      filename: 'quickstart_sdk.py',
      footerLabel: 'TypeScript & Python SDK Docs',
      footerHref: '/platform/developers/typescript-python-sdks',
      code: `# pip install punyaperks
from punyaperks import PunyaPerksClient

client = PunyaPerksClient(
    api_key="pp_live_...",
    region="in",
    max_retries=3,
)

ledger = client.members.get_ledger("PP-84920")
print(f"Available: {ledger.available_points}, Pending: {ledger.pending_points}")`,
    },
  };

  const activeItems =
    activeTab === 'webhooks' ? webhookEvents : activeTab === 'sdks' ? sdkGuides : apiEndpoints;
  const activeConsole = tabSnippets[activeTab];

  const copyCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(activeConsole.code).catch(() => {});
    }
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
        secondaryCtaHref="#api-reference"
        image="/images/products/user-web-earn.png"
        imageAlt="Punya Perks Developer & Member API Portal"
      />

      {/* Tabs Navigation */}
      <section className="bg-white border-b border-[#EADBC6] font-body">
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
                type="button"
                onClick={() => setActiveTab(tab.id as DevTab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#BC3908] text-white shadow-xs'
                    : 'text-[#563E37] hover:text-[#220901] hover:bg-[#F6EFE2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Architectural Pillars (Each card links to dedicated internal specification page) */}
      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-12">
            <span className="font-body text-[11px] font-bold text-[#BC3908] tracking-[0.16em] uppercase block mb-2">
              DEVELOPER FOUNDATION
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#220901]">
              Designed for high-concurrency loyalty infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.slug}
                  to={`/platform/developers/${item.slug}`}
                  className="rounded-2xl bg-white p-7 border border-[#EADBC6] hover:border-[#BC3908] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F6EFE2] text-[#BC3908] flex items-center justify-center mb-5 group-hover:bg-[#BC3908] group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="font-body text-[10px] font-bold text-[#BC3908] bg-[#F6EFE2] px-2.5 py-0.5 rounded-full border border-[#BC3908]/20 uppercase">
                      {item.badge}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#220901] group-hover:text-[#BC3908] transition-colors mt-3 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#563E37] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-[#EADBC6]/60">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BC3908] group-hover:text-[#621708] transition-colors">
                      <span>Read specification</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Workbench & REST Endpoints Grid */}
      <section id="api-reference" className="py-16 sm:py-24 bg-white border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Filtered Catalog based on activeTab */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-body text-[11px] font-bold text-[#BC3908] tracking-[0.16em] uppercase block mb-2">
                  {activeTab === 'webhooks'
                    ? 'SIGNED EVENT STREAM'
                    : activeTab === 'sdks'
                    ? 'OFFICIAL CLIENT LIBRARIES'
                    : 'REST ENDPOINTS'}
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#220901]">
                  {activeTab === 'webhooks'
                    ? 'Deterministic webhooks for every state change'
                    : activeTab === 'sdks'
                    ? 'Typed SDKs for TypeScript, Python & Store Edge'
                    : 'Deterministic endpoints for every loyalty event'}
                </h2>
                <p className="text-sm text-[#563E37] mt-2">
                  Predictable resource-oriented URLs, JSON payloads, strict OpenAPI schemas, and idempotent retries.
                </p>
              </div>

              <div className="space-y-4">
                {activeItems.map((ep, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#EADBC6] bg-[#F6EFE2]/50 p-5 hover:bg-[#F6EFE2] transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-md uppercase ${
                            ep.method === 'POST' || ep.method === 'NPM'
                              ? 'bg-[#BC3908] text-white'
                              : 'bg-[#220901] text-[#EADBC6]'
                          }`}
                        >
                          {ep.method}
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-semibold text-[#220901]">
                          {ep.path}
                        </span>
                      </div>
                      <span className="text-[10px] font-medium text-[#826B63] bg-white px-2 py-0.5 rounded border border-[#EADBC6]">
                        {ep.auth}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#220901]">
                      {ep.title}
                    </h4>
                    <p className="text-xs text-[#563E37] mt-1 leading-relaxed">
                      {ep.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Code Sample Console */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl bg-[#220901] text-white p-6 shadow-2xl border border-[#621708] relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="font-mono text-xs text-[#EADBC6]/70 ml-2">
                      {activeConsole.filename}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyCode}
                    className="flex items-center gap-1.5 text-xs text-[#EADBC6] hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedSnippet ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="font-mono text-[11px] sm:text-xs text-[#EADBC6] leading-relaxed overflow-x-auto p-2 bg-[#160500] rounded-xl border border-white/5">
                  <code>{activeConsole.code}</code>
                </pre>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#826B63]">
                  <span>{activeConsole.footerLabel}</span>
                  <Link
                    to={activeConsole.footerHref}
                    className="text-[#F6AA1C] hover:underline flex items-center gap-1"
                  >
                    <span>Open Full Spec</span>
                    <ExternalLink size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalPageFaq
        title="Developer & API architecture questions"
        eyebrow="DEVELOPER FAQ"
        faqs={devFaqs}
        helpTitle="Need custom ERP or high-throughput POS advice?"
        helpDescription="Speak directly with our platform engineers to test mock payloads, review rate ceilings, and structure webhooks for your POS topology."
        helpButtonText="Schedule developer call"
        helpButtonHref="/demo"
      />

      <PageCta
        title="Ready to build on an append-only loyalty engine?"
        subtitle="INTERACTIVE SANDBOX ENVIRONMENT"
        description="Get your API key in seconds. Test ledger commits, explore webhooks, and integrate POS endpoints with mock transaction payloads."
        buttonText="Get sandbox API key"
        buttonHref="/start"
        secondaryText="View API documentation"
        secondaryHref="/platform/developers/scoped-access-tokens"
      />
    </MainLayout>
  );
};
export default DevelopersPage;
