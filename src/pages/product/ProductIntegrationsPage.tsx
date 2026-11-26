import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { BlocksIcon, CheckCircle2Icon } from 'lucide-react';

export const ProductIntegrationsPage: React.FC = () => {
  const categories = [
    {
      name: 'POS & In-Store Hardware',
      partners: ['Pine Labs', 'Lightspeed', 'Square', 'Mswipe', 'Petpooja', 'Tally'],
    },
    {
      name: 'E-commerce Platforms',
      partners: ['Shopify', 'Magento', 'WooCommerce', 'BigCommerce', 'Salesforce Commerce Cloud'],
    },
    {
      name: 'Payments & Settlement',
      partners: ['Razorpay', 'Stripe', 'Paytm Business', 'Adyen', 'Cashfree'],
    },
    {
      name: 'Messaging & Omnichannel',
      partners: ['WhatsApp Business Cloud', 'Twilio', 'Gupshup', 'Klaviyo', 'CleverTap', 'MoEngage'],
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

      <section className="py-16 sm:py-20 bg-[#F3EBDD] border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-4">
              <h3 className="font-display font-bold text-xl text-[#1F1A17] border-b border-[#E8DCC9] pb-2">
                {cat.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {cat.partners.map((p) => (
                  <div
                    key={p}
                    className="p-4 rounded-[16px] bg-white border border-[#E8DCC9] text-center font-display font-semibold text-xs sm:text-sm text-[#1F1A17] shadow-2xs hover:border-[#D9822B]/50 transition-colors"
                  >
                    {p}
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
