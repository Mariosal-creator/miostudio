import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProyectosPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Nuestro Portfolio
            </h1>
            <p className="text-xl text-gray-400">
              Proyectos audiovisuales que hemos realizado para marcas líderes
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-gradient-to-r from-[#f20c0c] via-black to-[#b00909] rounded-3xl p-12 text-center border border-[#f20c0c]/30">
            <div className="text-6xl mb-6">🎬</div>
            <h2 className="text-3xl font-bold text-white mb-4">Galería de Proyectos</h2>
            <p className="text-gray-300 text-lg mb-6">
              Estamos actualizando nuestro portfolio con nuestros últimos trabajos en producción audiovisual.
            </p>
            <div className="inline-block">
              <a 
                href="/contacto" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f20c0c] to-black hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition"
              >
                Solicita una presentación personalizada
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
