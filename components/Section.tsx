
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-6 pb-2 border-b-2 border-sky-500/30">
        {title}
      </h2>
      {children}
    </section>
  );
};
