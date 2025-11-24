import React from 'react';

// Definición de colores para consistencia (importados de App.tsx para este ejemplo)
const BRAND_COLORS = {
  primaryGreen: '#496F3E',
  secondaryBeige: '#F7E2D0', 
};

/*
 * Se modificó esta sección para enfocarse en la historia y la filosofía de la marca,
 * como se solicitó, en lugar de solo en los elementos de diseño visual.
 */

const BrandIdentity: React.FC = () => {
  return (
    <section id="identity" className="py-20 px-4 md:px-8" style={{ backgroundColor: BRAND_COLORS.secondaryBeige }}>
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Título principal de la sección de la Historia */}
        <h2 className="text-4xl font-extrabold mb-4" style={{ color: BRAND_COLORS.primaryGreen }}>
          Nuestra Historia: El Origen de LONE
        </h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-xl italic">
          &quot;La verdadera esencia del té se encuentra en la quietud de su origen.&quot;
        </p>

        {/* Bloque de Narrativa Principal */}
        <div className="mt-16 text-left">
          <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: BRAND_COLORS.primaryGreen }}>
            El Viaje de la Hoja Solitaria
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Columna de la Historia */}
            <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100 transition duration-500 hover:shadow-green-300/50">
              <h4 className="text-2xl font-semibold mb-4" style={{ color: BRAND_COLORS.primaryGreen }}>
                Un Cultivo en la Neblina
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                La historia de LONE TEA HOUSE comienza en las cimas solitarias de las montañas, envueltas en una niebla perenne. Aquí, donde el aire es puro y el silencio profundo, nuestros ancestros descubrieron una variedad de té verde de crecimiento lento, imbuida de la paciencia y la resistencia del entorno.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No se trata de la cosecha más rápida, sino de la más consciente. Cada hoja se recoge a mano, solo en el momento de su madurez perfecta, honrando el proceso y la tierra que le da vida.
              </p>
            </div>
            
            {/* Columna de la Filosofía */}
            <div className="p-8 bg-white rounded-xl shadow-2xl border border-gray-100 transition duration-500 hover:shadow-green-300/50">
              <h4 className="text-2xl font-semibold mb-4" style={{ color: BRAND_COLORS.primaryGreen }}>
                Nuestra Promesa: Pura Tranquilidad
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                LONE, que significa &quot;solitario&quot; o &quot;único&quot;, representa la intención detrás de cada taza: ofrecer un momento de introspección. En un mundo ruidoso, nuestro té es un recordatorio de la belleza que se encuentra en la pausa y en la concentración total en un solo sabor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nuestra identidad no son solo colores; es la quietud que experimentas, es el ritual que creas. Es una invitación a desconectar y saborear la autenticidad que solo una hoja tratada con respeto puede ofrecer.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandIdentity;