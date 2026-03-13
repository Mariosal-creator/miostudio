import Link from "next/link";

const highlights = [
  "Set de iluminacion controlada para resultados consistentes",
  "Direccion de poses y composicion segun objetivo de marca",
  "Retoque y color grading profesional para entrega final",
];

export default function FotografiaDeStudioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Subcategoria</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Fotografia de <span className="text-[#f20c0c]">Studio</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base lg:text-lg">
          Sesiones en estudio para retrato, branding y contenido comercial, con control tecnico total sobre luz,
          fondo y estilo visual.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <article key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
              {item}
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/portfolio/fotografia"
            className="inline-flex rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Ver portafolio
          </Link>
          <Link
            href="/servicios/fotografia"
            className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#f20c0c]/60"
          >
            Volver a fotografia
          </Link>
        </div>
      </div>
    </main>
  );
}
