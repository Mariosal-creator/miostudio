import Link from "next/link";
import { readdir } from "node:fs/promises";
import path from "node:path";
import CapacitacionGallery from "./CapacitacionGallery";


const servicios = [
  {
    titulo: "Asesoría Técnica Personalizada",
    descripcion: "Diagnóstico, planificación y acompañamiento en proyectos audiovisuales, desde la preproducción hasta la entrega final.",
    icono: "🎬",
  },
  {
    titulo: "Capacitación Presencial y Online",
    descripcion: "Formación práctica en manejo de cámaras, iluminación, perfiles de color, edición y streaming, adaptada a tu nivel y objetivos.",
    icono: "💡",
  },
  {
    titulo: "Consultoría de Flujos de Trabajo",
    descripcion: "Optimización de procesos técnicos y creativos para equipos de producción, agencias y creadores de contenido.",
    icono: "🔧",
  },
  {
    titulo: "Workshops para Filmmakers y Streamers",
    descripcion: "Talleres intensivos sobre narrativa visual, producción multicámara, audio profesional y transmisión en vivo.",
    icono: "🎤",
  },
];

const beneficios = [
  "Aprende con profesionales en activo",
  "Capacitación adaptada a tus necesidades",
  "Acceso a recursos y plantillas exclusivas",
  "Soporte post-capacitación para tus proyectos",
  "Certificado de participación Moi Studio",
];

const testimonios = [
  {
    nombre: "Andrea G.",
    texto: "La capacitación superó mis expectativas. Ahora produzco videos con mayor calidad y confianza.",
  },
  {
    nombre: "Carlos V.",
    texto: "El taller de streaming fue clave para profesionalizar mis transmisiones. 100% recomendado.",
  },
  {
    nombre: "Lucía P.",
    texto: "La asesoría personalizada me ayudó a optimizar el flujo de trabajo de mi agencia.",
  },
];

const faqs = [
  {
    pregunta: "¿Las capacitaciones pueden ser online?",
    respuesta: "Sí, ofrecemos modalidades presenciales y virtuales según tu preferencia y ubicación.",
  },
  {
    pregunta: "¿Entregan certificado?",
    respuesta: "Sí, al finalizar cada capacitación recibirás un certificado digital Moi Studio.",
  },
  {
    pregunta: "¿Puedo solicitar un taller a medida?",
    respuesta: "Por supuesto, diseñamos contenidos y prácticas adaptadas a tus objetivos y nivel técnico.",
  },
  {
    pregunta: "¿Qué equipos necesito para capacitarme?",
    respuesta: "Te orientamos sobre el equipo mínimo necesario y te prestamos recursos durante la capacitación presencial si lo requieres.",
  },
];

export default async function AsesoriaCapacitacionesPage() {
  const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

  const getCapacitacionImages = async () => {
    const folderPath = path.join(process.cwd(), "public", "capacitacion");

    try {
      const files = await readdir(folderPath, { withFileTypes: true });

      return files
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name)
        .filter((fileName) => imageExtensions.has(path.extname(fileName).toLowerCase()))
        .sort((a, b) => a.localeCompare(b, "es", { numeric: true }))
        .map((fileName) => ({
          src: `/capacitacion/${encodeURIComponent(fileName)}`,
          label: path.parse(fileName).name.replace(/[-_]+/g, " "),
        }));
    } catch {
      return [];
    }
  };

  const capacitacionImages = await getCapacitacionImages();


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#181818] to-[#232323] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-[#f20c0c]/30 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Formación audiovisual profesional
          </span>
          <h1 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Asesoría y <span className="text-[#f20c0c]">Capacitaciones</span> Moi Studio
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base text-white/85 sm:text-lg">
            Potencia tus habilidades y las de tu equipo con entrenamientos prácticos, asesoría técnica y workshops de alto nivel para filmmakers, streamers y creadores de contenido.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="inline-flex rounded-full bg-[#f20c0c] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110">
              Solicitar capacitación
            </Link>
            <a href="/documentos/BROCHURE-CAPACITACION.pdf" className="inline-flex rounded-full border border-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black">
              Descargar brochure
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 bg-[#181818] border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Qué ofrecemos?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map((serv, idx) => (
              <article key={serv.titulo} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm text-white flex flex-col items-center text-center">
                <span className="text-4xl mb-3">{serv.icono}</span>
                <h3 className="text-lg font-bold mb-2">{serv.titulo}</h3>
                <p className="text-sm text-gray-300">{serv.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 bg-[#151515] border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Beneficios de capacitarte con Moi Studio</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {beneficios.map((b, idx) => (
              <li key={b} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white/90 text-sm flex items-center gap-3">
                <span className="inline-block h-3 w-3 rounded-full bg-[#f20c0c] mr-2" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 bg-[#181818] border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Testimonios</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonios.map((t) => (
              <blockquote key={t.nombre} className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-white/90 text-sm shadow-sm">
                <p className="mb-3">“{t.texto}”</p>
                <footer className="text-xs text-[#f20c0c] font-bold">{t.nombre}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <CapacitacionGallery images={capacitacionImages} />

      {/* FAQ */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 bg-[#181818] border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Preguntas frecuentes</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, idx) => (
              <details key={faq.pregunta} className="group rounded-xl border border-white/10 bg-white/5 p-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-white">{faq.pregunta}</summary>
                <p className="mt-3 text-sm text-gray-300">{faq.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f20c0c] to-black">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-black sm:text-4xl">¿Listo para potenciar tu talento?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/90">
            Agenda una sesión de asesoría o solicita tu capacitación personalizada. ¡Da el siguiente paso en tu carrera audiovisual!
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-black hover:text-white">
              Agenda ahora
            </Link>
            <a href="/documentos/BROCHURE-CAPACITACION.pdf" className="inline-flex rounded-full border border-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black">
              Descargar brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
