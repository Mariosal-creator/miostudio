"use client";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  breadcrumb?: string[];
  backgroundVideo?: string; // e.g., "/fuego.mp4" in public/
  messages?: string[]; // optional auto-sliding messages to display instead of breadcrumb/title/cta
  intervalMs?: number; // slide interval
};

export default function CategoryBanner({ title, breadcrumb = ["Inicio", "Servicios"], backgroundVideo, messages, intervalMs = 3500 }: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!messages || messages.length === 0) return;
    const id = setInterval(() => {
      setIdx((prev) => (prev + 1) % messages.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [messages, intervalMs]);

  return (
    <div className="relative w-full text-white overflow-hidden">
      {backgroundVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f20c0c]/90 to-black/70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {messages && messages.length > 0 ? (
          <div className="py-3 sm:py-4 flex items-center justify-center">
            <div className="text-xs sm:text-sm font-semibold tracking-wide text-white/95 transition-opacity duration-500">
              {messages[idx]}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between py-3 sm:py-4">
            <div>
              <nav className="text-xs sm:text-sm text-white/80">
                {breadcrumb.map((item, i) => (
                  <span key={i}>
                    {item}
                    {i < breadcrumb.length - 1 && <span className="mx-2">/</span>}
                  </span>
                ))}
              </nav>
              <h2 className="text-base sm:text-lg font-semibold tracking-wide">
                {title}
              </h2>
            </div>
            <a
              href="https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20quisiera%20asesor%C3%ADa"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-[#f20c0c] px-4 py-2 text-xs sm:text-sm font-semibold shadow hover:brightness-105"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
