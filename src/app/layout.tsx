import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar2";
import Footer from "@/components/footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.labs-claurea.vercel.app"),
  title: {
    default: "Claurea",
    template: "%s | Claurea",
  },
  description:
    "Descubre la belleza consciente con Claurea. Productos de cosmética natural, veganos y cruelty-free, formulados con precisión química para el cuidado de tu piel.",
  keywords: [
    "cosmética natural",
    "cuidado de la piel",
    "vegano",
    "cruelty-free",
    "bálsamo labial",
    "sérum de pestañas",
    "sérum capilar",
    "belleza consciente",
    "sin parabenos",
    "cosmética sostenible",
    "ingredientes naturales",
  ],
  authors: [{ name: "Claurea Team" }],
  creator: "Claurea",
  publisher: "Claurea",
  category: "beauty",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Claurea | Cosmética Natural y Vegana",
    description:
      "La sinergia perfecta entre naturaleza y ciencia para tu rutina de belleza.",
    url: "https://www.labs-claurea.vercel.app",
    siteName: "Claurea",
    images: [
      {
        url: "/logo_perfil_claurea.png", // Crea y añade una imagen para redes sociales en tu carpeta /public
        width: 1200,
        height: 630,
        alt: "Claurea - Cosmética Natural y Vegana",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claurea | Cosmética Natural y Vegana",
    description:
      "La sinergia perfecta entre naturaleza y ciencia para tu rutina de belleza.",
    images: ["/logo_perfil_claurea.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
