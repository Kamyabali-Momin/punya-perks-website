import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { CheckCircle2Icon, ShieldCheckIcon } from 'lucide-react';

export const RegionIndiaPage: React.FC = () => {
  const compliancePoints = [
    { title: 'Digital Personal Data Protection (DPDP) Act', desc: 'Granular consent notice capture with version history, itemized purpose tagging, and automated Data Principal erasure workflows.' },
    { title: 'TRAI DLT Template Registration', desc: 'Pre-registered promotional and transactional SMS headers and templates for instant telco clearance across Airtel, Jio, and Vi.' },
    { title: 'WhatsApp-First Enrolment', desc: 'Onboard shoppers in 2 seconds at store counters using phone-number WhatsApp opt-in without requiring manual paper forms.' },
    { title: 'Licensed UPI Cash-Out', desc: 'Compliant reward cash-out to any VPA or bank account via licensed NPCI banking switch partners.' },
    { title: 'Local AWS Mumbai Residency', desc: 'All personal data, transaction journals, and audit logs remain strictly stored within Indian borders (ap-south-1).' },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="LOYALTY PROGRAMME SOFTWARE · INDIA"
        title="Loyalty programme software built for India."
        description="DPDP-ready consent, TRAI DLT for SMS, WhatsApp-first enrolment, UPI cash-out through licensed partners and pricing in INR. Used by retailers and banks from Surat to Chennai."
        badge="DPDP Ready"
        breadcrumbs={[{ label: 'Regions' }, { label: 'India' }]}
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-2">
              REGULATORY COMPLIANCE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1F1A17]">
              Zero Regulatory Frictions for Indian Enterprises
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliancePoints.map((item, idx) => (
              <div key={idx} className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-full bg-[#D9822B]/10 text-[#B5651A] flex items-center justify-center font-bold font-mono text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-lg text-[#1F1A17]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#1F1A17]/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default RegionIndiaPage;
