import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-8 text-center text-sm px-4">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4">
          Copyright © {new Date().getFullYear()} Protocolo Desayuno Turbinado. Todos los derechos reservados.
        </p>
        <p className="text-xs text-gray-600 mb-4">
          Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </p>
        <div className="flex justify-center gap-4 underline">
          <a href="#" className="hover:text-white">Políticas de Privacidad</a>
          <a href="#" className="hover:text-white">Términos de Uso</a>
          <a href="#" className="hover:text-white">Contacto</a>
        </div>
      </div>
    </footer>
  );
};