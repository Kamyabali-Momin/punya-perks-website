import React, { useState } from 'react';
import { ChevronDownIcon, HelpCircleIcon } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
  category?: string;
}

export interface FaqAccordionProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  items: FaqItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  description,
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(idx) ? [] : [idx]));
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto font-body ${className}`}>
      {(title || eyebrow) && (
        <div className="text-center mb-10">
          {eyebrow && <span className="pp-eyebrow">{eyebrow}</span>}
          {title && (
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-pp-ink mt-2">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-pp-ink-secondary mt-2 max-w-lg mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);
          return (
            <div
              key={idx}
              className={`rounded-pp-lg border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-white border-pp-primary/30 shadow-pp-sm'
                  : 'bg-white/80 border-pp-border-subtle hover:border-pp-border-strong'
              }`}
            >
              <button
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-pp-ink hover:text-pp-primary transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDownIcon
                  size={18}
                  className={`shrink-0 text-pp-ink-muted transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-pp-primary' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-pp-ink-secondary leading-relaxed border-t border-pp-border-subtle/60 pt-4 animate-in fade-in duration-150">
                  {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
