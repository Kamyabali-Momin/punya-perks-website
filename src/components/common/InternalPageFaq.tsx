import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

export interface InternalPageFaqProps {
  title?: string;
  eyebrow?: string;
  faqs?: FaqItem[];
  helpTitle?: string;
  helpDescription?: string;
  helpButtonText?: string;
  helpButtonHref?: string;
  className?: string;
}

export const InternalPageFaq: React.FC<InternalPageFaqProps> = ({
  title = 'Frequently asked architecture & rollout questions',
  eyebrow = 'QUESTIONS & ANSWERS',
  faqs = [
    {
      q: 'How long does a typical Punya Perks production rollout take?',
      a: 'Most retail and e-commerce brands launch in 4 to 6 weeks. Our pre-built connectors for Shopify, Magento, Posist, and Pine Labs allow ledger testing in sandbox within your first week.',
    },
    {
      q: 'Can we run dual ledgers during our transition from legacy loyalty?',
      a: 'Yes. Punya Perks supports parallel transaction auditing and automated point balance ingestion via our migration API, ensuring zero downtime and zero point loss for your members.',
    },
    {
      q: 'Does Punya Perks support regional tax compliance and GST?',
      a: 'Absolutely. Line-item tax exclusions, GST handling for Indian retail, and AUD/NZD multi-currency ledgers are natively configurable out of the box.',
    },
    {
      q: 'How does the WhatsApp member experience work without an app install?',
      a: 'Members authenticate using OTP over WhatsApp. They can check real-time point balance, redeem reward vouchers, and receive purchase receipts instantly without downloading a native mobile app.',
    },
    {
      q: 'What are the developer API rate limits and SLA guarantees?',
      a: 'Growth plans support 600 req/min, while Enterprise plans scale to 2,500+ req/min with dedicated database clusters and a 99.95% API uptime SLA.',
    },
  ],
  helpTitle = 'Need help designing your loyalty architecture?',
  helpDescription = 'Connect with our solutions architects to review your POS, e-commerce catalog, and campaign requirements for a tailor-fit implementation roadmap.',
  helpButtonText = 'Talk to an expert',
  helpButtonHref = '/demo',
  className = 'w-full py-16 sm:py-24 bg-[#FFFFFF] border-t border-[#EBDFC6] font-body',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={className} aria-labelledby="internal-faq-title">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#B5651A] mb-3 font-body">
            {eyebrow}
          </div>
          <h2
            id="internal-faq-title"
            className="font-display text-3xl sm:text-4xl lg:text-[42px] text-[#17140F] tracking-tight leading-[1.2]"
          >
            {title}
          </h2>
        </div>

        {/* 2-Column Split: Left Promo Card + Right Accordions (Deskmerit Pattern) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Dark Accent Callout Highlight Box */}
          <div className="col-span-1 lg:col-span-5 min-w-0 max-w-full w-full">
            <div className="rounded-3xl bg-gradient-to-br from-[#17140F] via-[#241A13] to-[#1A1510] p-8 sm:p-10 text-white shadow-xl border border-[#3E2C20] relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              {/* Subtle Radial Glow in background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B5651A]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D9822B]/20 rounded-full blur-2xl pointer-events-none -ml-16 -mb-16" />

              <div className="relative z-10">
                {/* Brand Logo in Reverse */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#B5651A] text-white flex items-center justify-center font-bold text-sm">
                    P
                  </div>
                  <span className="font-display italic text-xl text-[#EBDFC6]">Perks</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                  {helpTitle}
                </h3>

                <p className="text-xs sm:text-sm text-[#EBDFC6]/80 leading-relaxed mt-4 font-body">
                  {helpDescription}
                </p>
              </div>

              <div className="pt-8 relative z-10">
                <a
                  href={helpButtonHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#17140F] hover:bg-[#FAF5ED] hover:text-[#B5651A] font-semibold text-xs sm:text-sm shadow-md transition-all group cursor-pointer font-body"
                >
                  <span>{helpButtonText}</span>
                  <ArrowRight size={14} className="text-[#B5651A] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Accordion List with Plus / Minus */}
          <div className="col-span-1 lg:col-span-7 divide-y divide-[#EBDFC6]/70">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 group focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body text-base sm:text-lg font-semibold text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <span className="shrink-0 mt-1 flex items-center justify-center w-7 h-7 rounded-full bg-[#FAF5ED] text-[#B5651A] border border-[#EBDFC6] group-hover:bg-[#B5651A] group-hover:text-white transition-all">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8">
                      <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed font-body">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
