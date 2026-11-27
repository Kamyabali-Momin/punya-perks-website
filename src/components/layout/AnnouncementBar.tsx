import React, { useState } from 'react';
import { SparklesIcon, XIcon, ArrowRightIcon } from 'lucide-react';

export interface AnnouncementBarProps {
  message?: string;
  badge?: string;
  linkHref?: string;
  linkText?: string;
  dismissible?: boolean;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  message = 'Punya Perks Enterprise Edition is now live across India, ANZ and the UAE.',
  badge = 'New Launch',
  linkHref = '/india',
  linkText = 'Explore Regional Compliance',
  dismissible = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#14100B] text-white text-xs py-2 relative z-50 border-b border-[#8E5B13]/40 font-body">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 mx-auto text-center min-w-0">
          <span className="inline-flex items-center gap-1 font-bold bg-[#8E5B13] text-white px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider shrink-0">
            <SparklesIcon size={11} className="text-[#F4E9D2]" />
            {badge}
          </span>
          <span className="font-normal text-[#F4E9D2] hidden sm:inline">{message}</span>
          <span className="font-normal text-[#F4E9D2] sm:hidden">Live across India, ANZ &amp; UAE.</span>
          {linkHref && (
            <a
              href={linkHref}
              className="inline-flex items-center gap-1 font-semibold text-[#D4A147] underline underline-offset-2 hover:text-white transition-colors shrink-0 whitespace-nowrap"
            >
              {linkText}
              <ArrowRightIcon size={12} />
            </a>
          )}
        </div>
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss announcement"
            className="text-white/70 hover:text-white transition-colors p-1 rounded hover:bg-white/10 shrink-0 cursor-pointer"
          >
            <XIcon size={14} />
          </button>
        )}
      </div>
    </div>
  );
};
