import React from 'react';
import { Section } from './Section';
import { ShieldCheck } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Guarantee: React.FC = () => {
  return (
    <Section className="bg-white">
      <FadeIn>
        <div className="border-4 border-dashed border-gray-200 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <ShieldCheck className="w-20 h-20 text-brand-darkRed mx-auto mb-6" />
          <h2 className="text-3xl font-black text-brand-dark mb-4 text-balance">
            Tu Decisión Está 100% Libre de&nbsp;Riesgo
          </h2>
          <h3 className="text-xl font-bold text-gray-600 mb-6 text-balance">
            La Prueba de 7 Días o Yo Pago Tu Próximo&nbsp;Desayuno.
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Prueba el Protocolo 7-3-1 durante 7 días. Si no sientes tu metabolismo más activo, no notas la diferencia en la báscula o simplemente no te gusta el sabor de las recetas, envíame un solo correo&nbsp;electrónico.
          </p>
          <p className="font-bold text-brand-darkRed text-balance">
            Te devolveré el 100% de tu dinero al instante y te quedarás con el Protocolo y todos los&nbsp;bonos.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
};