'use client';
import React, { useState } from 'react';
import { Leaf, Zap, Droplets, Sparkles, Flower2, X } from 'lucide-react';

interface Ingredient {
    id: string;
    name: string;
    shortDesc: string;
    fullDesc: string;
    benefits: string[];
    origin: string;
    icon: React.ReactNode;
}

const INGREDIENTS: Ingredient[] = [
    {
        id: "ricino",
        name: "Aceite de Ricino",
        shortDesc: "Fortalecedor natural para folículos.",
        fullDesc: "El aceite de ricino es un pilar en nuestra fórmula de pestañas. Es rico en ácido ricinoleico, un ácido graso que combate la inflamación y mejora la salud de los folículos pilosos.",
        benefits: ["Estimula el crecimiento", "Aporta brillo natural", "Engrosa la hebra capilar"],
        origin: "Extracción por prensado en frío de semillas de Ricinus communis.",
        icon: <Droplets className="text-[#496F3E]" />
    },
    {
        id: "jojoba",
        name: "Aceite de Jojoba",
        shortDesc: "El hidratante que imita tu piel.",
        fullDesc: "Más que un aceite, es una cera líquida que se asemeja estructuralmente al sebo humano, lo que permite una absorción inmediata sin obstruir poros.",
        benefits: ["Equilibra la grasa", "Hidratación profunda", "Rico en vitaminas B y E"],
        origin: "Simmondsia chinensis, desierto de Sonora.",
        icon: <Sparkles className="text-[#496F3E]" />
    },
    {
        id: "romero",
        name: "Oleato de Romero",
        shortDesc: "Estimulante y revitalizante capilar.",
        fullDesc: "Nuestro oleato de romero artesanal es clave para el sérum capilar. Mejora la microcirculación del cuero cabelludo para que los nutrientes lleguen mejor a la raíz.",
        benefits: ["Previene la caída", "Antioxidante potente", "Propiedades antisépticas"],
        origin: "Maceración lenta de hojas seleccionadas de Rosmarinus officinalis.",
        icon: <Leaf className="text-[#496F3E]" />
    },
    {
        id: "cacao",
        name: "Manteca de Cacao",
        shortDesc: "Nutrición intensa y protección labial.",
        fullDesc: "Utilizamos manteca de cacao pura para crear una barrera física contra el viento y el frío, manteniendo tus labios suaves y elásticos.",
        benefits: ["Protección contra el clima", "Alta en polifenoles", "Elasticidad inmediata"],
        origin: "Semillas de cacao orgánico de comercio justo.",
        icon: <Flower2 className="text-[#496F3E]" />
    },
    {
        id: "vitE",
        name: "Vitamina E",
        shortDesc: "El escudo antioxidante natural.",
        fullDesc: "La Vitamina E no solo ayuda a tu piel a repararse de los radicales libres, sino que mantiene la estabilidad y pureza de nuestros aceites vegetales.",
        benefits: ["Repara tejidos dañados", "Conservante natural", "Suaviza la piel"],
        origin: "Tocoferoles mixtos de origen vegetal.",
        icon: <Zap className="text-[#496F3E]" />
    }
];

export default function AceitesEsencias() {
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* Hero / Header Section */}
            <section className="bg-[#F7E2D0] py-20 px-4 mt-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="flex justify-center mb-4">
                        <Leaf className="text-[#496F3E] w-10 h-10" />
                    </div>
                    <h1 className="text-4xl font-bold text-[#496F3E] mb-4">Aceites y Esencias</h1>
                    <p className="text-lg text-gray-700">
                        Descubre los secretos de nuestros ingredientes y resuelve tus dudas sobre Claurea.
                    </p>
                </div>
            </section>

            {/* Aceites y Esencias Section con Modal/Detalle */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#496F3E] mb-4 italic">Nuestros Ingredientes</h2>
                        <div className="h-1 w-24 bg-[#F7E2D0] mx-auto rounded-full mb-6"></div>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            Haz clic en cualquier ingrediente para conocer sus propiedades individuales y origen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {INGREDIENTS.map((ing) => (
                            <button
                                key={ing.id}
                                onClick={() => setSelectedIngredient(ing)}
                                className="p-8 text-left rounded-3xl border border-[#F7E2D0] bg-[#F7E2D0]/10 hover:bg-[#F7E2D0]/40 transition-all group relative overflow-hidden"
                            >
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {ing.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#496F3E] mb-3">{ing.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm italic mb-4">
                                    {ing.shortDesc}
                                </p>
                                <span className="text-xs font-bold text-[#496F3E] uppercase tracking-widest border-b border-[#496F3E]">Ver detalles</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal de Ingrediente */}
            {selectedIngredient && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#496F3E]/40 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-[32px] max-w-2xl w-full shadow-2xl overflow-hidden relative animate-in zoom-in duration-300">
                        <button
                            onClick={() => setSelectedIngredient(null)}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X className="text-gray-400" />
                        </button>

                        <div className="flex flex-col md:flex-row">
                            <div className="bg-[#F7E2D0] p-12 flex items-center justify-center md:w-1/3">
                                <div className="scale-[2.5]">{selectedIngredient.icon}</div>
                            </div>
                            <div className="p-10 md:w-2/3">
                                <h2 className="text-3xl font-bold text-[#496F3E] mb-2">{selectedIngredient.name}</h2>
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-6 font-bold">{selectedIngredient.origin}</p>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {selectedIngredient.fullDesc}
                                </p>

                                <div className="space-y-3">
                                    <h4 className="font-bold text-[#496F3E] text-sm uppercase">Beneficios Clave:</h4>
                                    {selectedIngredient.benefits.map((b, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-[#496F3E] rounded-full" />
                                            {b}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};