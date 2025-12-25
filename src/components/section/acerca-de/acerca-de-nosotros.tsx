'use client';
import React from 'react';
import Link from 'next/link';
import { Leaf, FlaskConical, Globe, Heart, CheckCircle, ArrowRight } from 'lucide-react';

const SectionTitle = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
    <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-6 ${light ? 'text-[#F7E2D0]' : 'text-[#496F3E]'}`}>
        {children}
    </h2>
);


export default function AcercaDe() {

    // Paleta de colores:
    // Verde: #496F3E
    // Crema: #F7E2D0
    // Blanco: #FFFFFF


    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* Hero Section */}
            <header className="relative py-20 md:py-32 bg-[#F7E2D0] overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#496F3E] opacity-5 rounded-full -mr-32 -mt-32"></div>
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-8 p-4 bg-white rounded-full shadow-sm">
                            {/* Logo Placeholder */}
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-[#496F3E] font-serif font-black text-4xl tracking-widest uppercase">CLAUREA</span>
                                <span className="text-[#496F3E] text-xs tracking-[0.3em] font-light mt-1">BELLEZA CONSCIENTE</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#496F3E] mb-6 max-w-3xl leading-tight">
                            Donde la química y la naturaleza encuentran su equilibrio
                        </h1>
                        <p className="text-lg text-[#496F3E]/80 max-w-2xl font-light leading-relaxed">
                            Fundada en 2023 bajo la premisa de que el cuidado personal debe ser puro,
                            transparente y profundamente respetuoso con nuestra piel.
                        </p>
                    </div>
                </div>
            </header>

            {/* Historia Section */}
            <section className="py-20 max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className={`transition-all duration-1000 transform translate-x-1 opacity-100`}>
                        <SectionTitle>Nuestra Historia</SectionTitle>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Claurea nació de una pasión personal que tomó forma en enero de 2023, cuando me propuse crear un bálsamo labial que fuera más que un producto: algo sencillo, puro y confiable.
                            </p>
                            <p>
                                Con mis conocimientos en <strong>Química</strong>, formulé una mezcla equilibrada de ingredientes naturales que hidratan y protegen los labios a profundidad, sin químicos raros ni complicaciones. Ese bálsamo fue el primer paso de un sueño: ofrecer cuidado facial que se sienta como una extensión de tu piel, no como una máscara.
                            </p>
                            <p>
                                En diciembre de 2024, ese sueño creció y se convirtió en <strong>Claurea</strong>. Al bálsamo se sumó un sérum fortalecedor para pestañas y cejas, creado con aceites naturales para nutrir, revitalizar y realzar la mirada de forma práctica y vegana.
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-[#F7E2D0] rounded-2xl -z-10 transition-transform group-hover:scale-105"></div>
                        <div className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden shadow-xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=800"
                                alt="Proceso de formulación de Claurea"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores / Pilares */}
            <section className="bg-[#496F3E] py-20 text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionTitle light>Nuestros Pilares</SectionTitle>
                        <p className="text-[#F7E2D0]/80 max-w-xl mx-auto">
                            Cada gota y cada envase de Claurea responde a un compromiso innegociable con la calidad y la ética.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-[#F7E2D0] rounded-full flex items-center justify-center mb-2">
                                <FlaskConical className="text-[#496F3E] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-[#F7E2D0]">Ciencia Consciente</h3>
                            <p className="text-sm font-light leading-relaxed opacity-90">
                                Aprovechamos mi formación química para crear fórmulas estables y efectivas, eliminando rellenos innecesarios.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-[#F7E2D0] rounded-full flex items-center justify-center mb-2">
                                <Leaf className="text-[#496F3E] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-[#F7E2D0]">100% Vegano</h3>
                            <p className="text-sm font-light leading-relaxed opacity-90">
                                Respetamos la vida en todas sus formas. Nuestros ingredientes son de origen vegetal y libres de crueldad animal.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-[#F7E2D0] rounded-full flex items-center justify-center mb-2">
                                <Globe className="text-[#496F3E] w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-[#F7E2D0]">Visión Sostenible</h3>
                            <p className="text-sm font-light leading-relaxed opacity-90">
                                Desde los ingredientes hasta el empaque, buscamos minimizar nuestra huella, cuidando el planeta que nos da todo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filosofía Section */}
            <section className="py-24 max-w-6xl mx-auto px-6">
                <div className="bg-[#F7E2D0]/30 rounded-[3rem] p-8 md:p-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#496F3E] mb-8 italic">
                            &quot;Claurea no es solo para mujeres o solo para hombres; es para todos los que buscan cuidado real.&quot;
                        </h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light">
                            <p>
                                Cada fórmula lleva detrás una intención consciente: usar lo mejor de la naturaleza, con empaques que cuidan el medio ambiente y un enfoque que dice <strong>&quot;sé tú, pero con un toque especial&quot;</strong>.
                            </p>
                            <p>
                                Desde aquel primer bálsamo hasta el sérum de hoy, Claurea es un compromiso con la autenticidad – porque tu piel merece sentirse viva, cómoda y, sobre todo, tuya.
                            </p>
                        </div>

                        <div className="mt-12 pt-12 border-t border-[#496F3E]/10 flex flex-wrap justify-center gap-8">
                            <div className="flex items-center space-x-2 text-[#496F3E]">
                                <CheckCircle size={20} />
                                <span className="text-sm font-medium">Sin parabenos</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#496F3E]">
                                <CheckCircle size={20} />
                                <span className="text-sm font-medium">Sin fragancias sintéticas</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[#496F3E]">
                                <CheckCircle size={20} />
                                <span className="text-sm font-medium">Empaque Eco-friendly</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center border-2 border-[#F7E2D0] p-12 rounded-2xl">
                    <Heart className="text-[#496F3E] mx-auto mb-6 w-10 h-10" />
                    <h2 className="text-3xl font-serif font-bold text-[#496F3E] mb-4">Únete a la revolución natural</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Descubre nuestra línea de productos esenciales diseñados para resaltar tu belleza real.
                    </p>
                    <Link href="/page/productos">
                        <button className="bg-[#496F3E] text-white px-8 py-3 rounded-full hover:bg-[#3a5931] transition-colors flex items-center mx-auto group">
                            Ver Productos
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </button>
                    </Link>
                </div>
            </section>

            {/* Footer simple */}
            {/* <footer className="py-12 bg-gray-50 text-center">
        <div className="flex flex-col items-center">
          <span className="text-[#496F3E] font-serif font-black text-2xl tracking-widest uppercase opacity-40">CLAUREA</span>
          <p className="text-xs text-gray-400 mt-4 italic">© 2025 Claurea - Cuidado con intención.</p>
        </div>
      </footer> */}
        </div>
    );
};
