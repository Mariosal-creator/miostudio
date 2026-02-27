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
      url: "https://wa.me/+593982048240?text=Quiero%20m%C3%A1s%20info...",
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
              Estamos listos para colaborar. Cuéntanos tu proyecto y llevaremos tu visión a la pantalla
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
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${red.color} ${red.hoverColor} p-8 sm:p-10 lg:p-12 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform`}
            >
              {/* Efecto de brillo */}
              <div className="pointer-events-none absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500" />
              
              {/* Contenido */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-500">
                    {red.icon}
                  </div>
                  <svg 
                    className="w-8 h-8 text-white/80 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {red.nombre}
                </h3>
                <p className="text-base sm:text-lg text-white/90">
                  {red.descripcion}
                </p>
              </div>

              {/* Decoración de fondo */}
              <div className="pointer-events-none absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </a>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#f20c0c] transition-colors duration-300">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <a href="mailto:info@moistudio.com" className="text-gray-300 hover:text-[#f20c0c] transition-colors">
              info@moistudio.com
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#f20c0c] transition-colors duration-300">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-white mb-2">Teléfono</h3>
            <a href="tel:+593982048240" className="text-gray-300 hover:text-[#f20c0c] transition-colors">
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
      </div>
    </div>
  );
}
