"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/slides/slide1.jpg",
    alt: "Slide 1",
    title: "Producción Audiovisual\nde Clase Mundial",
    subtitle: "Llevamos tu visión a la pantalla con\ntecnología y creatividad de vanguardia",
    cta: { label: "Ver nuestro trabajo", href: "/portfolio" },
  },
  {
    src: "/slides/slide2.jpg",
    alt: "Slide 2",
    title: "Filmmaking Profesional",
    subtitle: "Desde pre-producción hasta post-producción,\ntenemos todo lo que necesitas",
    cta: { label: "Conocer servicios", href: "/portfolio" },
  },
  {
    src: "/slides/slide3.jpg",
    alt: "Slide 3",
    title: "Historias que Impactan",
    subtitle: "Cada proyecto es una obra de arte audiovisual",
    cta: { label: "Contactar equipo", href: "/portfolio" },
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setIndex(i % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo((index - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh]">
        <div
          className="flex w-full h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="relative w-full shrink-0 h-full">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                className="object-cover"
              />
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Text content */}
              <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl text-left text-white ml-[100px]">
                  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight whitespace-pre-line">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base lg:text-lg text-white/90 whitespace-pre-line">
                    {s.subtitle}
                  </p>
                  <div className="mt-6">
                    <a
                      href={s.cta.href}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:brightness-110"
                    >
                      {s.cta.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          aria-label="Anterior"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
        >
          ◀
        </button>
        <button
          aria-label="Siguiente"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
        >
          ▶
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-[#f20c0c]" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
