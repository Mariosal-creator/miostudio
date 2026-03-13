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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl backdrop-blur sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Servicios</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Fotografia con enfoque
            <span className="text-[#f20c0c]"> cinematografico</span>
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base lg:text-lg">
            Creamos imagenes que cuentan historias y elevan la percepcion de marca. Selecciona una subcategoria para
            explorar el tipo de servicio fotografico que necesitas.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/portfolio/fotografia"
              className="inline-flex rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Ver portafolio fotografico
            </Link>
            <Link
              href="/contacto"
              className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#f20c0c]/60"
            >
              Solicitar cotizacion
            </Link>
          </div>
        </section>

        <CategoriasCarousel items={serviciosFoto} />

        <section className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white sm:text-2xl">Que incluye nuestro proceso</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {diferenciales.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
