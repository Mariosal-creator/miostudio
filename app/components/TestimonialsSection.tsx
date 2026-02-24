export default function TestimonialsSection() {
  const stats = [
    {
      percentage: "150+",
      description: "Proyectos audiovisuales completados exitosamente para marcas nacionales e internacionales",
    },
    {
      percentage: "98%",
      description: "De nuestros clientes nos recomiendan con otros por la calidad y profesionalismo de nuestro trabajo",
    },
    {
      percentage: "24/7",
      description: "Disponibilidad del equipo para tus proyectos y necesidades de producción audiovisual",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            ¡Expertos en Producción Audiovisual de Calidad Profesional!
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            En Moi Studio, transformamos ideas en contenido visual impactante. Nuestro equipo de 
            profesionales está comprometido con la excelencia en cada proyecto.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-br from-red-50 to-black/5 border-2 border-red-200 rounded-2xl hover:border-[#f20c0c] transition-colors duration-300"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f20c0c] mb-4">
                {stat.percentage}
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nota final */}
        <p className="text-center text-sm sm:text-base text-gray-500 italic">
          Cada proyecto es una oportunidad para crear historias visuales que impacten y perduren
        </p>
      </div>
    </section>
  );
}
