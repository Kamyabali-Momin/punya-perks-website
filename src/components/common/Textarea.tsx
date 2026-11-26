import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  helperText,
  errorMessage,
  className = '',
  id,
  disabled,
  rows = 4,
  ...props
}) => {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const isError = Boolean(errorMessage);

  return (
    <div className="w-full font-body">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-xs font-semibold text-pp-ink uppercase tracking-wider mb-1.5"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        disabled={disabled}
        className={`w-full rounded-pp-md bg-white border font-normal text-sm text-pp-ink placeholder:text-pp-ink-muted p-3 transition-all outline-none focus:ring-2 disabled:bg-pp-panel disabled:cursor-not-allowed ${
          isError
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
            : 'border-pp-border-strong focus:border-pp-primary focus:ring-pp-primary/20'
        } ${className}`}
        {...props}
      />
      {errorMessage && (
        <p className="mt-1 text-xs text-red-600 font-medium">{errorMessage}</p>
      )}
      {!errorMessage && helperText && (
        <p className="mt-1 text-xs text-pp-ink-muted">{helperText}</p>
      )}
    </div>
  );
};
