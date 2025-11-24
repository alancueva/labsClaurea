import React from 'react';

// Definición de colores para consistencia
const BRAND_COLORS = {
    primaryGreen: '#496F3E',
    secondaryBeige: '#F7E2D0',
};

// Array de Pilares de Calidad
const commitmentPillars = [
    {
        icon: '🌱', // Placeholder para ícono de Sostenibilidad
        title: 'Cosecha Sostenible',
        description: 'Trabajamos con métodos de agricultura regenerativa que enriquecen la tierra. Nuestro impacto ambiental es mínimo, garantizando la salud del ecosistema montañoso.',
    },
    {
        icon: '🧪', // Placeholder para ícono de Pureza
        title: 'Pureza Certificada',
        description: 'Cada lote se somete a rigurosas pruebas de laboratorio para asegurar que esté libre de pesticidas y contaminantes. Solo la hoja más pura llega a tu taza.',
    },
    {
        icon: '🤝', // Placeholder para ícono de Comercio Justo
        title: 'Comercio Justo',
        description: 'Apoyamos directamente a las comunidades locales de agricultores. Aseguramos salarios justos y condiciones de trabajo óptimas, valorando a quienes cuidan nuestra hoja.',
    },
];

const QualityAndCommitment: React.FC = () => {
    return (
        <section id='compromiso' className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-6xl mx-auto text-center">

                {/* Título y Subtítulo */}
                <h2 className="text-4xl font-extrabold mb-4" style={{ color: BRAND_COLORS.primaryGreen }}>
                    Nuestro Compromiso con la Excelencia
                </h2>
                <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-xl">
                    La calidad en LONE TEA HOUSE no es un accidente, es la suma de la ética, la ciencia y el respeto por la naturaleza.
                </p>

                {/* Grid de Pilares de Calidad */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {commitmentPillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-gray-50 border border-gray-100 flex flex-col items-center"
                        >
                            <div
                                className="text-6xl mb-6 p-4 rounded-full"
                                style={{ backgroundColor: BRAND_COLORS.secondaryBeige }}
                            >
                                {pillar.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: BRAND_COLORS.primaryGreen }}>
                                {pillar.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Llamada a la Acción de Transparencia */}
                {/* <div className="mt-16 pt-8 border-t border-gray-200">
                    <button
                        className="px-8 py-3 text-lg font-semibold rounded-full text-white shadow-xl transition hover:bg-green-700"
                        style={{ backgroundColor: BRAND_COLORS.primaryGreen }}
                    >
                        Ver Certificados de Origen y Calidad
                    </button>
                </div> */}

            </div>
        </section>
    );
};

export default QualityAndCommitment;