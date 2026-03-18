import Image from "next/image";

const portfolio = [
  {
    title: "Video Corporativo",
    image: "/portfolio/fotografia/miniaturas/studio/hero-video.jpg",
    url: "#",
  },
  {
    title: "Cobertura de Evento",
    image: "/portfolio/fotografia/miniaturas/evento/miniatura1.jpg",
    url: "#",
  },
  {
    title: "Spot Publicitario",
    image: "/portfolio/fotografia/miniaturas/studio/miniatura2.jpg",
    url: "#",
  },
];

export default function VideoPortfolio() {
  return (
    <section className="mt-16 mb-10 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Proyectos destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((item) => (
          <a
            key={item.title}
            href={item.url}
            className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg hover:shadow-2xl transition"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
