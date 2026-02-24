export default function HorariosPage() {
  const horarios = [
    { dia: "Domingo", horario: "Cerrado", abierto: false },
    { dia: "Lunes", horario: "9:00 AM - 8:00 PM", abierto: true },
    { dia: "Martes", horario: "9:00 AM - 8:00 PM", abierto: true },
    { dia: "Miércoles", horario: "9:00 AM - 8:00 PM", abierto: true },
    { dia: "Jueves", horario: "9:00 AM - 8:00 PM", abierto: true },
    { dia: "Viernes", horario: "9:00 AM - 8:00 PM", abierto: true },
    { dia: "Sábado", horario: "10:00 AM - 6:00 PM", abierto: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
            Horarios de Atención - Moi Studio
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Disponibles para coordinar tus proyectos audiovisuales en los siguientes horarios
          </p>
        </div>

        {/* Tabla de horarios */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#f20c0c] to-black">
                  <th className="px-6 py-5 text-left text-sm sm:text-base font-semibold text-white uppercase tracking-wider">
                    Día
                  </th>
                  <th className="px-6 py-5 text-right text-sm sm:text-base font-semibold text-white uppercase tracking-wider">
                    Horario
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {horarios.map((item, index) => (
                  <tr
                    key={index}
                    className={`transition-colors duration-200 ${
                      item.abierto
                        ? "hover:bg-gray-50"
                        : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            item.abierto ? "bg-green-500" : "bg-red-500"
                          }`}
                        />
                        <span className="text-base sm:text-lg font-medium text-gray-900">
                          {item.dia}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-right">
                      <span
                        className={`text-base sm:text-lg font-semibold ${
                          item.abierto ? "text-gray-700" : "text-red-600"
                        }`}
                      >
                        {item.horario}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#f20c0c] to-black rounded-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📞</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
                <p className="text-white/90 text-sm">
                  ¿Tienes un proyecto? Comunícate con nuestro equipo
                </p>
                <a
                  href="https://wa.me/593963163035"
                  className="inline-block mt-3 text-sm font-semibold underline hover:text-white/80 transition"
                >
                  +593 96 316 3035
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-900 rounded-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎬</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Servicios</h3>
                <p className="text-white/90 text-sm">
                  Consultoría, grabación y postproducción audiovisual
                </p>
                <p className="mt-3 text-sm font-semibold">
                  Disponible para proyectos urgentes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
