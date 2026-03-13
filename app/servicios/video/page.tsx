import Link from "next/link";

const subcategorias = [
  {
    nombre: "Videos Corporativos",
    slug: "videos-corporativos",
    ejemplo: "Ejemplo: video institucional para marca o empresa.",
  },
  {
    nombre: "Publicidad y Comerciales",
    slug: "publicidad-comerciales",
    ejemplo: "Ejemplo: spot para lanzamiento de producto.",
  },
  {
    nombre: "Documentales",
    slug: "documentales",
    ejemplo: "Ejemplo: piezas narrativas de impacto social.",
  },
  {
    nombre: "Transmisión en Vivo",
    slug: "transmision-en-vivo",
    ejemplo: "Ejemplo: cobertura en vivo de eventos y conferencias.",
  },
  {
    nombre: "Edición y Postproducción",
    slug: "edicion-postproduccion",
    ejemplo: "Ejemplo: montaje, colorización y entrega final.",
  },
  {
    nombre: "Motion Graphics",
    slug: "motion-graphics",
    ejemplo: "Ejemplo: animaciones para redes, marca y campañas.",
  },
];

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
          <span className="text-[#f20c0c]">Video</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10">Selecciona una subcategoría.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {subcategorias.map((subcategoria) => (
            <Link
              key={subcategoria.slug}
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
