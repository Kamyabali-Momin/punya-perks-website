import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { ArrowRightIcon, CheckCircle2Icon, ChevronDownIcon } from 'lucide-react';

export const PartnerApplyPage: React.FC = () => {
  const [applied, setApplied] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        eyebrow="PARTNER PROGRAM APPLICATION"
        title="Join our global partner network."
        description="Agencies, systems integrators, and software vendors receive dedicated partner sandboxes, deal registration, and co-marketing opportunities."
        breadcrumbs={[{ label: 'Company', href: '/about' }, { label: 'Partners', href: '/partners' }, { label: 'Apply' }]}
        primaryCtaText=""
        secondaryCtaText=""
        microcopy=""
      />

      <section className="py-14 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#BC3908] block">
              PARTNER BENEFITS
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#220901]">
              Built for agencies, SIs, and ecosystem connectors.
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#563E37]">
              {[
                'Multi-tenant partner developer portal and unlimited client sandboxes',
                'Deal registration protection and solutions engineer co-selling',
                'Certification workshops across Earn, Settlement, and Compliance modules',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5">
                  <CheckCircle2Icon size={17} className="text-[#BC3908] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[28px] border border-[#EADBC6] shadow-xl">
            {applied ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FDF0D5] text-[#941B0C] border border-[#F4D89C] mx-auto flex items-center justify-center font-bold text-xl">✓</div>
                <h4 className="font-display font-bold text-2xl text-[#220901]">Application Submitted</h4>
                <p className="text-sm text-[#563E37]">Our partner alliances team will review your application and respond within 2 business days.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-4">
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#826B63] mb-1.5">Company / Agency Name</label>
                  <input required placeholder="Northstar Digital Labs" className="w-full h-11 rounded-xl bg-[#FDFBF7] border border-[#EADBC6] px-4 text-xs sm:text-sm text-[#220901] outline-none focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908]" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#826B63] mb-1.5">Business Email</label>
                  <input type="email" required placeholder="alliances@agency.com" className="w-full h-11 rounded-xl bg-[#FDFBF7] border border-[#EADBC6] px-4 text-xs sm:text-sm text-[#220901] outline-none focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908]" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#826B63] mb-1.5">Partner Track</label>
                  <div className="relative">
                    <select className="w-full h-11 appearance-none rounded-xl bg-[#FDFBF7] border border-[#EADBC6] px-4 pr-10 text-xs sm:text-sm text-[#220901] font-medium outline-none focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] cursor-pointer">
                      <option>Digital Agency / Implementation Partner</option>
                      <option>Enterprise Systems Integrator (SI)</option>
                      <option>Technology / ISV Connector Partner</option>
                    </select>
                    <ChevronDownIcon size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#826B63]" />
                  </div>
                </div>
                <button type="submit" className="w-full h-12 px-6 rounded-xl bg-[#BC3908] hover:bg-[#941B0C] text-white font-body font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 group">
                  <span>Submit Partner Application</span>
                  <ArrowRightIcon size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default PartnerApplyPage;
