import Link from "next/link";
import Image from "next/image";

const highlights = [
  "Retratos individuales y grupales en acto de grado",
  "Cobertura de ceremonia, familia y momentos clave",
  "Entrega optimizada para albumes y publicaciones digitales",
];

const gallery = [
  "/portfolio/fotografia/miniaturas/eventos/Graduacion Sam-56.jpg",
  "/portfolio/fotografia/miniaturas/eventos/Graduacion Sam-60.jpg",
  "/portfolio/fotografia/miniaturas/eventos/Graduacion Sam-71.jpg",
  "/portfolio/fotografia/miniaturas/eventos/Graduacion Sam-76.jpg",
  "/portfolio/fotografia/miniaturas/eventos/Graduacion Sam-93.jpg",
  "/portfolio/fotografia/miniaturas/eventos/Graduacion Sam-97.jpg",
];

export default function GraduacionesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Subcategoria de eventos</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Fotografia de <span className="text-[#f20c0c]">Graduaciones</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base lg:text-lg">
          Capturamos graduaciones con un enfoque elegante y memorable, destacando el logro academico y los momentos
          emotivos junto a familia y amigos.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/portfolio/fotografia/miniaturas/eventos/Graduacion Sam-95.jpg"
              alt="Miniatura de fotografia de graduaciones"
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
          <p className="mt-2 text-sm text-gray-300">Muestra visual de sesiones y cobertura para graduaciones.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo, index) => (
              <article key={photo} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={photo}
                    alt={`Foto detallada de graduaciones ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
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
