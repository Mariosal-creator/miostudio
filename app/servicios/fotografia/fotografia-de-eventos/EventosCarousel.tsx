"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  photos: string[];
};

export default function EventosCarousel({ photos }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const target = slideRefs.current[index];
    target?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const scrollByDirection = (direction: "left" | "right") => {
    const nextIndex =
      direction === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, photos.length - 1);

    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const updateActive = () => {
      const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
      let best = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) {
          return;
        }

        const rect = slide.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const distance = Math.abs(center - trackCenter);

        if (distance < minDistance) {
          minDistance = distance;
          best = index;
        }
      });

      setActiveIndex(best);
    };

    updateActive();
    track.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      track.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [photos.length]);

  return (
    <div className="mt-5">
      <div className="mb-3 hidden items-center justify-end gap-2 sm:flex">
        <button
          type="button"
          onClick={() => scrollByDirection("left")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[#f20c0c] hover:bg-[#f20c0c]"
          aria-label="Anterior"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByDirection("right")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[#f20c0c] hover:bg-[#f20c0c]"
          aria-label="Siguiente"
        >
          →
        </button>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, index) => (
          <div
            key={photo}
            ref={(node) => {
              slideRefs.current[index] = node;
            }}
            className={`relative h-72 w-[86%] shrink-0 snap-center overflow-hidden rounded-2xl border transition duration-300 sm:w-[62%] lg:w-[44%] ${
              activeIndex === index
                ? "border-[#f20c0c]/70 shadow-[0_20px_45px_rgba(242,12,12,0.25)]"
                : "border-white/10 opacity-85"
            }`}
          >
            <Image
              src={photo}
              alt={`Foto de eventos ${index + 1}`}
              fill
              sizes="(max-width: 640px) 86vw, (max-width: 1024px) 62vw, 44vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-transparent to-transparent px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                Foto {index + 1} de {photos.length}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {photos.map((photo, index) => (
          <button
            key={`dot-${photo}`}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index ? "w-8 bg-[#f20c0c]" : "w-2.5 bg-white/40 hover:bg-white/65"
            }`}
            aria-label={`Ir a foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
