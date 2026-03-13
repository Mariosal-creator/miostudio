import Link from "next/link";
import Image from "next/image";
import type { VideoSubcategory } from "./videoSubcategories";

type Props = {
  subcategory: VideoSubcategory;
};

export default function VideoSubcategoryPage({ subcategory }: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{subcategory.eyebrow}</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Produccion de <span className="text-[#f20c0c]">{subcategory.title}</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base lg:text-lg">{subcategory.intro}</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={subcategory.image}
              alt={`Miniatura de ${subcategory.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {subcategory.highlights.map((item) => (
            <article key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
              {item}
            </article>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Enfoque de produccion</h2>
          <p className="mt-3 text-sm text-gray-300 sm:text-base">
            Cada proyecto se adapta al tono de marca, al canal de distribucion y al objetivo comercial para lograr una pieza consistente desde la preproduccion hasta la entrega final.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="inline-flex rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Solicitar cotizacion
          </Link>
          <Link
            href="/servicios/video"
            className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#f20c0c]/60"
          >
            Volver a video
          </Link>
        </div>
      </div>
    </main>
  );
}
