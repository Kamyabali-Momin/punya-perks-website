import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { CheckIcon, MinusIcon } from 'lucide-react';

export const PricingComparePage: React.FC = () => {
  const rows = [
    { feature: 'Active Members Included', launch: '25,000', growth: '250,000', enterprise: 'Unlimited' },
    { feature: 'Append-Only Ledger', launch: true, growth: true, enterprise: true },
    { feature: 'Visual Rule Builder', launch: true, growth: true, enterprise: true },
    { feature: 'WhatsApp Enrolment & Receipts', launch: true, growth: true, enterprise: true },
    { feature: 'White-Label Mobile App', launch: false, growth: true, enterprise: true },
    { feature: 'Holdout Incrementality Testing', launch: false, growth: true, enterprise: true },
    { feature: 'Maker-Checker Approval Workflows', launch: false, growth: true, enterprise: true },
    { feature: 'POS Connectors (Pine Labs, Lightspeed)', launch: false, growth: true, enterprise: true },
    { feature: 'Dedicated Isolated Cloud Cell', launch: false, growth: false, enterprise: true },
    { feature: 'Multi-Tenant Clearinghouse Settlement', launch: false, growth: false, enterprise: true },
    { feature: 'Support SLA', launch: 'Standard Email', growth: '24/7 Priority', enterprise: 'Dedicated Architect + 99.99%' },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="PLAN COMPARISON"
        title="Compare features across every tier."
        description="Detailed functional matrix covering rule builder, member limits, compliance cells, connectors, SLAs, and support tiers."
        breadcrumbs={[{ label: 'Pricing', href: '/pricing' }, { label: 'Compare Plans' }]}
      />

      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="rounded-[28px] bg-white border border-[#EADBC6] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#F6EFE2] border-b border-[#EADBC6]">
                    <th className="p-4 sm:p-6 font-display font-bold text-[#220901]">Capability</th>
                    <th className="p-4 sm:p-6 font-display font-bold text-[#220901] text-center w-40">Launch</th>
                    <th className="p-4 sm:p-6 font-display font-bold text-[#BC3908] text-center w-48 bg-[#F6AA1C]/5">Growth</th>
                    <th className="p-4 sm:p-6 font-display font-bold text-[#220901] text-center w-48">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EADBC6]">
                  {rows.map((r, idx) => (
                    <tr key={idx} className="hover:bg-[#F8FAF9]">
                      <td className="p-4 sm:p-5 font-medium text-[#220901]">{r.feature}</td>
                      <td className="p-4 sm:p-5 text-center text-[#220901]/80">
                        {typeof r.launch === 'boolean' ? (
                          r.launch ? <CheckIcon className="inline text-[#BC3908]" size={18} /> : <MinusIcon className="inline text-[#220901]/30" size={18} />
                        ) : (
                          r.launch
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center font-semibold text-[#BC3908] bg-[#F6AA1C]/5">
                        {typeof r.growth === 'boolean' ? (
                          r.growth ? <CheckIcon className="inline text-[#BC3908]" size={18} /> : <MinusIcon className="inline text-[#220901]/30" size={18} />
                        ) : (
                          r.growth
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center font-semibold text-[#220901]">
                        {typeof r.enterprise === 'boolean' ? (
                          r.enterprise ? <CheckIcon className="inline text-[#BC3908]" size={18} /> : <MinusIcon className="inline text-[#220901]/30" size={18} />
                        ) : (
                          r.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default PricingComparePage;
