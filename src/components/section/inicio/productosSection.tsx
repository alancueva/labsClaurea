'use client';
import { ChevronLeft, ChevronRight, X, ZoomIn, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import Image from "next/image";

const BRAND_COLORS = {
  primaryGreen: '#496F3E',
  secondaryBeige: '#F7E2D0',
};

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

export default function ProductSection() {

  const productData: Product[] = [
    {
      title: "Bálsamo",
      description: "Bálsamo elaborado con ingredientes de origen natural que hidratan y protegen los labios a profundidad.",
      imageUrl: `/productos/lipcare.png`,
      price: "S/. 12.00"
    },
    {
      title: "Sérum Pestañas y Cejas",
      description: "Sérum elaborado con una mezcla de aceites naturales que nutren profundamente, hidratan y revitalizan pestañas y cejas.",
      imageUrl: `/productos/hidratalash.png`,
      price: "S/. 27.00"
    },
    {
      title: "Sérum Reparador Capilar",
      description: "El Sérum es un tratamiento natural que actúa directamente en la raíz del cabello.",
      imageUrl: `/productos/bioserum-capilar.png`,
      price: "S/. 50.00"
    },
  ];


  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev !== null && prev < productData.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : productData.length - 1));
  };



  // Manejo de teclado para el Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="productos" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: BRAND_COLORS.primaryGreen }}>
            Nuestra Colección Natural
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: BRAND_COLORS.secondaryBeige }}></div>
        </motion.div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productData.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white flex flex-col items-center text-center p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden relative"
            >
              {/* Imagen Contenedor con Overlay de Zoom - Altura ajustada a h-60 (más pequeña) */}
              <div
                className="relative w-full h-60 rounded-xl overflow-hidden cursor-zoom-in mb-6 bg-gray-50"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  height={900}
                  width={900}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100" size={28} />
                </div>
              </div>

              <div className="flex-grow flex flex-col w-full">
                <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: BRAND_COLORS.primaryGreen }}>
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50">
                  <p className="text-xl font-black mb-4" style={{ color: BRAND_COLORS.primaryGreen }}>
                    {product.price}
                  </p>
                  <button
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-xl text-white font-semibold transform transition active:scale-95 hover:brightness-110 shadow-lg shadow-green-900/10 text-sm"
                    style={{ backgroundColor: BRAND_COLORS.primaryGreen }}
                  >
                    <ShoppingCart size={16} />
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Galería Dinámica */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[60]"
            >
              <X size={32} />
            </button>

            {/* Navegación Izquierda */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-[60]"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Contenedor Imagen Grande - Tamaño ajustado para no ser exagerado */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-3xl w-full h-[70vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={productData[selectedIndex].imageUrl}
                alt={productData[selectedIndex].title}
                height={1000}
                width={1000}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center text-white bg-black/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold">{productData[selectedIndex].title}</h4>
                <p className="text-white/70 text-sm">{productData[selectedIndex].price}</p>
              </div>
            </motion.div>

            {/* Navegación Derecha */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all z-[60]"
            >
              <ChevronRight size={28} />
            </button>

            {/* Fondo para cerrar al hacer clic fuera */}
            <div className="absolute inset-0" onClick={() => setSelectedIndex(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};