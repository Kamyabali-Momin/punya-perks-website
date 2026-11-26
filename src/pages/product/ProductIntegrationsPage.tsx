import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';

interface ConnectorPartner {
  name: string;
  logo: string;
  tag: string;
}

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
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-5">
              <div className="border-b border-[#EBDFC6] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1F1A17]">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B534C] mt-1">{cat.subtitle}</p>
                </div>
                <span className="text-[11px] font-body font-bold uppercase tracking-wider text-[#B5651A] shrink-0">
                  {cat.partners.length} Connectors
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
                {cat.partners.map((p) => (
                  <div
                    key={p.name}
                    className="p-4 sm:p-5 rounded-[18px] bg-white border border-[#EBDFC6] flex flex-col items-center justify-between text-center gap-3 shadow-2xs hover:shadow-md hover:border-[#B5651A]/50 transition-all h-full group"
                  >
                    <div className="w-full h-12 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6]/80 flex items-center justify-center px-3 py-2 shrink-0 group-hover:scale-105 transition-transform">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="max-w-[100px] max-h-7 w-auto h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="font-display font-bold text-xs sm:text-sm text-[#1F1A17] leading-snug">
                        {p.name}
                      </div>
                      <div className="text-[10px] font-body font-semibold text-[#847C75] uppercase tracking-wider">
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

      <PageCta />
    </MainLayout>
  );
};
export default ProductIntegrationsPage;
