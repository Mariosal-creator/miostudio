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
    id: "rogers",
    nombre: "Rogers Laverde",
    cargo: "Productor y Director de Proyecto",
    descripcion:
      "Coordina la estrategia, logística y dirección general del proyecto para asegurar entregas claras, ordenadas y de alto impacto visual.",
    foto: "/equipo/Rogers.jpg",
    whatsapp: "https://wa.me/593990439734?text=Hola%20Rogers%20Laverde%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20producci%C3%B3n%20audiovisual.",
  },
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
    nombre: "Obed Briceño",
    cargo: "Jefe de Fotografía",
    descripcion:
      "Dirige la propuesta visual, iluminación y encuadre; construye una estética cinematográfica sólida que fortalece el mensaje de cada proyecto.",
    foto: "/equipo/obed-briseno.jpg",
    whatsapp: "https://wa.me/593987898227?text=Hola%20Obed%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20fotograf%C3%ADa.",
  },
  {
    id: "ismael",
    nombre: "Ismael Pierre",
    cargo: "Jefe de Video",
    descripcion:
      "Lidera la producción y realización de video; organiza cada etapa técnica y creativa para convertir ideas en piezas impactantes.",
    foto: "/equipo/ismael-pierre.jpg",
    whatsapp: "https://wa.me/593983231437?text=Hola%20Ismael%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20video.",
  },
];

export default function NuestroEquipoPage() {
  const [modalImagen, setModalImagen] = useState<string | null>(null);
  const [modalNombre, setModalNombre] = useState<string>("");

  useEffect(() => {
    document.body.style.overflow = modalImagen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalImagen]);

  useEffect(() => {
    const manejarEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalImagen(null);
        setModalNombre("");
      }
    };
    window.addEventListener("keydown", manejarEscape);
    return () => window.removeEventListener("keydown", manejarEscape);
  }, []);

  const abrirModal = (src: string, nombre: string, id?: string) => {
    if (!src) return;
    // Si es Ismael, mostrar el PDF en vez de la imagen
    if (id === "ismael") {
      setModalImagen("/documentos/cvismaelpierre.pdf");
      setModalNombre(nombre);
      return;
    }
    setModalImagen(src);
    setModalNombre(nombre);
  };
  const cerrarModal = () => {
    setModalImagen(null);
    setModalNombre("");
  };

  // Secciones adicionales
  const especialidades = [
    "Producción audiovisual integral",
    "Dirección de fotografía y video",
    "Diseño sonoro y mezcla profesional",
    "Iluminación avanzada y manejo de color",
    "Streaming y transmisión en vivo",
    "Narrativa visual y storytelling",
    "Capacitación y formación de equipos",
  ];

  const valores = [
    "Creatividad",
    "Compromiso",
    "Calidad",
    "Innovación",
    "Trabajo en equipo",
    "Ética profesional",
  ];

  const beneficios = [
    "Atención personalizada en cada proyecto",
    "Soluciones creativas y técnicas de alto nivel",
    "Acompañamiento de principio a fin",
    "Actualización constante en tendencias y tecnología",
    "Resultados medibles y satisfacción garantizada",
  ];

  const filosofia = [
    {
      frase: "Creemos que cada proyecto es una oportunidad para contar una historia única y memorable.",
      autor: "Equipo Moi Studio",
    },
    {
      frase: "La colaboración y la pasión por el detalle nos distinguen en cada entrega.",
      autor: "Obed Briceño",
    },
    {
      frase: "Nuestro compromiso es superar expectativas y construir relaciones de confianza a largo plazo.",
      autor: "Rogers Laverde",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-0 py-0">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-b from-black via-[#181818] to-[#232323] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-[#f20c0c]/30 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Talento, experiencia y pasión audiovisual
          </span>
          <h1 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Nuestro <span className="text-[#f20c0c]">Equipo</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base text-white/85 sm:text-lg">
            Somos un grupo multidisciplinario que combina creatividad, técnica y compromiso para lograr resultados extraordinarios en cada proyecto audiovisual.
          </p>
        </div>
      </div>

      {/* CARDS DE MIEMBROS */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Conoce a nuestro equipo</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300 sm:mt-6 sm:text-lg md:text-xl">
            Haz clic en cada fotografía para ampliar y ver detalles de contacto.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrantes.map((integrante) => (
            <article
              key={integrante.id}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm sm:p-4"
            >
              <button
                type="button"
                onClick={() => abrirModal(integrante.foto, integrante.nombre, integrante.id)}
                className="group relative block aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-black"
              >
                <img
                  src={integrante.foto}
                  alt={integrante.nombre}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-black/70 px-3 py-2 text-left text-xs text-white sm:text-sm">
                  Clic para ampliar
                </span>
              </button>
              <div className="mt-4 flex-1">
                <h2 className="text-lg font-semibold text-white sm:text-xl">{integrante.nombre}</h2>
                <p className="mt-1 text-sm font-medium text-[#f20c0c]">{integrante.cargo}</p>
                <p className="mt-2 text-sm text-gray-300">{integrante.descripcion}</p>
                {integrante.id === "ismael" && (
                  <button
                    type="button"
                    onClick={() => abrirModal("/documentos/cvismaelpierre.pdf", integrante.nombre, integrante.id)}
                    className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#f20c0c] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#f20c0c] hover:bg-[#f20c0c] hover:text-white transition"
                  >
                    Ver CV
                  </button>
                )}
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

      {/* ESPECIALIDADES */}
      <section className="bg-[#181818] border-b border-white/10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Especialidades del equipo</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {especialidades.map((esp) => (
              <li key={esp} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white/90 text-sm flex items-center gap-3">
                <span className="inline-block h-3 w-3 rounded-full bg-[#f20c0c] mr-2" />
                {esp}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-[#151515] border-b border-white/10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Nuestros valores</h2>
          <ul className="mt-8 flex flex-wrap justify-center gap-4">
            {valores.map((valor) => (
              <li key={valor} className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-white/90 text-sm font-semibold">
                {valor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-[#181818] border-b border-white/10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Por qué trabajar con nosotros?</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {beneficios.map((b) => (
              <li key={b} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white/90 text-sm flex items-center gap-3">
                <span className="inline-block h-3 w-3 rounded-full bg-[#f20c0c] mr-2" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FILOSOFÍA DE TRABAJO */}
      <section className="bg-[#151515] border-b border-white/10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Nuestra filosofía</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filosofia.map((f) => (
              <blockquote key={f.frase} className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-white/90 text-sm shadow-sm">
                <p className="mb-3">“{f.frase}”</p>
                <footer className="text-xs text-[#f20c0c] font-bold">{f.autor}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f20c0c] to-black">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-black sm:text-4xl">¿Quieres trabajar con nosotros?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/90">
            Contáctanos para sumar tu talento o para que nuestro equipo lleve tu proyecto al siguiente nivel.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="/contacto" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-black hover:text-white">
              Contactar equipo
            </a>
          </div>
        </div>
      </section>

      {/* MODAL IMAGEN */}
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
            {modalImagen.endsWith(".pdf") ? (
              <iframe
                src={modalImagen}
                title={modalNombre}
                className="w-full min-h-[70vh] sm:min-h-[82vh] bg-white"
                style={{ border: 0 }}
                allow="autoplay; encrypted-media"
              />
            ) : (
              <img src={modalImagen} alt={modalNombre} className="max-h-[75vh] w-full object-contain sm:max-h-[82vh]" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
