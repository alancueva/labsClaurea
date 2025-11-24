

export default function HeroSection(){

  const heroImageUrl = `/hossein-rezae.jpg`;

  return (
    <header id='inicio'
      className="relative w-full h-screen flex items-center justify-center p-8 text-white shadow-lg"
      style={{
        backgroundImage: `url(${heroImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundColor: BRAND_COLORS.primaryGreen,
      }}
    >
      {/* Overlay para mejor contraste del texto */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Contenido principal del Hero */}
      <div className="relative z-10 text-center space-y-6">
        
         {/* Logo Grande - Solo visible cuando NO se ha hecho scroll */}
        {/* // <div className={`transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-0 scale-75 -translate-y-8' : 'opacity-100 scale-100 translate-y-0'}`}>
        //   <LogoDisplay size="large" />
        // </div> */}

        <h1 className="text-3xl md:text-6xl font-bold mt-8 drop-shadow-lg">
          Sabor y Serenidad en Cada Hoja
        </h1>
        <p className="text-lg md:text-xl italic max-w-xl mx-auto">
          Descubre la esencia pura de nuestro té verde artesanal, cultivado en las laderas más altas.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-2xl transition hover:bg-gray-200">
          Explora Nuestros Productos
        </button>
      </div>
    </header>
  );
}