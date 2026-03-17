"use client";
import { useState } from "react";
import Image from "next/image";
import ModalGallery from "./ModalGallery";

export default function CapacitacionGallery({ images }) {
  const [modalIndex, setModalIndex] = useState(null);

  if (!images.length) {
    return (
      <section className="mt-12 sm:mt-14">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-white">Galeria de capacitacion</h2>
          <p className="text-sm text-gray-400">0 imagen(es)</p>
        </div>
        <p className="mt-4 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-6 text-sm text-gray-300">
          Aun no hay imagenes en la carpeta capacitacion.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12 sm:mt-14 px-2 sm:px-8 md:px-12 mb-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-8 md:px-12">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-white">Aprende de nuestros especialistas</h2>
          <p className="text-sm text-gray-400">{images.length} imagen(es)</p>
        </div>
        <p className="mt-2 text-gray-300 text-sm w-full">
          Perfecciona tus <b style={{ color: '#f20c0c' }}>producciones audiovisuales</b> con la guía de <b style={{ color: '#f20c0c' }}>Ismael Pierre</b>, videógrafo profesional con amplia trayectoria en <b style={{ color: '#f20c0c' }}>cámaras</b>, <b style={{ color: '#f20c0c' }}>iluminación avanzada</b> y <b style={{ color: '#f20c0c' }}>gestión de color</b>. Ismael enseña desde <b style={{ color: '#f20c0c' }}>qué equipos comprar</b> hasta <b style={{ color: '#f20c0c' }}>técnicas de grabación</b>, <b style={{ color: '#f20c0c' }}>optimización de imagen</b> y <b style={{ color: '#f20c0c' }}>flujos de trabajo para streaming profesional</b>. Sus <b style={{ color: '#f20c0c' }}>capacitaciones especializadas</b> para <b style={{ color: '#f20c0c' }}>cineastas</b> y <b style={{ color: '#f20c0c' }}>creadores de contenido</b> te ayudarán a elevar la <b style={{ color: '#f20c0c' }}>calidad de tus videos</b> y adquirir <b style={{ color: '#f20c0c' }}>competencias clave</b> para destacar en el <b style={{ color: '#f20c0c' }}>mundo audiovisual contemporáneo</b>.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, idx) => (
            <article
              key={image.src}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5 cursor-pointer group"
              onClick={() => setModalIndex(idx)}
              tabIndex={0}
              aria-label={`Ampliar imagen ${image.label}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setModalIndex(idx);
              }}
            >
              <div className="relative aspect-[4/3] w-full group-hover:brightness-110 group-hover:scale-[1.02] transition">
                <Image
                  src={image.src}
                  alt={`Capacitacion ${image.label}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white text-lg font-bold bg-black/40">Ver grande</span>
              </div>
            </article>
          ))}
        </div>
        {modalIndex !== null && (
          <ModalGallery
            images={images}
            index={modalIndex}
            onClose={() => setModalIndex(null)}
          />
        )}
      </div>
    </section>
  );
}