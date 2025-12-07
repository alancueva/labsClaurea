'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconoClaureasimple } from '@/components/icons/logo-claurea';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemCount = 1;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const itemsIzquierdos = ['Productos', 'Acerca de'];


  return (
    <>
      {/* Navbar 100% transparente al inicio */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100'
            : 'bg-transparent'   // ← TRANSPARENTE TOTAL
        }`}
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between h-20 lg:h-24 px-6 lg:px-10">

            {/* Izquierda: Links de navegación para desktop */}
            <div className="flex-1 flex justify-start items-center">
            {/* Links izquierda – solo desktop */}
            <div className="hidden lg:flex items-center space-x-12 text-sm font-medium">
              {itemsIzquierdos.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 hover:font-semibold ${
                    isScrolled
                      ? 'text-gray-800 hover:text-[#496F3E]'
                      : 'text-[#F7E2D0] hover:text-white drop-shadow-lg'
                  }`}
                >
                  {item}
                </a>
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
                    className={`block h-0.5 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? 'w-6' : 'w-8'
                    } ${
                      isScrolled ? 'bg-gray-800' : 'bg-[#F7E2D0]'
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
                    className={`transition-all duration-700 ${
                      isScrolled
                        ? 'h-35 w-auto text-[#496F3E]'      // scroll → verde pequeño
                        : 'h-36 w-auto text-[#F7E2D0]'      // inicio → beige grande
                    }`}
                    style={{ fill: 'currentColor', stroke: 'none' }} // ← IMPORTANTE
                  />
                </div>
              </Link>
            </div>

            {/* Derecha: Botones y menú */}
            <div className="flex-1 flex justify-end items-center space-x-2 md:space-x-5">

              <Link href="/page/productos" className="hidden lg:block">
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
              </Link>
              {/* Carrito */}
              <button className="relative p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className={`h-7 w-7 transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-800 hover:text-[#496F3E]'
                      : 'text-[#F7E2D0] hover:text-white'
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cartItemCount}
                  </span>
                )}
              </button>

              
            </div>
          </div>
        </div>

        {/* Menú móvil – también 100% sin fondo negro */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden fixed inset-x-0 top-20 bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-100"
            >
              <div className="px-8 py-14 space-y-10 text-center">
                {itemsIzquierdos.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-2xl font-light tracking-wider text-gray-800 hover:text-[#496F3E] transition"
                  >
                    {item}
                  </a>
                ))}
                <Link href="/page/productos" className="block mt-12">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-5 bg-[#496F3E] text-white text-lg font-medium rounded-full hover:bg-[#3a5530] transition shadow-lg"
                  >
                    Comprar Ahora
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}