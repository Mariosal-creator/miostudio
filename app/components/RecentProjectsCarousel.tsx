"use client";

import Image from "next/image";
import Link from "next/link";

const recentProjects = [
  {
    id: 1,
    title: "Campana Automotriz",
    category: "Paisajista",
    image: "/portfolio/fotografia/miniaturas/paisajista/Nissan-147.jpg",
    href: "/portfolio/fotografia",
  },
  {
    id: 2,
    title: "Editorial de Ruta",
    category: "Paisajista",
    image: "/portfolio/fotografia/miniaturas/paisajista/Nissan-90.jpg",
    href: "/portfolio/fotografia",
  },
  {
    id: 3,
    title: "Cobertura de Evento",
    category: "Eventos",
    image: "/portfolio/fotografia/miniaturas/eventos/54123596514_0b835ee160_o.jpg",
    href: "/portfolio/fotografia",
  },
  {
    id: 4,
    title: "Narrativa en Vivo",
    category: "Eventos",
    image: "/portfolio/fotografia/miniaturas/eventos/54123712860_f4952cbd68_o.jpg",
    href: "/portfolio/fotografia",
  },
  {
    id: 5,
    title: "Food Styling Premium",
    category: "Publicitaria",
    image: "/portfolio/fotografia/miniaturas/publicitaria/fotogastronomia1.jpg",
    href: "/portfolio/fotografia",
  },
  {
    id: 6,
    title: "Producto de Autor",
    category: "Publicitaria",
    image: "/portfolio/fotografia/miniaturas/publicitaria/fotogastronomia3.jpg",
    href: "/portfolio/fotografia",
  },
];

export default function RecentProjectsCarousel() {
  const trackItems = [...recentProjects, ...recentProjects];

  return (
    <section className="relative isolate overflow-hidden bg-[#070707] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#f20c0c]/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.7))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
            Ultimos Trabajos
          </p>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.06em] text-white sm:text-4xl lg:text-5xl">
            Proyectos Recientes
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Seis piezas seleccionadas de nuestro portfolio en un carrusel continuo con una estetica cinematografica.
          </p>
        </div>
      </div>

      <div className="relative mt-10 sm:mt-12 lg:mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#070707] to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#070707] to-transparent sm:w-36" />

        <div className="recent-projects-track flex w-max items-stretch gap-4 px-4 sm:gap-6 sm:px-6 lg:gap-7 lg:px-8">
          {trackItems.map((project, index) => (
            <article
              key={`${project.id}-${index}`}
              className="group relative h-[300px] w-[230px] overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02] sm:h-[360px] sm:w-[270px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 230px, 270px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

              <div className="absolute inset-0">
                <div className="absolute -left-20 top-0 h-full w-12 -rotate-[18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 blur-[1px] transition-opacity duration-300 group-hover:opacity-80 group-hover:animate-[sweep_1200ms_ease]" />
              </div>

              <div className="absolute left-3 right-3 top-3 flex items-center justify-between">
                <span className="rounded-full border border-white/35 bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
                  {project.category}
                </span>
                <span className="text-xs font-semibold text-white/75">0{project.id}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-base font-semibold text-white sm:text-lg">{project.title}</h3>
                <Link
                  href={project.href}
                  className="mt-3 inline-flex items-center rounded-full border border-white/35 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
                >
                  Ver Proyecto
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .recent-projects-track {
          animation: autoScrollProjects 34s linear infinite;
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

        @keyframes sweep {
          0% {
            transform: translateX(0) rotate(-18deg);
          }
          100% {
            transform: translateX(340px) rotate(-18deg);
          }
        }
      `}</style>
    </section>
  );
}
