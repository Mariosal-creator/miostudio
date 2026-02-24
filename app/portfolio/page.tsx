"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PortfolioPage() {
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  // Array de videos horizontales - Reemplaza estos IDs con tus videos reales de YouTube
  const videosHorizontales = [
    { id: "-rpHP2Q6Tow", title: "Proyecto Horizontal 1", descripcion: "Video corporativo" },
    { id: "QwVjREkYcBs", title: "Proyecto Horizontal 2", descripcion: "Video publicitario" },
    { id: "dE0CtdinFQ0", title: "Proyecto Horizontal 3", descripcion: "Documental" },
    { id: "mnz7tJwKw1M", title: "Proyecto Horizontal 4", descripcion: "Producción audiovisual" },
    { id: "55yTzvAzzlk", title: "Proyecto Horizontal 5", descripcion: "Video promocional" },
    { id: "HYpSl1ewrXo", title: "Proyecto Horizontal 6", descripcion: "Contenido corporativo" },
  ];

  // Array de videos verticales - Reemplaza estos IDs con tus videos reales de YouTube
  const videosVerticales = [
    { id: "fJk7KtLVDGE", title: "Reel 1", descripcion: "Instagram Reel" },
    { id: "RShWcFVBqL8", title: "Reel 2", descripcion: "TikTok Video" },
    { id: "uhBN_a6nyxg", title: "Reel 3", descripcion: "Stories" },
    { id: "3YI6dt6IV4A", title: "Reel 4", descripcion: "Short Video" },
    { id: "wsKkKFI6P44", title: "Reel 5", descripcion: "Vertical Ad" },
    { id: "OlVHOPxZD7s", title: "Reel 6", descripcion: "Social Media" },
    { id: "qwivo6CqZwE", title: "Reel 7", descripcion: "Short Video" },
    { id: "21PUf57QeKA", title: "Reel 8", descripcion: "Instagram Story" },
    { id: "2cr8E8n62JU", title: "Reel 9", descripcion: "TikTok Content" },
    { id: "AOurxfWZ3Y4", title: "Reel 10", descripcion: "Video Vertical" },
    { id: "DWpNTbN826A", title: "Reel 11", descripcion: "Social Content" },
    { id: "RYD39bVG-NI", title: "Reel 12", descripcion: "Short Format" },
  ];

  const openModal = (videoId: string) => {
    setModalVideo(videoId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalVideo(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
              Nuestro Portfolio
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
              Proyectos audiovisuales que hemos realizado para marcas líderes
            </p>
          </div>

          {/* Videos Horizontales Section */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 text-center px-4">
              Videos Horizontales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
              {videosHorizontales.map((video, index) => (
                <div 
                  key={index} 
                  onClick={() => openModal(video.id)}
                  className="group relative bg-black rounded-lg md:rounded-xl overflow-hidden border border-[#f20c0c]/30 hover:border-[#f20c0c] transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video relative bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[#f20c0c] to-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 md:p-4 bg-gradient-to-r from-black to-gray-900">
                    <h3 className="text-white font-semibold text-sm md:text-base mb-1">{video.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm">{video.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Videos Verticales Section */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 text-center px-4">
              Videos Verticales
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {videosVerticales.map((video, index) => (
                <div 
                  key={index}
                  onClick={() => openModal(video.id)}
                  className="group relative bg-black rounded-lg md:rounded-xl overflow-hidden border border-[#f20c0c]/30 hover:border-[#f20c0c] transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[9/16] relative bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#f20c0c] to-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-black to-gray-900">
                    <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 truncate">{video.title}</h3>
                    <p className="text-gray-400 text-[10px] sm:text-xs truncate">{video.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Video */}
      {modalVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f20c0c] hover:bg-[#b00909] text-white flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Cerrar modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* iframe de YouTube */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
