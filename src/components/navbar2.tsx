'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconoClaureasimple } from '@/components/icons/logo-claurea';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItemCount = 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const itemsIzquierdos = [
    { href: "/page/productos", nombre: "Productos" },
    { href: "/page/acerca-de", nombre: "Acerca de" }
  ];


  return (
    <>
      {/* Navbar 100% transparente al inicio */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 bg-[#496F3E] shadow-xl transition-all duration-500 border-b border-[#3a5530]`}
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between h-15 lg:h-20 px-6 lg:px-10">

            {/* Izquierda: Links de navegación para desktop */}
            <div className="flex-1 flex justify-start items-center">
              {/* Links izquierda – solo desktop */}
              <div className="hidden lg:flex items-center space-x-12 text-md font-medium">
                {itemsIzquierdos.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`transition-all duration-300 hover:font-semibold text-[#F7E2D0] hover:text-white drop-shadow-lg
                    `}
                  //    ${
                  //   isScrolled
                  //     ? 'text-gray-800 hover:text-[#496F3E]'
                  //     : 'text-[#F7E2D0] hover:text-white drop-shadow-lg'
                  // }
                  >
                    {item.nombre}
                  </Link>
                ))}
              </div>
              {/* Hamburguesa móvil - Ahora a la izquierda */}
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="lg:hidden p-2 -ml-2" // Margen negativo para alinear visualmente
              >
                <motion.div className="space-y-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{
                        rotate: isMobileMenuOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                        y: isMobileMenuOpen ? (i === 0 ? 5 : i === 2 ? -5 : 0) : 0,
                        opacity: isMobileMenuOpen && i === 1 ? 0 : 1,
                      }}
                      className={`block h-0.5 rounded-full transition-all duration-300 bg-[#F7E2D0] ${isMobileMenuOpen ? 'w-6' : 'w-8'
                        }`}
                    />
                  ))}
                </motion.div>
              </button>
            </div>

            {/* Logo central – cambia de tamaño y color según scroll */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href="/">
                {/* Forzamos que el SVG nunca tenga fondo negro */}
                <div className="flex items-center justify-center">
                  <IconoClaureasimple
                    className={`transition-all duration-700 ${isScrolled
                        ? 'h-35 w-auto text-[#F7E2D0]'      // scroll → verde pequeño
                        : 'h-36 w-auto text-[#F7E2D0]'      // inicio → beige grande
                      }`}
                    style={{ fill: 'currentColor', stroke: 'none' }} // ← IMPORTANTE
                  />
                </div>
              </Link>
            </div>

            {/* Derecha: Botones y menú */}
            <div className="flex-1 flex justify-end items-center space-x-2 md:space-x-5">

              {/* <Link href="/page/productos" className="hidden lg:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium shadow-lg transition-all duration-400 ${
                    isScrolled
                      ? 'bg-[#496F3E] text-white hover:bg-[#3a5530]'
                      : 'bg-[#F7E2D0] text-[#496F3E] hover:bg-[#e8d0b8]'
                  }`}
                >
                  Comprar Ahora
                </motion.button>
              </Link> */}
              {/* Carrito */}
              <button    onClick={() => setIsCartOpen(true)} className="relative p-2"  >
                 <CartIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-0.5 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-[#496F3E]">
                    {cartItemCount}
                  </span>
                )}
              </button>


            </div>
          </div>
        </div>

        {/* Menú móvil – también 100% sin fondo negro */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          items={itemsIzquierdos}
        />
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />


        {/* <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed inset-x-0 top-15 bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-100"
            >
              <div className="px-8 py-14 space-y-10 text-center">
                {itemsIzquierdos.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-light tracking-wider text-gray-800 hover:text-[#496F3E] transition"
                  >
                    {item.nombre}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </motion.nav>
    </>
  );
}


const CartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// --- Componente: CartDrawer (Despliega de Derecha a Izquierda) ---
const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Panel del Carrito */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-[110] shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-800">Mi Carrito</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Espacio para items del carrito */}
              <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-2">
                <CartIcon className="w-16 h-16 opacity-20" />
                <p className="text-lg">Tu carrito está vacío</p>
                <button
                  onClick={onClose}
                  className="text-[#496F3E] font-medium underline underline-offset-4 mt-2"
                >
                  Seguir comprando
                </button>
              </div>
            </div>

            <div className="p-6 border-t bg-gray-50 text-gray-800">
              <div className="flex justify-between text-lg font-bold mb-4">
                <span>Total estimado</span>
                <span>$0.00</span>
              </div>
              <button className="w-full py-4 bg-[#496F3E] text-white rounded-xl font-bold text-lg hover:bg-[#3a5530] transition-transform active:scale-95 shadow-lg">
                Finalizar Pedido
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Componente: MobileMenu (Despliega de Izquierda a Derecha) ---
const MobileMenu = ({ isOpen, onClose, items }: { isOpen: boolean; onClose: () => void; items: Array<{ href: string; nombre: string }> }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[100] lg:hidden"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-[#496F3E] z-[110] shadow-2xl p-5 flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <Link href="/">
              <IconoClaureasimple className="h-30 w-auto text-[#F7E2D0]" style={{ fill: 'currentColor' }} />
              </Link>
              <button onClick={onClose} className="text-[#F7E2D0] p-2">
                <CloseIcon className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col space-y-8">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="text-2xl font-light tracking-widest text-[#F7E2D0] hover:text-white transition-colors"
                >
                  {item.nombre.toUpperCase()}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/20 pt-8">
              <p className="text-[#F7E2D0]/60 text-sm">© {new Date().getFullYear()} Claurea. Hecho con amor.</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
