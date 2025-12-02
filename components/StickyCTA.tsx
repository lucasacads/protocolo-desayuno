import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50 md:hidden animate-slideUp">
      <Button 
        text="QUIERO ADELGAZAR AHORA" 
        fullWidth={true}
        className="text-sm py-3"
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
      />
    </div>
  );
};