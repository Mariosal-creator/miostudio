export default function VideoTestimonials() {
  return (
    <section className="mt-16 mb-10 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Testimonios de clientes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <blockquote className="bg-white/5 rounded-xl p-6 border border-white/10 text-left shadow-lg">
          <p className="text-gray-200 italic mb-3">“El video superó nuestras expectativas, capturó la esencia de nuestra marca y generó gran impacto en redes.”</p>
          <span className="block text-sm font-semibold text-[#f20c0c]">— Cliente 1</span>
        </blockquote>
        <blockquote className="bg-white/5 rounded-xl p-6 border border-white/10 text-left shadow-lg">
          <p className="text-gray-200 italic mb-3">“Excelente equipo, creatividad y profesionalismo en cada etapa del proyecto audiovisual.”</p>
          <span className="block text-sm font-semibold text-[#f20c0c]">— Cliente 2</span>
        </blockquote>
      </div>
    </section>
  );
}
