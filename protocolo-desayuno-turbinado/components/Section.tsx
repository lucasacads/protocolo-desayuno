import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-8 md:py-20 px-4 overflow-hidden ${className}`}>
      <div className="max-w-4xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};