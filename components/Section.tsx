import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-6 md:py-16 px-4 overflow-hidden w-full ${className}`}>
      <div className="max-w-4xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};