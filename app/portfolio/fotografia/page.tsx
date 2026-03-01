import Link from "next/link";
import { trabajosFotografia } from "./trabajos";

export default function PortfolioFotografiaPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Portfolio de Fotografía</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300 sm:text-lg">
            Conoce en detalle nuestros servicios fotográficos y los tipos de proyectos que desarrollamos para cada cliente.
          </p>
          <Link
            href="/portfolio"
            className="mt-6 inline-flex rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Volver a categorías
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trabajosFotografia.map((trabajo) => (
            <article
              key={trabajo.titulo}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="mb-4 h-32 overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={trabajo.miniatura ?? "/categoriaserv/fotografia.jpg"}
                  alt={`Miniatura de ${trabajo.titulo}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-white">{trabajo.titulo}</h2>
              <p className="mt-3 text-sm text-gray-300 sm:text-base">{trabajo.detalle}</p>
              <Link
                href={`/portfolio/fotografia/${trabajo.slug}`}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Ver detalle
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
