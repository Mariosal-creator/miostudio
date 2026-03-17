import Image from "next/image";
import { useEffect } from "react";

export default function ModalGallery({ images, index, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!images[index]) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-2 py-8" role="dialog" aria-modal="true">
      <div className="relative max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 rounded-full bg-black/70 px-3 py-1 text-white text-lg font-bold hover:bg-[#f20c0c] transition"
          aria-label="Cerrar imagen ampliada"
        >
          ×
        </button>
        <div className="relative w-full aspect-[4/3] bg-black rounded-xl overflow-hidden">
          <Image
            src={images[index].src}
            alt={images[index].label}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-3 text-center text-white text-sm font-semibold">{images[index].label}</div>
      </div>
      <button
        className="fixed inset-0 z-0 cursor-default"
        aria-label="Cerrar modal fondo"
        tabIndex={-1}
        onClick={onClose}
        style={{ background: "transparent", border: 0 }}
      />
    </div>
  );
}