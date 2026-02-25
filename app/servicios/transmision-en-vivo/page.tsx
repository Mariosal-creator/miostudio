import CategoryBanner from "@/app/components/CategoryBanner";
import CategoryIntro from "@/app/components/CategoryIntro";

export default function TransmisionEnVivoPage() {
  return (
    <div className="min-h-screen bg-white">
      <CategoryBanner
        title="Transmisión en Vivo"
        breadcrumb={["Inicio", "Servicios", "Transmisión en Vivo"]}
        backgroundVideo="/fuego.mp4"
        messages={[
          "Producciones en directo con estándar broadcast",
          "Realización multicámara y control técnico",
          "Integración de gráficos y audio profesional",
          "Streaming estable para eventos y marcas",
        ]}
        intervalMs={3500}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
          <CategoryIntro
            title="Transmisión en vivo"
            description="Gestionamos eventos en directo con planificación técnica, operación en tiempo real y salida optimizada para cada plataforma."
            primaryCtaHref="https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20quiero%20informaci%C3%B3n%20sobre%20transmisi%C3%B3n%20en%20vivo"
          />
      </div>
      </div>
    </div>
  );
}
