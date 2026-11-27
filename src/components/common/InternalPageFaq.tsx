import React, { useState } from 'react';
import { ChevronDownIcon, ArrowRightIcon } from 'lucide-react';

export interface FaqItem {
  q?: string;
  question?: string;
  a?: string;
  answer?: string;
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
  title,
  eyebrow,
  faqs = [
    {
      q: 'What is loyalty program software?',
      a: 'Loyalty program software is an enterprise operating system that manages member identities, calculates point earn and redeem rules across transactions, triggers automated promotional campaigns, and reconciles balance-sheet liabilities via an immutable ledger.',
    },
    {
      q: 'How is Punya Perks different from Capillary, Xoxoday or EasyRewardz?',
      a: 'Unlike legacy point-solution marketing tools, Punya Perks is built around an append-only financial ledger that guarantees 0% discrepancy between finance and marketing.',
    },
    {
      q: 'Can I run one programme across India, Australia and New Zealand?',
      a: 'Yes. Punya Perks supports multi-region, multi-currency tenant cells. You can maintain separate currency rules (INR, AUD, NZD) and regional privacy compliance while giving your global leadership a single unified analytics dashboard.',
    },
    {
      q: 'How long does implementation take?',
      a: 'Standard implementations go live in four weeks, not four quarters: Week 1 Provision, Week 2 Configure, Week 3 Connect pre-built POS/e-commerce integrations, and Week 4 Pilot and Launch.',
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes. We offer an instant developer sandbox with synthetic member data, sample POS event streams, and full API access with no credit card required.',
    },
  ],
  helpTitle = 'Need Help Choosing the Right Technology Solution?',
  helpDescription = 'Build smarter with AI-powered software, web, mobile, and enterprise solutions tailored to your business.',
  helpButtonText = 'Contact',
  helpButtonHref = '/contact',
  className = 'w-full py-16 sm:py-24 bg-[#FDFBF7] border-t border-[#EADBC6] font-body',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`${className} reveal-on-scroll`} aria-labelledby="internal-faq-title">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Optional Section Heading if explicitly provided */}
        {(title || eyebrow) && (
          <div className="text-center mb-10 sm:mb-14">
            {eyebrow && (
              <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-2">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                id="internal-faq-title"
                className="font-display font-normal text-3xl sm:text-4xl text-[#220901] tracking-tight"
              >
                {title}
              </h2>
            )}
          </div>
        )}

        {/* 2-Column Exact Structure Matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Dark Card with signature brown ambient glow */}
          <div className="lg:col-span-4 w-full">
            <div
              className="rounded-3xl overflow-hidden p-7 sm:p-8 flex flex-col justify-between text-white shadow-xl relative bg-gradient-to-br from-[#220901] via-[#4A1106] to-[#621708] border border-[#621708] min-h-[380px]"
            >
              {/* Top brand header & text */}
              <div>
                {/* Brand Logo Pill */}
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#BC3908] flex items-center justify-center font-display font-bold text-white text-sm shadow-xs">
                    P
                  </div>
                  <span className="font-display italic font-semibold text-white text-base tracking-tight">
                    Punya Perks
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-normal text-2xl sm:text-[26px] leading-[1.25] text-white mt-8 sm:mt-10">
                  {helpTitle}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed mt-4 font-body">
                  {helpDescription}
                </p>
              </div>

              {/* Bottom Contact Button with Arrow */}
              <div className="pt-8">
                <a
                  href={helpButtonHref}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#220901] font-body font-medium text-xs sm:text-sm hover:bg-[#F6EFE2] transition-all shadow-md group cursor-pointer"
                >
                  <span>{helpButtonText}</span>
                  <ArrowRightIcon
                    size={14}
                    className="text-[#220901] group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Accordion Rows with Border Dividers */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#EADBC6] border-y border-[#EADBC6]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const question = faq.q || faq.question || '';
              const answer = faq.a || faq.answer || '';

              return (
                <div key={idx} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body font-semibold text-base sm:text-lg text-[#220901] group-hover:text-[#BC3908] transition-colors leading-snug">
                      {question}
                    </span>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#FDFBF7] border border-[#EADBC6] flex items-center justify-center text-[#220901] group-hover:border-[#BC3908]/40 transition-all">
                      <ChevronDownIcon
                        size={15}
                        className={`transition-transform duration-300 ease-in-out ${
                          isOpen ? 'rotate-180 text-[#BC3908]' : 'text-[#826B63]'
                        }`}
                      />
                    </span>
                  </button>

                  {/* Smooth Collapse Animation Container */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 mt-3'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-[13.5px] text-[#563E37] leading-relaxed pr-6 font-body">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
