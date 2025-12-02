import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const UrgencyBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-brand-darkRed text-white z-50 py-3 px-2 shadow-lg border-b border-red-900">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs md:text-sm font-bold tracking-wide animate-pulse">
        <AlertTriangle className="w-4 h-4 text-brand-yellow fill-brand-yellow flex-shrink-0" />
        <span className="text-center">ATENCIÓN: Esta oferta especial expira pronto.</span>
      </div>
    </div>
  );
};