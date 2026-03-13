"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Categoria = {
  title: string;
  description: string;
  href: string;
  thumbnail: string;
};

type CategoriasCarouselProps = {
  items: Categoria[];
};

export default function CategoriasCarousel({ items }: CategoriasCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    let ticking = false;

    const updateActiveSlide = () => {
      ticking = false;
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) {
          return;
        }

        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2;
        const distance = Math.abs(slideCenter - center);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(updateActiveSlide);
    };

    updateActiveSlide();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  const scrollToIndex = useCallback((index: number) => {
    const target = slideRefs.current[index];
    if (!target) {
      return;
    }
    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActiveIndex(index);
  }, []);

  const step = (direction: 1 | -1) => {
    if (items.length === 0) {
      return;
    }

    const next = (activeIndex + direction + items.length) % items.length;
    scrollToIndex(next);
  };

  useEffect(() => {
    if (items.length < 2 || isAutoplayPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const next = (activeIndex + 1) % items.length;
      scrollToIndex(next);
    }, 3800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeIndex, isAutoplayPaused, items.length, scrollToIndex]);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Categorias</p>
          <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">Explora nuestros servicios</h2>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => step(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:border-[#f20c0c]/70 hover:text-[#f20c0c]"
            aria-label="Categoria anterior"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:border-[#f20c0c]/70 hover:text-[#f20c0c]"
            aria-label="Categoria siguiente"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="relative mt-5"
        onMouseEnter={() => setIsAutoplayPaused(true)}
        onMouseLeave={() => setIsAutoplayPaused(false)}
        onFocusCapture={() => setIsAutoplayPaused(true)}
        onBlurCapture={() => setIsAutoplayPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent" />

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:px-2"
        >
          {items.map((servicio, index) => {
            const isActive = index === activeIndex;

            return (
              <Link
                key={servicio.title}
                href={servicio.href}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                className={`group relative block min-w-[85%] snap-center overflow-hidden rounded-3xl border p-4 transition duration-500 sm:min-w-[58%] sm:p-5 lg:min-w-[40%] ${
                  isActive
                    ? "border-[#f20c0c]/70 bg-white/10 shadow-[0_20px_55px_rgba(242,12,12,0.24)]"
                    : "border-white/10 bg-white/[0.04] opacity-80 hover:opacity-100"
                }`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#f20c0c]/20 blur-2xl" />
                <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                  <Image
                    src={servicio.thumbnail}
                    alt={`Miniatura de ${servicio.title}`}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1280px) 58vw, 40vw"
                    className={`object-cover transition duration-500 ${isActive ? "scale-100" : "scale-105"}`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white sm:text-xl">{servicio.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{servicio.description}</p>
                <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-[#f20c0c]">
                  Explorar servicio
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all ${isActive ? "w-8 bg-[#f20c0c]" : "w-2 bg-white/35 hover:bg-white/60"}`}
              aria-label={`Ir a ${item.title}`}
            />
          );
        })}
      </div>
    </section>
  );
}
