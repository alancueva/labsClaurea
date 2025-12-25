'use client';
import { useState } from 'react';
import { ChevronDown, Leaf, ShieldCheck, Zap, Info } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
    category: 'general' | 'productos' | 'uso';
}

const FAQ_DATA: FAQItem[] = [
    {
        category: 'general',
        question: "¿Qué es Claurea?",
        answer: "Claurea es una marca de cosmética natural y vegana nacida en 2023. Nos enfocamos en crear productos puros, sencillos y confiables que realzan tu belleza natural sin químicos agresivos, respetando siempre el medio ambiente."
    },
    {
        category: 'productos',
        question: "¿Los productos son aptos para todo tipo de piel?",
        answer: "Sí, nuestras fórmulas están basadas en ingredientes naturales como manteca de cacao, aceites de ricino y jojoba, y vitamina E. Sin embargo, si tienes piel extremadamente sensible, recomendamos consultar con un dermatólogo antes de usar el sérum fortalecedor."
    },
    {
        category: 'productos',
        question: "¿Qué beneficios tiene el Sérum Fortalecedor de Pestañas y Cejas?",
        answer: "Nutre profundamente, hidrata y revitaliza gracias a su mezcla de aceite de ricino, jojoba y oleato de romero. Ayuda a reparar el daño causado por el uso frecuente de máscara y favorece el volumen natural."
    },
    {
        category: 'uso',
        question: "¿Cómo debo usar el Sérum Reparador Capilar?",
        answer: "Aplica de 3 a 5 gotas con el gotero directamente en la raíz del cabello. Masajea suavemente para favorecer la absorción. Se recomienda usarlo de 3 a 4 veces por semana, preferiblemente por la noche."
    },
    {
        category: 'productos',
        question: "¿Cuál es el tiempo de vida de los productos?",
        answer: "Nuestros productos, como el bálsamo labial y el sérum de pestañas, tienen una vida útil recomendada de 6 meses tras su apertura. Deben mantenerse en un lugar fresco, seco y protegidos de la luz solar."
    },
    {
        category: 'general',
        question: "¿Sus empaques son sostenibles?",
        answer: "¡Sí! Utilizamos envases PET 100% reciclables para nuestros bálsamos y sérums de pestañas, y frascos de vidrio ámbar para el sérum capilar, minimizando nuestro impacto ambiental."
    }
];

export default function PreguntasFrecuentes() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800 mt-15">
            {/* Hero / Header Section */}
            <section className="bg-[#F7E2D0] py-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="flex justify-center mb-4">
                        <Leaf className="text-[#496F3E] w-10 h-10" />
                    </div>
                    <h1 className="text-4xl font-bold text-[#496F3E] mb-4">Preguntas Frecuentes</h1>
                    <p className="text-lg text-gray-700">
                        Todo lo que necesitas saber sobre nuestros productos naturales y el cuidado de tu piel.
                    </p>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="py-16 px-4 max-w-4xl mx-auto">
                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <div
                            key={index}
                            className="border border-[#F7E2D0] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openIndex === index ? 'bg-[#496F3E] text-white' : 'bg-white hover:bg-[#F7E2D0]/30'
                                    }`}
                            >
                                <span className="font-semibold text-lg flex items-center gap-3">
                                    {item.category === 'productos' && <ShieldCheck size={20} />}
                                    {item.category === 'uso' && <Zap size={20} />}
                                    {item.category === 'general' && <Info size={20} />}
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    size={24}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 bg-white border-t border-[#F7E2D0] text-gray-600 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

