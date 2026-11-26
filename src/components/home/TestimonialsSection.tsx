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
    <section className="w-full bg-[#FFFDF9] border-b border-[#EBDFC6] py-16 sm:py-20 lg:py-24 font-body" id="testimonials">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-3">
            WHAT OPERATORS SAY
          </span>
          <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#17140F] tracking-tight leading-[1.18]">
            Teams that stopped reconciling spreadsheets.
          </h2>
        </div>

        {/* 2 Cards Layout matching user reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Card (7 cols on lg, 8 cols on xl): Operator Testimonial */}
          <div className="lg:col-span-7 xl:col-span-8 rounded-[24px] bg-[#FAF5ED] p-6 sm:p-7 md:p-8 border border-[#D07237]/60 shadow-xs flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 items-start sm:items-stretch">
              {/* Operator Photo */}
              <div className="w-full sm:w-[210px] md:w-[230px] aspect-[4/5] sm:aspect-auto rounded-[16px] overflow-hidden bg-[#533923] shrink-0 shadow-xs">
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
                  <h3 className="font-display font-bold text-lg sm:text-[20px] text-[#17140F] leading-tight mb-1">
                    {current.name}
                  </h3>
                  <div className="text-xs sm:text-[13px] text-[#5A5248] font-body mb-4 font-normal">
                    {current.role}
                  </div>

                  <p className="font-body text-xs sm:text-[13.5px] text-[#5A5248] leading-[1.65] font-normal">
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
                            ? 'fill-[#F59E0B] text-[#F59E0B]'
                            : 'fill-[#D1C7BA] text-[#D1C7BA]'
                        }
                      />
                    ))}
                    <span className="text-xs font-semibold text-[#17140F] ml-1.5 font-body">
                      ({current.rating.toFixed(1)})
                    </span>
                  </div>

                  {/* Slider Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#17140F]/30 flex items-center justify-center text-[#17140F] hover:bg-[#17140F] hover:text-white transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#17140F]/30 flex items-center justify-center text-[#17140F] hover:bg-[#17140F] hover:text-white transition-colors cursor-pointer"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card (5 cols on lg, 4 cols on xl): AI Strategy CTA Card */}
          <a
            href="/contact"
            className="lg:col-span-5 xl:col-span-4 rounded-[24px] relative overflow-hidden shadow-xs border border-[#D07237]/60 block group cursor-pointer bg-cover bg-center min-h-[340px] hover:scale-[1.01] transition-transform duration-300"
            style={{
              backgroundImage: "url('/images/testimonials/ai-card-full.jpg')",
              backgroundColor: '#24130A',
            }}
            aria-label="Still Wondering Where AI Can Make the Biggest Difference? Contact Punya Perks"
          >
            <span className="sr-only">Still Wondering Where AI Can Make the Biggest Difference? Contact Punya Perks</span>
          </a>
        </div>
      </div>
    </section>
  );
};
