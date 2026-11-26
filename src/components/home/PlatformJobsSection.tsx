import React, { useState } from 'react';
import { homeData } from '../../data/home';
import { CheckCircle2 } from 'lucide-react';

export const PlatformJobsSection: React.FC = () => {
  const { fourJobs } = homeData;
  const [selectedPlaybookId, setSelectedPlaybookId] = useState<string>('retail');

  const currentPlaybook =
    fourJobs.playbooks.find((p) => p.id === selectedPlaybookId) || fourJobs.playbooks[0];

  return (
    <section className="w-full bg-[#FFFDF9] border-b border-[#EBDFC6] py-16 sm:py-20 lg:py-24 font-body" id="platform-jobs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & 5 Pill Tabs */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block">
              {fourJobs.eyebrow}
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#17140F] tracking-tight leading-[1.12]">
              Earn, redeem, engage, <span className="italic text-[#C4681A]">operate.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5B534C] leading-relaxed">
              {fourJobs.description}
            </p>

            {/* 5 Pill Tabs */}
            <div className="pt-2 flex flex-wrap gap-2">
              {fourJobs.playbooks.map((p) => {
                const isSelected = selectedPlaybookId === p.id;
                const shortLabel = p.name.includes('&') ? p.name.split('&')[0].trim() : p.name.split(' ')[0];
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlaybookId(p.id)}
                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#B5651A] text-white shadow-sm font-bold'
                        : 'bg-[#F4ECDC] text-[#17140F] hover:bg-[#ede1ce] border border-[#EBDFC6]'
                    }`}
                  >
                    {shortLabel}
                  </button>
                );
              })}
            </div>

            {/* Active Playbook Dynamic Snapshot */}
            <div className="p-5 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A]">
                  {currentPlaybook.name}
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FEF0E1] text-[#B5651A] border border-[#F6DECA]">
                  {currentPlaybook.sampleMetric}
                </span>
              </div>
              <p className="text-xs text-[#5B534C] leading-relaxed">
                {currentPlaybook.tagline}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {currentPlaybook.coreMechanisms.slice(0, 2).map((mech, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#17140F]">
                    <CheckCircle2 size={13} className="text-[#1B8756] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{mech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tablet Device Mockup with Nova Rewards UI */}
          <div className="lg:col-span-7 flex items-center justify-center relative">
            <div className="w-full relative group">
              <img
                src={fourJobs.mockupImage || '/images/platform-portal-tablet.png'}
                alt="Punya Perks Member & Operator Portal Mockup"
                className="w-full h-auto object-contain drop-shadow-2xl group-hover:scale-[1.01] transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformJobsSection;
