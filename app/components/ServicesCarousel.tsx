"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    name: "Video",
    slug: "videos-corporativos",
    description: "Producción audiovisual para marcas, empresas y campañas.",
    image: "/slides/slide1.jpg",
    code: "MO-101",
    sequence: 1,
    positionClass: "order-3",
  },
  {
    id: 2,
    name: "Fotografía",
    slug: "direccion-de-fotografia",
    description: "Dirección visual y sesiones profesionales con estilo editorial.",
    image: "/portfolio/fotografia/miniaturas/paisajista/Nissan-114.jpg",
    code: "MO-204",
    sequence: 2,
    positionClass: "order-2",
  },
  {
    id: 3,
    name: "Asesoría y Capacitaciones",
    slug: "consultoria-audiovisual",
    description: "Acompañamiento estratégico y formación práctica para equipos.",
    image: "/slides/slide2.jpg",
    code: "MO-315",
    sequence: 3,
    positionClass: "order-1",
  },
];

export default function ServicesCarousel() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [isInView, setIsInView] = useState(false);
  const [visibleStep, setVisibleStep] = useState(0);
  const [entryOffsets, setEntryOffsets] = useState<Record<number, { x: number; y: number }>>({});

  const calculateCenterOffsets = () => {
    const stage = stageRef.current;
    if (!stage) return;

    const stageRect = stage.getBoundingClientRect();
    const stageCenterX = stageRect.left + stageRect.width / 2;
    const stageCenterY = stageRect.top + stageRect.height / 2;
    const nextOffsets: Record<number, { x: number; y: number }> = {};

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;

      nextOffsets[index] = {
        x: stageCenterX - cardCenterX,
        y: stageCenterY - cardCenterY,
      };
    });

    setEntryOffsets(nextOffsets);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
          setVisibleStep(0);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const animationDuration = 900;
    const pauseBetweenCards = 120;

    const rafId = requestAnimationFrame(() => {
      calculateCenterOffsets();
    });
    const rafId2 = requestAnimationFrame(() => {
      calculateCenterOffsets();
    });

    setVisibleStep(0);
    const timers: ReturnType<typeof setTimeout>[] = [];

    services.forEach((service) => {
      const delay = 80 + (service.sequence - 1) * (animationDuration + pauseBetweenCards);
      const timer = setTimeout(() => {
        setVisibleStep(service.sequence);
      }, delay);
      timers.push(timer);
    });

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(rafId2);
      timers.forEach(clearTimeout);
    };
  }, [isInView]);

  useEffect(() => {
    const onResize = () => {
      if (isInView) calculateCenterOffsets();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative isolate w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-[url('/slides/3.jpg')] bg-cover bg-center bg-fixed"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-sm sm:text-base text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
          Un enfoque visual moderno y minimalista para cada etapa de tu producción.
        </p>

        <div ref={stageRef} className="services-stage grid grid-cols-3 gap-2 sm:gap-3 lg:gap-5 lg:pt-2">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/servicios/${service.slug}`}
              data-sequence={service.sequence}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className={`group relative block aspect-square min-w-0 overflow-hidden rounded-xl border border-white/40 bg-white shadow-2xl transition-[transform,opacity,filter,border-color] duration-[900ms] ease-[cubic-bezier(0.2,0.75,0.2,1)] hover:-translate-y-1 hover:border-[#f20c0c]/70 will-change-transform ${service.positionClass}`}
              style={
                service.sequence <= visibleStep
                  ? {
                      transform: "translate3d(0, 0, 0) scale(1)",
                      opacity: 1,
                      filter: "blur(0px)",
                    }
                  : {
                      transform: `translate3d(${entryOffsets[index]?.x ?? 0}px, ${entryOffsets[index]?.y ?? 0}px, -260px) scale(0.72)`,
                      opacity: 0,
                      filter: "blur(4px)",
                    }
              }
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between p-2 sm:p-3 lg:p-4">
                <span className="self-start rounded-md bg-white/90 px-1.5 py-0.5 text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] lg:tracking-[0.18em] text-black/80">
                  {service.code}
                </span>

                <div className="rounded-lg bg-white/92 p-2 sm:p-2.5 lg:p-3 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div>
                      <h3 className="text-[11px] sm:text-sm lg:text-base font-semibold leading-tight text-black">{service.name}</h3>
                      <p className="mt-1 hidden sm:line-clamp-2 text-xs sm:block sm:text-xs lg:text-sm text-black/70">{service.description}</p>
                    </div>
                    <span className="text-[#f20c0c] text-xs sm:text-sm lg:text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-stage {
          perspective: 1200px;
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
