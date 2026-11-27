import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export const HomeCtaSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FDFBF7] py-16 sm:py-20 lg:py-24 font-body" id="closing-cta">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Banner with 3D studio background matching user reference image */}
        <div
          className="rounded-[24px] p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden min-h-[300px] sm:min-h-[340px] flex items-center bg-gradient-to-br from-[#220901] via-[#4A1106] to-[#621708] border border-[#621708] reveal-on-scroll"
        >
          {/* Subtle burnished gold glow accent */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#F6AA1C]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Left Narrative Column */}
          <div className="relative z-10 max-w-xl space-y-4">
            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.12] text-white">
              Not sure which plan or template fits?
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-body">
              A solutions engineer who has launched programmes in your market will tell you in 30 minutes.
            </p>

            <div className="pt-2 sm:pt-4">
              <a
                href="/demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#220901] font-body font-semibold text-sm hover:bg-[#F6EFE2] transition-all shadow-md cursor-pointer group"
              >
                <span>Talk to an expert</span>
                <ArrowRightIcon size={16} className="text-[#BC3908] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
