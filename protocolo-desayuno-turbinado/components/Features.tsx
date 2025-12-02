import React from 'react';
import { Section } from './Section';
import { CheckCircle2, Lock, Pizza, Zap, Clock, AlertTriangle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Features: React.FC = () => {
  const fascinations = [
    {
      icon: <Pizza className="w-5 h-5 text-brand-red" />,
      text: <span className="text-pretty"><strong>El Secreto de la "Pizza Fit":</strong> Cómo transformar tu sartén en una pizzería y adelgazar comiendo lo que&nbsp;amas.</span>
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-red" />,
      text: <span className="text-pretty"><strong>El "Interruptor de Saciedad":</strong> La combinación exacta que apaga el hambre emocional y te mantiene llena hasta la&nbsp;tarde.</span>
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-red" />,
      text: <span className="text-pretty"><strong>Más Resultados en Menos Tiempo:</strong> Por qué cocinar 30 minutos es innecesario y cómo 7 minutos bastan para activar la&nbsp;quema.</span>
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-brand-red" />,
      text: <span className="text-pretty"><strong>La Trampa del Huevo:</strong> El error de preparación "saludable" que cometes y que bloquea la absorción de&nbsp;nutrientes.</span>
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-brand-red" />,
      text: <span className="text-pretty"><strong>Sabor a "Pecado" sin Culpa:</strong> El ingrediente secreto que da sabor a postre a tu desayuno sin añadir una sola gramo de&nbsp;azúcar.</span>
    },
    {
      icon: <Lock className="w-5 h-5 text-brand-red" />,
      text: <span className="text-pretty"><strong>El Test de 30 Segundos:</strong> La forma rápida y casera de saber si tu metabolismo amaneció acelerado o&nbsp;estancado.</span>
    }
  ];

  return (
    <Section className="bg-white">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-black text-center text-brand-dark mb-8 leading-tight text-balance">
          Lo que descubrirás en <span className="text-brand-red underline decoration-wavy">7&nbsp;minutos</span>
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-4">
        {fascinations.map((item, index) => (
          <FadeIn key={index} delay={index * 50}>
            <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/50 transition-colors shadow-sm">
              <div className="mt-1 flex-shrink-0 bg-red-100 p-2 rounded-full">
                {item.icon}
              </div>
              <p className="text-gray-800 text-sm md:text-base leading-snug">
                {item.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};