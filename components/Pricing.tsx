import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Check, X, Star } from 'lucide-react';
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
        <div className="text-center mb-10">
          <div className="inline-block bg-brand-darkRed text-white px-6 py-2 rounded-full font-bold animate-pulse text-sm md:text-base mb-4">
             ⚠️ Oportunidad Expira en: {formatTime(timeLeft)}
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark leading-tight">
            Elige tu Opción
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto items-stretch justify-center">
          
          {/* Opção BÁSICA ($9) */}
          <div className="w-full md:w-5/12 bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden flex flex-col relative order-2 md:order-1 hover:shadow-xl transition-shadow">
            <div className="p-6 bg-green-600 text-center border-b border-green-700">
              <h3 className="text-xl font-bold text-white">BÁSICO</h3>
              <p className="text-sm text-green-100">Solo el Protocolo</p>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800">Protocolo Desayuno Turbinado</span>
                </div>
                {/* Itens removidos - Agora com cor visível nos X */}
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-gray-400 line-through">Guía de Snacks (Bono)</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-gray-400 line-through">Lista de Compras (Bono)</span>
                </div>
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-gray-400 line-through">Diario de Resultados (Bono)</span>
                </div>
              </div>

              <div className="mt-auto text-center">
                <div className="mb-4">
                  <span className="text-3xl font-black text-gray-800">$9.00</span>
                  <span className="text-sm text-gray-500 ml-1">USD</span>
                </div>
                <Button 
                  text="ELEGIR BÁSICO" 
                  fullWidth={true}
                  className="" // Removido grayscale e cores cinza para usar o verde padrão
                  onClick={() => window.location.href = 'https://pay.hotmart.com/D103016071B?checkoutMode=10'}
                />
              </div>
            </div>
          </div>

          {/* Opção PREMIUM ($12) */}
          <div className="w-full md:w-6/12 bg-white rounded-2xl shadow-2xl border-2 border-brand-red overflow-hidden flex flex-col relative order-1 md:order-2 transform md:-translate-y-4 z-10">
            {/* Badge Recomendado */}
            <div className="bg-brand-yellow text-brand-dark text-xs font-black text-center py-1 uppercase tracking-widest">
              Recomendado por la Nutricionista
            </div>
            
            <div className="p-6 bg-brand-darkRed text-white text-center">
              <h3 className="text-2xl font-black uppercase flex justify-center items-center gap-2">
                <Star className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                PREMIUM VIP
                <Star className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
              </h3>
              <p className="text-red-100 text-sm">Protocolo + Todos los Bonos</p>
            </div>

            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                  <Check className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900 block">Protocolo Desayuno Turbinado</span>
                    <span className="text-xs text-brand-red font-bold">Acceso Vitalicio</span>
                  </div>
                </div>

                <div className="pl-2 space-y-3">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-gray-700">BONO 1: Guía de Snacks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-gray-700">BONO 2: Lista de Compras</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-gray-700">BONO 3: Diario de Resultados</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto text-center">
                <div className="mb-1">
                   <span className="bg-red-100 text-brand-red text-xs font-bold px-2 py-1 rounded-full">OFERTA COMPLETA</span>
                </div>
                <div className="mb-4 flex flex-col justify-center items-center">
                  <span className="text-sm text-gray-400 line-through mb-1">$156.00</span>
                  <div>
                    <span className="text-5xl font-black text-brand-darkRed tracking-tighter">$12.00</span>
                    <span className="text-lg text-gray-500 font-medium ml-1">USD</span>
                  </div>
                </div>
                <Button 
                  text="¡QUIERO EL PREMIUM!" 
                  subtext="Incluye Todos los Regalos"
                  fullWidth={true}
                  // ATENÇÃO: SUBSTITUA O LINK ABAIXO PELO LINK DO CHECKOUT DE $12
                  onClick={() => window.location.href = 'https://pay.hotmart.com/D103016071B?checkoutMode=10'} 
                />
                <p className="text-xs text-gray-400 mt-3">Garantía de 7 días • Compra Segura</p>
              </div>
            </div>
          </div>

        </div>
      </FadeIn>
    </Section>
  );
};