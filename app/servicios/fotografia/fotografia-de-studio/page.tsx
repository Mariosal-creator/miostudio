import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import EventosCarousel from "../fotografia-de-eventos/EventosCarousel";

const highlights = [
  "Set de iluminacion controlada para resultados consistentes",
  "Direccion de poses y composicion segun objetivo de marca",
  "Retoque y color grading profesional para entrega final",
];

const subcategoriasStudio = [
  {
    title: "Fotografia de Moda",
    description: "Produccion en estudio para editoriales, lookbooks y campanas de indumentaria.",
    href: "/servicios/fotografia/fotografia-de-studio/fotografia-de-moda",
    image: "/portfolio/fotografia/miniaturas/studio/moda/Ropa%204%20Edit-8.jpg",
  },
];

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const shuffle = (items: string[]) => {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }

  return result;
};

const getStudioGallery = () => {
  try {
    const studioDir = path.join(process.cwd(), "public", "portfolio", "fotografia", "miniaturas", "studio");
    const collectStudioPhotos = (directoryPath: string, relativePath = ""): string[] => {
      const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

      return entries.flatMap((entry) => {
        const nextRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;
        const fullPath = path.join(directoryPath, entry.name);

        if (entry.isDirectory()) {
          return collectStudioPhotos(fullPath, nextRelativePath);
        }

        if (!imageExtensions.has(path.extname(entry.name).toLowerCase())) {
          return [];
        }

        return `/portfolio/fotografia/miniaturas/studio/${nextRelativePath
          .split("/")
          .map((segment) => encodeURIComponent(segment))
          .join("/")}`;
      });
    };

    const allPhotos = collectStudioPhotos(studioDir);

    return shuffle(allPhotos);
  } catch {
    return [] as string[];
  }
};

const studioGallery = getStudioGallery();

export default function FotografiaDeStudioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Subcategoria</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Fotografia de <span className="text-[#f20c0c]">Studio</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base lg:text-lg">
          Sesiones en estudio para retrato, branding y contenido comercial, con control tecnico total sobre luz,
          fondo y estilo visual.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <article key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
              {item}
            </article>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Subcategorias de studio</h2>
          <p className="mt-2 text-sm text-gray-300">Selecciona la linea visual que deseas desarrollar.</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subcategoriasStudio.map((subcategoria) => (
              <Link
                key={subcategoria.title}
                href={subcategoria.href}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-[#f20c0c]/60 hover:bg-white/10"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={subcategoria.image}
                    alt={`Miniatura de ${subcategoria.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{subcategoria.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{subcategoria.description}</p>
                  <span className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-[#f20c0c]">
                    Ver subcategoria
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Galeria completa de studio</h2>
          <p className="mt-2 text-sm text-gray-300">Se muestran fotos aleatorias de studio y sus subcarpetas.</p>

          {studioGallery.length > 0 ? (
            <EventosCarousel photos={studioGallery} />
          ) : (
            <p className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
              No se encontraron fotos en la carpeta studio.
            </p>
          )}
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/portfolio/fotografia"
            className="inline-flex rounded-full bg-gradient-to-r from-[#f20c0c] to-black px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Ver portafolio
          </Link>
          <Link
            href="/servicios/fotografia"
            className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#f20c0c]/60"
          >
            Volver a fotografia
          </Link>
        </div>
      </div>
    </main>
  );
}
