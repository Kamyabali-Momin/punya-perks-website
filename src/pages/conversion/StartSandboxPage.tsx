import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';

export const StartSandboxPage: React.FC = () => {
  const [provisioned, setProvisioned] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        eyebrow="START IN SANDBOX"
        title="A sandbox tenant in two minutes."
        description="Synthetic members, recorded vendor responses, replayable webhooks and the full admin console. Free, no credit card required."
        breadcrumbs={[{ label: 'Developer Sandbox' }]}
        primaryCtaText=""
        secondaryCtaText=""
        microcopy=""
      />

      <section className="py-16 sm:py-20 bg-[#F3EBDD] border-b border-[#E8DCC9]">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-[28px] border border-[#E8DCC9] shadow-sm">
            {provisioned ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center font-bold text-xl">✓</div>
                <h4 className="font-display font-bold text-2xl text-[#1F1A17]">Sandbox Ready!</h4>
                <p className="text-sm text-[#1F1A17]/70">We have provisioned your tenant console and API keys. Check your inbox to begin.</p>
                <div className="pt-2 font-mono text-xs bg-[#F3EBDD] p-3 rounded-[12px] text-[#D9822B]">
                  Tenant Endpoint: https://sandbox-ap-south-1.punyaperks.com/v1
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setProvisioned(true); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1A17]/70 mb-1">Work Email</label>
                  <input type="email" required placeholder="developer@brand.com" className="w-full rounded-[14px] bg-[#F3EBDD] border border-[#E8DCC9] px-4 py-2.5 text-xs sm:text-sm text-[#1F1A17] outline-none focus:border-[#D9822B]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1A17]/70 mb-1">Company / Brand Name</label>
                  <input required placeholder="Nova Brands" className="w-full rounded-[14px] bg-[#F3EBDD] border border-[#E8DCC9] px-4 py-2.5 text-xs sm:text-sm text-[#1F1A17] outline-none focus:border-[#D9822B]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1A17]/70 mb-1">Primary Market Region</label>
                  <select className="w-full rounded-[14px] bg-[#F3EBDD] border border-[#E8DCC9] px-4 py-2.5 text-xs sm:text-sm text-[#1F1A17] outline-none focus:border-[#D9822B]">
                    <option>India (ap-south-1) · INR</option>
                    <option>Australia (ap-southeast-2) · AUD</option>
                    <option>New Zealand · NZD</option>
                    <option>Global / US · USD</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-3.5 px-6 rounded-full bg-[#D9822B] text-white font-display font-semibold text-xs sm:text-sm hover:bg-[#B5651A] transition-all cursor-pointer">
                  Provision Instant Free Sandbox
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default StartSandboxPage;
