import React from 'react';
import { IconoClaureasimple } from './icons/logo-claurea';
import Link from 'next/link';

// Definición de colores para consistencia
const BRAND_COLORS = {
  primaryGreen: '#496F3E',
  secondaryBeige: '#F7E2D0', 
};

// Datos para la navegación del Footer
const footerLinks = [
  { title: "Nuestra Historia", href: "#identity" },
  { title: "Colección Completa", href: "#products" },
  { title: "Compromiso de Calidad", href: "#quality" },
  { title: "Contacto y FAQ", href: "#contact" },
];

const socialIcons = [
  { icon: '📷', name: 'Instagram', url: '#social/ig' },
  { icon: '📘', name: 'Facebook', url: '#social/fb' },
  { icon: '🐦', name: 'Twitter', url: '#social/tw' },
];

const Footer: React.FC = () => {
  const primaryColor = BRAND_COLORS.primaryGreen;
  const secondaryColor = BRAND_COLORS.secondaryBeige;

  return (
    <footer className="py-16 px-4 md:px-8 text-white" style={{ backgroundColor: primaryColor }}>
      <div className="max-w-6xl mx-auto border-b border-white border-opacity-30 pb-10 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Columna 1: Logo y Esencia */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Usamos una versión pequeña del logo para el footer */}
            {/* El componente Logo debe ser importado y definido en components/Logo.tsx */}
            <IconoClaureasimple className="h-35 w-auto text-[#F7E2D0] hover:text-[#496F3E] transition-all duration-500" />
            <p className="mt-4 text-sm max-w-[200px]" style={{ color: secondaryColor }}>
              Sabor y Serenidad. La pausa necesaria en tu día.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="font-bold text-lg mb-4 tracking-wider uppercase" style={{ color: secondaryColor }}>
              Explora
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white text-opacity-80 hover:text-white transition duration-200 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Suscripción y Redes Sociales */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-4 tracking-wider uppercase" style={{ color: secondaryColor }}>
              Únete al Ritual
            </h4>
            <p className="text-white text-opacity-80 mb-4 text-sm">
              Recibe consejos de bienestar, ofertas exclusivas y novedades de nuestra cosecha.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-grow p-3 rounded-xl text-gray-800 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              <button 
                className="p-3 rounded-xl font-semibold shadow-md transition duration-300 hover:bg-white hover:text-green-800"
                style={{ backgroundColor: secondaryColor, color: primaryColor }}
              >
                Suscribir
              </button>
            </div>
            
            {/* Enlaces Sociales */}
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition duration-200" style={{ color: secondaryColor }} title={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Derechos de Autor y Legal */}
      <div className="text-center text-sm" style={{ color: secondaryColor }}>
        <p>© {new Date().getFullYear()} Claurea. Todos los derechos reservados.</p>
        <p className="mt-1">
          <Link href="/page/politica-de-privacidad" className="hover:underline">Política de Privacidad</Link> | 
          <a href="#terms" className="hover:underline ml-2">Términos y Condiciones</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;