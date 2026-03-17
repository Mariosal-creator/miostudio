
import Link from "next/link";
import Image from "next/image";


const categoriasPrincipales = [
  {
    nombre: "Video",
    color: "from-[#f20c0c] to-black",
    miniatura: "/categoriaserv/videos.jpg",
    href: "/servicios/video",
    icono: "🎬",
    descripcion: "Producción de vídeos corporativos, publicitarios, eventos, streaming y más."
  },
  {
    nombre: "Fotografía",
    color: "from-[#b00909] to-black",
    miniatura: "/categoriaserv/fotografia.jpg",
    href: "/servicios/fotografia",
    icono: "📸",
    descripcion: "Fotografía profesional para empresas, productos, eventos y retratos."
  },
  {
    nombre: "Asesoría y Capacitaciones",
    color: "from-[#f20c0c] to-[#b00909]",
    miniatura: "/categoriaserv/stream-live.jpg",
    href: "/servicios/asesoria-capacitaciones",
    icono: "💡",
    descripcion: "Entrenamiento, consultoría y workshops para filmmakers, streamers y equipos."
  },
];

const beneficios = [
  "Equipo multidisciplinario con experiencia real",
  "Soluciones a medida para cada cliente",
  "Tecnología de punta y creatividad",
  "Acompañamiento en todo el proceso",
  "Resultados medibles y enfoque en objetivos",
];

const proceso = [
  {
    paso: "1. Diagnóstico",
    texto: "Escuchamos tus necesidades y analizamos tu proyecto para ofrecer la mejor solución audiovisual.",
    icono: "🔍",
  },
  {
    paso: "2. Propuesta",
    texto: "Presentamos una propuesta creativa y técnica alineada a tus objetivos y presupuesto.",
    icono: "📝",
  },
  {
    paso: "3. Producción",
    texto: "Ejecutamos el proyecto con profesionalismo, tecnología y atención al detalle.",
    icono: "🎥",
  },
  {
    paso: "4. Entrega y soporte",
    texto: "Te entregamos los resultados y te acompañamos en la difusión y uso de los materiales.",
    icono: "🚀",
  },
];

const testimonios = [
  {
    nombre: "María S.",
    texto: "El equipo de Moi Studio superó nuestras expectativas en cada etapa del proyecto. ¡Repetiríamos sin dudarlo!",
  },
  {
    nombre: "Jorge L.",
    texto: "La asesoría y la producción fueron impecables. Nos ayudaron a destacar nuestra marca con videos de alta calidad.",
  },
  {
    nombre: "Ana P.",
    texto: "La capacitación fue práctica y personalizada. Ahora nuestro equipo produce contenido mucho más profesional.",
  },
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-0 sm:px-0">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#181818] to-[#232323] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-[#f20c0c]/30 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Soluciones audiovisuales integrales
          </span>
          <h1 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Servicios profesionales <span className="text-[#f20c0c]">Moi Studio</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base text-white/85 sm:text-lg">
            Creatividad, tecnología y experiencia para potenciar tu marca, comunicar tu mensaje y lograr resultados de alto impacto.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="inline-flex rounded-full bg-[#f20c0c] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:brightness-110">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>

      {/* CARDS DE SERVICIOS */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 bg-[#181818] border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Qué hacemos?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoriasPrincipales.map((categoria) => (
              <Link
                key={categoria.nombre}
                href={categoria.href}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-[#f20c0c]/60 hover:bg-white/10"
              >
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl mr-2">{categoria.icono}</span>
                </div>
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
                <div className={`mb-2 rounded-xl bg-gradient-to-r ${categoria.color} px-4 py-3 text-center text-lg font-bold text-white`}>{categoria.nombre}</div>
                <p className="text-center text-sm text-gray-200 mb-2">{categoria.descripcion}</p>
                <p className="text-center text-xs text-[#f20c0c] font-semibold">Ver subcategorías</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 bg-[#151515] border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Por qué elegir Moi Studio?</h2>
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

      {/* PROCESO DE TRABAJO */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 bg-[#181818] border-b border-white/10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">¿Cómo trabajamos?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proceso.map((p) => (
              <div key={p.paso} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white flex flex-col items-center text-center shadow-sm">
                <span className="text-3xl mb-3">{p.icono}</span>
                <h3 className="text-base font-bold mb-2">{p.paso}</h3>
                <p className="text-sm text-gray-300">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-4 py-14 sm:px-6 lg:px-8 bg-[#151515] border-b border-white/10">
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

      {/* CTA FINAL */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f20c0c] to-black">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-black sm:text-4xl">¿Listo para llevar tu proyecto al siguiente nivel?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/90">
            Agenda una reunión o solicita tu cotización personalizada. ¡Trabajemos juntos para lograr resultados extraordinarios!
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-black hover:text-white">
              Agenda ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
