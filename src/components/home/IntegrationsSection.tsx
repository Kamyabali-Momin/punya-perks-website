import React from 'react';

export const IntegrationsSection: React.FC = () => {
  const row1Partners = [
    {
      name: 'Shopify',
      type: 'svg',
      src: '/images/partners/logos/shopify.svg',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[125px] sm:max-w-[145px]',
    },
    {
      name: 'Accenture',
      type: 'img',
      src: '/images/partners/logos/accenture.png',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[110px] sm:max-w-[130px]',
    },
    {
      name: 'Google Cloud',
      type: 'img',
      src: '/images/partners/logos/google-cloud.png',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[120px] sm:max-w-[140px]',
    },
    {
      name: 'Azure',
      type: 'img',
      src: '/images/partners/logos/azure.png',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[95px] sm:max-w-[110px]',
    },
    {
      name: 'ServiceNow',
      type: 'img',
      src: '/images/partners/logos/servicenow.png',
      imgClass: 'h-5 sm:h-6 md:h-7 w-auto max-w-[120px] sm:max-w-[140px]',
    },
    {
      name: 'Adobe',
      type: 'img',
      src: '/images/partners/logos/adobe.png',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[95px] sm:max-w-[110px]',
    },
    {
      name: 'Magento',
      type: 'custom_magento',
      src: '/images/partners/logos/magento.svg',
    },
    {
      name: 'Databricks',
      type: 'img',
      src: '/images/partners/logos/databricks.png',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[115px] sm:max-w-[135px]',
    },
    {
      name: 'Snowflake',
      type: 'img',
      src: '/images/partners/logos/snowflake.png',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[115px] sm:max-w-[135px]',
    },
    {
      name: 'Razorpay',
      type: 'svg',
      src: '/images/partners/logos/razorpay.svg',
      imgClass: 'h-5 sm:h-6 md:h-7 w-auto max-w-[130px] sm:max-w-[155px]',
    },
  ];

  const row2Partners = [
    {
      name: 'Stripe',
      type: 'svg',
      src: '/images/partners/logos/stripe.svg',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[95px] sm:max-w-[115px]',
    },
    {
      name: 'WooCommerce',
      type: 'custom_woocommerce',
      src: '/images/partners/logos/woocommerce.svg',
    },
    {
      name: 'Salesforce',
      type: 'svg',
      src: '/images/partners/logos/salesforce.svg',
      imgClass: 'h-8 sm:h-9 md:h-10 w-auto max-w-[100px] sm:max-w-[118px]',
    },
    {
      name: 'Oracle',
      type: 'img',
      src: '/images/partners/logos/oracle.png',
      imgClass: 'h-5 sm:h-6 md:h-7 w-auto max-w-[115px] sm:max-w-[135px]',
    },
    {
      name: 'Cloudinary',
      type: 'img',
      src: '/images/partners/logos/cloudinary.png',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[115px] sm:max-w-[135px]',
    },
    {
      name: 'MuleSoft',
      type: 'img',
      src: '/images/partners/logos/mulesoft.png',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[105px] sm:max-w-[125px]',
    },
    {
      name: 'Red Hat',
      type: 'img',
      src: '/images/partners/logos/redhat.png',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[110px] sm:max-w-[130px]',
    },
    {
      name: 'Sabre',
      type: 'img',
      src: '/images/partners/logos/sabre.png',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[95px] sm:max-w-[115px]',
    },
    {
      name: 'Shopify',
      type: 'svg',
      src: '/images/partners/logos/shopify.svg',
      imgClass: 'h-6 sm:h-7 md:h-8 w-auto max-w-[125px] sm:max-w-[145px]',
    },
    {
      name: 'Razorpay',
      type: 'svg',
      src: '/images/partners/logos/razorpay.svg',
      imgClass: 'h-5 sm:h-6 md:h-7 w-auto max-w-[130px] sm:max-w-[155px]',
    },
  ];

  // Repeat for continuous seamless infinite marquee
  const marqueeRow1 = [...row1Partners, ...row1Partners, ...row1Partners];
  const marqueeRow2 = [...row2Partners, ...row2Partners, ...row2Partners];

  const renderPartnerContent = (partner: any) => {
    if (partner.type === 'custom_magento') {
      return (
        <div className="flex items-center gap-2 sm:gap-2.5">
          <img
            src={partner.src}
            alt="Magento"
            className="h-6 sm:h-7 w-6 sm:w-7 object-contain drop-shadow-xs"
            loading="lazy"
          />
          <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight">
            Magento
          </span>
        </div>
      );
    }

    if (partner.type === 'custom_woocommerce') {
      return (
        <div className="flex items-center gap-2 sm:gap-2.5">
          <img
            src={partner.src}
            alt="WooCommerce"
            className="h-7 sm:h-8 w-auto object-contain drop-shadow-xs"
            loading="lazy"
          />
          <span className="font-display font-bold text-white text-sm sm:text-base tracking-tight">
            WooCommerce
          </span>
        </div>
      );
    }

    return (
      <img
        src={partner.src}
        alt={partner.name}
        className={`${partner.imgClass} object-contain drop-shadow-xs`}
        loading="lazy"
      />
    );
  };

  return (
    <section className="w-full bg-[#1F1A17] border-b border-[#2E241E] py-16 sm:py-20 font-body overflow-hidden" id="integrations">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 text-center mb-10 sm:mb-12">
        <span className="font-mono text-[11px] sm:text-xs font-bold text-[#C4681A] tracking-[0.2em] uppercase block mb-2.5">
          POWERED BY
        </span>
        <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight">
          Network Partners
        </h2>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative w-full overflow-hidden mb-4 sm:mb-5">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#1F1A17] via-[#1F1A17]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#1F1A17] via-[#1F1A17]/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-3 sm:gap-4 py-1">
          {marqueeRow1.map((partner, idx) => (
            <div
              key={`row1-${partner.name}-${idx}`}
              className="shrink-0 h-[62px] sm:h-[70px] md:h-[76px] px-6 sm:px-8 rounded-[16px] sm:rounded-[18px] bg-[#221A15] border border-[#443022] hover:border-[#C4681A] hover:bg-[#2A1F18] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer hover:scale-105"
              title={partner.name}
            >
              {renderPartnerContent(partner)}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Scrolling in reverse for dynamic visual movement) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#1F1A17] via-[#1F1A17]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#1F1A17] via-[#1F1A17]/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse flex items-center gap-3 sm:gap-4 py-1">
          {marqueeRow2.map((partner, idx) => (
            <div
              key={`row2-${partner.name}-${idx}`}
              className="shrink-0 h-[62px] sm:h-[70px] md:h-[76px] px-6 sm:px-8 rounded-[16px] sm:rounded-[18px] bg-[#221A15] border border-[#443022] hover:border-[#C4681A] hover:bg-[#2A1F18] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer hover:scale-105"
              title={partner.name}
            >
              {renderPartnerContent(partner)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
