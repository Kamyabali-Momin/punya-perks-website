import React from 'react';
import { ChevronDownIcon } from 'lucide-react';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  helperText?: string;
  errorMessage?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  helperText,
  errorMessage,
  className = '',
  id,
  disabled,
  ...props
}) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const isError = Boolean(errorMessage);

  return (
    <div className="w-full font-body">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-xs font-semibold text-pp-ink uppercase tracking-wider mb-1.5"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          disabled={disabled}
          className={`w-full appearance-none rounded-pp-md bg-white border font-normal text-sm text-pp-ink pl-3.5 pr-10 py-2.5 transition-all outline-none focus:ring-2 disabled:bg-pp-panel disabled:cursor-not-allowed ${
            isError
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-pp-border-strong focus:border-pp-primary focus:ring-pp-primary/20'
          } ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          size={16}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-pp-ink-muted pointer-events-none"
        />
      </div>
      {errorMessage && (
        <p className="mt-1 text-xs text-red-600 font-medium">{errorMessage}</p>
      )}
      {!errorMessage && helperText && (
        <p className="mt-1 text-xs text-pp-ink-muted">{helperText}</p>
      )}
    </div>
  );
};
