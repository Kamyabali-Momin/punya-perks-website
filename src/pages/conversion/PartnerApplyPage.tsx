import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';

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

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6]">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-[28px] border border-[#EBDFC6] shadow-sm">
            {applied ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center font-bold text-xl">✓</div>
                <h4 className="font-display font-bold text-2xl text-[#1F1A17]">Application Submitted</h4>
                <p className="text-sm text-[#1F1A17]/70">Our partner alliances team will review your application and respond within 2 business days.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1A17]/70 mb-1">Company / Agency Name</label>
                  <input required className="w-full rounded-[14px] bg-[#FAF5ED] border border-[#EBDFC6] px-4 py-2.5 text-xs sm:text-sm text-[#1F1A17] outline-none focus:border-[#B5651A]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1A17]/70 mb-1">Business Email</label>
                  <input type="email" required className="w-full rounded-[14px] bg-[#FAF5ED] border border-[#EBDFC6] px-4 py-2.5 text-xs sm:text-sm text-[#1F1A17] outline-none focus:border-[#B5651A]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1A17]/70 mb-1">Partner Track</label>
                  <select className="w-full rounded-[14px] bg-[#FAF5ED] border border-[#EBDFC6] px-4 py-2.5 text-xs sm:text-sm text-[#1F1A17] outline-none focus:border-[#B5651A]">
                    <option>Digital Agency / Implementation Partner</option>
                    <option>Enterprise Systems Integrator (SI)</option>
                    <option>Technology / ISV Connector Partner</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-3.5 px-6 rounded-full bg-[#D9822B] text-white font-display font-semibold text-xs sm:text-sm hover:bg-[#B5651A] transition-all cursor-pointer">
                  Submit Partner Application
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
