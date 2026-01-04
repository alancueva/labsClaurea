'use client';
import { LogoClaurea, IconoClaureasimple } from '@/components/icons/logo-claurea';
import Link from 'next/link';

interface DynamicHeaderProps {
    isScrolled: boolean;
}

const BRAND_COLORS = {
    primaryGreen: '#496F3E',
    secondaryBeige: '#F7E2D0',
};




export default function Navbar() {

    const cartItemCount:number = 1;

    return (
        <nav
            //${headerStyle}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out `}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 md:px-8">

                {/* Logo Central que aparece/desaparece */}
                {/* Este logo pequeño se centra y aparece cuando se activa el scroll, simulando el movimiento */}
                {/* ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 `}>
                    {/* <logoClaurea className="w-4 h-4 mr-2 text-white" /> */}
                    <Link href="/" className="rounded-md px-3 py-2 flex items-center">
                        <IconoClaureasimple className="h-35 w-auto text-[#F7E2D0] hover:text-[#496F3E] transition-all duration-500" />

                    </Link>

                </div>

                {/* Links a la izquierda (Aparecen al hacer scroll) */}
                {/* ${isScrolled ? 'opacity-100' : 'opacity-0'} */}
                <div className={`flex space-x-6 text-sm font-medium transition-all duration-500 `}>
                    <a href="#identity" className="text-[#F7E2D0] hover:text-[#496F3E]" >Identidad</a>
                    <a href="#products" className="text-[#F7E2D0] hover:text-[#496F3E]" >Colección</a>
                    <a href="#compromiso" className="text-[#F7E2D0] hover:text-[#496F3E]" >Compromiso</a>
                </div>

                {/* CTA a la derecha (Aparece al hacer scroll) */}
                {/* ${isScrolled ? 'opacity-100' : 'opacity-0'} */}
                <div className={`flex space-x-4 transition-all duration-500 `}>
                    <Link href="/page/productos" >
                        <button className="text-sm font-medium px-4 py-2 rounded-full text-[#496F3E]  bg-[#F7E2D0] hover:bg-[#496F3E] transition-all duration-500 hover:text-[#F7E2D0] shadow-md transition hover:shadow-lg">
                            Comprar Ahora
                        </button>
                     </Link>   
                    

                    {/* Carrito de Compras */}
                    <button className="relative p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6 text-[#F7E2D0] hover:text-[#496F3E]" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {cartItemCount > 0 && (
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/4 bg-red-600 rounded-full">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}