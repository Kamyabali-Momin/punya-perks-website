import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  return (
    <section className="w-full bg-[#FDFBF7] border-b border-[#EADBC6] py-16 sm:py-20 lg:py-24 font-body" id="customer-stories">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Header with View all stories link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12 reveal-on-scroll">
          <div>
            <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-2">
              CUSTOMER STORIES
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#220901] tracking-tight">
              Programmes that moved the numbers.
            </h2>
          </div>
          <a
            href="/customers"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#BC3908] hover:text-[#621708] transition-colors shrink-0"
          >
            <span>View all stories</span>
            <ArrowRightIcon size={14} />
          </a>
        </div>

        {/* Main Story Card with Wavy Marigold Banner BG */}
        <div
          className="rounded-[28px] border border-[#EADBC6] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden relative bg-[#F6EFE2] reveal-on-scroll delay-100"
          style={{
            backgroundImage: "radial-gradient(ellipse 70% 60% at 88% 18%, rgba(246, 170, 28, 0.16), transparent 65%), radial-gradient(ellipse 55% 55% at 12% 85%, rgba(188, 57, 8, 0.07), transparent 65%), linear-gradient(135deg, #FAF4E8 0%, #F6EFE2 100%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#BC3908] bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full uppercase tracking-wider inline-block border border-[#EADBC6]">
                RETAIL · INDIA
              </span>
              <h3 className="font-display font-normal text-2xl sm:text-3xl text-[#220901] tracking-tight">
                A national fashion retailer unified store and online loyalty
              </h3>
              <p className="text-sm sm:text-base text-[#563E37] leading-relaxed">
                Separate POS and e-commerce programmes became one ledger with a tier-adaptive app and WhatsApp enrolment; campaigns now launch in an afternoon.
              </p>

              <div className="pt-2">
                <a
                  href="/customers/retail-national"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#BC3908] hover:text-[#621708] transition-colors"
                >
                  <span>Read the story</span>
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>

            {/* Metric Callout & Visual Container */}
            <div className="lg:col-span-5 bg-white/85 backdrop-blur-md rounded-[24px] p-6 sm:p-8 border border-[#EADBC6] flex flex-col justify-center items-center text-center space-y-3 shadow-xs">
              <span className="font-display font-normal text-5xl sm:text-6xl text-[#BC3908] tracking-tight">
                +34%
              </span>
              <span className="font-mono text-xs sm:text-sm font-bold text-[#220901] uppercase tracking-wider">
                REPEAT PURCHASE LIFT
              </span>
              <p className="text-xs text-[#563E37] max-w-xs">
                Measured across 140 physical stores and Shopify e-commerce over the first 90 days of rollout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
