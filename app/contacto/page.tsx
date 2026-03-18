export default function ContactoPage() {
  const redesSociales = [
    {
      nombre: "WhatsApp",
      descripcion: "Chatea con nosotros en tiempo real",
      icon: (
        <svg className="w-20 h-20 sm:w-24 sm:h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      url: "https://wa.me/+593983231437?text=Quiero%20m%C3%A1s%20info...",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    },
    {
      nombre: "Facebook",
      descripcion: "Síguenos y conoce nuestras novedades",
      icon: (
        <svg className="w-20 h-20 sm:w-24 sm:h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: "https://www.facebook.com/mario.salazar.or",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    },
    {
      nombre: "TikTok",
      descripcion: "Mira nuestro contenido y producciones en formato vertical",
      icon: (
        <svg className="w-20 h-20 sm:w-24 sm:h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.218V2h-3.358v13.548a2.898 2.898 0 1 1-2-2.756V9.39a6.257 6.257 0 0 0-1.165-.109A6.262 6.262 0 1 0 15.82 15.54V8.653a8.154 8.154 0 0 0 4.773 1.526V6.821c-.342 0-.68-.046-1.004-.135Z" />
        </svg>
      ),
      url: "https://www.tiktok.com/@moistudioec",
      color: "from-neutral-900 to-neutral-700",
      hoverColor: "hover:from-neutral-800 hover:to-neutral-600"
    },
    {
      nombre: "YouTube",
      descripcion: "Explora nuestro canal con proyectos, coberturas y contenido audiovisual",
      icon: (
        <svg className="w-20 h-20 sm:w-24 sm:h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.122C19.506 3.545 12 3.545 12 3.545s-7.506 0-9.388.519A2.997 2.997 0 0 0 .502 6.186 31.227 31.227 0 0 0 0 12a31.227 31.227 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.11 2.122c1.882.519 9.388.519 9.388.519s7.506 0 9.388-.519a2.997 2.997 0 0 0 2.11-2.122A31.227 31.227 0 0 0 24 12a31.227 31.227 0 0 0-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
        </svg>
      ),
      url: "https://www.youtube.com/@MOISTUDIOEC",
      color: "from-red-600 to-red-700",
      hoverColor: "hover:from-red-700 hover:to-red-800"
    },
    {
      nombre: "Linktree",
      descripcion: "Accede a todos nuestros enlaces, plataformas y canales desde un solo lugar",
      icon: (
        <img src="/linktree.svg" alt="Linktree" className="w-20 h-20 sm:w-24 sm:h-24" />
      ),
      url: "https://linktr.ee/moistudioec",
      color: "from-white to-white",
      hoverColor: "hover:from-gray-100 hover:to-gray-200"
    },
    {
      nombre: "Kick",
      descripcion: "Sigue nuestras transmisiones, sesiones en vivo y contenido en tiempo real",
      icon: (
        <img src="/kick.svg" alt="Kick" className="w-20 h-20 sm:w-24 sm:h-24" />
      ),
      url: "https://kick.com/moistudio",
      color: "from-neutral-900 to-neutral-800",
      hoverColor: "hover:from-neutral-800 hover:to-neutral-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Conecta con <span className="text-[#f20c0c]">Moi Studio</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos listos para colaborar. Cuéntanos tu proyecto y llevaremos tu visión a la pantalla.
            </p>
          </div>
        </div>
      </div>

      {/* Redes Sociales Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {redesSociales.map((red, index) => (
            <a
              key={index}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${red.color} ${red.hoverColor} p-6 sm:p-7 lg:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform`}
            >
              <div className="pointer-events-none absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500" />
              <div className="relative z-10 flex flex-col items-center justify-center py-4">
                <span className="block w-12 h-12 sm:w-14 sm:h-14 text-white mb-6 mx-auto">{red.icon}</span>
                {/* Solo el icono, sin texto ni nombre */}
              </div>
              <div className="pointer-events-none absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </a>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#f20c0c] transition-colors duration-300">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <a href="mailto:moistudioec@gmail.com" className="text-gray-300 hover:text-[#f20c0c] transition-colors">
              moistudioec@gmail.com
            </a>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#f20c0c] transition-colors duration-300">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-white mb-2">Teléfono</h3>
            <a href="tel:+593983231437" className="text-gray-300 hover:text-[#f20c0c] transition-colors">
              +593 98 204 8240
            </a>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#f20c0c] transition-colors duration-300">
            <div className="text-4xl mb-4">🕐</div>
            <h3 className="text-xl font-semibold text-white mb-2">Horarios</h3>
            <p className="text-gray-300">
              Lun - Vie: 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        {/* Beneficios de contactarse */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Por qué contactarnos?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-[#f20c0c] mb-2">Asesoría personalizada</h3>
              <p className="text-gray-300">Te guiamos en cada etapa de tu proyecto audiovisual, desde la idea hasta la entrega final.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-[#f20c0c] mb-2">Respuesta rápida</h3>
              <p className="text-gray-300">Nos comprometemos a responderte en menos de 24 horas hábiles.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-[#f20c0c] mb-2">Soluciones creativas</h3>
              <p className="text-gray-300">Propuestas innovadoras y adaptadas a tus necesidades y presupuesto.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-[#f20c0c] mb-2">Atención integral</h3>
              <p className="text-gray-300">Acompañamiento antes, durante y después de tu proyecto.</p>
            </div>
          </div>
        </div>

        {/* Formulario de contacto y mapa */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Formulario con Formspree */}
          <form 
            className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg flex flex-col gap-6"
            action="https://formspree.io/f/mlgpovzp"
            method="POST"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Envíanos un mensaje</h2>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="nombre">Nombre</label>
              <input required type="text" id="nombre" name="nombre" className="w-full rounded-lg px-4 py-2 bg-gray-900/80 text-white border border-white/10 focus:border-[#f20c0c] outline-none" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
              <input required type="email" id="email" name="email" className="w-full rounded-lg px-4 py-2 bg-gray-900/80 text-white border border-white/10 focus:border-[#f20c0c] outline-none" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="telefono">Teléfono (opcional)</label>
              <input type="tel" id="telefono" name="telefono" className="w-full rounded-lg px-4 py-2 bg-gray-900/80 text-white border border-white/10 focus:border-[#f20c0c] outline-none" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="mensaje">Mensaje</label>
              <textarea required id="mensaje" name="mensaje" rows={4} className="w-full rounded-lg px-4 py-2 bg-gray-900/80 text-white border border-white/10 focus:border-[#f20c0c] outline-none" />
            </div>
            {/* Campo oculto para redirigir a una página de gracias (opcional) */}
            {/* <input type="hidden" name="_next" value="https://tusitio.com/gracias" /> */}
            <button type="submit" className="mt-2 bg-[#f20c0c] hover:bg-[#c90a0a] text-white font-bold py-3 rounded-lg transition-colors">Enviar mensaje</button>
          </form>
          {/* Mapa */}
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[350px] bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-500">
            <iframe
              title="Ubicación Moi Studio"
              src="https://www.google.com/maps?q=-0.077556,-78.440667&hl=es&z=16&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-lg text-gray-300 mb-6">¡Contáctanos hoy y da el primer paso para llevar tu idea a la realidad!</p>
          <a href="https://wa.me/+593983231437?text=Hola%20Moi%20Studio%2C%20quiero%20cotizar%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#f20c0c] hover:bg-[#c90a0a] text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg">Escríbenos por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
