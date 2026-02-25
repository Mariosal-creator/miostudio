import Link from "next/link";

const categorias = [
  {
    titulo: "Videos",
    descripcion:
      "Producción de videos horizontales y verticales para marcas, campañas y contenido digital.",
    href: "/portfolio/videos",
    miniatura: "/categoriaserv/videos.jpg",
  },
  {
    titulo: "Fotografía",
    descripcion:
      "Sesiones comerciales, branding y cobertura visual para reforzar identidad y posicionamiento.",
    href: "/portfolio/fotografia",
    miniatura: "/categoriaserv/fotografia.jpg",
  },
  {
    titulo: "Stream o Live",
    descripcion:
      "Transmisiones en vivo con dirección técnica, realización multicámara y soporte en tiempo real.",
    href: "/portfolio/stream-live",
    miniatura: "/categoriaserv/stream-live.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Nuestro Portfolio
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl">
            Explora nuestras categorías y accede a una vista más detallada del trabajo en video, fotografía y transmisiones en vivo.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {categorias.map((categoria) => (
            <article
              key={categoria.titulo}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black">
                <img
                  src={categoria.miniatura}
                  alt={`Miniatura de ${categoria.titulo}`}
                  className="h-44 w-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white">{categoria.titulo}</h2>
              <p className="mt-3 text-sm text-gray-300 sm:text-base">{categoria.descripcion}</p>
              <Link
                href={categoria.href}
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
