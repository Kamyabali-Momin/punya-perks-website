import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { PageCta } from '../../components/common/PageCta';

interface ConnectorPartner {
  name: string;
  logo: string;
  tag: string;
}

const CONNECTOR_SPECS = [
  { connector: 'Pine Labs Plutus Smart', protocol: 'POS Edge SDK + REST', latency: '<110ms P99', rollout: '2–3 Days', offline: 'Signed Queue Supported' },
  { connector: 'Shopify Plus', protocol: 'Checkout UI Ext + Webhooks', latency: '<85ms P99', rollout: '1 Day', offline: 'Two-Phase Quote/Commit' },
  { connector: 'Lightspeed K/R Series', protocol: 'POS Webhook + LAN Relay', latency: '<120ms P99', rollout: '2 Days', offline: 'Local Cache Failover' },
  { connector: 'Petpooja & QSR POS', protocol: 'Bill Webhook + QR Token', latency: '<100ms P99', rollout: '2 Days', offline: 'Idempotent Retry Queue' },
  { connector: 'SAP S/4HANA & Tally', protocol: 'Nightly Journal CSV / API', latency: 'T+1 EOD Batch', rollout: '3–4 Days', offline: 'Ind AS 115 Ready' },
];

const INTEGRATIONS_FAQS = [
  {
    q: 'Does Pine Labs or Lightspeed integration require replacing store payment terminals?',
    a: 'No. Punya Perks installs cleanly as a lightweight POS app extension or REST hook inside your existing billing counters—zero hardware replacement required.',
  },
  {
    q: 'What happens if store internet drops during busy weekend billing?',
    a: 'Our Store Edge Relay caches balance lookups locally on the LAN and writes signed transaction events to an idempotent queue that syncs cleanly once WAN connectivity returns.',
  },
  {
    q: 'Can we connect proprietary in-house POS or ERP systems using REST APIs?',
    a: 'Yes. Every native adapter sits on top of the exact public OpenAPI v3 specification available in our Developer Portal, complete with HMAC-SHA256 webhooks and TypeScript/Python SDKs.',
  },
];

export const ProductIntegrationsPage: React.FC = () => {
  const categories: Array<{ name: string; subtitle: string; partners: ConnectorPartner[] }> = [
    {
      name: 'POS & In-Store Hardware',
      subtitle: 'Sub-120ms billing counter lookup, receipt earn & instant voucher burn.',
      partners: [
        { name: 'Pine Labs', logo: '/images/integrations/pinelabs.svg', tag: 'POS Terminal' },
        { name: 'Lightspeed', logo: '/images/integrations/lightspeed.png', tag: 'Retail POS' },
        { name: 'Square', logo: '/images/integrations/square.svg', tag: 'POS & Pay' },
        { name: 'Mswipe', logo: '/images/integrations/mswipe.png', tag: 'Smart POS' },
        { name: 'Petpooja', logo: '/images/integrations/petpooja.png', tag: 'QSR POS' },
        { name: 'Tally', logo: '/images/integrations/tally.png', tag: 'ERP Sync' },
      ],
    },
    {
      name: 'E-commerce Platforms',
      subtitle: 'Native checkout point sliders, order webhooks & return reversals.',
      partners: [
        { name: 'Shopify', logo: '/images/integrations/shopify.svg', tag: 'App & Webhooks' },
        { name: 'Magento', logo: '/images/integrations/magento.png', tag: 'Extension' },
        { name: 'WooCommerce', logo: '/images/integrations/woocommerce.svg', tag: 'Plugin' },
        { name: 'BigCommerce', logo: '/images/integrations/bigcommerce.svg', tag: 'Connector' },
        { name: 'Salesforce Commerce', logo: '/images/integrations/salesforce.svg', tag: 'Cartridge' },
      ],
    },
    {
      name: 'Payments & Settlement',
      subtitle: 'Card-linked offers, KYC-gated UPI cash-outs & instant settlements.',
      partners: [
        { name: 'Razorpay', logo: '/images/integrations/razorpay.svg', tag: 'UPI & Cards' },
        { name: 'Stripe', logo: '/images/integrations/stripe.svg', tag: 'Global Pay' },
        { name: 'Paytm Business', logo: '/images/integrations/paytm.svg', tag: 'Wallet & UPI' },
        { name: 'Adyen', logo: '/images/integrations/adyen.svg', tag: 'Omnichannel' },
        { name: 'Cashfree', logo: '/images/integrations/cashfree.png', tag: 'Payouts' },
      ],
    },
    {
      name: 'Messaging & Omnichannel',
      subtitle: 'DLT-compliant transactional receipts, OTP enrolment & lifecycle triggers.',
      partners: [
        { name: 'WhatsApp Cloud', logo: '/images/integrations/whatsapp.svg', tag: 'Official API' },
        { name: 'Twilio', logo: '/images/integrations/twilio.png', tag: 'SMS & OTP' },
        { name: 'Gupshup', logo: '/images/integrations/gupshup.png', tag: 'DLT & WA' },
        { name: 'Klaviyo', logo: '/images/integrations/klaviyo.png', tag: 'Email Flows' },
        { name: 'CleverTap', logo: '/images/integrations/clevertap.png', tag: 'Engagement' },
        { name: 'MoEngage', logo: '/images/integrations/moengage.png', tag: 'Push & CRM' },
      ],
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="INTEGRATION DIRECTORY"
        title="Pre-built connectors for your modern stack."
        description="50+ certified connectors across POS hardware, e-commerce platforms, payment gateways, messaging networks, and enterprise ERPs. Zero custom glue code required."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Integrations' }]}
        image="/images/products/user-web-home.png"
        imageAlt="Punya Perks POS & E-Commerce Ecosystem"
      />

      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-5">
              <div className="border-b border-[#EADBC6] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[#220901]">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#563E37] mt-1">{cat.subtitle}</p>
                </div>
                <span className="text-[11px] font-body font-bold uppercase tracking-wider text-[#BC3908] shrink-0">
                  {cat.partners.length} Connectors
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
                {cat.partners.map((p) => (
                  <div
                    key={p.name}
                    className="p-4 sm:p-5 rounded-[18px] bg-white border border-[#EADBC6] flex flex-col items-center justify-between text-center gap-3 shadow-2xs hover:shadow-md hover:border-[#BC3908]/50 transition-all h-full group"
                  >
                    <div className="w-full h-12 rounded-xl bg-[#F6EFE2] border border-[#EADBC6]/80 flex items-center justify-center px-3 py-2 shrink-0 group-hover:scale-105 transition-transform">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="max-w-[100px] max-h-7 w-auto h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="font-display font-bold text-xs sm:text-sm text-[#220901] leading-snug">
                        {p.name}
                      </div>
                      <div className="text-[10px] font-body font-semibold text-[#826B63] uppercase tracking-wider">
                        {p.tag}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connector Sync Benchmarks Table */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono text-[11px] font-bold text-[#BC3908] uppercase tracking-widest">
                CONNECTOR SPECIFICATIONS &amp; SLAS
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#220901]">
                Typical Integration Latency &amp; Go-Live Timeline
              </h2>
            </div>
            <span className="text-xs font-mono text-[#826B63]">Measured in AWS Mumbai &amp; Sydney</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#EADBC6] bg-[#F6EFE2]/40">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F6EFE2] border-b border-[#EADBC6] font-mono text-[11px] uppercase text-[#563E37]">
                <tr>
                  <th className="py-3.5 px-4">Connector</th>
                  <th className="py-3.5 px-4">Integration Method</th>
                  <th className="py-3.5 px-4">Verified Latency</th>
                  <th className="py-3.5 px-4">Setup Effort</th>
                  <th className="py-3.5 px-4 text-right">Resilience Guarantee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EADBC6] bg-white text-[#220901]">
                {CONNECTOR_SPECS.map((row) => (
                  <tr key={row.connector} className="hover:bg-[#F6EFE2]/40">
                    <td className="py-3.5 px-4 font-bold">{row.connector}</td>
                    <td className="py-3.5 px-4 text-[#563E37] font-mono text-xs">{row.protocol}</td>
                    <td className="py-3.5 px-4 font-mono text-emerald-700 font-bold">{row.latency}</td>
                    <td className="py-3.5 px-4 font-mono">{row.rollout}</td>
                    <td className="py-3.5 px-4 text-right text-xs text-[#563E37]">{row.offline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="INTEGRATIONS FAQ"
        title="Frequently Asked Questions"
        faqs={INTEGRATIONS_FAQS}
        helpTitle="Using a Custom POS or In-House Billing Engine?"
        helpDescription="Explore our REST APIs, HMAC webhook verification samples, and Postman collections."
        helpButtonText="Visit Developer Docs"
        helpButtonHref="/platform/developers"
      />

      <PageCta />
    </MainLayout>
  );
};
export default ProductIntegrationsPage;
