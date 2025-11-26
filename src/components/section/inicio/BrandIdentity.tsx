import Image from 'next/image';
import React from 'react';

// Definición de colores para consistencia
const BRAND_COLORS = {
  primaryGreen: '#496F3E',
  secondaryBeige: '#F7E2D0', 
};

export default function BrandIdentity() {
  const natureImageUrl = `/hojas-verde-1.jpg`;

  return (
    <section id="about-nature" className="py-20 px-4 md:px-8" style={{ backgroundColor: BRAND_COLORS.primaryGreen }}>
      <div className="max-w-7xl mx-auto text-white">
        
        {/* Encabezado "ABOUT NATURE" */}
        <div className="text-center md:text-left mb-16 relative">
          <h2 
            className="text-3x1 md:text-3xl font-bold suppercase tracking-widest inline-block relative pr-4 pb-1"
            style={{ color: BRAND_COLORS.secondaryBeige, fontFamily: 'Georgia, serif' }}
          >
            ACERCA DE <span className="font-light text-2xl md:text-3xl pl-2" style={{ color: 'rgba(255,255,255,0.7)' }}>CLAUREA</span>
          </h2>
          <div 
            className="absolute left-0 bottom-0 w-full h-px" 
            style={{ backgroundColor: BRAND_COLORS.secondaryBeige, opacity: 0.5 }}
          ></div>
        </div>

        {/* Contenido principal: Texto y Imagen */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Columna de Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: BRAND_COLORS.secondaryBeige, lineHeight: '1.2' }}>
              NUESTRA HISTORIA<br /> 
              <span className="text-2xl font-normal" style={{ color: 'rgba(255,255,255,0.7)' }}>#claurea</span>
            </h3>
            <p className="mt-8 text-lg leading-relaxed max-w-lg mx-auto md:mx-0" style={{ color: BRAND_COLORS.secondaryBeige }}>
              Claurea nació en septiembre de 2023 en una mesa pequeña, con un solo objetivo: hacer un bálsamo labial que de verdad cuidara, sin trucos ni ingredientes dudosos. Con lo que sabía de Química, mezclé aceites y ceras naturales hasta dar con algo puro que hidratara de fondo y protegiera de verdad.
            </p>
          </div>
          
          {/* Columna de Imagen */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={natureImageUrl} 
              alt="Nature" 
              height={500}
              width={500}
              className="w-full max-w-md h-85 object-cover rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.03]" 
              style={{ border: `2px solid ${BRAND_COLORS.secondaryBeige}` }}
            />
          </div>
        </div>

        {/* Pie de "FOOTAGE VISUAL OF DENIS" */}
        <div className="text-center md:text-right mt-20 relative">
          <div 
            className="absolute right-0 top-0 w-full h-px" 
            style={{ backgroundColor: BRAND_COLORS.secondaryBeige, opacity: 0.5 }}
          ></div>
          <h4 
            className="text-lg uppercase tracking-widest inline-block relative pl-4 pt-1"
            style={{ color: BRAND_COLORS.secondaryBeige, fontFamily: 'Georgia, serif' }}
          >
            {/* FOOTAGE <span className="font-light text-2xl md:text-3xl pl-2" style={{ color: 'rgba(255,255,255,0.7)' }}>VISUAL OF DENIS</span> */}
          </h4>
        </div>

      </div>
    </section>
  );
}