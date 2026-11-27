export interface SpecRow {
  col1: string;
  col2: string;
  col3: string;
  col4?: string;
}

export interface DeveloperSpec {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string; detail: string }[];
  tableHeading: string;
  tableColumns: string[];
  tableRows: SpecRow[];
  codeTitle: string;
  codeLanguage: string;
  codeSnippet: string;
  secondaryCodeTitle: string;
  secondaryCodeSnippet: string;
  bestPractices: string[];
}

export const DEVELOPER_SPECS: DeveloperSpec[] = [
  {
    slug: 'scoped-access-tokens',
    badge: 'AUTH & RBAC',
    title: 'Scoped Personal Access Tokens',
    subtitle: 'Least-privilege Bearer authentication, zero-downtime key rotation, and environment isolation.',
    description:
      'Generate fine-grained API tokens isolated cleanly between Sandbox and Production cells. Restrict store POS terminals strictly to pos:commit while keeping financial exports and Maker-Checker approvals restricted to admin tokens.',
    metrics: [
      { label: 'Token Prefix', value: 'pp_live_', detail: 'Separate pp_test_ prefix for sandbox' },
      { label: 'Signing / Transport', value: 'TLS 1.3', detail: 'Mutual TLS available for banking' },
      { label: 'Key Rotation Window', value: 'Dual-Active', detail: 'Overlap old & new tokens up to 7 days' },
    ],
    tableHeading: 'Supported OAuth / Bearer Permission Scopes',
    tableColumns: ['Scope Identifier', 'Allowed Operations', 'Recommended Principal', 'Maker-Checker'],
    tableRows: [
      {
        col1: 'pos:commit',
        col2: 'POST /transactions/commit, GET /members/:id/balance',
        col3: 'Store POS Terminals (Pine Labs, Lightspeed)',
        col4: 'Auto (Rate-capped)',
      },
      {
        col1: 'redemptions:write',
        col2: 'POST /redemptions/quote, POST /redemptions/commit',
        col3: 'E-commerce Checkout & WhatsApp Bot',
        col4: '2-Phase Reserved',
      },
      {
        col1: 'ledger:read',
        col2: 'GET /ledger/journals, GET /breakage/reports',
        col3: 'ERP, Snowflake ETL & Finance BI',
        col4: 'Read-Only',
      },
      {
        col1: 'campaigns:admin',
        col2: 'Create/edit rules, bonus pools & expiry schedules',
        col3: 'Retention Ops CI / Admin Console',
        col4: 'Dual Sign-Off Required',
      },
    ],
    codeTitle: 'auth_header_example.sh',
    codeLanguage: 'bash',
    codeSnippet: `curl -X POST https://api.in.punyaperks.com/v1/transactions/commit \\
  -H "Authorization: Bearer pp_live_98f2a1d4e70b4c12a8e9" \\
  -H "Idempotency-Key: pos_blr14_tx_91827" \\
  -H "X-Region-Cell: ap-south-1" \\
  -H "Content-Type: application/json" \\
  -d '{
    "memberId": "PP-84920",
    "storeId": "blr_flagship_14",
    "eligibleSpend": 4112
  }'`,
    secondaryCodeTitle: 'token_rotation_response.json',
    secondaryCodeSnippet: `{
  "tokenId": "tok_01J9M4V7P8",
  "scopes": ["pos:commit", "ledger:read"],
  "environment": "production",
  "previousTokenExpiresAt": "2026-12-04T23:59:59Z",
  "status": "ACTIVE"
}`,
    bestPractices: [
      'Never reuse a single root API key across billing POS registers and backend cron jobs.',
      'Enable 7-day dual-active key rotation windows before revoking legacy store credentials.',
      'Bind production API tokens to store egress CIDR allowlists or mTLS certificates for banking deployments.',
    ],
  },
  {
    slug: 'deterministic-signed-webhooks',
    badge: 'REAL-TIME',
    title: 'Deterministic Signed Webhooks',
    subtitle: 'HMAC-SHA256 verified event streams with replay protection and automatic exponential backoff.',
    description:
      'Subscribe your CRM, ERP accounting pipelines, and messaging workers to immutable ledger events. Every delivery carries a cryptographic signature header, millisecond timestamp, and deterministic event ID for exactly-once downstream processing.',
    metrics: [
      { label: 'Signature Header', value: 'HMAC-SHA256', detail: 'X-Punya-Signature with timestamp' },
      { label: 'Retry Schedule', value: '5 Attempts', detail: 'Exponential backoff across 24 hours' },
      { label: 'Replay Protection', value: '300s Window', detail: 'Reject stale X-Punya-Timestamp values' },
    ],
    tableHeading: 'Core Webhook Event Catalog',
    tableColumns: ['Event Name', 'Trigger Condition', 'Delivery SLA', 'Replayable'],
    tableRows: [
      {
        col1: 'ledger.transaction.committed',
        col2: 'Point earn, void, or return reversal settled',
        col3: '< 450ms p95',
        col4: 'Yes · 30d Retention',
      },
      {
        col1: 'redemption.quote.created',
        col2: '15-minute checkout balance lock opened',
        col3: '< 350ms p95',
        col4: 'Yes · 30d Retention',
      },
      {
        col1: 'tier.upgraded',
        col2: 'Member crossed Gold or Platinum spend threshold',
        col3: '< 1.2s p95',
        col4: 'Yes · Triggers WA/Push',
      },
      {
        col1: 'fraud.velocity.quarantined',
        col2: 'Suspicious POS terminal burst blocked into review',
        col3: 'Immediate Alert',
        col4: 'Yes · Audit Stream',
      },
    ],
    codeTitle: 'verify_webhook_signature.ts',
    codeLanguage: 'typescript',
    codeSnippet: `import crypto from 'crypto';

export function verifyPunyaWebhook(rawBody: string, headerSig: string, timestamp: string, secret: string) {
  const ageSeconds = Math.floor(Date.now() / 1000) - Number(timestamp);
  if (Math.abs(ageSeconds) > 300) {
    throw new Error('Stale webhook timestamp (>300s)');
  }

  const expected = crypto
    .createHmac('sha256', secret)
    .update(\`\${timestamp}.\${rawBody}\`)
    .digest('hex');

  return crypto.timingSafeEqual(Buffer.from(headerSig), Buffer.from(expected));
}`,
    secondaryCodeTitle: 'sample_event_payload.json',
    secondaryCodeSnippet: `{
  "eventId": "evt_01J9N1X9K2",
  "type": "ledger.transaction.committed",
  "createdAt": "2026-11-27T04:12:08.114Z",
  "data": {
    "ledgerEntryId": "JE-99401",
    "memberId": "PP-84920",
    "pointsDelta": 82,
    "availableBalance": 3850,
    "ruleVersion": "v4.2"
  }
}`,
    bestPractices: [
      'Always verify signatures against the raw unparsed HTTP request body string.',
      'Return HTTP 200 OK immediately after signature verification and enqueue heavy CRM work asynchronously.',
      'Deduplicate downstream writes on payload.eventId so manual DLQ replays remain safe.',
    ],
  },
  {
    slug: 'sub-120ms-throughput-engine',
    badge: 'PERFORMANCE',
    title: 'Sub-120ms High Throughput Engine',
    subtitle: 'Regional edge caching, lock-free append-only ledger writes, and predictable burst rate limits.',
    description:
      'Designed so store cashiers never stare at a spinner during Diwali, Boxing Day, or lunch-rush queues. Edge-warmed balance reads resolve under 45ms while idempotent write commits bypass relational row locks.',
    metrics: [
      { label: 'Default Throughput', value: '2,500 rpm', detail: 'Dedicated burst clusters available' },
      { label: 'P99 Balance Lookup', value: '< 85ms', detail: 'Regional edge cache in Mumbai & Sydney' },
      { label: 'Uptime SLA', value: '99.95%', detail: 'Multi-AZ active-active failover' },
    ],
    tableHeading: 'Regional API Cluster Latency & Ceilings',
    tableColumns: ['Region Cell', 'Endpoint Base URL', 'Measured P50 / P99', 'Enterprise Throughput'],
    tableRows: [
      {
        col1: 'India · AWS Mumbai (ap-south-1)',
        col2: 'https://api.in.punyaperks.com',
        col3: '38ms / 84ms',
        col4: '5,000 req/min burst',
      },
      {
        col1: 'ANZ · AWS Sydney (ap-southeast-2)',
        col2: 'https://api.anz.punyaperks.com',
        col3: '42ms / 96ms',
        col4: '3,500 req/min burst',
      },
      {
        col1: 'UAE · AWS UAE (me-central-1)',
        col2: 'https://api.uae.punyaperks.com',
        col3: '41ms / 91ms',
        col4: '4,000 req/min burst',
      },
    ],
    codeTitle: 'rate_limit_headers.http',
    codeLanguage: 'http',
    codeSnippet: `HTTP/1.1 200 OK
X-Region-Cell: ap-south-1
X-Processing-Time-Ms: 42
X-Idempotency-Replayed: false
X-RateLimit-Limit: 2500
X-RateLimit-Remaining: 2489
X-RateLimit-Reset: 1764218940`,
    secondaryCodeTitle: 'idempotent_retry_behavior.json',
    secondaryCodeSnippet: `{
  "ledgerEntryId": "JE-99401",
  "idempotencyKey": "tx_pos_20261125_84920_14",
  "replayed": true,
  "pointsAwarded": 82,
  "note": "Returned cached commit result without double-crediting"
}`,
    bestPractices: [
      'Always route store POS traffic to your tenant’s home regional endpoint URL to minimize TLS RTT.',
      'Supply deterministic per-bill Idempotency-Key values stored for 24 hours.',
      'Configure POS HTTP clients with a clean 1,500ms timeout and exponential retry on HTTP 429 or 503.',
    ],
  },
  {
    slug: 'typescript-python-sdks',
    badge: 'CLIENT LIBS',
    title: 'Idiomatic TypeScript & Python SDKs',
    subtitle: 'Strictly typed OpenAPI 3.1 clients with built-in retries, idempotency helpers, and webhook guards.',
    description:
      'Skip hand-writing fetch wrappers and signature verification boilerplate. Official packages for Node.js/TypeScript and Python ships full IntelliSense types, automatic 429 jittered retries, and webhook verification helpers.',
    metrics: [
      { label: 'NPM Package', value: '@punyaperks/sdk', detail: 'ESM + CJS · Zero external deps' },
      { label: 'PyPI Package', value: 'punyaperks', detail: 'Async httpx + Pydantic v2 models' },
      { label: 'Schema Spec', value: 'OpenAPI 3.1', detail: 'Strict request & response validation' },
    ],
    tableHeading: 'Supported Official Client Libraries & Tools',
    tableColumns: ['Package', 'Registry / Version', 'Runtime Support', 'Built-In Capabilities'],
    tableRows: [
      {
        col1: '@punyaperks/sdk',
        col2: 'npm · v2.4.3',
        col3: 'Node 18+, Edge Workers, Bun',
        col4: 'Idempotency, HMAC verifier, 429 Retry',
      },
      {
        col1: 'punyaperks',
        col2: 'PyPI · v2.4.1',
        col3: 'Python 3.10+ (Sync & AsyncIO)',
        col4: 'Pydantic types, FastAPI dependency helpers',
      },
      {
        col1: '@punyaperks/pos-edge-relay',
        col2: 'Docker · v2.2.0',
        col3: 'Linux / Windows Store LAN',
        col4: 'Offline LAN balance cache + signed queue',
      },
    ],
    codeTitle: 'install_and_usage.py',
    codeLanguage: 'python',
    codeSnippet: `# pip install punyaperks
from punyaperks import PunyaPerksClient

client = PunyaPerksClient(api_key="pp_live_...", region="in", max_retries=3)

quote = client.redemptions.quote(
    member_id="PP-84920",
    points=500,
    order_ref="ORD-99182",
    ttl_seconds=900,
)
print(f"Reserved quote {quote.id} worth ₹{quote.discount_amount}")`,
    secondaryCodeTitle: 'npm_typescript_quote.ts',
    secondaryCodeSnippet: `// npm install @punyaperks/sdk
import { PunyaPerksClient } from '@punyaperks/sdk';

const perks = new PunyaPerksClient({ apiKey: process.env.PUNYA_API_KEY!, region: 'in' });
const balance = await perks.members.getLedger('PP-84920');
console.log(balance.availablePoints, balance.pendingPoints);`,
    bestPractices: [
      'Pin major SDK versions (e.g. ^2.4.0) to benefit from non-breaking performance patches.',
      'Use SDK built-in client.webhooks.verifyEvent() rather than custom HMAC parsing.',
      'Share a single client instance across serverless requests to reuse HTTP keep-alive connection pools.',
    ],
  },
];

export function getDeveloperSpecBySlug(slug?: string): DeveloperSpec | undefined {
  if (!slug) return undefined;
  return DEVELOPER_SPECS.find((s) => s.slug === slug);
}
