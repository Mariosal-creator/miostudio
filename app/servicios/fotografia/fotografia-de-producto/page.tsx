import Link from "next/link";
import Image from "next/image";

const highlights = [
  "Fotografia para ecommerce, catalogos y piezas publicitarias",
  "Direccion de arte para destacar textura, volumen y color",
  "Entregas en formatos optimizados para web y pauta digital",
];

const subcategorias = [
  {
    title: "Gastronomia",
    description: "Fotografia especializada en platos y productos gastronómicos para impacto visual y comercial.",
    href: "/servicios/fotografia/fotografia-de-producto/gastronomia",
    image: "/portfolio/fotografia/miniaturas/gastronomia/fotogastronomia1.jpg",
  },
];

export default function FotografiaDeProductoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Subcategoria</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Fotografia de <span className="text-[#f20c0c]">Producto</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base lg:text-lg">
          Producimos imagenes de producto con enfoque comercial para aumentar conversion, claridad visual y valor
          percibido de marca.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <article key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
              {item}
            </article>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Subcategorias de producto</h2>
          <p className="mt-2 text-sm text-gray-300">Selecciona la linea visual que deseas desarrollar.</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subcategorias.map((subcategoria) => (
              <Link
                key={subcategoria.title}
                href={subcategoria.href}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-[#f20c0c]/60 hover:bg-white/10"
              >
                <div className="relative aspect-[16/10] w-full">
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
                    Ver subcategoria
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

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
