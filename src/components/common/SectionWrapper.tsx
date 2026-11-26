import React from 'react';
import { Container } from './Container';

export interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'ground' | 'panel' | 'deep' | 'white';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  withBorderTop?: boolean;
  withBorderBottom?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = '',
  containerClassName = '',
  background = 'ground',
  spacing = 'lg',
  withBorderTop = false,
  withBorderBottom = false,
}) => {
  const backgroundClasses = {
    ground: 'bg-pp-ground',
    panel: 'bg-pp-panel',
    deep: 'bg-pp-panel-deep',
    white: 'bg-white',
  };

  const spacingClasses = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  };

  const borderTopClass = withBorderTop ? 'border-t border-pp-border-subtle' : '';
  const borderBottomClass = withBorderBottom ? 'border-b border-pp-border-subtle' : '';

  return (
    <section
      id={id}
      className={`relative w-full ${backgroundClasses[background]} ${spacingClasses[spacing]} ${borderTopClass} ${borderBottomClass} ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};
