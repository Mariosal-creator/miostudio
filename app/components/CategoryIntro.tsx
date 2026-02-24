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
  primaryCtaHref = "https://wa.me/593963163035?text=Hola%20Metalgas%20%2D%20quisiera%20informaci%C3%B3n",
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
                  <p className="text-sm font-semibold text-gray-900">Acero inoxidable grado alimenticio</p>
                  <p className="text-xs text-gray-600">Higiene y fácil limpieza</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Garantía 1 año</p>
                  <p className="text-xs text-gray-600">Cobertura y soporte</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Capacitación de uso</p>
                  <p className="text-xs text-gray-600">Buenas prácticas operativas</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Soporte técnico</p>
                  <p className="text-xs text-gray-600">Respuesta ágil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
            <p className="text-sm font-semibold text-gray-900">Rendimiento continuo</p>
            <p className="mt-1 text-sm text-gray-600">Diseñadas para volúmenes altos y operación exigente.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
            <p className="text-sm font-semibold text-gray-900">Eficiencia energética</p>
            <p className="mt-1 text-sm text-gray-600">Optimización de consumo y control de temperatura.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-[#f20c0c] to-black" />
            <p className="text-sm font-semibold text-gray-900">Durabilidad</p>
            <p className="mt-1 text-sm text-gray-600">Materiales de calidad certificados y terminados premium.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
