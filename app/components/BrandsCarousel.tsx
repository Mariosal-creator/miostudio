const brands = [
  "Andes Tech",
  "Nova Retail",
  "Altura Motors",
  "Café Sierra",
  "Viva Salud",
  "Urban Fit",
  "Aqua Prime",
  "Origen Foods",
];

export default function BrandsCarousel() {
  const trackBrands = [...brands, ...brands];

  return (
    <section className="w-full bg-black py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">Nuestras marcas</h2>
          <p className="text-sm sm:text-base text-gray-300">
            Empresas que han confiado en nuestro trabajo audiovisual
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="brands-track flex w-max items-center gap-3 sm:gap-4 lg:gap-5 px-4 sm:px-6 lg:px-8">
          {trackBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className="flex h-16 sm:h-20 min-w-[150px] sm:min-w-[190px] lg:min-w-[220px] items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 text-center"
            >
              <span className="text-sm sm:text-base lg:text-lg font-semibold tracking-wide text-white">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .brands-track {
          animation: scrollBrands 26s linear infinite;
        }

        @keyframes scrollBrands {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
