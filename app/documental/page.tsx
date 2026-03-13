"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Project = {
  id: number;
  title: string;
  client: string;
  tags: string[];
  image: string;
  videoUrl: string;
  objective: string;
  methodology: string[];
  deliverables: string[];
};

type Accreditation = {
  label: string;
  pdfPath?: string;
};

const getYouTubeVideoId = (url: string) =>
  url.split("/embed/")[1]?.split("?")[0] ?? "";

const appendVideoParams = (url: string, params: Record<string, string>) => {
  try {
    const parsedUrl = new URL(url);

    Object.entries(params).forEach(([key, value]) => {
      if (!parsedUrl.searchParams.has(key)) {
        parsedUrl.searchParams.set(key, value);
      }
    });

    return parsedUrl.toString();
  } catch {
    return url;
  }
};

const buildHoverPreviewSrc = (videoUrl: string, youtubeVideoId: string) => {
  if (videoUrl.includes("youtube.com/embed") && youtubeVideoId) {
    return `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}&modestbranding=1&rel=0&playsinline=1`;
  }

  if (videoUrl.includes("rumble.com/embed")) {
    return appendVideoParams(videoUrl, {
      autoplay: "2",
      muted: "1",
      controls: "0",
    });
  }

  return "";
};

const buildModalVideoSrc = (videoUrl: string) => {
  if (videoUrl.includes("youtube.com/embed")) {
    return appendVideoParams(videoUrl, {
      rel: "0",
    });
  }

  if (videoUrl.includes("rumble.com/embed")) {
    return appendVideoParams(videoUrl, {
      autoplay: "2",
    });
  }

  return videoUrl;
};

const brand = {
  accent: "#f20c0c",
  dark: "#1a1a1a",
  light: "#ffffff",
};

const accreditations: Accreditation[] = [
  {
    label: "RUC Activo",
    pdfPath: "/documentos/FORMULARIO RUC01A.pdf",
  },
  {
    label: "Certificado de Obligaciones Tributarias al dia",
    pdfPath: "/documentos/CERTIFICADO OBLIGACIONES TRIBUTARIAS.pdf",
  },
  {
    label: "Certificado Patronal IESS vigente",
    pdfPath: "/documentos/CERTIFICADO PATRONAL IESS.pdf",
  },
  {
    label: "Equipamiento profesional: camara 4K, dron, audio pro, suite de edicion",
    pdfPath: "/documentos/equipos.pdf",
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Caminantes_ Documental",
    client: "Konrad Adenauer Stiftung",
    tags: ["Movilidad humana", "Testimonial", "Documental social"],
    image: "https://i.ytimg.com/vi/fyg-ccn7ohE/hqdefault.jpg",
    videoUrl: "https://rumble.com/embed/v74vmcm/?pub=4ozray",
    objective:
      "Narrar el recorrido de personas caminantes y sus familias, mostrando retos de movilidad humana, resiliencia comunitaria y acceso a derechos.",
    methodology: [
      "Investigacion previa de rutas, contexto local y actores comunitarios.",
      "Rodaje en territorio con testimonios, planos de trayecto y recursos de contexto.",
      "Montaje documental centrado en historias humanas y mensaje de incidencia.",
    ],
    deliverables: [
      "Documental principal Caminantes de 3 minutos",
      "2 clips de difusion de 45 segundos (16:9 y 9:16)",
      "15 fotografias de apoyo narrativo con matriz descriptiva",
    ],
  },
  {
    id: 2,
    title: "Fortalecimiento Economico",
    client: "ONU",
    tags: ["Emprendimiento", "Medios de vida", "ONU"],
    image: "https://i.ytimg.com/vi/7V2MzVeAvEc/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/7V2MzVeAvEc",
    objective:
      "Visibilizar resultados de iniciativas de fortalecimiento economico para mujeres y hogares en situacion de vulnerabilidad.",
    methodology: [
      "Levantamiento de casos de exito y evidencia de impacto economico.",
      "Grabacion de testimonios y procesos productivos en campo.",
      "Edicion de piezas orientadas a rendicion de cuentas e incidencia.",
    ],
    deliverables: [
      "Video principal Fortalecimiento Economico de 3 minutos",
      "2 versiones cortas para redes y difusion institucional",
      "15 fotografias de emprendimiento y contexto",
    ],
  },
  {
    id: 3,
    title: "Autosostenibilidad",
    client: "ADRA",
    tags: ["Autosostenibilidad", "ADRA", "Impacto social"],
    image: "https://i.ytimg.com/vi/g_9FkCsgSvo/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/g_9FkCsgSvo",
    objective:
      "Mostrar como familias y grupos productivos fortalecen su autosostenibilidad mediante capacitacion, ahorro y emprendimiento.",
    methodology: [
      "Diseno narrativo basado en indicadores de sostenibilidad y autonomia.",
      "Rodaje de actividades productivas, testimonios y resultados verificables.",
      "Postproduccion con enfoque en aprendizajes y continuidad del modelo.",
    ],
    deliverables: [
      "Video principal Autosostenibilidad de 3 minutos",
      "2 capsulas de 45 segundos para convocatoria y reporte",
      "15 fotos de procesos productivos y retratos",
    ],
  },
  {
    id: 4,
    title: "Historia Emprendedoras",
    client: "ADRA",
    tags: ["Emprendedoras", "Historias de vida", "ADRA"],
    image: "https://i.ytimg.com/vi/bkLoMb13cV4/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/bkLoMb13cV4",
    objective:
      "Contar historias de emprendedoras que transforman su economia familiar y su comunidad a traves de iniciativas productivas.",
    methodology: [
      "Seleccion de perfiles y entrevistas en profundidad con enfoque humano.",
      "Cobertura audiovisual de su rutina productiva, ventas y entorno familiar.",
      "Edicion tipo storytelling con mensajes de inspiracion y evidencia de cambio.",
    ],
    deliverables: [
      "Video principal Historia Emprendedoras de 3 minutos",
      "2 versiones cortas para redes y presentaciones",
      "15 fotografias documentales editadas en JPG",
    ],
  },
  {
    id: 5,
    title: "Historias de Exito",
    client: "ONU",
    tags: ["Liderazgo", "Genero", "Comunidad"],
    image: "https://i.ytimg.com/vi/pf3HdwDzOtM/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/pf3HdwDzOtM",
    objective:
      "Documentar historias de mujeres lideresas que impulsan procesos comunitarios de proteccion, participacion y desarrollo local.",
    methodology: [
      "Mapeo de lideresas y coordinacion de entrevistas con enfoque etico.",
      "Rodaje en territorio con cobertura de actividades comunitarias.",
      "Edicion con narrativa de liderazgo, incidencia y resultados.",
    ],
    deliverables: [
      "Video principal Mujeres que Lideran de 3 minutos",
      "2 piezas cortas para difusion en redes y eventos",
      "15 fotografias de actividades y retratos",
    ],
  },
  {
    id: 6,
    title: "Voces para la Proteccion",
    client: "Programa de Cooperacion",
    tags: ["Proteccion", "Derechos", "Incidencia"],
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1400&q=80",
    videoUrl: "https://www.youtube.com/embed/L1gUbHzWxG8",
    objective:
      "Visibilizar testimonios y acciones de proteccion para poblacion en situacion de riesgo, destacando rutas de atencion y apoyo.",
    methodology: [
      "Diseno de guion testimonial alineado a mensajes de derechos y proteccion.",
      "Entrevistas y cobertura de acciones institucionales en campo.",
      "Postproduccion orientada a sensibilizacion y rendicion de cuentas.",
    ],
    deliverables: [
      "Video principal Voces para la Proteccion de 3 minutos",
      "2 clips breves para pauta institucional",
      "15 fotografias editadas con matriz descriptiva",
    ],
  },
];

const team = [
  {
    name: "Rogers Laverde",
    role: "Productor y Director de Proyecto",
    experience: "Experiencia en estrategia, logistica y direccion de proyectos audiovisuales",
    image: "/equipo/Rogers.jpg",
  },
  {
    name: "Mario Salazar",
    role: "Jefe de Audio y Sonido",
    experience: "Experiencia en captura, mezcla y diseno sonoro para producciones audiovisuales",
    image: "/equipo/mario-salazar.jpg",
  },
  {
    name: "Obed Briceno",
    role: "Jefe de Fotografia",
    experience: "Experiencia en direccion visual, iluminacion y lenguaje cinematografico",
    image: "/equipo/obed-briseno.jpg",
  },
  {
    name: "Ismael Pierre",
    role: "Jefe de Video",
    experience: "Experiencia en realizacion, cobertura en territorio y flujo de produccion",
    image: "/equipo/ismael-pierre.jpg",
  },
];

export default function DocumentalPage() {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const [activePdf, setActivePdf] = useState<Accreditation | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  const activeProject = useMemo(
    () => projects.find((item) => item.id === activeProjectId) ?? null,
    [activeProjectId]
  );

  return (
    <>
      <Header />

      <main className="bg-white text-[#1a1a1a]">
        <section className="relative overflow-hidden border-b border-black/10 bg-gradient-to-b from-black via-[#141414] to-[#1f1f1f] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-[#f20c0c]/30 blur-3xl" />
            <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Especialistas en proyectos de cooperacion internacional
            </span>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Portafolio para Licitaciones y ONG
            </h1>
            <p className="mt-5 max-w-3xl text-base text-white/85 sm:text-lg">
              Produccion audiovisual con enfoque de genero y derechos humanos. Experiencia en convocatorias como Fundacion AVSI y organizaciones de cooperacion internacional.
            </p>
            <a
              href="#proyectos"
              className="mt-8 inline-flex rounded-full bg-[#f20c0c] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110"
            >
              Ver proyectos destacados
            </a>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Acreditaciones tecnicas</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {accreditations.map((item) => {
                const isClickable = Boolean(item.pdfPath);

                return (
                  <article
                    key={item.label}
                    className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: brand.accent }}
                        aria-hidden
                      >
                        ✓
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium leading-relaxed text-[#1a1a1a] sm:text-base">{item.label}</p>
                        {isClickable && (
                          <button
                            type="button"
                            onClick={() => setActivePdf(item)}
                            className="mt-3 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#f20c0c]"
                          >
                            Ver documento
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="proyectos" className="bg-[#f6f6f6] px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Proyectos destacados</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.map((project) => {
                const videoId = getYouTubeVideoId(project.videoUrl);
                const isYouTubeProject = project.videoUrl.includes("youtube.com/embed");
                const isHovered = hoveredProjectId === project.id;
                const hoverPreviewSrc = buildHoverPreviewSrc(project.videoUrl, videoId);

                return (
                  <article
                    key={project.id}
                    className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    onMouseEnter={() => setHoveredProjectId(project.id)}
                    onMouseLeave={() => setHoveredProjectId((current) => (current === project.id ? null : current))}
                  >
                    <div className="relative h-52 w-full overflow-hidden bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-52 w-full object-cover"
                        onError={(event) => {
                          const target = event.currentTarget;

                          if (!isYouTubeProject || !videoId) {
                            return;
                          }

                          const fallback = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;

                          if (target.src !== fallback) {
                            target.src = fallback;
                          }
                        }}
                      />

                      {hoverPreviewSrc && (
                        <iframe
                          key={`${project.id}-${isHovered ? "hover" : "idle"}`}
                          src={isHovered ? hoverPreviewSrc : "about:blank"}
                          title={`Preview ${project.title}`}
                          className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`}
                          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                          tabIndex={-1}
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="mt-1 text-sm text-black/70">Cliente: {project.client}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveProjectId(project.id)}
                        className="mt-5 inline-flex rounded-full bg-[#1a1a1a] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#f20c0c]"
                      >
                        Ver detalles
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Metodologia de trabajo</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: brand.accent }}>
                  Paso 1 - Pre-produccion (35%)
                </p>
                <ul className="mt-4 space-y-2 text-sm text-black/80">
                  <li>Diseno narrativo con enfoque de genero</li>
                  <li>Guion documental y shot list</li>
                  <li>Consentimientos informados</li>
                  <li>Plan de rodaje maximo 2 jornadas</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: brand.accent }}>
                  Paso 2 - Produccion (25%)
                </p>
                <ul className="mt-4 space-y-2 text-sm text-black/80">
                  <li>Rodaje en territorio</li>
                  <li>Entrevistas testimoniales eticas</li>
                  <li>Tomas aereas con permisos</li>
                  <li>Audio profesional y B-roll</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: brand.accent }}>
                  Paso 3 - Post-produccion (40%)
                </p>
                <ul className="mt-4 space-y-2 text-sm text-black/80">
                  <li>Edicion con revisiones primer y segundo corte</li>
                  <li>Subtitulos en ingles + archivos .SRT</li>
                  <li>Formatos 16:9 y 9:16</li>
                  <li>15 fotos editadas + matriz descriptiva</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f6f6] px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <h2 className="border-b border-black/10 px-6 py-5 text-2xl font-bold sm:text-3xl">Tabla de entregables</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#1a1a1a] text-white">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Producto</th>
                    <th className="px-6 py-3 font-semibold">Especificacion</th>
                    <th className="px-6 py-3 font-semibold">Formato</th>
                    <th className="px-6 py-3 font-semibold">Incluye</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-black/10">
                    <td className="px-6 py-4 font-semibold">Documental principal</td>
                    <td className="px-6 py-4">3 min</td>
                    <td className="px-6 py-4">16:9</td>
                    <td className="px-6 py-4">Con y sin subtitulos, .SRT incluido</td>
                  </tr>
                  <tr className="border-t border-black/10 bg-black/[0.02]">
                    <td className="px-6 py-4 font-semibold">Videos cortos</td>
                    <td className="px-6 py-4">45 seg x 2 unidades</td>
                    <td className="px-6 py-4">16:9 y 9:16</td>
                    <td className="px-6 py-4">Versiones clean para pauta</td>
                  </tr>
                  <tr className="border-t border-black/10">
                    <td className="px-6 py-4 font-semibold">Fotografia</td>
                    <td className="px-6 py-4">15 imagenes</td>
                    <td className="px-6 py-4">JPG 20MP minimo</td>
                    <td className="px-6 py-4">Matriz descriptiva</td>
                  </tr>
                  <tr className="border-t border-black/10 bg-black/[0.02]">
                    <td className="px-6 py-4 font-semibold">Material en bruto</td>
                    <td className="px-6 py-4">Mejores tomas seleccionadas</td>
                    <td className="px-6 py-4">Carpetas por categoria</td>
                    <td className="px-6 py-4">Ordenado para revision de contraparte</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Equipo profesional</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {team.map((person) => (
                <article key={person.name} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                  <img src={person.image} alt={person.name} className="h-72 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-bold">{person.name}</h3>
                    <p className="mt-1 text-sm font-semibold" style={{ color: brand.accent }}>{person.role}</p>
                    <p className="mt-2 text-sm text-black/75">{person.experience}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f6f6] px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Preguntas frecuentes para licitaciones</h2>
            <div className="mt-6 space-y-3">
              <details className="group rounded-xl border border-black/10 bg-white p-5">
                <summary className="cursor-pointer list-none text-base font-semibold">Cumplen documentos habilitantes?</summary>
                <p className="mt-3 text-sm text-black/80">Si, mantenemos RUC y certificados tributarios y patronales al dia.</p>
              </details>
              <details className="group rounded-xl border border-black/10 bg-white p-5">
                <summary className="cursor-pointer list-none text-base font-semibold">Tienen experiencia en enfoque de genero?</summary>
                <p className="mt-3 text-sm text-black/80">Si, trabajamos con protocolos eticos, entrevistas cuidadosas y consentimiento informado.</p>
              </details>
              <details className="group rounded-xl border border-black/10 bg-white p-5">
                <summary className="cursor-pointer list-none text-base font-semibold">Pueden cumplir plazos de 1 mes?</summary>
                <p className="mt-3 text-sm text-black/80">Si, nuestra metodologia esta optimizada para ejecutar entre 25 y 32 dias calendario.</p>
              </details>
              <details className="group rounded-xl border border-black/10 bg-white p-5">
                <summary className="cursor-pointer list-none text-base font-semibold">Tienen experiencia con cooperacion internacional?</summary>
                <p className="mt-3 text-sm text-black/80">Si, hemos colaborado con programas y redes de cooperacion internacional en proyectos de impacto social.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8" style={{ backgroundColor: brand.accent }}>
          <div className="mx-auto max-w-6xl text-white">
            <h2 className="text-3xl font-black sm:text-4xl">Tienes una licitacion en curso?</h2>
            <p className="mt-3 max-w-2xl text-white/90">
              Presentamos propuesta tecnica y economica en 48 horas para convocatorias de ONG y cooperacion internacional.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:contacto@moistudio.com?subject=Solicitud%20de%20propuesta%20audiovisual%20para%20licitacion"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-black hover:text-white"
              >
                Solicitar propuesta
              </a>
              <a
                href="/portfolio-documental.pdf"
                className="inline-flex rounded-full border border-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                Descargar portafolio PDF
              </a>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              Referencias de cooperacion: UE, ACNUR, PNUD, OIM, AFD
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8" role="dialog" aria-modal="true">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white px-5 py-4">
              <h3 className="text-lg font-bold">{activeProject.title}</h3>
              <button
                type="button"
                onClick={() => setActiveProjectId(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition hover:bg-[#f20c0c]"
                aria-label="Cerrar"
              >
                x
              </button>
            </div>

            <div className="space-y-6 p-5 sm:p-7">
              <div className="aspect-video overflow-hidden rounded-xl border border-black/10">
                <iframe
                  className="h-full w-full"
                  src={buildModalVideoSrc(activeProject.videoUrl)}
                  title={activeProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <section>
                <h4 className="text-base font-bold">Objetivo del proyecto</h4>
                <p className="mt-2 text-sm leading-relaxed text-black/80">{activeProject.objective}</p>
              </section>

              <section>
                <h4 className="text-base font-bold">Metodologia aplicada</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/80">
                  {activeProject.methodology.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-base font-bold">Entregables especificos</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/80">
                  {activeProject.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#proyectos"
                  className="inline-flex rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#f20c0c]"
                >
                  Ver proyecto completo
                </a>
                <a
                  href="mailto:contacto@moistudio.com?subject=Solicitud%20de%20propuesta%20similar"
                  className="inline-flex rounded-full border border-black/15 px-5 py-2 text-sm font-semibold text-black transition hover:border-[#f20c0c] hover:text-[#f20c0c]"
                >
                  Solicitar propuesta similar
                </a>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setActiveProjectId(null)}
            className="absolute inset-0 -z-10"
            aria-label="Cerrar modal"
          />
        </div>
      )}

      {activePdf?.pdfPath && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-3 py-5 sm:px-6 sm:py-8" role="dialog" aria-modal="true">
          <div className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#101010] shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black px-4 py-3 text-white sm:px-5">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">Visualizador PDF</p>
                <h3 className="text-sm font-semibold sm:text-base">{activePdf.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={activePdf.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white"
                >
                  Abrir en pestana
                </a>
                <a
                  href={activePdf.pdfPath}
                  download
                  className="inline-flex rounded-full bg-[#f20c0c] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:brightness-110"
                >
                  Descargar
                </a>
                <button
                  type="button"
                  onClick={() => setActivePdf(null)}
                  className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-white/90"
                >
                  Cerrar
                </button>
              </div>
            </div>

            <div className="relative flex-1 bg-[#0b0b0b] p-2 sm:p-3">
              <iframe
                src={`${activePdf.pdfPath}#view=FitH`}
                title={activePdf.label}
                className="h-full w-full rounded-xl border border-white/10 bg-white"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setActivePdf(null)}
            className="absolute inset-0 -z-10"
            aria-label="Cerrar visualizador"
          />
        </div>
      )}
    </>
  );
}
