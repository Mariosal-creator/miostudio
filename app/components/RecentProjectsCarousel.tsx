"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  href: string;
  detail: string;
};

const recentProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Cobertura de Bodas",
    category: "Eventos",
    image: "/portfolio/fotografia/miniaturas/boda/Boda%20Jerson%20%26%20Dennise.-196.jpg",
    href: "/servicios/fotografia/fotografia-de-eventos/bodas",
    detail: "Narrativa documental con enfoque editorial para momentos clave.",
  },
  {
    id: 2,
    title: "Convenciones Corporativas",
    category: "Eventos",
    image: "/portfolio/fotografia/miniaturas/convencion/54123540134_3c67f8f5a4_o.jpg",
    href: "/servicios/fotografia/fotografia-de-eventos/convenciones",
    detail: "Cobertura dinamica de agenda institucional, activaciones y networking.",
  },
  {
    id: 3,
    title: "Graduaciones Premium",
    category: "Eventos",
    image: "/portfolio/fotografia/miniaturas/graduacion/fotos%20graduaci%C3%B3n_A-81.jpg",
    href: "/servicios/fotografia/fotografia-de-eventos/graduaciones",
    detail: "Retratos y escena completa para ceremonias con entrega optimizada.",
  },
  {
    id: 4,
    title: "Moda en Studio",
    category: "Studio",
    image: "/portfolio/fotografia/miniaturas/studio/moda/Ropa%204%20Edit-8.jpg",
    href: "/servicios/fotografia/fotografia-de-studio/fotografia-de-moda",
    detail: "Direccion de imagen para lookbooks y contenido de marca.",
  },
  {
    id: 5,
    title: "Gastronomia Comercial",
    category: "Producto",
    image: "/portfolio/fotografia/miniaturas/gastronomia/fotogastronomia1.jpg",
    href: "/servicios/fotografia/fotografia-de-producto/gastronomia",
    detail: "Fotografia de alto impacto para menus, redes y pauta digital.",
  },
  {
    id: 6,
    title: "Producto Comercial",
    category: "Producto",
    image: "/portfolio/fotografia/miniaturas/minprod.jpg",
    href: "/servicios/fotografia/fotografia-de-producto",
    detail: "Dirección visual para ecommerce, campañas y contenido de marca.",
  },
  {
    id: 7,
    title: "Retrato de Studio",
    category: "Studio",
    image: "/portfolio/fotografia/miniaturas/miniest.jpg",
    href: "/servicios/fotografia/fotografia-de-studio",
    detail: "Sesiones con iluminación controlada y acabado cinematográfico.",
  },
];

export default function RecentProjectsCarousel() {
  const trackItems = [...recentProjects, ...recentProjects];

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#f20c0c]/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.78))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
            Seleccion Curada
          </p>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.08em] text-white sm:text-4xl lg:text-5xl">
            Proyectos Recientes
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Carrusel horizontal con piezas de subcategorias de servicios seleccionadas para mostrar variedad visual.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#050505] to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#050505] to-transparent sm:w-28" />

          <div className="recent-projects-track flex w-max items-stretch gap-4 px-4 sm:gap-6 sm:px-6 lg:gap-7 lg:px-8">
            {trackItems.map((project, index) => (
              <article
                key={`${project.id}-${index}`}
                className="group relative h-[300px] w-[240px] overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02] sm:h-[340px] sm:w-[280px]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 240px, 280px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute left-3 right-3 top-3 flex items-center justify-between">
                  <span className="rounded-full border border-white/35 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-white/75">0{project.id}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-semibold text-white sm:text-lg">{project.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-white/75 sm:text-sm">{project.detail}</p>
                  <Link
                    href={project.href}
                    className="mt-3 inline-flex items-center rounded-full border border-white/35 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
                  >
                    Ver proyecto
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .recent-projects-track {
          animation: autoScrollProjects 36s linear infinite;
        }

        .recent-projects-track:hover {
          animation-play-state: paused;
        }

        @keyframes autoScrollProjects {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
