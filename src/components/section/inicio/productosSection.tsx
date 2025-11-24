import Image from "next/image";
// Definición de los colores de la marca para reusabilidad
const BRAND_COLORS = {
  primaryGreen: '#496F3E',
  secondaryBeige: '#F7E2D0', // Se usa para secciones inferiores
};

// Sección de Productos Destacados (ProductShowcaseSection) - MODIFICADA PARA 3 PRODUCTOS
export default function ProductSection() {
  // URLs de placeholder para los 3 productos
  const productData = [
    { 
      title: "Té Verde Orgánico", 
      description: "Nuestra mezcla de la más alta calidad en un elegante envase reutilizable.", 
      imageUrl: `/bioserums.png`,
      price: "$19.99"
    },
    { 
      title: "Té Oolong Exótico", 
      description: "Un té semifermentado con notas afrutadas y aroma floral. Perfecto para la tarde.", 
      imageUrl: `/bioserums.png`,
      price: "$24.50"
    },
    { 
      title: "Infusión de Hierbas Puras", 
      description: "Mezcla de manzanilla, menta y lavanda para una experiencia de relajación total antes de dormir.", 
      imageUrl: `/bioserums.png`,
      price: "$15.00"
    },
  ];

  return (
    <section id="products" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: BRAND_COLORS.primaryGreen }}>
          Colección de Tés Artesanales
        </h2>

        {/* Estructura de Grid para 3 productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-xl transition-transform duration-300 hover:shadow-2xl hover:scale-[1.03] border border-gray-100"
            >
              <Image 
                src={product.imageUrl} 
                alt={product.title} 
                height={1200}
                width={800}
                
                className="w-auto h-50 rounded-lg mb-4 shadow-md" 
              />
              <h3 className="text-2xl font-semibold mt-4" style={{ color: BRAND_COLORS.primaryGreen }}>{product.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{product.description}</p>
              <p className="text-2xl font-bold mt-4" style={{ color: BRAND_COLORS.primaryGreen }}>{product.price}</p>
              <button 
                className="mt-4 w-full px-6 py-2 text-sm font-medium rounded-full text-white shadow-md transition hover:bg-green-700"
                style={{ backgroundColor: BRAND_COLORS.primaryGreen }}
              >
                Comprar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};