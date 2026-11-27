import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Karan Malhotra',
      role: 'Head of Digital Operations- Lifestyle',
      image: '/images/testimonials/karan-malhotra.jpg',
      quote:
        'Punya Perks has made it easier to create personalised customer experiences through targeted rewards and promotional campaigns. The platform allows us to manage different customer segments, configure earning rules and track campaign performance without depending on multiple disconnected tools.',
      rating: 4.0,
      stars: 4,
    },
    {
      name: 'Vikram Singhania',
      role: 'VP of Customer Retention - Croma',
      image: '/images/testimonials/karan-malhotra.jpg',
      quote:
        'We launched three campaigns in the first fortnight. The previous platform took three weeks per campaign. The immutable financial ledger gives finance and marketing the exact same real-time truth with 0% discrepancy.',
      rating: 5.0,
      stars: 5,
    },
    {
      name: 'Sarah Jenkins',
      role: 'Director of Digital Experience - AU Retail',
      image: '/images/testimonials/karan-malhotra.jpg',
      quote:
        'Our regional stores get local rulebooks while we maintain global brand defaults and privacy compliance under the Australian Privacy Act. That operational flexibility saved our rollout timeline.',
      rating: 5.0,
      stars: 5,
    },
  ];

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#FDFBF7] border-b border-[#EADBC6] py-16 sm:py-20 lg:py-24 font-body" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-on-scroll">
          <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-3">
            WHAT OPERATORS SAY
          </span>
          <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#220901] tracking-tight leading-[1.18]">
            Teams that stopped reconciling spreadsheets.
          </h2>
        </div>

        {/* 2 Cards Layout matching user reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Card (7 cols on lg, 8 cols on xl): Operator Testimonial */}
          <div className="lg:col-span-7 xl:col-span-8 min-w-0 rounded-[24px] bg-[#F6EFE2] p-6 sm:p-7 md:p-8 border border-[#EADBC6] shadow-xs flex flex-col justify-between reveal-on-scroll">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 items-start sm:items-stretch min-w-0">
              {/* Operator Photo */}
              <div className="w-full sm:w-[200px] md:w-[220px] aspect-[4/4] sm:aspect-auto rounded-[16px] overflow-hidden bg-[#621708] shrink-0 shadow-xs">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Review Narrative */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-[20px] text-[#220901] leading-tight mb-1">
                    {current.name}
                  </h3>
                  <div className="text-xs sm:text-[13px] text-[#563E37] font-body mb-4 font-normal">
                    {current.role}
                  </div>

                  <p className="font-body text-xs sm:text-[13.5px] text-[#563E37] leading-[1.65] font-normal">
                    {current.quote}
                  </p>
                </div>

                {/* Rating & Nav Controls (No divider line, matching reference) */}
                <div className="flex items-center justify-between pt-6 mt-auto">
                  {/* Stars Rating */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        className={
                          star <= current.stars
                            ? 'fill-[#F6AA1C] text-[#F6AA1C]'
                            : 'fill-[#EADBC6] text-[#EADBC6]'
                        }
                      />
                    ))}
                    <span className="text-xs font-semibold text-[#220901] ml-1.5 font-body">
                      ({current.rating.toFixed(1)})
                    </span>
                  </div>

                  {/* Slider Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#220901]/30 flex items-center justify-center text-[#220901] hover:bg-[#220901] hover:text-white transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#220901]/30 flex items-center justify-center text-[#220901] hover:bg-[#220901] hover:text-white transition-colors cursor-pointer"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card (5 cols on lg, 4 cols on xl): Loyalty Strategy CTA Card */}
          <a
            href="/contact"
            className="lg:col-span-5 xl:col-span-4 rounded-[24px] p-7 sm:p-8 relative overflow-hidden shadow-md border border-[#621708] flex flex-col justify-between bg-gradient-to-br from-[#220901] via-[#4A1106] to-[#621708] text-white group cursor-pointer min-h-[260px] sm:min-h-[320px] lg:min-h-[340px] hover:border-[#F6AA1C]/70 transition-all duration-300 reveal-on-scroll delay-100"
          >
            <div className="absolute -right-12 -top-12 w-56 h-56 bg-[#F6AA1C]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#F6AA1C]">
                LOYALTY STRATEGY
              </span>
              <h3 className="font-display font-normal text-2xl sm:text-[28px] leading-snug text-white">
                Still mapping where loyalty drives the biggest margin lift?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-body">
                Walk through real store checkout benchmarks, tier economics, and POS cutover timelines with a Punya Perks architect.
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#220901] font-body font-semibold text-xs sm:text-sm group-hover:bg-[#F6EFE2] transition-colors shadow-sm">
                <span>Book Architecture Call</span>
                <ArrowRight size={14} className="text-[#BC3908] group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
