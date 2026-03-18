import Link from "next/link";
import CategoriasCarousel from "./CategoriasCarousel";

const serviciosFoto = [
  {
    title: "Fotografia de Eventos",
    description:
      "Cobertura fotografica para congresos, activaciones, eventos sociales e institucionales con narrativa visual consistente.",
    href: "/servicios/fotografia/fotografia-de-eventos",
    thumbnail: "/portfolio/fotografia/miniaturas/minevento.jpg",
  },
  {
    title: "Fotografia de Studio",
    description:
      "Produccion en estudio con control total de iluminacion, direccion y composicion para retratos y branding profesional.",
    href: "/servicios/fotografia/fotografia-de-studio",
    thumbnail: "/portfolio/fotografia/miniaturas/miniest.jpg",
  },
  {
    title: "Fotografia de Producto",
    description:
      "Fotografia comercial para ecommerce, catalogos y campanas, destacando textura, color y detalle de cada producto.",
    href: "/servicios/fotografia/fotografia-de-producto",
    thumbnail: "/portfolio/fotografia/miniaturas/minprod.jpg",
  },
];

const diferenciales = [
  "Direccion visual alineada a objetivos de comunicacion",
  "Iluminacion profesional en locacion y estudio",
  "Edicion y color con enfoque de marca",
  "Entrega optimizada para web, redes y medios impresos",
];

export default function FotografiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black/60 via-[#181818]/50 to-[#232323]/60 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-b border-white/10">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 kenburns-video"
          style={{ objectPosition: 'center' }}
        >
          <source src="/videobg/fot.mp4" type="video/mp4" />
        </video>
        {/* Degradados y overlays */}
        <div className="pointer-events-none absolute inset-0 opacity-30 z-10">
          <div className="absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-[#f20c0c]/30 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center z-20">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Fotografía profesional
          </span>
          <h1 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Fotografía con <span className="text-[#f20c0c]">enfoque creativo</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base text-white/85 sm:text-lg">
            Creamos imágenes que cuentan historias, potencian tu marca y transmiten emociones. Descubre nuestros servicios fotográficos para eventos, estudio y producto.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="inline-flex rounded-full bg-[#f20c0c] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110">
              Solicitar sesión
            </Link>
            <a href="/portfolio/fotografia" className="inline-flex rounded-full border border-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black">
              Ver portafolio
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Carrusel de categorías */}
        <div className="mt-12">
          <CategoriasCarousel items={serviciosFoto} />
        </div>

        {/* Beneficios */}
        <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">¿Por qué elegirnos?</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {diferenciales.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-base text-gray-200 flex items-center gap-3">
                <span className="text-[#f20c0c] text-xl">★</span> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">¿Listo para una sesión inolvidable?</h2>
          <p className="text-lg text-gray-300 mb-6">Contáctanos y lleva tu imagen al siguiente nivel con Moi Studio.</p>
          <Link href="/contacto" className="inline-block bg-[#f20c0c] hover:bg-[#c90a0a] text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg">Agendar ahora</Link>
        </div>
      </div>
    </div>
  );
}
