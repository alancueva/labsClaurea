import React from 'react';

// Definición de colores para consistencia
const BRAND_COLORS = {
  primaryGreen: '#496F3E',
  secondaryBeige: '#F7E2D0', 
};

const PrivacyPolicy: React.FC = () => {
  const greenColor = BRAND_COLORS.primaryGreen;
  const beigeColor = BRAND_COLORS.secondaryBeige;

  return (
    <section id="privacy" className="py-24 px-4 md:px-12" style={{ backgroundColor: beigeColor }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Título Principal */}
        <h1 className="text-5xl font-extrabold mb-4 text-center" style={{ color: greenColor }}>
          Política de Privacidad
        </h1>
        <p className="text-center text-lg mb-16 italic text-gray-700">
          Vigente desde: 15 de Noviembre de 2025
        </p>

        {/* Introducción - Tono de Esencia */}
        <div className="mb-16 p-6 rounded-xl border-l-4" style={{ borderColor: greenColor, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <p className="text-gray-800 leading-relaxed text-xl font-medium">
            En LONE, valoramos la tranquilidad y la confianza. Creemos que la privacidad es un derecho fundamental, tan puro como la naturaleza de donde provienen nuestros productos. Esta política explica cómo manejamos tus datos con el máximo cuidado y respeto.
          </p>
        </div>

        {/* Sección 1: Datos que Recopilamos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: greenColor }}>
            1. Datos Recopilados con tu Calma
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Recopilamos información limitada necesaria para procesar tus pedidos y mejorar tu experiencia. Esto incluye:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
            <li><span className="font-semibold">Información de Contacto:</span> Nombre, dirección, correo electrónico y número de teléfono, esenciales para el envío de tus rituales de bienestar.</li>
            <li><span className="font-semibold">Datos de Transacción:</span> Detalles del producto, monto total, pero nunca almacenamos información sensible de tarjetas de crédito.</li>
            <li><span className="font-semibold">Datos de Interacción:</span> Información sobre cómo utilizas nuestro sitio (páginas vistas, tiempo de permanencia), ayudándonos a simplificar tu camino hacia la calma.</li>
          </ul>
        </div>

        {/* Sección 2: Uso y Finalidad de los Datos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: greenColor }}>
            2. La Finalidad de Nuestro Cuidado
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Utilizamos tus datos exclusivamente para los siguientes propósitos, manteniendo la transparencia:
          </p>
          <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
            <li>Procesar y gestionar tus pedidos, asegurando que lleguen a su destino.</li>
            <li>Personalizar tu experiencia en el sitio web, sugiriendo productos afines a tu búsqueda de serenidad.</li>
            <li>Comunicarnos contigo sobre tu pedido, y con tu consentimiento, enviarte noticias y ofertas exclusivas de LONE.</li>
            <li>Mejorar nuestros productos y servicios a través del análisis de tendencias de uso.</li>
          </ol>
        </div>
        
        {/* Sección 3: Cookies y el Sendero Digital */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: greenColor }}>
            3. Cookies y el Sendero Digital
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Como la neblina en la montaña, las cookies son pequeños archivos que mejoran tu experiencia. Utilizamos cookies esenciales para el funcionamiento del sitio y cookies de rendimiento para entender cómo llegaste a LONE.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Puedes elegir desactivar las cookies a través de la configuración de tu navegador. Sin embargo, esto puede afectar la funcionalidad de algunas áreas de nuestra web.
          </p>
        </div>

        {/* Sección 4: Tus Derechos y Control */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: greenColor }}>
            4. Tus Derechos de Control
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tienes control total sobre la información que nos has proporcionado. Puedes ejercer los siguientes derechos en cualquier momento:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
            <li><span className="font-semibold">Acceso:</span> Solicitar una copia de tus datos personales.</li>
            <li><span className="font-semibold">Rectificación:</span> Pedir que corrijamos cualquier dato incompleto o inexacto.</li>
            <li><span className="font-semibold">Oposición:</span> Oponerte al procesamiento de tus datos para fines de marketing directo.</li>
            <li><span className="font-semibold">Eliminación:</span> Solicitar la eliminación de tus datos, sujeto a las obligaciones legales de retención.</li>
          </ul>
        </div>

        {/* Cierre */}
        <div className="pt-10 border-t" style={{ borderColor: greenColor, opacity: 0.5 }}>
          <p className="text-gray-800 text-center text-lg font-semibold">
            Gracias por confiar en LONE TEA HOUSE. Tu privacidad es parte de nuestro compromiso con la tranquilidad.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;