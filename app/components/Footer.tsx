import Link from "next/link";

const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nuestro Equipo", href: "/nuestro-equipo" },
  { label: "Contacto", href: "/contacto" },
];

const serviceLinks = [
  { label: "Videos Corporativos", href: "/servicios/videos-corporativos" },
  { label: "Direccion de Fotografia", href: "/servicios/direccion-de-fotografia" },
  { label: "Edicion y Postproduccion", href: "/servicios/edicion-postproduccion" },
  { label: "Transmision en Vivo", href: "/servicios/transmision-en-vivo" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#111315] via-[#0d0f11] to-[#08090a] text-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {/* Marca y tagline */}
          <div className="col-span-2 lg:col-span-1 space-y-3 text-center lg:text-left border-b border-white/20 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight">
              Moi Studio
            </div>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Producción audiovisual de clase mundial. Transformamos visiones en historias visuales impactantes.
            </p>
          </div>

          {/* Navegación */}
          <div className="col-span-2 sm:col-span-1 space-y-3 text-center">
            <h3 className="text-base sm:text-lg font-semibold">Navegacion</h3>
            <div className="flex items-center justify-center gap-3 text-[11px] sm:text-base text-white/85 whitespace-nowrap">
              {navigationLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div className="col-span-2 sm:col-span-1 space-y-3 text-center border-t border-b border-white/20 pt-4 pb-4 sm:border-t-0 sm:border-b-0 sm:border-l sm:pt-0 sm:pb-0 sm:pl-6 lg:border-r lg:pr-6">
            <h3 className="text-base sm:text-lg font-semibold">Servicios</h3>
            <div className="flex items-center justify-center gap-3 text-[11px] sm:text-base text-white/85 whitespace-nowrap">
              {serviceLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA y contacto */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-3 text-center lg:text-left">
            <h3 className="text-base sm:text-lg font-semibold">Colaboremos</h3>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Cuéntanos tu proyecto y llevaremos tu visión a la pantalla.
            </p>
            <div className="flex flex-col items-center lg:items-start gap-2 text-sm sm:text-base">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f20c0c] to-black text-white font-semibold px-4 py-2.5 transition hover:brightness-110"
                href="/contacto"
              >
                Iniciar Proyecto
              </Link>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/50 text-white px-4 py-2.5 transition hover:bg-white/10"
                href="mailto:moistudioec@gmail.com"
              >
                moistudioec@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <span>© {new Date().getFullYear()} Moi Studio. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <Link href="/horarios" className="hover:text-white">Horarios</Link>
            <Link href="/contacto" className="hover:text-white">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
