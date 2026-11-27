import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { PageCta } from '../../components/common/PageCta';
import { CheckCircle2Icon, ShieldCheckIcon, SendIcon, QrCodeIcon } from 'lucide-react';

const DLT_TEMPLATES = [
  {
    name: 'POS Instant Receipt + Balance',
    category: 'Transactional · Meta Utility',
    sample: 'Hi {{1}}, you earned +{{2}} pts on Bill #{{3}} at {{4}}. Available: {{5}} pts. Tap below to unlock rewards.',
    openRate: '88% Open Rate',
  },
  {
    name: '10-Second Counter QR Welcome',
    category: 'Onboarding · DPDP Opt-In',
    sample: 'Welcome to Nova Rewards! Reply YES to confirm loyalty updates (T&Cs applied) & unlock ₹100 welcome bonus.',
    openRate: '68% Store Conversion',
  },
  {
    name: 'FIFO Points Expiry Reminder',
    category: 'Retention · Automated 14-Day',
    sample: 'Heads up {{1}} — {{2}} points expire on {{3}}. Redeem in one tap online or scan Member QR at any store.',
    openRate: '19% Recovery Rate',
  },
];

const WHATSAPP_FAQS = [
  {
    q: 'Do we need our own Meta WhatsApp Business API account or BSP?',
    a: 'Punya Perks connects directly to Meta WhatsApp Cloud API as well as Gupshup or Twilio with zero messaging markup. You retain direct WABA ownership and DLT template registration.',
  },
  {
    q: 'Can shoppers redeem a coupon at store checkout directly inside WhatsApp?',
    a: 'Yes. Members tap "Redeem Voucher" or open their Dynamic Member QR inside chat to display a single-use 6-digit token or barcode that store cashiers scan directly on Pine Labs or Lightspeed.',
  },
  {
    q: 'How do you handle TRAI DLT and DPDP opt-in compliance in India?',
    a: 'Every counter QR enrolment logs an immutable timestamped opt-in proof, separates transactional alerts from promotional opt-ins, and routes OTP/SMS fallbacks via pre-registered DLT Header IDs.',
  },
];

export const ProductWhatsAppPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="WHATSAPP LOYALTY INTEGRATION"
        title="Zero-friction enrolment and points balance in chat."
        description="Turn WhatsApp into your primary loyalty channel. Onboard members with phone number click, check point balances, and receive DLT-approved transaction receipts."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'WhatsApp Loyalty' }]}
        image="/images/products/user-web-home.png"
        imageAlt="WhatsApp & Member Loyalty Parity"
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-body text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block">
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
              {/* Realistic WhatsApp Business Phone Frame */}
              <div className="w-full max-w-[340px] rounded-[38px] bg-[#17140F] p-2.5 shadow-2xl border-2 border-[#3E2C20]">
                <div className="rounded-[30px] overflow-hidden bg-[#EFEAE2] flex flex-col">
                  <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-[#B5651A] border border-white/25 flex items-center justify-center font-display font-bold text-sm shrink-0">
                        N
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1 text-xs font-bold truncate">
                          <span>Nova Rewards</span>
                          <ShieldCheckIcon size={13} className="text-[#25D366] shrink-0" />
                        </div>
                        <div className="text-[10px] text-white/75">Official Loyalty Account</div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/15 font-semibold shrink-0">
                      Gold
                    </span>
                  </div>

                  <div className="p-3.5 space-y-2.5 text-xs">
                    <div className="text-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/80 text-[10px] text-[#5B534C] font-medium shadow-2xs">
                        TODAY
                      </span>
                    </div>

                    <div className="bg-white rounded-xl rounded-tl-xs p-3 shadow-2xs space-y-2 max-w-[90%]">
                      <div className="text-[11px] font-bold text-[#075E54]">Nova Rewards · Instant Receipt</div>
                      <p className="text-[11.5px] text-[#1F1A17] leading-relaxed">
                        Welcome Aryan! You earned <strong>+61 pts</strong> on bill <strong>#4819</strong> at Nova Retail Andheri.
                        <br />
                        Available balance: <strong>3,850 pts</strong> (₹962)
                      </p>
                      <div className="text-[10px] text-[#847C75] text-right">10:42 AM ✓✓</div>
                      <div className="pt-1.5 border-t border-[#EBDFC6]/70 grid grid-cols-2 gap-1.5 text-center">
                        <span className="py-1.5 px-2 rounded-lg bg-[#FAF5ED] text-[#075E54] font-semibold text-[11px]">
                          View Vouchers
                        </span>
                        <span className="py-1.5 px-2 rounded-lg bg-[#FAF5ED] text-[#075E54] font-semibold text-[11px] inline-flex items-center justify-center gap-1">
                          <QrCodeIcon size={11} />
                          Member QR
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#D9FDD3] rounded-xl rounded-tr-xs p-2.5 ml-auto max-w-[75%] shadow-2xs">
                      <div className="text-[11.5px] text-[#1F1A17] font-medium">Show my vouchers</div>
                      <div className="text-[10px] text-[#5B534C]/70 text-right mt-0.5">10:43 AM ✓✓</div>
                    </div>

                    <div className="bg-white rounded-xl rounded-tl-xs p-3 shadow-2xs space-y-1.5 max-w-[90%]">
                      <div className="text-[11px] font-bold text-[#1F1A17]">Ready to Redeem (3,850 pts)</div>
                      <div className="p-2 rounded-lg bg-[#FAF5ED] flex justify-between items-center text-[11px]">
                        <span className="font-medium text-[#1F1A17]">Amazon ₹500 Gift Card</span>
                        <span className="font-bold text-[#B5651A]">500 pts</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#FAF5ED] flex justify-between items-center text-[11px]">
                        <span className="font-medium text-[#1F1A17]">Swiggy ₹300 Voucher</span>
                        <span className="font-bold text-[#B5651A]">300 pts</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-3 py-2.5 bg-[#F0F2F5] border-t border-black/5 flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[11px] text-[#847C75]">
                      Reply with voucher code or “Balance”
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#075E54] text-white flex items-center justify-center shrink-0">
                      <SendIcon size={13} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-approved DLT & WhatsApp Template Gallery */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-2">
              READY-TO-SEND TEMPLATES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#17140F]">
              Sample TRAI DLT &amp; Meta Utility Flows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DLT_TEMPLATES.map((tpl) => (
              <div
                key={tpl.name}
                className="rounded-3xl bg-[#FAF5ED]/75 border border-[#EBDFC6] p-6 sm:p-7 flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <span className="inline-block rounded-full bg-white border border-[#EBDFC6] px-2.5 py-0.5 text-[10px] font-mono font-bold text-[#B5651A]">
                    {tpl.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#17140F]">{tpl.name}</h3>
                  <p className="rounded-xl bg-white border border-[#EBDFC6] p-3.5 text-xs font-mono text-[#5B534C] leading-relaxed">
                    {tpl.sample}
                  </p>
                </div>
                <div className="text-xs font-mono font-bold text-emerald-700 pt-2 border-t border-[#EBDFC6]">
                  Benchmark: {tpl.openRate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="WHATSAPP LOYALTY FAQ"
        title="Frequently Asked Questions"
        faqs={WHATSAPP_FAQS}
        helpTitle="Test Live WhatsApp Enrolment in 5 Minutes"
        helpDescription="Scan a live sandbox QR code with your phone to experience the exact counter checkout flow."
        helpButtonText="Book Live WhatsApp Demo"
        helpButtonHref="/demo"
      />

      <PageCta />
    </MainLayout>
  );
};
export default ProductWhatsAppPage;
