import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-[1440px]',
    wide: 'max-w-[1440px]',
  };

  return (
    <div className={`mx-auto w-full px-4 sm:px-6 md:px-8 xl:px-12 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};
