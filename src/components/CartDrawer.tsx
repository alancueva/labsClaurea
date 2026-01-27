"use client";

import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function CartDrawer() {
  const { state, removeFromCart, updateQuantity, closeCart, clearCart } =
    useCart();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const formatPrecio = (precio: number): string => {
    return precio.toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

    const setCantidadCarrito = () => {
      const tituloSaludo: string = "Hola, Este es mi pedido: ";

      const formatCurrency = (value: number) =>
        new Intl.NumberFormat("es-PE", {
          style: "currency",
          currency: "PEN",
        }).format(value);

      const itemsText = state.items
        .map((item) => {
          const price = formatCurrency(item.price);
          const subtotal = formatCurrency(item.price * item.quantity);
          return `• *${item.name}* (${item.quantity} x ${price}) = ${subtotal}`;
        })
        .join("\n");

      const totalText = `*Total:* ${formatCurrency(state.total)}`;
      const whatsappLink =
        "https://wa.me/51923795164?text=" +
        encodeURIComponent(tituloSaludo + "\n" + itemsText + "\n" + totalText);

      window.open(whatsappLink, "_blank");
    };

    return (
      <>
        {/* Overlay */}
        {state.isOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={closeCart}
          />
        )}

        {/* Cart Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${state.isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-[#496F3E]" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Tu Carrito
                </h2>
                <span className="bg-[#496F3E] text-white text-xs px-2 py-1 rounded-full">
                  {state.items.reduce((count, item) => count + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg mb-2">
                    Tu carrito está vacío
                  </p>
                  <p className="text-gray-400 text-sm">
                    Agrega productos para comenzar
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={500}
                        priority
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.category}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-[#496F3E]">
                            {formatPrecio(item.price)}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                            >
                              <Minus className="w-4 h-4 text-gray-600" />
                            </button>
                            <span className="w-8 text-center text-gray-800 font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                            >
                              <Plus className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <X className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-[#496F3E]">
                    {formatPrecio(state.total)}
                  </span>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={setCantidadCarrito}
                    className="w-full bg-[#496F3E] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#3a5632] transition-colors duration-200"
                  >
                    Finalizar Compra
                  </button>

                  <button
                    onClick={clearCart}
                    className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                  >
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
