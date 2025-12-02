import React from 'react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <div className="bg-white pb-8 w-full overflow-hidden">
      {/* Faixa movida para App.tsx como UrgencyBar fixa */}
      
      <div className="max-w-4xl mx-auto px-4 pt-6 md:pt-12 text-center">
        {/* Renderização imediata para LCP (Largest Contentful Paint) - Sem FadeIn JS */}
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-dark leading-[1.1] mb-4 tracking-tight max-w-3xl mx-auto px-1">
            El Secreto del Desayuno de <span className="text-brand-red whitespace-nowrap">7 Minutos</span> que 'Engaña' a tu&nbsp;Metabolismo.
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl text-gray-700 font-medium mb-6 leading-relaxed max-w-3xl mx-auto text-pretty">
            <span className="font-bold text-brand-darkRed">Científicos de Harvard confirman:</span> El error fatal que cometes antes de las 9 a.m. sabotea tu dieta. Descubre el <span className="font-bold">"Protocolo&nbsp;7-3-1"</span>.
          </h2>
        </div>

        {/* Imagem Hero Otimizada */}
        <div className="relative w-full max-w-3xl mx-auto aspect-video bg-gray-100 rounded-xl shadow-lg overflow-hidden mb-6 border-2 border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <img 
            src="https://i.imgur.com/kTK6W8P.jpeg" 
            alt="Video de receta" 
            fetchPriority="high" // Prioridade máxima para o navegador
            width="800"
            height="450"
            className="w-full h-full object-cover"
          />
        </div>

        <FadeIn delay={300}>
          <div className="mt-8 p-5 bg-red-50 rounded-xl border border-red-100 text-left shadow-sm">
              <p className="text-gray-800 mb-3 text-sm md:text-base leading-relaxed text-pretty">
                  <span className="text-lg md:text-2xl font-bold block mb-2 text-brand-red">¿Cansada de dietas?</span>
                  Si estás cansada de despertar con hambre, pasar horas en el gimnasio y ver la báscula estancada... <span className="font-bold underline decoration-brand-red/30">La culpa no es&nbsp;tuya.</span>
              </p>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed text-pretty">
                  Te presento el <span className="font-bold bg-yellow-200 px-1 rounded-sm">Protocolo 7-3-1</span>, el método simple con ingredientes comunes para transformar tu desayuno en una máquina de&nbsp;adelgazamiento.
              </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};