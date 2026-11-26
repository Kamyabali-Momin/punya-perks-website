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
  message = "Punya Perks Enterprise Edition is now live across India, ANZ and the UAE.",
  badge = "New Launch",
  linkHref = "/india",
  linkText = "Explore Regional Compliance",
  dismissible = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-pp-primary text-white text-xs py-2 px-4 relative z-50 border-b border-pp-primary-dark/40 font-body">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 mx-auto text-center truncate">
          <span className="inline-flex items-center gap-1 font-semibold bg-white/15 text-white px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider shrink-0">
            <SparklesIcon size={11} className="text-pp-accent-soft" />
            {badge}
          </span>
          <span className="font-normal truncate">{message}</span>
          {linkHref && (
            <a
              href={linkHref}
              className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:text-pp-accent-soft transition-colors shrink-0"
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
            className="text-white/70 hover:text-white transition-colors p-1 rounded hover:bg-white/10 shrink-0"
          >
            <XIcon size={14} />
          </button>
        )}
      </div>
    </div>
  );
};
