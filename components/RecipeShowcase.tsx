
import React from 'react';
import { Section } from './Section';
import { Clock, Flame } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const RecipeShowcase: React.FC = () => {
  // Otimização: w=300 para thumbnails móveis, q=60 para compressão, auto=format para WebP
  const imgParams = "&auto=format&fit=crop&w=300&q=60";
  
  const recipes = [
    {
      title: "HUEVOS A LA SARTÉN",
      time: "10 MINUTOS",
      cals: "195 CALORÍAS",
      // Link substituído por uma imagem de alta confiabilidade
      image: `https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3${imgParams}`
    },
    {
      title: "PIZZA RÁPIDA FIT",
      time: "3 INGREDIENTES",
      cals: "207 CALORÍAS",
      image: `https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3${imgParams}`
    },
    {
      title: "PANQUEQUE DE BANANA",
      time: "7 MINUTOS",
      cals: "183 CALORÍAS",
      image: `https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixlib=rb-4.0.3${imgParams}`
    },
    {
      title: "OMELET TOSTADO",
      time: "9 MINUTOS",
      cals: "125 CALORÍAS",
      image: `https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-4.0.3${imgParams}`
    },
    {
      title: "ENSALADA DIGESTIVA",
      time: "6 FRUTAS",
      cals: "120 CALORÍAS",
      image: `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3${imgParams}`
    },
    {
      title: "PAN CREMOSO",
      time: "8 MINUTOS",
      cals: "170 CALORÍAS",
      image: `https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3${imgParams}`
    },
    {
      title: "SHAKES DETOX",
      time: "6 MINUTOS",
      cals: "120 CALORÍAS",
      image: `https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3${imgParams}`
    },
    {
      title: "PASTEL DE TAZA",
      time: "3 INGREDIENTES",
      cals: "175 CALORÍAS",
      image: `https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3${imgParams}`
    },
    {
      title: "SÁNDWICH PROTEICO",
      time: "10 MINUTOS",
      cals: "180 CALORÍAS",
      image: `https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3${imgParams}`
    },
    {
      title: "BROWNIE DE SARTÉN",
      time: "10 MINUTOS",
      cals: "176 CALORÍAS",
      image: `https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3${imgParams}`
    }
  ];

  return (
    <Section className="bg-brand-dark text-white">
      <FadeIn>
        <div className="text-center mb-10">
          <p className="text-brand-yellow font-bold tracking-widest uppercase mb-2 text-sm">DELICIOSO Y SALUDABLE</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4">MIRA LO QUE VAS A APRENDER:</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-pretty">
            Recetas bajas en calorías creadas por la nutricionista Camila Moura, con sabor delicioso de verdad.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {recipes.map((recipe, index) => (
          <FadeIn key={index} delay={index < 2 ? 0 : 50}> 
            <div className="bg-white rounded-xl overflow-hidden flex shadow-lg transform hover:scale-[1.01] transition-transform duration-200">
              <div className="w-1/3 relative aspect-[4/3]">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  loading="lazy"
                  decoding="async"
                  width="150"
                  height="112"
                  className="absolute inset-0 w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="w-2/3 p-4 flex flex-col justify-center bg-white text-gray-900">
                <h3 className="font-bold text-base md:text-lg mb-2 leading-tight text-brand-dark">{recipe.title}</h3>
                <div className="flex flex-col gap-1 text-xs md:text-sm text-gray-500 font-medium">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-red" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="w-3 h-3 text-brand-red" />
                    <span>{recipe.cals}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <div className="inline-block border border-brand-yellow/30 bg-brand-yellow/10 rounded-full px-6 py-2 text-brand-yellow font-bold text-sm md:text-base">
          + 200 OTRAS OPCIONES DE LA NUTRI
        </div>
      </div>
    </Section>
  );
};
