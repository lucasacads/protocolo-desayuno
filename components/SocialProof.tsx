import React from 'react';
import { Section } from './Section';
import { Star } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const SocialProof: React.FC = () => {
  const reviews = [
    {
      name: "María C.",
      age: "34 años",
      text: "En 7 días, perdí 2kg solo cambiando el desayuno. Ya no siento hambre desesperada a las 10 a.m.",
      image: "https://picsum.photos/id/64/150/150"
    },
    {
      name: "Juan P.",
      age: "41 años",
      text: "En 7 minutos tengo una comida completa. Mi esposa incluso me preguntó qué estaba haciendo diferente.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  return (
    <Section className="bg-brand-dark text-white">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-black text-center mb-8">
          Quién ya activó su metabolismo
        </h2>
      </FadeIn>
      
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="bg-white/10 p-5 rounded-xl border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  loading="lazy" 
                  decoding="async"
                  width="48"
                  height="48"
                  className="w-12 h-12 rounded-full border-2 border-brand-yellow bg-gray-700" 
                />
                <div>
                  <h4 className="font-bold text-base">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.age}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-brand-yellow fill-brand-yellow" />
                  ))}
                </div>
              </div>
              <p className="italic text-gray-200 text-sm leading-relaxed">"{review.text}"</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};