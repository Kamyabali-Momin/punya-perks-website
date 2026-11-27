import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { CoffeeIcon, QrCodeIcon, CalendarIcon, Building2Icon } from 'lucide-react';

export const SolutionsHospitalityPage: React.FC = () => {
  const pillars = [
    {
      title: 'Visit Stamp Cards',
      desc: 'Replace lost paper punch cards with automated smartphone wallet stamps and milestone bonuses after each restaurant dining or coffee session.',
    },
    {
      title: 'Table QR Ordering Points',
      desc: 'Seamlessly credit points when diners scan table QR codes to pay bills, view digital menus, or claim happy-hour table multipliers.',
    },
    {
      title: 'Franchisee Flexibility',
      desc: 'Franchise outlets run localized off-peak offers and neighborhood perks while corporate maintains central brand ledger and breakage settlement.',
    },
  ];

  const playbooks = [
    {
      icon: CoffeeIcon,
      title: 'Off-Peak Daypart Multipliers',
      desc: 'Automatically offer 2x points between 3 PM and 6 PM on weekdays to shift traffic into quieter dining hours without slashing menu prices.',
    },
    {
      icon: QrCodeIcon,
      title: 'Instant Petpooja & POS Counter Sync',
      desc: 'Diners share their mobile number or flash a WhatsApp QR at the billing desk to earn and burn complimentary appetizers in seconds.',
    },
    {
      icon: CalendarIcon,
      title: 'Birthday Month & Anniversary Dining',
      desc: 'Trigger personalized complimentary dessert vouchers and VIP table priority automatically 7 days before a member’s milestone date.',
    },
    {
      icon: Building2Icon,
      title: 'Multi-Outlet Settlement Ledger',
      desc: 'When a guest earns points at Airport Cafe and redeems at Downtown Bistro, the inter-outlet clearing ledger reconciles franchisee payables automatically.',
    },
  ];

  const faqs = [
    {
      q: 'Does Punya Perks integrate with restaurant POS systems like Petpooja and Lightspeed?',
      a: 'Yes. Pre-built POS connectors capture closed table checks in real time, apply menu-category exclusions (like alcohol or service charges), and post points before the guest leaves the table.',
    },
    {
      q: 'How do you handle franchisee vs. corporate-owned outlet billing?',
      a: 'Our multi-outlet settlement report tracks exactly which franchisee issued points and which franchisee fulfilled a reward, generating clean monthly net settlement statements.',
    },
    {
      q: 'Can guests enroll at the table without installing an app?',
      a: 'Yes. Table-tent QR codes launch a 10-second WhatsApp enrolment flow that delivers an instant welcome perk and Apple/Google Wallet pass.',
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="SOLUTIONS · HOSPITALITY & QSR"
        title="Drive visit frequency, not just discount chasing."
        description="Table QR check-ins, digital visit stamp cards, automated birthday dining vouchers, and happy hour point accelerators."
        breadcrumbs={[{ label: 'Solutions' }, { label: 'Hospitality & QSR' }]}
        image="/images/products/user-web-campaigns.png"
        imageAlt="Punya Perks Hospitality Campaigns & Visit Challenges"
      />

      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, idx) => (
              <div key={p.title} className="rounded-[28px] bg-white p-8 border border-[#EADBC6] space-y-3 shadow-xs">
                <span className="font-body text-xs font-bold text-[#BC3908]">0{idx + 1} // GUEST FREQUENCY</span>
                <h3 className="font-display font-bold text-xl text-[#220901]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#220901]/75 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: '+28%', label: 'Increase in monthly repeat visits' },
              { metric: '10 sec', label: 'Table-tent QR WhatsApp enrolment' },
              { metric: '2.4x', label: 'Redemption lift on off-peak offers' },
              { metric: '100%', label: 'Automated franchisee outlet clearing' },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-white border border-[#EADBC6] text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#BC3908]">{s.metric}</div>
                <p className="text-xs text-[#563E37] mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-body text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-2">
              HOSPITALITY PLAYBOOKS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#220901]">
              Turn First-Time Diners into Regulars Across Every Outlet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {playbooks.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-7 rounded-3xl bg-[#FDFBF7] border border-[#EADBC6] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#EADBC6] flex items-center justify-center text-[#BC3908] shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-[#220901]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#563E37] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="HOSPITALITY FAQ"
        title="Questions restaurant & hotel operators ask"
        faqs={faqs}
        helpTitle="Launching loyalty across dining or cafe locations?"
        helpDescription="See live table-QR enrolment, stamp cards, and franchisee settlement reports in a 20-minute demo."
        helpButtonText="Book hospitality demo"
        helpButtonHref="/demo"
      />

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsHospitalityPage;
