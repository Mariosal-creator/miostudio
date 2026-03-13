"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  photos: string[];
};

const EAGER_LOAD_COUNT = 6;
const HIGH_PRIORITY_COUNT = 4;

export default function PhotoModalGallery({ photos }: Props) {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = activePhoto ? "hidden" : "auto";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePhoto]);

  return (
    <>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={photo}
            type="button"
            onClick={() => setActivePhoto(photo)}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left"
            aria-label={`Abrir foto ${index + 1} en modal`}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={photo}
                alt={`Foto detallada de moda ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading={index < EAGER_LOAD_COUNT ? "eager" : "lazy"}
                fetchPriority={index < HIGH_PRIORITY_COUNT ? "high" : "auto"}
                quality={60}
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-transparent to-transparent px-3 py-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/90">Ver detalle</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activePhoto && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 px-2 py-3 sm:px-4 sm:py-5" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-xl border border-white/15 bg-black shadow-2xl">
            <div className="relative h-[78vh] w-full sm:h-[84vh]">
              <Image
                src={activePhoto}
                alt="Foto en vista ampliada"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute right-2 top-2 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[#f20c0c] px-3 text-xs font-semibold uppercase tracking-wide text-white hover:brightness-110"
              aria-label="Cerrar modal"
            >
              Cerrar
            </button>
          </div>
          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            className="absolute inset-0 -z-10"
            aria-label="Cerrar imagen ampliada"
          />
        </div>
      )}
    </>
  );
}