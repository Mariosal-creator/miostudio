type Props = {
  title: string;
  description: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

export default function CategoryIntro({
  title,
  description,
  primaryCtaHref = "https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20quisiera%20informaci%C3%B3n",
  secondaryCtaHref = "/proyectos",
  secondaryCtaLabel = "Ver proyectos",
}: Props) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur">
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">{title}</h1>
            <p className="mt-3 text-base sm:text-lg text-gray-600">{description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={primaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-5 py-2.5 text-sm font-semibold text-white shadow hover:brightness-105"
              >
                WhatsApp
              </a>
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                {secondaryCtaLabel}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Planificación estratégica</p>
                  <p className="text-xs text-gray-600">Brief claro y enfoque creativo</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Producción profesional</p>
                  <p className="text-xs text-gray-600">Equipos y ejecución técnica</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Postproducción avanzada</p>
                  <p className="text-xs text-gray-600">Edición, color y sonido</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Acompañamiento continuo</p>
                  <p className="text-xs text-gray-600">Comunicación ágil y soporte</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
            <p className="text-sm font-semibold text-gray-900">Narrativa de alto impacto</p>
            <p className="mt-1 text-sm text-gray-600">Mensajes claros para conectar con tu audiencia.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
            <p className="text-sm font-semibold text-gray-900">Calidad técnica consistente</p>
            <p className="mt-1 text-sm text-gray-600">Flujo optimizado desde pre hasta entrega final.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
            <p className="text-sm font-semibold text-gray-900">Resultados orientados a marca</p>
            <p className="mt-1 text-sm text-gray-600">Contenido diseñado para posicionar y convertir.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
