import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  errorMessage,
  iconLeft,
  iconRight,
  className = '',
  id,
  disabled,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const isError = Boolean(errorMessage);

  return (
    <div className="w-full font-body">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-pp-ink uppercase tracking-wider mb-1.5"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {iconLeft && (
          <span className="absolute left-3 text-pp-ink-muted pointer-events-none">
            {iconLeft}
          </span>
        )}
        <input
          id={inputId}
          disabled={disabled}
          className={`w-full rounded-pp-md bg-white border font-normal text-sm text-pp-ink placeholder:text-pp-ink-muted py-2.5 transition-all outline-none focus:ring-2 disabled:bg-pp-panel disabled:cursor-not-allowed ${
            iconLeft ? 'pl-9' : 'pl-3.5'
          } ${iconRight ? 'pr-9' : 'pr-3.5'} ${
            isError
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-pp-border-strong focus:border-pp-primary focus:ring-pp-primary/20'
          } ${className}`}
          {...props}
        />
        {iconRight && (
          <span className="absolute right-3 text-pp-ink-muted pointer-events-none">
            {iconRight}
          </span>
        )}
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
