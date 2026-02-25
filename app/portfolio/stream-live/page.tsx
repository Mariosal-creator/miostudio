import Link from "next/link";

const serviciosStream = [
  {
    titulo: "Dirección de Transmisión",
    detalle:
      "Planificación del flujo en vivo, escaleta técnica y coordinación de equipo para una emisión profesional.",
  },
  {
    titulo: "Realización Multicámara",
    detalle:
      "Operación de múltiples cámaras con cambios en tiempo real para mantener ritmo y narrativa visual.",
  },
  {
    titulo: "Audio en Vivo",
    detalle:
      "Control de mezcla, niveles y monitoreo para entregar sonido claro y estable durante toda la transmisión.",
  },
  {
    titulo: "Integración de Gráficos",
    detalle:
      "Implementación de overlays, lower thirds, cortinillas y elementos de marca en tiempo real.",
  },
  {
    titulo: "Streaming Multiplataforma",
    detalle:
      "Emisión simultánea en YouTube, Facebook y otras plataformas con configuración técnica optimizada.",
  },
  {
    titulo: "Monitoreo y Soporte",
    detalle:
      "Supervisión continua de señal, estabilidad y contingencias para reducir riesgos durante el evento.",
  },
];

export default function PortfolioStreamLivePage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Portfolio de Stream o Live</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-300 sm:text-lg">
            Revisa el detalle de nuestras soluciones de transmisión en vivo para eventos, marcas y producciones especiales.
          </p>
          <Link
            href="/portfolio"
            className="mt-6 inline-flex rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Volver a categorías
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviciosStream.map((servicio) => (
            <article
              key={servicio.titulo}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900" />
              <h2 className="text-xl font-semibold text-white">{servicio.titulo}</h2>
              <p className="mt-3 text-sm text-gray-300 sm:text-base">{servicio.detalle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
