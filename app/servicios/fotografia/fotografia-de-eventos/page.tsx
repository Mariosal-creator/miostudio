import Link from "next/link";
import Image from "next/image";
import EventosCarousel from "./EventosCarousel";
import { bodaPhotos, convencionPhotos, graduacionPhotos } from "@/app/data/photoCatalog";

const highlights = [
  "Cobertura integral de eventos corporativos y sociales",
  "Edicion y seleccion curada para entrega final",
  "Galeria optimizada para prensa, redes y memoria institucional",
];

const subcategoriasEventos = [
  {
    title: "Bodas",
    description: "Cobertura documental y editorial para ceremonias, recepciones y momentos clave de pareja.",
    href: "/servicios/fotografia/fotografia-de-eventos/bodas",
    image: "/portfolio/fotografia/miniaturas/boda/Boda%20Jerson%20%26%20Dennise.-196.jpg",
  },
  {
    title: "Convenciones",
    description: "Registro profesional de charlas, networking, activaciones de marca y agenda institucional.",
    href: "/servicios/fotografia/fotografia-de-eventos/convenciones",
    image: "/portfolio/fotografia/miniaturas/convencion/54123540134_3c67f8f5a4_o.jpg",
  },
  {
    title: "Graduaciones",
    description: "Sesiones individuales y grupales para actos de grado, retratos formales y memorias academicas.",
    href: "/servicios/fotografia/fotografia-de-eventos/graduaciones",
    image: "/portfolio/fotografia/miniaturas/graduacion/fotos%20graduaci%C3%B3n_A-81.jpg",
  },
];

const shuffle = (items: string[]) => {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }

  return result;
};

const eventosGallery = shuffle([...bodaPhotos, ...convencionPhotos, ...graduacionPhotos]);

export default function FotografiaDeEventosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Subcategoria</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Fotografia de <span className="text-[#f20c0c]">Eventos</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-gray-300 sm:text-base lg:text-lg">
          Capturamos cada momento clave con enfoque narrativo para que tu evento tenga un registro visual potente,
          coherente y listo para comunicacion institucional.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <article key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
              {item}
            </article>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Subcategorias de eventos</h2>
          <p className="mt-2 text-sm text-gray-300">Selecciona el tipo de cobertura que deseas cotizar.</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subcategoriasEventos.map((subcategoria) => (
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">Galeria completa de eventos</h2>
          <p className="mt-2 text-sm text-gray-300">Se muestran fotos aleatorias de bodas, convenciones y graduaciones.</p>

          {eventosGallery.length > 0 ? (
            <EventosCarousel photos={eventosGallery} />
          ) : (
            <p className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
              No se encontraron fotos en la carpeta eventos.
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
