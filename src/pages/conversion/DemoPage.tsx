import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { CheckCircle2Icon } from 'lucide-react';

export const DemoPage: React.FC = () => {
  const [booked, setBooked] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        eyebrow="REQUEST A DEMO"
        title="See your programme running, with your rules."
        description="A 45-minute walkthrough with a solutions engineer who has launched programmes in your industry and market."
        breadcrumbs={[{ label: 'Request a Demo' }]}
        primaryCtaText=""
        secondaryCtaText=""
        microcopy=""
      />

      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-2xl text-[#220901]">What we cover on the call:</h3>
            <ul className="space-y-4 text-xs sm:text-sm text-[#220901]/80">
              <li className="flex items-start gap-2.5">
                <CheckCircle2Icon size={18} className="text-[#BC3908] shrink-0 mt-0.5" />
                <span>Live member app and admin console walkthrough tailored to your brand</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2Icon size={18} className="text-[#BC3908] shrink-0 mt-0.5" />
                <span>Your specific earn mechanisms and tier multipliers modeled live</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2Icon size={18} className="text-[#BC3908] shrink-0 mt-0.5" />
                <span>Compliance and data residency architecture for India (DPDP), Australia, or New Zealand</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2Icon size={18} className="text-[#BC3908] shrink-0 mt-0.5" />
                <span>Clear migration roadmap from your legacy vendor without downtime</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[28px] border border-[#EADBC6] shadow-sm">
            {booked ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center font-bold text-xl">✓</div>
                <h4 className="font-display font-bold text-2xl text-[#220901]">Demo Request Confirmed</h4>
                <p className="text-sm text-[#220901]/70">We have sent calendar invites and preliminary notes to your work email.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#220901]/70 mb-1">Work Email</label>
                    <input type="email" required placeholder="you@company.com" className="w-full rounded-[14px] bg-[#F6EFE2] border border-[#EADBC6] px-4 py-2.5 text-xs sm:text-sm text-[#220901] outline-none focus:border-[#BC3908]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#220901]/70 mb-1">Full Name</label>
                    <input required placeholder="Aryan Verma" className="w-full rounded-[14px] bg-[#F6EFE2] border border-[#EADBC6] px-4 py-2.5 text-xs sm:text-sm text-[#220901] outline-none focus:border-[#BC3908]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#220901]/70 mb-1">Company Name</label>
                    <input required placeholder="Acme Retail" className="w-full rounded-[14px] bg-[#F6EFE2] border border-[#EADBC6] px-4 py-2.5 text-xs sm:text-sm text-[#220901] outline-none focus:border-[#BC3908]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#220901]/70 mb-1">Industry</label>
                    <select className="w-full rounded-[14px] bg-[#F6EFE2] border border-[#EADBC6] px-4 py-2.5 text-xs sm:text-sm text-[#220901] outline-none focus:border-[#BC3908]">
                      <option>Retail & Fashion</option>
                      <option>Banks & Fintech</option>
                      <option>Hospitality & QSR</option>
                      <option>E-commerce & D2C</option>
                      <option>Coalition & Enterprise</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full py-3.5 px-6 rounded-full bg-[#F6AA1C] text-white font-display font-semibold text-xs sm:text-sm hover:bg-[#BC3908] transition-all cursor-pointer">
                  Schedule My 45-Minute Walkthrough
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default DemoPage;
