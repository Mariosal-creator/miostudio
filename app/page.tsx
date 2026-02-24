"use client";

import { useState } from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import ProductCarousel from "./components/ProductCarousel";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Header />
      <HeroSlider />
      
      {/* Sección Nuestro Editor */}
      <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 md:mb-8 lg:mb-12 px-4">
            Nuestro Editor
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div 
              onClick={openModal}
              className="group relative aspect-video rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden cursor-pointer border-2 border-[#f20c0c]/30 hover:border-[#f20c0c] transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <img 
                src="https://img.youtube.com/vi/AL3q-nDDprA/maxresdefault.jpg"
                alt="Nuestro Editor"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://img.youtube.com/vi/AL3q-nDDprA/hqdefault.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#f20c0c] to-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8">
                  <p className="text-white text-base sm:text-lg md:text-xl font-semibold">Conoce a nuestro equipo de edición</p>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-1 md:mt-2">Click para reproducir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Video */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl aspect-video bg-black rounded-lg md:rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-4 md:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#f20c0c] hover:bg-[#b00909] text-white flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Cerrar modal"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/AL3q-nDDprA?autoplay=1&rel=0"
              title="Nuestro Editor"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <ProductCarousel />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
