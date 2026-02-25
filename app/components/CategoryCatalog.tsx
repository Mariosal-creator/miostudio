import Image from "next/image";

export type CatalogItem = {
  id: string;
  title: string;
  imageSrc: string;
  specs?: string[];
  href?: string;
};

type Props = {
  items: CatalogItem[];
};

export default function CategoryCatalog({ items }: Props) {
  return (
    <section className="mt-8 rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur">
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Modelos disponibles</h3>
          <a
            href="https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20quiero%20informaci%C3%B3n%20de%20servicios"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow hover:brightness-105"
          >
            Consultar por WhatsApp
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <article key={p.id} className="group rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={p.imageSrc}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-purple-500/60 transition" />
              </div>
              <div className="p-4">
                <h4 className="text-base font-semibold text-gray-900">{p.title}</h4>
                {p.specs && p.specs.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {p.specs.map((s, i) => (
                      <li key={i} className="text-sm text-gray-600">• {s}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={
                      p.href ||
                      `https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20me%20interesa%20el%20servicio%20${encodeURIComponent(p.title)}`
                    }
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-4 py-2 text-xs font-semibold text-white shadow hover:brightness-105"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
