
import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Check, Clock, ShieldCheck } from 'lucide-react';
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
            Comienza Tu Transformación Hoy
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          {/* Cartão Único de Oferta */}
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-green-500 overflow-hidden relative transform hover:scale-[1.02] transition-transform duration-300">
            
            {/* Faixa de Destaque */}
            <div className="bg-green-600 text-white text-center py-4">
              <h3 className="text-2xl font-black uppercase tracking-wider">OFERTA ESPECIAL</h3>
              <p className="text-green-100 text-sm font-medium">Acceso Inmediato al Método</p>
            </div>
            
            <div className="p-8">
              {/* Preço */}
              <div className="text-center mb-8 border-b border-gray-100 pb-6">
                <span className="text-sm text-gray-400 line-through block mb-1">$97.00</span>
                <div className="flex justify-center items-start gap-1">
                  <span className="text-6xl font-black text-brand-darkRed tracking-tighter">$9.00</span>
                  <span className="text-xl text-gray-500 font-bold mt-2">USD</span>
                </div>
                <p className="text-green-600 font-bold text-sm mt-2 bg-green-50 inline-block px-3 py-1 rounded-full">
                  Pago Único • Sin Mensualidades
                </p>
              </div>

              {/* Lista de Benefícios do Produto Principal */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-0.5">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <span className="text-base font-bold text-gray-800">Protocolo Desayuno Turbinado</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-0.5">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <span className="text-base font-medium text-gray-700">100 Recetas de 7 Minutos</span>
                </div>

                {/* Bônus Inseridos */}
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-0.5">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <span className="text-base font-medium text-gray-700">
                    <span className="font-bold text-brand-red">BONO 1:</span> La Guía de Snacks y Postres de 3 Minutos
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-0.5">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <span className="text-base font-medium text-gray-700">
                    <span className="font-bold text-brand-red">BONO 2:</span> La Lista de Compras Inteligente
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-0.5">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <span className="text-base font-medium text-gray-700">
                    <span className="font-bold text-brand-red">BONO 3:</span> El Diario de Resultados Turbinado
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-0.5">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <span className="text-base font-medium text-gray-700">Acceso Vitalicio al Material</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full mt-0.5">
                    <ShieldCheck className="w-5 h-5 text-green-700" />
                  </div>
                  <span className="text-base font-medium text-gray-700">Garantía de 7 Días</span>
                </div>
              </div>

              {/* Botão de Ação */}
              <div className="text-center">
                <Button 
                  text="¡SÍ, QUIERO ADELGAZAR!" 
                  subtext="Descargar Ahora"
                  fullWidth={true}
                  className="py-5 text-lg"
                  onClick={() => window.location.href = 'https://pay.hotmart.com/D103016071B?checkoutMode=10'}
                />
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>Acceso enviado al email inmediatamente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};
