"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type VideoItem = {
  id: string;
  title: string;
  descripcion: string;
};

const videosHorizontales: VideoItem[] = [
  { id: "-rpHP2Q6Tow", title: "Proyecto Horizontal 1", descripcion: "Curso" },
  { id: "QwVjREkYcBs", title: "Proyecto Horizontal 2", descripcion: "Curso" },
  { id: "dE0CtdinFQ0", title: "Proyecto Horizontal 3", descripcion: "Video publicitario" },
  { id: "mnz7tJwKw1M", title: "Proyecto Horizontal 4", descripcion: "Cover musical" },
  { id: "55yTzvAzzlk", title: "Proyecto Horizontal 5", descripcion: "Podcast" },
  { id: "HYpSl1ewrXo", title: "Proyecto Horizontal 6", descripcion: "Video publicitario" },
  { id: "L1gUbHzWxG8", title: "Proyecto Horizontal 7", descripcion: "Boda" },
  { id: "OWoBnyE2U9w", title: "Proyecto Horizontal 8", descripcion: "Video publicitario" },
  { id: "T5wdVQeHQHM", title: "Proyecto Horizontal 9", descripcion: "Cover musical" },
  { id: "WqQ1Do3Nk_Y", title: "Proyecto Horizontal 10", descripcion: "Video promocional" },
];

const videosVerticales: VideoItem[] = [
  { id: "fJk7KtLVDGE", title: "Reel 1", descripcion: "Instagram Reel" },
  { id: "RShWcFVBqL8", title: "Reel 2", descripcion: "TikTok Video" },
  { id: "uhBN_a6nyxg", title: "Reel 3", descripcion: "Stories" },
  { id: "3YI6dt6IV4A", title: "Reel 4", descripcion: "Short Video" },
  { id: "wsKkKFI6P44", title: "Reel 5", descripcion: "Vertical Ad" },
  { id: "OlVHOPxZD7s", title: "Reel 6", descripcion: "Social Media" },
  { id: "qwivo6CqZwE", title: "Reel 7", descripcion: "Short Video" },
  { id: "21PUf57QeKA", title: "Reel 8", descripcion: "Instagram Story" },
  { id: "2cr8E8n62JU", title: "Reel 9", descripcion: "TikTok Content" },
  { id: "AOurxfWZ3Y4", title: "Reel 10", descripcion: "Video Vertical" },
  { id: "DWpNTbN826A", title: "Reel 11", descripcion: "Social Content" },
  { id: "RYD39bVG-NI", title: "Reel 12", descripcion: "Short Format" },
  { id: "cRe_54fLJnE", title: "Reel 13", descripcion: "Behind the Scenes" },
  { id: "7HouItQzZlI", title: "Reel 14", descripcion: "Campaña Digital" },
  { id: "_GcviUO6Oe8", title: "Reel 15", descripcion: "Contenido para Marca" },
  { id: "RcTc8odCejc", title: "Reel 16", descripcion: "Video Promocional" },
  { id: "skDpsHVwpmI", title: "Reel 17", descripcion: "Contenido Social" },
  { id: "Hwde8ldXyJ8", title: "Reel 18", descripcion: "Anuncio Vertical" },
];

export default function PortfolioVideosPage() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const validVideoIds = useMemo(
    () => new Set([...videosHorizontales, ...videosVerticales].map((video) => video.id)),
    []
  );

  useEffect(() => {
    const selectedVideo = searchParams.get("video");

    if (selectedVideo && validVideoIds.has(selectedVideo)) {
      setModalVideo(selectedVideo);
      document.body.style.overflow = "hidden";
      return;
    }

    setModalVideo(null);
    document.body.style.overflow = "auto";
  }, [searchParams, validVideoIds]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const abrirModal = (videoId: string) => {
    setModalVideo(videoId);
    document.body.style.overflow = "hidden";
    router.replace(`${pathname}?video=${videoId}`, { scroll: false });
  };

  const cerrarModal = () => {
    setModalVideo(null);
    document.body.style.overflow = "auto";
    router.replace(pathname, { scroll: false });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Portfolio de Videos</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300 sm:text-lg">
            Explora proyectos horizontales y verticales desarrollados para publicidad, branding y redes sociales.
          </p>
          <Link
            href="/portfolio"
            className="mt-6 inline-flex rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Volver a categorías
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Videos Horizontales</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {videosHorizontales.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => abrirModal(video.id)}
                className="group overflow-hidden rounded-xl border border-[#f20c0c]/30 bg-black text-left transition hover:border-[#f20c0c]"
              >
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                  />
                </div>
                <div className="bg-gradient-to-r from-black to-gray-900 p-3 md:p-4">
                  <h3 className="text-sm font-semibold text-white md:text-base">{video.title}</h3>
                  <p className="mt-1 text-xs text-gray-400 md:text-sm">{video.descripcion}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Videos Verticales</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {videosVerticales.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => abrirModal(video.id)}
                className="group overflow-hidden rounded-xl border border-[#f20c0c]/30 bg-black text-left transition hover:border-[#f20c0c]"
              >
                <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-r from-black to-gray-900 p-2 sm:p-3">
                  <h3 className="truncate text-xs font-semibold text-white sm:text-sm">{video.title}</h3>
                  <p className="mt-1 truncate text-[10px] text-gray-400 sm:text-xs">{video.descripcion}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {modalVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4"
          onClick={cerrarModal}
        >
          <div
            className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={cerrarModal}
              className="absolute right-2 top-2 z-10 h-10 w-10 rounded-full bg-[#f20c0c] text-white shadow-lg transition hover:brightness-110 md:right-4 md:top-4 md:h-12 md:w-12"
              aria-label="Cerrar modal"
            >
              <svg className="mx-auto h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
