import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';

interface ButtonProps {
  text: string;
  subtext?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, subtext, onClick, className = '', fullWidth = false }) => {
  // Wrap onClick to ensure we don't pass the event object upstream, 
  // which causes "Converting circular structure to JSON" errors in some environments
  // if the handler tries to log or process arguments.
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative group overflow-hidden rounded-xl 
        bg-gradient-to-b from-green-600 to-green-800
        text-white shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.23)] 
        active:scale-95 transition-all duration-200 ease-out 
        border-b-4 border-green-900 ring-1 ring-inset ring-white/20
        flex flex-col items-center justify-center py-4 px-6
        touch-manipulation animate-pulse-scale
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      {/* Luz superior para efeito de profundidade/vidro */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/40"></div>

      <div className="flex items-center gap-2 text-xl md:text-2xl font-black uppercase tracking-wide z-10 text-shadow-sm">
        <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 fill-white/20" />
        <span className="whitespace-nowrap drop-shadow-md">{text}</span>
        <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      {subtext && (
        <span className="text-xs md:text-sm font-bold text-yellow-300 opacity-100 mt-1 z-10 uppercase tracking-wider drop-shadow-sm">
          {subtext}
        </span>
      )}
      
      {/* Efeito de brilho passando periodicamente */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 animate-shine pointer-events-none" />
    </button>
  );
};