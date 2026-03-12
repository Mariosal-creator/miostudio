export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#f20c0c] via-black to-[#b00909] text-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Marca y tagline */}
          <div className="space-y-3">
            <div className="text-2xl sm:text-3xl font-bold tracking-tight">
              Moi Studio
            </div>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Producción audiovisual de clase mundial. Transformamos visiones en historias visuales impactantes.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold">Navegación</h3>
            <div className="flex flex-col gap-2 text-sm sm:text-base text-white/85">
              {[
                { label: "Inicio", href: "#" },
                { label: "Servicios", href: "#" },
                { label: "Portfolio", href: "#" },
                { label: "Proyectos", href: "#" },
                { label: "Contacto", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold">Servicios</h3>
            <div className="flex flex-col gap-2 text-sm sm:text-base text-white/85">
              {[
                "Videos Corporativos",
                "Dirección de Fotografía",
                "Post-Producción",
                "Motion Graphics",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          {/* CTA y contacto */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold">Colaboremos</h3>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Cuéntanos tu proyecto y llevaremos tu visión a la pantalla.
            </p>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
              <a
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f20c0c] to-black text-white font-semibold px-4 py-2.5 transition hover:brightness-110"
                href="#"
              >
                Iniciar Proyecto
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/50 text-white px-4 py-2.5 transition hover:bg-white/10"
                href="mailto:info@moistudio.com"
              >
                info@moistudio.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <span>© {new Date().getFullYear()} Moi Studio. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
