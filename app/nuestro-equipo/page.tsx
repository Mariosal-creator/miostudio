"use client";

import { useEffect, useState } from "react";

type Miembro = {
  id: string;
  nombre: string;
  cargo: string;
  descripcion: string;
  foto: string;
  whatsapp: string;
};

const integrantes: Miembro[] = [
  {
    id: "mario",
    nombre: "Mario Salazar",
    cargo: "Jefe de Audio y Sonido",
    descripcion:
      "Especialista en captura, mezcla y diseño sonoro; crea atmósferas claras, potentes y envolventes para elevar cada producción audiovisual.",
    foto: "/equipo/mario-salazar.jpg",
    whatsapp: "https://wa.me/593982048240?text=Hola%20Mario%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.",
  },
  {
    id: "obed",
    nombre: "Obed Briseño",
    cargo: "Jefe de Fotografía",
    descripcion:
      "Dirige la propuesta visual, iluminación y encuadre; construye una estética cinematográfica sólida que fortalece el mensaje de cada proyecto.",
    foto: "/equipo/obed-briseno.jpg",
    whatsapp: "https://wa.me/593982048240?text=Hola%20Obed%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20fotograf%C3%ADa.",
  },
  {
    id: "ismael",
    nombre: "Ismael Pierre",
    cargo: "Jefe de Video",
    descripcion:
      "Lidera la producción y realización de video; organiza cada etapa técnica y creativa para convertir ideas en piezas impactantes.",
    foto: "/equipo/ismael-pierre.jpg",
    whatsapp: "https://wa.me/593982048240?text=Hola%20Ismael%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20video.",
  },
];

export default function NuestroEquipoPage() {
  const [modalImagen, setModalImagen] = useState<string | null>(null);
  const [modalNombre, setModalNombre] = useState<string>("");

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const manejarEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        cerrarModal();
      }
    };

    window.addEventListener("keydown", manejarEscape);
    return () => window.removeEventListener("keydown", manejarEscape);
  }, []);

  const abrirModal = (src: string, nombre: string) => {
    if (!src) {
      return;
    }
    setModalImagen(src);
    setModalNombre(nombre);
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setModalImagen(null);
    setModalNombre("");
    document.body.style.overflow = "auto";
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Nuestro <span className="text-[#f20c0c]">Equipo</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300 sm:mt-6 sm:text-lg md:text-xl">
            Conoce a nuestros tres integrantes y haz clic en cada fotografía para verla en una ventana modal.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {integrantes.map((integrante) => (
            <article
              key={integrante.id}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-4"
            >
              <button
                type="button"
                onClick={() => abrirModal(integrante.foto, integrante.nombre)}
                className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-black"
              >
                <img
                  src={integrante.foto}
                  alt={integrante.nombre}
                  className="h-64 w-full object-cover transition group-hover:scale-105 sm:h-72 md:h-64 lg:h-72"
                />
                <span className="absolute inset-x-0 bottom-0 bg-black/70 px-3 py-2 text-left text-xs text-white sm:text-sm">
                  Clic para ampliar
                </span>
              </button>

              <div className="mt-4 flex-1">
                <h2 className="text-lg font-semibold text-white sm:text-xl">{integrante.nombre}</h2>
                <p className="mt-1 text-sm font-medium text-[#f20c0c]">{integrante.cargo}</p>
                <p className="mt-2 text-sm text-gray-300">{integrante.descripcion}</p>
              </div>

              <a
                href={integrante.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Escribir por WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>

      {modalImagen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4"
          onClick={cerrarModal}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-black sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={cerrarModal}
              className="absolute right-2 top-2 z-10 inline-flex min-h-10 min-w-10 items-center justify-center rounded-full bg-[#f20c0c] px-3 py-2 text-xs font-semibold text-white sm:right-3 sm:top-3 sm:text-sm"
              aria-label="Cerrar modal"
            >
              Cerrar
            </button>
            <img src={modalImagen} alt={modalNombre} className="max-h-[75vh] w-full object-contain sm:max-h-[82vh]" />
          </div>
        </div>
      )}
    </section>
  );
}
