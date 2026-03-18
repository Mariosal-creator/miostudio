
import Link from "next/link";
import Image from "next/image";
import { videoHighlights, videoSubcategories } from "./videoSubcategories";

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black/60 via-[#181818]/50 to-[#232323]/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-b border-white/10">
        {/* Video de fondo */}
        {/* Parallax y Ken Burns effect */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 kenburns-video"
          style={{ objectPosition: 'center' }}
        >
          <source src="/videobg/vid.mp4" type="video/mp4" />
        </video>
        {/* Degradados y overlays */}
        <div className="pointer-events-none absolute inset-0 z-10 opacity-30">
          <div className="absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-[#f20c0c]/30 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center z-20">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Producción audiovisual
          </span>
          <h1 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Producción de <span className="text-[#f20c0c]">Video</span> Moi Studio
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base text-white/85 sm:text-lg">
            Desarrollamos piezas audiovisuales para marcas, campañas y coberturas con enfoque narrativo, técnico y multiplataforma. Elige la línea de producción que necesitas y potencia tu comunicación.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="inline-flex rounded-full bg-[#f20c0c] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110">
              Solicitar producción
            </Link>
            <a href="/portfolio/videos" className="inline-flex rounded-full border border-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black">
              Ver portafolio
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Highlights */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {videoHighlights.map((item) => (
            <article key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-gray-200 flex items-center gap-3">
              <span className="text-[#f20c0c] text-xl">★</span> {item}
            </article>
          ))}
        </div>

        {/* Subcategorías */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Subcategorías de video</h2>
          <p className="mt-2 text-base text-gray-300 text-center">Explora cada formato según tu objetivo de comunicación.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videoSubcategories.map((subcategoria) => (
              <Link
                key={subcategoria.title}
                href={subcategoria.href}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-[#f20c0c]/60 hover:bg-white/10"
              >
                <div className={`relative ${subcategoria.cardAspectRatio || 'aspect-[16/10]'} w-full`}>
                  <Image
                    src={subcategoria.image}
                    alt={`Miniatura de ${subcategoria.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{subcategoria.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{subcategoria.description}</p>
                  <span className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-[#f20c0c]">
                    Ver subcategoría
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">¿Listo para producir tu próximo video?</h2>
          <p className="text-lg text-gray-300 mb-6">Contáctanos y lleva tu comunicación audiovisual al siguiente nivel con Moi Studio.</p>
          <Link href="/contacto" className="inline-block bg-[#f20c0c] hover:bg-[#c90a0a] text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg">Agendar asesoría</Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/servicios"
            className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#f20c0c]/60"
          >
            Volver a servicios
          </Link>
        </div>
      </div>
    </div>
  );
}
