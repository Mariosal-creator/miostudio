"use client";

import { useEffect, useState } from "react";

type ImageLightboxGalleryProps = {
  images: string[];
  title: string;
};

export default function ImageLightboxGallery({ images, title }: ImageLightboxGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  }, [selectedImage]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedImage(image)}
            className="overflow-hidden rounded-2xl border border-white/10 bg-black text-left transition hover:border-[#f20c0c]"
            aria-label={`Abrir imagen ${index + 1} de ${title}`}
          >
            <img
              src={image}
              alt={`Imagen ${index + 1} de ${title}`}
              className="h-72 w-full object-cover sm:h-80"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 z-10 h-10 w-10 rounded-full bg-[#f20c0c] text-white shadow-lg transition hover:brightness-110 md:right-4 md:top-4 md:h-12 md:w-12"
              aria-label="Cerrar modal"
            >
              <svg className="mx-auto h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={selectedImage}
              alt={`Imagen ampliada de ${title}`}
              className="max-h-[90dvh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
