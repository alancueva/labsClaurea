import React from 'react';
import { IconoClaureasimple } from './icons/logo-claurea';
import Link from 'next/link';
import {
  Instagram,
  Facebook,
  Twitter,
  Leaf,
  Sparkles,
  ShieldCheck,
  MapPin,
  ArrowUpRight,
  Droplets,
  Wind
} from 'lucide-react';

// Definición de colores para consistencia
const BRAND_COLORS = {
  primaryGreen: '#496F3E',
  secondaryBeige: '#F7E2D0',
};



const navigation = {
  botanica: [
    { name: 'Cosecha Consciente', href: '#harvest' },
    { name: 'Herbolaria Moderna', href: '#herbs' },
    { name: 'Aceites y Esencias', href: '#essences' },
    { name: 'Cuidado de la Tierra', href: '#earth-care' },
  ],
  comunidad: [
    { name: 'Encuentra un Refugio', href: '#locations' },
    { name: 'Talleres de Bienestar', href: '#workshops' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
  ]
};

const pillars = [
  { icon: <Leaf size={20} />, title: "Origen Ético", desc: "Respetamos los ciclos de la naturaleza y sus productores." },
  { icon: <Droplets size={20} />, title: "Pureza Total", desc: "Sin aditivos químicos. Solo ingredientes en su estado puro." },
  { icon: <ShieldCheck size={20} />, title: "Sostenible", desc: "Empaques biodegradables que regresan a la tierra." },
  { icon: <Wind size={20} />, title: "Biodiversidad", desc: "Protegemos los ecosistemas donde nace Claurea." }
];
const Footer: React.FC = () => {
  const primaryColor = BRAND_COLORS.primaryGreen;
  const secondaryColor = BRAND_COLORS.secondaryBeige;

  return (
    <footer className="py-16 px-4 md:px-8 text-white" style={{ backgroundColor: primaryColor }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F7E2D0]/30 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* Bloque 1: Identidad y Manifiesto (4 cols) */}
          <div className="lg:col-span-4 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="group cursor-pointer">
              <IconoClaureasimple className="h-35 w-auto transition-transform duration-700 group-hover:rotate-12" style={{ color: BRAND_COLORS.secondaryBeige }} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif italic text-white">Naturaleza en cada gota.</h3>
              <p className="text-base font-light leading-relaxed max-w-sm" style={{ color: BRAND_COLORS.secondaryBeige }}>
                Creamos puentes entre la sabiduría de la tierra y tu bienestar diario a través de productos 100% naturales.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              {[
                { icon: <Instagram size={20} />, label: 'Instagram' },
                // { icon: <Facebook size={20} />, label: 'Facebook' },
                // { icon: <Twitter size={20} />, label: 'Twitter' }
              ].map((social, i) => (
                <a key={i} href="#" aria-label={social.label} className="p-3 rounded-full border border-[#F7E2D0]/20 text-[#F7E2D0] hover:bg-[#F7E2D0] hover:text-[#496F3E] transition-all duration-500">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bloque 2: Compromiso Claurea (4 cols) - Expandido y Detallado */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold opacity-60" style={{ color: BRAND_COLORS.secondaryBeige }}>
              Compromiso Claurea
            </h4>
            <div className="grid grid-cols-1 gap-8">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="mt-1 p-2.5 rounded-full bg-white/5 text-[#F7E2D0] group-hover:bg-[#F7E2D0] group-hover:text-[#496F3E] transition-all duration-500 shadow-inner">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-semibold text-white text-base group-hover:translate-x-1 transition-transform duration-300">{pillar.title}</h5>
                    <p className="text-sm leading-snug opacity-70 text-white font-light">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloque 3: Navegación Natural (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-xs uppercase tracking-[0.4em] font-bold opacity-60" style={{ color: BRAND_COLORS.secondaryBeige }}>
                Botánica
              </h4>
              <ul className="space-y-5">
                {navigation.botanica.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-white/60 hover:text-white flex items-center group gap-2 transition-colors">
                      <span className="w-0 group-hover:w-2 h-px bg-[#F7E2D0] transition-all duration-300"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-xs uppercase tracking-[0.4em] font-bold opacity-60" style={{ color: BRAND_COLORS.secondaryBeige }}>
                Conexión
              </h4>
              <ul className="space-y-5">
                {navigation.comunidad.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-white/60 hover:text-white flex items-center group gap-2 transition-colors">
                      <span className="w-0 group-hover:w-2 h-px bg-[#F7E2D0] transition-all duration-300"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Derechos de Autor y Legal */}
      <div className="text-center text-sm border-t-1 border-[#F7E2D0]" style={{ color: secondaryColor }}>
        <p className='mt-5'>© {new Date().getFullYear()} Claurea. Todos los derechos reservados.</p>
        <p className="mt-1">
          {/* <Link href="/page/politica-de-privacidad" className="hover:underline">Política de Privacidad</Link> |
          <a href="#terms" className="hover:underline ml-2">Términos y Condiciones</a> */}
        </p>
      </div>
    </footer >
  );
};

export default Footer;