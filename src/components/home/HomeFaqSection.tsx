import React, { useState } from 'react';
import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';

export const HomeFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Top 5 essential FAQs (last 2 removed as requested)
  const faqs = [
    {
      question: 'What is loyalty program software?',
      answer:
        'Loyalty program software is an enterprise operating system that manages member identities, calculates point earn and redeem rules across transactions, triggers automated promotional campaigns, and reconciles balance-sheet liabilities via an immutable ledger.',
    },
    {
      question: 'How is Punya Perks different from Capillary, Xoxoday or EasyRewardz?',
      answer:
        'Unlike legacy point-solution marketing tools, Punya Perks is built around an append-only financial ledger that guarantees 0% discrepancy between finance and marketing. It provides pre-built compliance for India (DPDP Act, TRAI DLT, UPI cash-out), Australia (APPs, Spam Act), and New Zealand (Privacy Act 2020) out of the box.',
    },
    {
      question: 'Can I run one programme across India, Australia and New Zealand?',
      answer:
        'Yes. Punya Perks supports multi-region, multi-currency tenant cells. You can maintain separate currency rules (INR, AUD, NZD) and regional privacy compliance while giving your global leadership a single unified analytics dashboard.',
    },
    {
      question: 'How long does implementation take?',
      answer:
        'Standard implementations go live in four weeks, not four quarters: Week 1 Provision, Week 2 Configure, Week 3 Connect pre-built POS/e-commerce integrations, and Week 4 Pilot and Launch.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes. We offer an instant developer sandbox with synthetic member data, sample POS event streams, and full API access with no credit card required.',
    },
  ];

  return (
    <section className="w-full bg-[#FDFBF7] border-b border-[#EADBC6] py-16 sm:py-20 lg:py-24 font-body" id="faq">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal-on-scroll">
          <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-2">
            FAQ
          </span>
          <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#220901] tracking-tight">
            Questions buyers ask first
          </h2>
        </div>

        {/* 2-Column Equal Height Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Dark Card - Matches exact height of the FAQ list */}
          <div className="lg:col-span-4 flex flex-col h-full reveal-on-scroll">
            <div
              className="rounded-[20px] overflow-hidden p-7 sm:p-8 flex flex-col justify-between text-white shadow-xl relative bg-gradient-to-br from-[#220901] via-[#4A1106] to-[#621708] border border-[#621708] h-full min-h-[280px] lg:min-h-[380px]"
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
                  Need Help Choosing the Right Technology Solution?
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed mt-4 font-body">
                  Build smarter with AI-powered software, web, mobile, and enterprise solutions tailored to your business.
                </p>
              </div>

              {/* Bottom Contact Button */}
              <div className="pt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#220901] font-body font-medium text-xs sm:text-sm hover:bg-[#F6EFE2] transition-all shadow-md group"
                >
                  <span>Contact</span>
                  <ArrowRightIcon size={14} className="text-[#220901] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Rows with Smooth Collapse */}
          <div className="lg:col-span-8 flex flex-col justify-between divide-y divide-[#EADBC6] border-y border-[#EADBC6] h-full reveal-on-scroll delay-100">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 sm:py-5.5 transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                  >
                    <span className="font-body font-semibold text-base sm:text-lg text-[#220901] group-hover:text-[#BC3908] transition-colors">
                      {faq.question}
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
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-[13.5px] text-[#563E37] leading-relaxed pr-6">
                        {faq.answer}
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
