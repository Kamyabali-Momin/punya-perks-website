import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';

export const RegionAustraliaPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="LOYALTY PROGRAMME SOFTWARE · AUSTRALIA"
        title="Compliant loyalty software for Australian brands."
        description="Australian Privacy Principles (APPs), Spam Act commercial message consent, state unclaimed-money rules for cash-convertible points, AUD pricing, and Sydney AWS cell."
        breadcrumbs={[{ label: 'Regions' }, { label: 'Australia' }]}
      />

      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[28px] bg-white p-8 border border-[#EADBC6] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#220901]">Privacy Act & APPs</h3>
            <p className="text-xs sm:text-sm text-[#220901]/75">Strict adherence to the 13 Australian Privacy Principles with clear collection notices and opt-outs.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#EADBC6] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#220901]">Spam Act 2003 Consent</h3>
            <p className="text-xs sm:text-sm text-[#220901]/75">Double opt-in tracking for promotional messages and one-click unsubscribe links automatically honored.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#EADBC6] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#220901]">Sydney AWS Residency</h3>
            <p className="text-xs sm:text-sm text-[#220901]/75">Dedicated database cell hosted in AWS Sydney (ap-southeast-2) with sub-30ms nationwide latency.</p>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default RegionAustraliaPage;
