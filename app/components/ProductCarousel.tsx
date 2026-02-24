"use client";

import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Reels y Videos Cortos",
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Cursos en Video",
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Podcast Profesional",
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Videos Publicitarios",
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9 8l7 4-7 4z"/>
      </svg>
    ),
  },
  {
    id: 5,
    name: "Videos Corporativos",
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
      </svg>
    ),
  },
];

const getRandomSales = () => Math.floor(Math.random() * (8000 - 5000 + 1)) + 5000;

export default function ProductCarousel() {
  const [sales, setSales] = useState<Record<number, number>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setSales(products.reduce((acc, p) => ({ ...acc, [p.id]: getRandomSales() }), {}));

    const interval = setInterval(() => {
      setSales(prev => {
        const newSales = { ...prev };
        const productsToUpdate = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < productsToUpdate; i++) {
          const randomProduct = products[Math.floor(Math.random() * products.length)];
          newSales[randomProduct.id] = (newSales[randomProduct.id] || 0) + 1;
        }
        return newSales;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
          Nuestros Servicios Principales
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          Desde preproducción hasta postproducción, contamos con expertos en cada área
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden bg-white">
        <div className="animate-scroll-gallery flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-64 sm:w-72 lg:w-80"
            >
              <div className="h-full bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gray-800 to-black overflow-hidden flex items-center justify-center cursor-pointer group">
                  <div className="text-[#f20c0c] group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                </div>

                <div className="p-4 sm:p-5 text-white">
                  <h3 className="font-bold text-sm sm:text-base mb-3 line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>

                  <div className="mb-4 pb-4 border-b border-white/20">
                    <p className="text-lg sm:text-xl font-bold text-[#f20c0c]">
                      {hydrated ? `${(sales[product.id] ?? 0).toLocaleString()} consultas` : " "}
                    </p>
                  </div>

                  <a 
                    href="https://wa.me/+593982048240?text=Quiero%20m%C3%A1s%20info..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-[#f20c0c] to-black hover:brightness-110 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition duration-300 text-sm sm:text-base text-center"
                  >
                    Solicitar Información
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless infinite loop */}
          {products.map((product) => (
            <div
              key={`${product.id}-duplicate`}
              className="flex-shrink-0 w-64 sm:w-72 lg:w-80"
            >
              <div className="h-full bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gray-800 to-black overflow-hidden flex items-center justify-center cursor-pointer group">
                  <div className="text-[#f20c0c] group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                </div>

                <div className="p-4 sm:p-5 text-white">
                  <h3 className="font-bold text-sm sm:text-base mb-3 line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>

                  <div className="mb-4 pb-4 border-b border-white/20">
                    <p className="text-lg sm:text-xl font-bold text-[#f20c0c]">
                      {hydrated ? `${(sales[product.id] ?? 0).toLocaleString()} consultas` : " "}
                    </p>
                  </div>

                  <a 
                    href="https://wa.me/+593982048240?text=Quiero%20m%C3%A1s%20info..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-[#f20c0c] to-black hover:brightness-110 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition duration-300 text-sm sm:text-base text-center"
                  >
                    Solicitar Información
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
