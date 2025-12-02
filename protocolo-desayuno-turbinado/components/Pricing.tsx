import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Check, Plus } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Section id="pricing" className="bg-gradient-to-b from-gray-50 to-white">
      <FadeIn direction="up">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-3xl mx-auto">
          {/* Header */}
          <div className="bg-brand-darkRed text-white p-4 text-center">
            <h2 className="text-xl md:text-3xl font-black uppercase tracking-wide leading-tight">Oferta Especial</h2>
            <div className="flex justify-center items-center gap-2 mt-1">
              <span className="text-xs md:text-sm text-red-200">Expira en:</span>
              <p className="text-brand-yellow font-bold font-mono text-lg md:text-xl">
                {formatTime(timeLeft)}
              </p>
            </div>
          </div>

          <div className="p-5 md:p-8">
            {/* Stack */}
            <div className="space-y-3 mb-6">
              <h3 className="text-sm font-bold text-gray-500 uppercase text-center mb-4 tracking-widest">Lo que recibirás HOY:</h3>
              
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                <Check className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900 block text-sm md:text-base">Protocolo Desayuno Turbinado</span>
                  <span className="text-xs text-gray-600">100 Recetas de 7 Minutos</span>
                </div>
              </div>

              <div className="flex items-center justify-center text-brand-red -my-1">
                 <Plus className="w-4 h-4" />
              </div>

              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900 block text-sm md:text-base">3 BONOS EXCLUSIVOS</span>
                  <ul className="text-xs text-gray-600 mt-1 space-y-1 list-disc list-inside">
                    <li>Guía de Snacks</li>
                    <li>Lista de Compras</li>
                    <li>Diario de Resultados</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Price Anchor */}
            <div className="text-center mb-6">
              <p className="text-gray-400 text-sm">Valor Total: <span className="line-through">$156.00</span></p>
              <div className="flex flex-col items-center justify-center mt-1">
                  <span className="bg-brand-yellow text-brand-dark font-bold px-2 py-0.5 text-xs rounded-sm mb-1">DESCUENTO DEL 94%</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-brand-darkRed tracking-tighter">$9.00</span>
                    <span className="text-lg text-gray-500 font-medium">USD</span>
                  </div>
                  <p className="text-xs text-gray-400">Pago Único • Acceso&nbsp;vitalicio</p>
              </div>
            </div>

            {/* CTA */}
            <Button 
              text="¡SÍ, QUIERO ADELGAZAR!" 
              subtext="Garantía de 7 Días"
              fullWidth={true}
              onClick={() => alert('Redirigir al Checkout...')}
            />
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};