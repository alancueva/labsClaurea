
export default function HeroSection(){

  const heroImageUrl = `/qingbao-meng.jpg`;

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

        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mt-8 drop-shadow-lg">
          Donde la ciencia se encuentra con la sabiduría ancestral.
        </h1>
        <p className="text-lg md:text-xl italic max-w-xl mx-auto">
          Descubre nuestra linea de productos naturales
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-2xl transition hover:bg-gray-200">
          Explora Nuestros Productos
        </button>
      </div>
    </header>
  );
}