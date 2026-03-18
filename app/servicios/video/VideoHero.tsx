import Image from "next/image";

export default function VideoHero() {
  return (
    <section className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl mb-10">
      <Image
        src="/portfolio/fotografia/miniaturas/studio/hero-video.jpg"
        alt="Producción de Video Moi Studio"
        fill
        className="object-cover object-center opacity-80"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Producción de <span className="text-[#f20c0c]">Video</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
          Impacta, emociona y comunica con piezas audiovisuales profesionales para tu marca, evento o campaña.
        </p>
      </div>
    </section>
  );
}
