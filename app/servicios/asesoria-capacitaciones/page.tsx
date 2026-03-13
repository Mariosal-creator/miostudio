import Link from "next/link";

const subcategorias = [
  {
    nombre: "Consultoría Audiovisual",
    slug: "consultoria-audiovisual",
    ejemplo: "Ejemplo: diagnóstico y planificación técnica del proyecto.",
  },
  {
    nombre: "Capacitación de Equipos",
    slug: "consultoria-audiovisual",
    ejemplo: "Ejemplo: formación práctica en flujo audiovisual para equipos.",
  },
];

export default function AsesoriaCapacitacionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
          <span className="text-[#f20c0c]">Asesoría y Capacitaciones</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10">Selecciona una subcategoría.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {subcategorias.map((subcategoria) => (
            <Link
              key={`${subcategoria.nombre}-${subcategoria.slug}`}
              href={`/servicios/${subcategoria.slug}`}
              className="block rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 transition hover:border-[#f20c0c]/60 hover:bg-white/10"
            >
              <h2 className="text-base sm:text-lg font-semibold text-white">{subcategoria.nombre}</h2>
              <p className="mt-1 text-sm text-gray-300">{subcategoria.ejemplo}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
