import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { UtensilsIcon, CheckCircle2Icon } from 'lucide-react';

export const SolutionsHospitalityPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="SOLUTIONS · HOSPITALITY & QSR"
        title="Drive visit frequency, not just discount chasing."
        description="Table QR check-ins, digital visit stamp cards, automated birthday dining vouchers, and happy hour point accelerators."
        breadcrumbs={[{ label: 'Solutions' }, { label: 'Hospitality & QSR' }]}
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">Visit Stamp Cards</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">Replace lost paper cards with automated smartphone wallet stamps after each restaurant dining session.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">Table QR Ordering Points</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">Seamlessly credit points when diners scan table QR codes to pay bills or view digital menus.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">Franchisee Flexibility</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">Franchisees customize local store perks while corporate maintains central brand ledger control.</p>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsHospitalityPage;
