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
  },
  {
    id: 2,
    name: "Fotografía",
    slug: "direccion-de-fotografia",
    description: "Dirección visual y sesiones profesionales con estilo editorial.",
    image: "/portfolio/fotografia/miniaturas/paisajista/Nissan-114.jpg",
    code: "MO-204",
  },
  {
    id: 3,
    name: "Asesoría y Capacitaciones",
    slug: "consultoria-audiovisual",
    description: "Acompañamiento estratégico y formación práctica para equipos.",
    image: "/slides/slide2.jpg",
    code: "MO-315",
  },
];

export default function ServicesCarousel() {
  const [activeServiceId, setActiveServiceId] = useState(1);
  const [showBackCards, setShowBackCards] = useState(false);
  const lastSwitchRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBackCards(true);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  const getPosition = (serviceId: number) => {
    const activeIndex = services.findIndex((service) => service.id === activeServiceId);
    const index = services.findIndex((service) => service.id === serviceId);
    const delta = (index - activeIndex + services.length) % services.length;

    if (delta === 0) return "center";
    if (delta === 1) return "right";
    return "left";
  };

  const getServiceIdByPosition = (targetPosition: "left" | "right") => {
    return services.find((service) => getPosition(service.id) === targetPosition)?.id;
  };

  const rotateTo = (targetId: number | undefined) => {
    if (!targetId || targetId === activeServiceId) return;

    const now = Date.now();
    if (now - lastSwitchRef.current < 380) return;

    lastSwitchRef.current = now;
    setActiveServiceId(targetId);
  };

  const handleStageMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const ratio = x / rect.width;

    if (ratio < 0.34) {
      rotateTo(getServiceIdByPosition("left"));
    } else if (ratio > 0.66) {
      rotateTo(getServiceIdByPosition("right"));
    }
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-[url('/slides/3.jpg')] bg-cover bg-center bg-fixed"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
          Nuestros <span className="text-[#f20c0c]">Servicios</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-300 text-center mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
          Un enfoque visual moderno y minimalista para cada etapa de tu producción.
        </p>

        <div
          className="services-stage relative h-[70vw] min-h-[320px] sm:h-[58vw] sm:min-h-[360px] lg:min-h-[520px] max-h-[720px]"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            handleStageMove(event.clientX, rect);
          }}
          onTouchStart={(event) => {
            const touch = event.touches[0];
            if (!touch) return;
            const rect = event.currentTarget.getBoundingClientRect();
            handleStageMove(touch.clientX, rect);
          }}
          onTouchMove={(event) => {
            const touch = event.touches[0];
            if (!touch) return;
            const rect = event.currentTarget.getBoundingClientRect();
            handleStageMove(touch.clientX, rect);
          }}
        >
          {services.map((service) => {
            const position = getPosition(service.id);
            const isCenter = position === "center";

            return (
            <div
              key={service.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveServiceId(service.id)}
              onMouseEnter={() => {
                if (!isCenter) {
                  setActiveServiceId(service.id);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveServiceId(service.id);
                }
              }}
              className={`group absolute top-1/2 w-[44vw] sm:w-[33vw] lg:w-[24vw] max-w-[360px] aspect-square min-w-0 overflow-hidden rounded-xl border border-white/30 bg-white shadow-2xl transition-[left,transform,opacity,filter,border-color,box-shadow,width] duration-700 ease-[cubic-bezier(0.2,0.75,0.2,1)] will-change-transform ${
                isCenter
                  ? "z-30 w-[72vw] sm:w-[50vw] lg:w-[40vw] max-w-[580px] border-white/60 shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
                  : "z-10 cursor-pointer"
              }`}
              style={
                isCenter
                  ? {
                      left: "50%",
                      transform: "translate3d(-50%, -50%, 0) rotateY(0deg) scale(1)",
                      opacity: 1,
                      filter: "blur(0)",
                    }
                  : position === "left"
                  ? {
                      left: showBackCards ? "20%" : "50%",
                      transform: showBackCards
                        ? "translate3d(-50%, -52%, -90px) rotateY(12deg) scale(0.92)"
                        : "translate3d(-50%, -50%, -120px) rotateY(0deg) scale(0.82)",
                      opacity: showBackCards ? 0.82 : 0,
                      filter: showBackCards ? "blur(2.5px)" : "blur(5px)",
                    }
                  : {
                      left: showBackCards ? "80%" : "50%",
                      transform: showBackCards
                        ? "translate3d(-50%, -52%, -90px) rotateY(-12deg) scale(0.92)"
                        : "translate3d(-50%, -50%, -120px) rotateY(0deg) scale(0.82)",
                      opacity: showBackCards ? 0.82 : 0,
                      filter: showBackCards ? "blur(2.5px)" : "blur(5px)",
                    }
              }
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className={`h-full w-full object-cover transition-transform duration-500 ${isCenter ? "group-hover:scale-[1.03]" : ""}`}
                />
                <div className={`absolute inset-0 ${isCenter ? "bg-gradient-to-t from-black/75 via-black/25 to-transparent" : "bg-black/35"}`} />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between p-3 sm:p-4 lg:p-5">
                <span className="self-start rounded-md bg-white/90 px-1.5 py-0.5 text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] lg:tracking-[0.18em] text-black/80">
                  {service.code}
                </span>

                <div className={`rounded-lg bg-white/95 backdrop-blur-sm ${isCenter ? "p-3.5 sm:p-4" : "p-2.5"}`}>
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div>
                      <h3 className={`${isCenter ? "text-base sm:text-lg lg:text-xl" : "text-xs sm:text-sm"} font-semibold leading-tight text-black`}>
                        {service.name}
                      </h3>
                      <p className={`${isCenter ? "mt-2 line-clamp-3 text-sm sm:text-sm lg:text-base" : "mt-1 line-clamp-1 text-[11px] sm:text-xs"} text-black/75`}>
                        {service.description}
                      </p>
                    </div>
                    <span className={`${isCenter ? "text-sm sm:text-base lg:text-lg" : "text-xs sm:text-sm"} text-[#f20c0c] transition-transform duration-300 group-hover:translate-x-1`}>→</span>
                  </div>
                  {isCenter && (
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="mt-3 inline-flex rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-4 py-2 text-xs sm:text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      Ver servicio
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );})}
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
