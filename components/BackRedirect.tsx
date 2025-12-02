
import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { X } from 'lucide-react';

export const BackRedirect: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Adiciona um estado ao histórico quando o componente monta
    window.history.pushState({ noBack: true }, "");

    const handlePopState = (event: PopStateEvent) => {
      // Quando o usuário clica em voltar
      event.preventDefault();
      setShowModal(true);
      // Readiciona o estado para impedir que ele saia na próxima tentativa sem interagir
      window.history.pushState({ noBack: true }, "");
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden animate-scaleIn">
        <button 
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-brand-red p-4 text-center">
          <h3 className="text-white font-black text-xl md:text-2xl uppercase italic">
            ¡ESPERA! NO TE VAYAS...
          </h3>
        </div>

        <div className="p-6 text-center">
          <p className="text-gray-600 mb-4 text-balance text-base md:text-lg">
            Sabemos que quieres cambiar tu vida, por eso hemos preparado algo <strong>ESPECIAL</strong> para ti.
          </p>
          
          <div className="bg-yellow-50 border-2 border-brand-yellow border-dashed rounded-xl p-4 mb-6">
            <p className="text-sm font-bold text-gray-500 uppercase mb-1">OFERTA RELÁMPAGO DE SALIDA</p>
            <div className="flex justify-center items-center gap-3">
              <span className="text-gray-400 line-through text-lg">$9.00</span>
              <span className="text-4xl font-black text-brand-red">$5.00</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Solo el Protocolo (Sin bonos)</p>
          </div>

          <Button 
            text="QUIERO POR $5.00" 
            fullWidth={true}
            className="mb-3"
            onClick={() => window.location.href = 'https://pay.hotmart.com/V103089039A?checkoutMode=10'} 
          />
          
          <button 
            onClick={() => setShowModal(false)}
            className="text-xs text-gray-400 underline hover:text-gray-600"
          >
            No gracias, prefiero seguir con mi peso actual
          </button>
        </div>
      </div>
    </div>
  );
};