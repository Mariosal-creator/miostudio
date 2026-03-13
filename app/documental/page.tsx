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
    tags: ["Documental testimonial", "Genero", "Vivienda digna"],
    image: "https://img.youtube.com/vi/fyg-ccn7ohE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/fyg-ccn7ohE",
    objective:
      "Visibilizar historias de mujeres que fortalecen su autonomia economica en contextos de movilidad humana, alineado a objetivos de proteccion y medios de vida.",
    methodology: [
      "Preproduccion con enfoque etico y narrativa sensible al contexto.",
      "Rodaje en territorio con entrevistas testimoniales y cobertura observacional.",
      "Postproduccion con cortes validados por contraparte tecnica.",
    ],
    deliverables: [
      "Documental principal de 3 minutos",
      "2 videos cortos de 45 segundos (16:9 y 9:16)",
      "15 fotografias editadas con matriz descriptiva",
    ],
  },
  {
    id: 2,
    title: "Mujeres en Movimiento",
    client: "ONG Aliada Internacional",
    tags: ["Migracion", "Testimonial", "Proteccion"],
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
    videoUrl: "https://www.youtube.com/embed/L1gUbHzWxG8",
    objective:
      "Documentar procesos de integracion comunitaria y acceso a servicios para mujeres migrantes y sus familias.",
    methodology: [
      "Investigacion previa y consentimiento informado de participantes.",
      "Grabacion en espacios seguros con protocolo de cuidado.",
      "Edicion para piezas de incidencia y redes sociales.",
    ],
    deliverables: [
      "Documental de 3 minutos",
      "2 shorts vertical/horizontal",
      "Banco fotografico de 15 imagenes",
    ],
  },
  {
    id: 3,
    title: "Autonomia que Transforma",
    client: "Programa de Cooperacion Regional",
    tags: ["Autonomia economica", "ONG", "Impacto social"],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    videoUrl: "https://www.youtube.com/embed/fJk7KtLVDGE",
    objective:
      "Mostrar resultados de programas de emprendimiento para mujeres en situacion de vulnerabilidad.",
    methodology: [
      "Guion orientado a indicadores de cambio y sostenibilidad.",
      "Rodaje con entrevistas y recursos de apoyo visual.",
      "Entrega de versiones limpias y subtituladas.",
    ],
    deliverables: [
      "Pieza principal 3 min con subtitulos",
      "2 videos de 45 seg para pauta",
      "15 fotos de campo y retrato",
    ],
  },
  {
    id: 4,
    title: "Territorio y Derechos",
    client: "Red de Cooperacion y Vivienda",
    tags: ["Derechos humanos", "Vivienda", "Comunidad"],
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80",
    videoUrl: "https://www.youtube.com/embed/-rpHP2Q6Tow",
    objective:
      "Evidenciar iniciativas de vivienda digna y cohesion comunitaria desde la voz de lideresas territoriales.",
    methodology: [
      "Levantamiento de testimonios con enfoque participativo.",
      "Cobertura audiovisual de procesos en territorio.",
      "Post con narrativa de resultados y aprendizajes.",
    ],
    deliverables: [
      "Documental corto de 3 min",
      "2 derivados de 45 seg",
      "15 fotos editadas en JPG",
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
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
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
              ))}
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
                  src={`${activeProject.videoUrl}?rel=0`}
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
