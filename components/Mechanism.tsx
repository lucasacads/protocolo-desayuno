import React, { useState, useEffect, useRef } from 'react';
import { Section } from './Section';
import { Utensils, Flame, ChefHat } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Mechanism: React.FC = () => {
  const [isColored, setIsColored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsColored(true);
          observer.disconnect(); // Anima apenas uma vez
        }
      },
      { threshold: 0.3 } // Dispara quando 30% da imagem estiver visível
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Section className="bg-gray-50">
      <FadeIn>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-brand-dark mb-3 leading-tight text-balance">
            ¿Qué es el Protocolo&nbsp;7-3-1?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Una reprogramación matutina basada en crononutrición que toma solo 7&nbsp;minutos.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <FadeIn delay={100} className="h-full">
          <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-brand-red h-full flex flex-col items-center">
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4 text-brand-red">
              <ChefHat className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">7 Ingredientes</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed text-pretty">
              La lista exacta de ingredientes que crean el "cóctel" metabólico&nbsp;perfecto.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200} className="h-full">
          <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-brand-red h-full flex flex-col items-center">
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4 text-brand-red">
              <Utensils className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">3 Utensilios</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed text-pretty">
              Solo necesitas una sartén, una licuadora y una taza. Sin&nbsp;desorden.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300} className="h-full">
          <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-brand-red h-full flex flex-col items-center">
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4 text-brand-red">
              <Flame className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">1 Técnica</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed text-pretty">
              El método exacto que garantiza la activación metabólica en 7&nbsp;minutos.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={200} direction="up">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gray-200 h-64 md:h-auto overflow-hidden">
            <img 
              ref={imgRef}
              src="https://i.imgur.com/3FmQzxg.jpeg" 
              alt="Dra. Camila Moura" 
              loading="lazy"
              className={`w-full h-full object-cover object-top md:object-center transition-all duration-1000 ease-out ${isColored ? 'grayscale-0' : 'grayscale'}`}
            />
          </div>
          <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl md:text-3xl font-bold text-brand-dark mb-1">Conoce al Creador</h3>
            <p className="text-brand-red font-bold mb-4 tracking-wide uppercase text-sm md:text-base">DRA. CAMILA MOURA</p>
            
            <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed text-pretty">
              <p>
                <strong>Nutricionista con más de 15 años de experiencia</strong>, especialista en Crononutrición. Descubrió que el cuerpo solo necesita 7 minutos de estímulo para iniciar la quema de grasa.
              </p>
              <p>
                Durante años trabajó en clínicas de alto nivel y vio cómo las dietas complejas fallaban. Por eso creó el Protocolo 7-3-1, un método que <strong>ya ha ayudado a más de 7000 pacientes a tener más energía, salud y calidad de vida.</strong>
              </p>
            </div>
            
            <div className="mt-6 border-l-4 border-brand-yellow pl-4 italic text-gray-600 text-sm md:text-base">
              "Quería darles la llave para encender su propio metabolismo en 7 minutos."
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};