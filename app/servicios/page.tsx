import Link from "next/link";

export default function ServiciosPage() {
  const categorias = [
    { nombre: "Videos Corporativos", color: "from-blue-600 to-blue-700", slug: "videos-corporativos" },
    { nombre: "Dirección de Fotografía", color: "from-purple-600 to-purple-700", slug: "direccion-de-fotografia" },
    { nombre: "Edición y Postproducción", color: "from-pink-600 to-pink-700", slug: "edicion-postproduccion" },
    { nombre: "Motion Graphics", color: "from-indigo-600 to-indigo-700", slug: "motion-graphics" },
    { nombre: "Documentales", color: "from-cyan-600 to-cyan-700", slug: "documentales" },
    { nombre: "Publicidad y Comerciales", color: "from-violet-600 to-violet-700", slug: "publicidad-comerciales" },
    { nombre: "Transmisión en Vivo", color: "from-emerald-600 to-emerald-700", slug: "transmision-en-vivo" },
    { nombre: "Consultoría Audiovisual", color: "from-orange-600 to-orange-700", slug: "consultoria-audiovisual" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">Nuestros Servicios</h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 lg:mb-12">
          Descubre nuestras áreas de especialidad en producción audiovisual
        </p>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {categorias.map((cat, index) => (
            <Link
              key={index}
              href={`/servicios/${cat.slug}`}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.color} p-8 sm:p-10 lg:p-12 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex items-center justify-center`}
            >
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <h3 className="relative text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-lg">
                {cat.nombre}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
