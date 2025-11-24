import React from 'react';

// Definición de colores para consistencia
const BRAND_COLORS = {
  primaryGreen: '#496F3E',
  secondaryBeige: '#F7E2D0', 
};

// Datos para la nueva colección de productos de ritual y bienestar
const ritualProducts = [
  {
    title: 'Sérum Revitalizante Capilar',
    description: 'Fórmula concentrada para el cuero cabelludo a base de extractos de té verde y aceites botánicos, promoviendo la fuerza y la calma.',
    imageUrl: `https://placehold.co/400x500/A0C49D/333333?text=SERUM+CAPILAR`,
    price: "$35.00"
  },
  {
    title: 'Sérum de Pestañas y Cejas',
    description: 'Enriquecido con cafeína natural del té, estimula el crecimiento y fortalece las pestañas y cejas para una mirada más profunda.',
    imageUrl: `https://placehold.co/400x500/${BRAND_COLORS.secondaryBeige.substring(1)}/${BRAND_COLORS.primaryGreen.substring(1)}?text=SERUM+OJOS`,
    price: "$28.00"
  },
  {
    title: 'Bálsamo Labial Vegano',
    description: 'Ultra-hidratante y protector. Infundido con manteca de karité y un ligero toque de aceite de menta para una sensación de frescura.',
    imageUrl: `https://placehold.co/400x500/${BRAND_COLORS.primaryGreen.substring(1)}/ffffff?text=BALSAMO+LABIAL`,
    price: "$12.99"
  },
];

const RitualProductsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8" style={{ backgroundColor: BRAND_COLORS.secondaryBeige }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: BRAND_COLORS.primaryGreen }}>
          Rituales de Bienestar LONE
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16 text-lg">
          Extiende la calma de tu taza a tu rutina de cuidado personal con nuestros productos botánicos, inspirados en la pureza de la hoja de té.
        </p>

        {/* Estructura de Grid para los productos de ritual */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ritualProducts.map((product, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-xl transition-transform duration-300 hover:shadow-2xl hover:scale-[1.03] border border-gray-100"
            >
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-48 h-60 object-cover rounded-lg mb-4 shadow-md" 
              />
              <h3 className="text-2xl font-semibold mt-4" style={{ color: BRAND_COLORS.primaryGreen }}>{product.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{product.description}</p>
              <p className="text-2xl font-bold mt-4" style={{ color: BRAND_COLORS.primaryGreen }}>{product.price}</p>
              <button 
                className="mt-4 w-full px-6 py-2 text-sm font-medium rounded-full text-white shadow-md transition hover:bg-green-700"
                style={{ backgroundColor: BRAND_COLORS.primaryGreen }}
              >
                Comprar {product.title.includes('Sérum') ? 'Sérum' : 'Bálsamo'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RitualProductsSection;