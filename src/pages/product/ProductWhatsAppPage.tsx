import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { MessageSquareIcon, CheckCircle2Icon, ZapIcon, SendIcon } from 'lucide-react';

export const ProductWhatsAppPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="WHATSAPP LOYALTY INTEGRATION"
        title="Zero-friction enrolment and points balance in chat."
        description="Turn WhatsApp into your primary loyalty channel. Onboard members with phone number click, check point balances, and receive DLT-approved transaction receipts."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'WhatsApp Loyalty' }]}
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block">
                CONVERSATIONAL COMMERCE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1F1A17]">
                85%+ Open Rates. Native WhatsApp Flows.
              </h2>
              <p className="text-sm sm:text-base text-[#1F1A17]/75 leading-relaxed">
                Skip bulky app downloads for casual shoppers. Customers scan a QR code at your billing counter, tap send in WhatsApp, and are immediately enrolled with compliant DPDP consent recorded.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Pre-approved TRAI DLT message templates for instant deployment in India',
                  'Interactive WhatsApp list messages for voucher catalog browsing',
                  'Automated post-purchase points receipt sent within 3 seconds of POS billing',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F1A17] font-medium">
                    <CheckCircle2Icon size={16} className="text-[#B5651A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-[320px] rounded-[36px] bg-[#E5ECE8] p-3 shadow-xl border border-[#EBDFC6]">
                <div className="bg-[#EFEAE2] rounded-[30px] p-4 space-y-3 text-xs">
                  <div className="bg-white p-3 rounded-[12px] shadow-2xs space-y-1">
                    <div className="font-bold text-[#1F1A17]">Punya Perks Loyalty Assistant</div>
                    <div className="text-[11px] text-[#1F1A17]/80">Welcome Aryan! You just earned 61 points on bill #4819. Your current balance is 3,850 pts.</div>
                    <div className="text-[10px] text-[#1F1A17]/40 text-right">10:42 AM · Delivered</div>
                  </div>
                  <div className="bg-[#D9FDD3] p-3 rounded-[12px] ml-auto max-w-[200px] shadow-2xs">
                    <div className="text-[11px] text-[#1F1A17]">Show my vouchers</div>
                    <div className="text-[10px] text-[#1F1A17]/40 text-right">10:43 AM · Read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default ProductWhatsAppPage;
