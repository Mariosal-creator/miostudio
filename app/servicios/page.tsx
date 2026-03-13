import Link from "next/link";
import Image from "next/image";

export default function ServiciosPage() {
  const categoriasPrincipales = [
    {
      nombre: "Video",
      color: "from-[#f20c0c] to-black",
      miniatura: "/categoriaserv/videos.jpg",
      href: "/servicios/video",
    },
    {
      nombre: "Fotografía",
      color: "from-[#b00909] to-black",
      miniatura: "/categoriaserv/fotografia.jpg",
      href: "/servicios/fotografia",
    },
    {
      nombre: "Asesoría y Capacitaciones",
      color: "from-[#f20c0c] to-[#b00909]",
      miniatura: "/categoriaserv/stream-live.jpg",
      href: "/servicios/asesoria-capacitaciones",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">Nuestros Servicios</h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 lg:mb-12">
          Selecciona una categoría para ver sus subcategorías y ejemplos.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
          {categoriasPrincipales.map((categoria) => (
            <Link
              key={categoria.nombre}
              href={categoria.href}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition hover:border-[#f20c0c]/60 hover:bg-white/10"
            >
              <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={categoria.miniatura}
                  alt={`Miniatura de ${categoria.nombre}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>

              <div
                className={`mb-4 rounded-xl bg-gradient-to-r ${categoria.color} px-4 py-3 text-center text-lg font-bold text-white`}
              >
                {categoria.nombre}
              </div>

              <p className="text-center text-sm text-[#f20c0c]">Ver subcategorías</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
