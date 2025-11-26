import Image from "next/image";

const BRAND_COLORS = {
  primaryGreen: '#496F3E',
  secondaryBeige: '#F7E2D0',
};


export default function ProductSection() {

  const productData = [
    {
      title: "Bálsamo",
      description: "Bálsamo elaborado con ingredientes de origen natural que hidratan y protegen los labios a profundidad.",
      imageUrl: `/bioserums.png`,
      price: "S/. 10.00"
    },
    {
      title: "Sérum Pestañas y Cejas",
      description: "Sérum elaborado con una mezcla de aceites naturales que nutren profundamente, hidratan y revitalizan pestañas y cejas.",
      imageUrl: `/bioserums.png`,
      price: "S/. 25.00"
    },
    {
      title: "Sérum Reparador Capilar",
      description: "El Sérum es un tratamiento natural que actúa directamente en la raíz del cabello.",
      imageUrl: `/bioserums.png`,
      price: "S/. 48.00"
    },
  ];

  return (
    <section id="productos" className="py-30 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: BRAND_COLORS.primaryGreen }}>
          Nuestros Productos
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