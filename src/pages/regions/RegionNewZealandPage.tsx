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

      <section className="py-16 sm:py-20 bg-[#F3EBDD] border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">Privacy Act 2020 Compliance</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">Information privacy principles and mandatory breach reporting frameworks built in.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">NZ Retail POS Connectors</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">Pre-built integrations for Vend by Lightspeed, Shopify POS, and local payments.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">NZD Native Settlement</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">No currency conversion loss: pricing, points liability, and invoicing in New Zealand Dollars.</p>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default RegionNewZealandPage;
