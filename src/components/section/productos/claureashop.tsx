'use client';
import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Star, 
  Plus, 
  Minus, 
  X, 
  Info, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  RefreshCw,
  Eye,
  Leaf,
  FlaskConical
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  details: string;
  image: string;
  tag?: string;
}

interface CartItem extends Product {
  quantity: number;
}

// Colores de marca: Verde (#496F3E), Crema (#F7E2D0), Blanco (#FFFFFF)

const App = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [view, setView] = useState<'shop' | 'checkout'>('shop');

  const products: Product[] = [
    {
      id: 1,
      name: "Bálsamo Labial",
      price: 12.00,
      category: "Cuidado Labial",
      rating: 4.9,
      reviews: 128,
      description: "Nuestro producto estrella nacido de la química pura. Hidratación profunda con ingredientes 100% naturales.",
      details: "Formulado con manteca de karité, aceite de coco y vitamina E. Sin petrolatos ni fragancias sintéticas.",
      image: "/productos/1766697206290.jpg",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Sérum Fortalecedor",
      price: 27.00,
      category: "Ojos y Cejas",
      rating: 4.8,
      reviews: 85,
      description: "Nutrición intensa para pestañas y cejas. Revitaliza y realza tu mirada de forma vegana.",
      details: "Mezcla de aceites prensados en frío (ricino, argán y almendras) con extractos botánicos activos.",
      image: "/productos/1766690411788.jpg",
      tag: "Vegano"
    },
    {
      id: 3,
      name: "Sérum Reparador",
      price: 50.00,
      category: "Cuero Cabelludo",
      rating: 5.0,
      reviews: 42,
      description: "La combinación perfecta para tu rutina diaria de cuidado consciente.",
      details: "Incluye el Bálsamo Labial Original y el Sérum Fortalecedor en una bolsa de lino orgánico.",
      image: "/productos/1766690411861.jpg",
      tag: "Vegano"
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navegación de Tienda */}
      {/* <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => setView('shop')}>
            <span className="text-[#496F3E] font-serif font-black text-2xl tracking-tighter">CLAUREA</span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-light text-gray-400">Shop Online</span>
          </div>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-[#496F3E] hover:bg-[#F7E2D0]/50 rounded-full transition-colors"
          >
            <ShoppingBag size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-[#496F3E] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </nav> */}

      {/* Header de Categoría */}
      <header className="bg-[#F7E2D0]/30 py-20 px-6">
        <div className="max-w-7xl mx-auto mt-10">
          <h1 className="text-4xl font-serif font-bold text-[#496F3E] mb-2 text-center md:text-left">Nuestros Productos</h1>
          <p className="text-gray-600 max-w-lg text-center md:text-left">Fórmulas botánicas desarrolladas con precisión química para el cuidado diario de tu piel.</p>
        </div>
      </header>

      {/* Catálogo de Productos */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <div key={product.id} className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Imagen y Badge */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-[#496F3E] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white text-[#496F3E] p-3 rounded-full hover:bg-[#F7E2D0] transition-colors"
                  >
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[11px] uppercase tracking-widest text-[#496F3E] font-bold">{product.category}</span>
                  <div className="flex items-center text-amber-500 text-xs">
                    {/* s<Star size={12} fill="currentColor" className="mr-1" /> */}
                    {/* <span>{product.rating}</span> */}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-2xl font-serif font-bold text-[#496F3E]">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-[#496F3E] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3a5931] transform active:scale-95 transition-all flex items-center gap-2 shadow-md shadow-[#496F3E]/20"
                  >
                    <Plus size={16} /> Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Drawer del Carrito */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#F7E2D0]/20">
              <h2 className="text-xl font-serif font-bold text-[#496F3E] flex items-center gap-2">
                <ShoppingBag size={20} /> Tu Carrito
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <ShoppingBag size={48} className="mb-4" />
                  <p className="text-lg">Tu carrito está vacío</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-[#496F3E] font-bold underline"
                  >
                    Comenzar a comprar
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-[#496F3E] font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 hover:bg-[#F7E2D0]"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 hover:bg-[#F7E2D0]"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                      <X size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold text-xl">${cartTotal.toFixed(2)}</span>
                </div>
                <button 
                  className="w-full bg-[#496F3E] text-white py-4 rounded-xl font-bold hover:bg-[#3a5931] transition-all shadow-lg shadow-[#496F3E]/20"
                >
                  Finalizar Compra
                </button>
                {/* <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-widest font-bold">Envío gratuito en pedidos mayores a $50</p> */}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal Detalle de Producto */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-white/80 rounded-full hover:bg-white shadow-md transition-all"
            >
              <X size={20} />
            </button>
            
            <div className="md:w-1/2 h-full">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover min-h-[400px]" />
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="text-[#496F3E] font-bold text-xs uppercase tracking-[0.2em]">{selectedProduct.category}</span>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mt-2 mb-4">{selectedProduct.name}</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-serif font-bold text-[#496F3E]">${selectedProduct.price.toFixed(2)}</span>
                <div className="flex items-center text-amber-500">
                  {/* <Star size={16} fill="currentColor" />
                  <span className="ml-1 text-sm font-bold">{selectedProduct.rating} ({selectedProduct.reviews} reseñas)</span> */}
                </div>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
                <p>{selectedProduct.description}</p>
                <div className="p-4 bg-[#F7E2D0]/30 rounded-xl border border-[#F7E2D0]/50 text-sm italic">
                  <Info size={16} className="text-[#496F3E] mb-2" />
                  {selectedProduct.details}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <ShieldCheck size={16} className="text-[#496F3E]" /> Calidad de Grado Químico
                </div>
                {/* <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <Truck size={16} className="text-[#496F3E]" /> Envío Seguro
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <RefreshCw size={16} className="text-[#496F3E]" /> Devolución 30 días
                </div> */}
              </div>

              <button 
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="w-full bg-[#496F3E] text-white py-4 rounded-full font-bold hover:bg-[#3a5931] transition-all flex items-center justify-center gap-3"
              >
                <Plus size={20} /> Añadir al Carrito
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Seccion de Beneficios */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-2">
          {[
            { title: "Vegano y Cruelty-Free", desc: "Sin ingredientes de origen animal", icon: Leaf },
            // { title: "Envío Nacional", desc: "Llegamos a todo el país", icon: Truck },
            // { title: "Pago Seguro", desc: "Transacciones encriptadas", icon: ShieldCheck },
            { title: "Pureza Garantizada", desc: "Fórmulas sin químicos raros", icon: FlaskConical }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4">
              <item.icon className="text-[#496F3E] mb-4 w-8 h-8" />
              <h4 className="font-bold text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;