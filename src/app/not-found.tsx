import Link from 'next/link';
import { Metadata } from 'next';

const BRAND_COLORS = {
  primaryGreen: '#496F3E',
  secondaryBeige: '#F7E2D0',
};

export const metadata: Metadata = {
  title: 'Página no encontrada',
}

export default function NotFound() {
  const heroImageUrl = `/zabihullah-habibi.jpg`;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-8 text-center"
      style={{
        backgroundImage: `url(${heroImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-9xl mb-6 opacity-75 mt-15" style={{ color: BRAND_COLORS.primaryGreen }}>
        🌿
      </div>

      <h1 className="text-8xl font-extrabold mb-4" style={{ color: BRAND_COLORS.secondaryBeige }}>
        404
      </h1>

      <p className="text-2xl font-semibold mb-6 text-[#F7E2D0] max-w-lg mx-auto">
        Parece que esta senda se ha perdido entre el follaje de la montaña.
      </p>

      <p className="text-[#F7E2D0] mb-8 max-w-xl">
        La serenidad nos recuerda que, incluso en los senderos inciertos, siempre hay un regreso a la base.
      </p>

      <Link
        href="/"
        className="px-8 py-3 text-lg font-semibold rounded-full shadow-xl transition bg-[#496F3E] text-white hover:bg-[#3a5530]"
      >
        Volver a la Calma (Inicio)
      </Link>

      {/* Enlace para el Footer o Ayuda */}
      {/* <p className="mt-8 text-sm text-gray-500">
        Si el problema persiste, revisa nuestros <a href="#contact" className="underline hover:text-gray-700">Enlaces de Contacto</a>.
      </p> */}
    </div>
  );

}