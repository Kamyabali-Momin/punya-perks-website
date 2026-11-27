import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';

export const RegionNewZealandPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="LOYALTY PROGRAMME SOFTWARE · NEW ZEALAND"
        title="Turnkey loyalty for New Zealand retailers and enterprises."
        description="Privacy Act 2020 notices, Unsolicited Electronic Messages Act compliance, local Shopify/Lightspeed POS connectors, and NZD billing."
        breadcrumbs={[{ label: 'Regions' }, { label: 'New Zealand' }]}
      />

      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[28px] bg-white p-8 border border-[#EADBC6] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#220901]">Privacy Act 2020 Compliance</h3>
            <p className="text-xs sm:text-sm text-[#220901]/75">Information privacy principles and mandatory breach reporting frameworks built in.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#EADBC6] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#220901]">NZ Retail POS Connectors</h3>
            <p className="text-xs sm:text-sm text-[#220901]/75">Pre-built integrations for Vend by Lightspeed, Shopify POS, and local payments.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#EADBC6] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#220901]">NZD Native Settlement</h3>
            <p className="text-xs sm:text-sm text-[#220901]/75">No currency conversion loss: pricing, points liability, and invoicing in New Zealand Dollars.</p>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default RegionNewZealandPage;
