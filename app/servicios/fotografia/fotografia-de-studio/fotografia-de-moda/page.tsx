import Link from "next/link";
import Image from "next/image";
import PhotoModalGallery from "./PhotoModalGallery";
import { modaPhotos } from "@/app/data/photoCatalog";

const highlights = [
  "Direccion de poses y estilismo para destacar prendas y actitud",
  "Set de estudio con iluminacion editorial y control de color",
  "Entrega lista para lookbook, e-commerce y comunicacion de marca",
];

const gallery = [...modaPhotos];
const heroImage = gallery[0] ?? "/portfolio/fotografia/miniaturas/studio/moda/Ropa%201%20Edit-7.jpg";

export default function FotografiaDeModaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Subcategoria de studio</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Fotografia de <span className="text-[#f20c0c]">Moda</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base lg:text-lg">
          Producimos sesiones de moda en estudio con direccion creativa para resaltar identidad de marca, coleccion y
          narrativa visual.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={heroImage}
              alt="Miniatura de fotografia de moda"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <article key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
              {item}
            </article>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Galeria detallada</h2>
          <p className="mt-2 text-sm text-gray-300">Muestra visual de sesiones de moda en estudio.</p>
          {gallery.length > 0 ? (
            <PhotoModalGallery photos={gallery} />
          ) : (
            <p className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
              No se encontraron fotos en la carpeta studio/moda.
            </p>
          )}
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/servicios/fotografia/fotografia-de-studio"
            className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#f20c0c]/60"
          >
            Volver a studio
          </Link>
        </div>
      </div>
    </main>
  );
}