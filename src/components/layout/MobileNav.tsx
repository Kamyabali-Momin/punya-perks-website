import React, { useState, useEffect } from 'react';
import { XIcon, ChevronDownIcon, GlobeIcon, ArrowRightIcon } from 'lucide-react';
import { NavPillar } from '../../data/navigation';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  pillars: NavPillar[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, pillars }) => {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const togglePillar = (title: string) => {
    setExpandedPillar(expandedPillar === title ? null : title);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Header Bar */}
        <div className="p-4 border-b border-pp-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg
              className="w-6 h-6 text-[#BC3908] shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="3.2" />
              <ellipse cx="12" cy="4" rx="2" ry="3.5" />
              <ellipse cx="12" cy="20" rx="2" ry="3.5" />
              <ellipse cx="4" cy="12" rx="3.5" ry="2" />
              <ellipse cx="20" cy="12" rx="3.5" ry="2" />
              <ellipse cx="6.34" cy="6.34" rx="2.2" ry="3.2" transform="rotate(-45 6.34 6.34)" />
              <ellipse cx="17.66" cy="17.66" rx="2.2" ry="3.2" transform="rotate(-45 17.66 17.66)" />
              <ellipse cx="17.66" cy="6.34" rx="2.2" ry="3.2" transform="rotate(45 17.66 6.34)" />
              <ellipse cx="6.34" cy="17.66" rx="2.2" ry="3.2" transform="rotate(45 6.34 17.66)" />
            </svg>
            <span className="font-display text-xl text-[#220901]">
              Punya <span className="italic text-[#BC3908]">Perks</span>
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1.5 rounded-pp-md text-pp-ink hover:bg-pp-panel transition-colors"
          >
            <XIcon size={20} />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 font-body">
          {pillars.map((pillar) => {
            const isExpanded = expandedPillar === pillar.title;
            return (
              <div key={pillar.title} className="border-b border-pp-border-subtle pb-2">
                <button
                  onClick={() => togglePillar(pillar.title)}
                  className="w-full flex items-center justify-between py-2.5 text-left font-display font-semibold text-base text-pp-ink hover:text-pp-primary transition-colors"
                >
                  <span>{pillar.title}</span>
                  <ChevronDownIcon
                    size={18}
                    className={`transition-transform duration-200 text-pp-ink-muted ${
                      isExpanded ? 'rotate-180 text-pp-primary' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="pl-3 pr-1 py-2 space-y-4 animate-in fade-in duration-150">
                    {pillar.categories.map((cat, idx) => (
                      <div key={idx} className="space-y-2">
                        {cat.categoryTitle && (
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-pp-ink-muted">
                            {cat.categoryTitle}
                          </div>
                        )}
                        <ul className="space-y-2.5">
                          {cat.items.map((item) => (
                            <li key={item.href}>
                              <a
                                href={item.href}
                                onClick={onClose}
                                className="block py-1 text-sm font-medium text-pp-ink hover:text-pp-primary transition-colors"
                              >
                                <div className="flex items-center gap-2">
                                  <span>{item.title}</span>
                                  {item.badge && <Badge size="sm">{item.badge}</Badge>}
                                </div>
                                <span className="block text-xs text-pp-ink-muted mt-0.5 line-clamp-1">
                                  {item.description}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer CTAs */}
        <div className="p-4 border-t border-pp-border-subtle bg-pp-panel/50 space-y-2.5">
          <Button href="/demo" variant="primary" fullWidth size="md">
            Request a demo
          </Button>
          <Button href="/start" variant="ghost" fullWidth size="md">
            Start in sandbox
          </Button>
          <div className="pt-2 text-center">
            <a href="/sign-in" className="text-xs font-medium text-pp-ink hover:text-pp-primary">
              Existing customer? Sign in →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
