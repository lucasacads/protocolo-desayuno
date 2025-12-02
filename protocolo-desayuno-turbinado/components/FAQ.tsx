import React, { useState } from 'react';
import { Section } from './Section';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="flex justify-between items-center w-full text-left py-4 font-bold text-base md:text-lg text-gray-800 hover:text-brand-red active:text-brand-red transition-colors group select-none outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="pr-4 leading-snug">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 group-hover:text-brand-red transition-transform duration-300 ease-in-out flex-shrink-0 ${
            isOpen ? 'rotate-180 text-brand-red' : ''
          }`} 
        />
      </button>
      <div 
        className={`grid transition-[grid-template-rows,opacity,padding] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0 pb-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "¿Las recetas son difíciles?",
      answer: "No. El Protocolo 7-3-1 garantiza que todas las recetas estén listas en 7 minutos y utilicen solo 3 utensilios comunes."
    },
    {
      question: "¿Necesito ingredientes caros?",
      answer: "No. La lista de 7 ingredientes se compone de artículos comunes que encuentras en cualquier supermercado local."
    },
    {
      question: "¿Puedo imprimir el material?",
      answer: "Sí. Recibirás el material en formato digital (PDF de alta calidad) y podrás imprimirlo o verlo en tu celular, tablet o computadora."
    },
    {
      question: "¿Qué pasa si no me gusta?",
      answer: "Tienes 7 días de garantía incondicional. Te devolvemos tu dinero sin preguntas y te quedas con el producto de regalo."
    }
  ];

  return (
    <Section className="bg-gray-50 pb-24">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-black text-center mb-8 text-brand-dark">Preguntas Frecuentes</h2>
        <div className="bg-white px-5 py-2 rounded-2xl shadow-sm border border-gray-100">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};
