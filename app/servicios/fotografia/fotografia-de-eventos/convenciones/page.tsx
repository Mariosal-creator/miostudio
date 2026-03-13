import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import PhotoModalGallery from "./PhotoModalGallery";

const highlights = [
  "Cobertura de ponencias, paneles y networking",
  "Registro de branding, patrocinadores y activaciones",
  "Entrega por bloques de agenda para comunicacion institucional",
];

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const getConvencionesGallery = () => {
  try {
    const convencionDir = path.join(process.cwd(), "public", "portfolio", "fotografia", "miniaturas", "convencion");
    const files = fs.readdirSync(convencionDir);

    return files
      .filter((fileName) => imageExtensions.has(path.extname(fileName).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, "es", { numeric: true }))
      .map((fileName) => `/portfolio/fotografia/miniaturas/convencion/${encodeURIComponent(fileName)}`);
  } catch {
    return [] as string[];
  }
};

const gallery = getConvencionesGallery();

export default function ConvencionesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Subcategoria de eventos</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Fotografia de <span className="text-[#f20c0c]">Convenciones</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base lg:text-lg">
          Documentamos convenciones y encuentros corporativos con enfoque editorial para fortalecer comunicacion,
          reportes y posicionamiento de marca.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/portfolio/fotografia/miniaturas/eventos/54123202041_22c7e0376a_o.jpg"
              alt="Miniatura de fotografia de convenciones"
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
          <p className="mt-2 text-sm text-gray-300">Muestra visual de coberturas para convenciones y encuentros institucionales.</p>
          {gallery.length > 0 ? (
            <PhotoModalGallery photos={gallery} />
          ) : (
            <p className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
              No se encontraron fotos en la carpeta convencion.
            </p>
          )}
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/servicios/fotografia/fotografia-de-eventos"
            className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#f20c0c]/60"
          >
            Volver a eventos
          </Link>
        </div>
      </div>
    </main>
  );
}
