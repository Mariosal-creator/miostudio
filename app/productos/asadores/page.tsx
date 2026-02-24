import CategoryBanner from "@/app/components/CategoryBanner";
import CategoryIntro from "@/app/components/CategoryIntro";
export default function AsadoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <CategoryBanner
        title="Asadores"
        breadcrumb={["Inicio","Productos","Asadores"]}
        backgroundVideo="/fuego.mp4"
        messages={[
          "Fabricación a medida en acero inoxidable",
          "Diseño, instalación y soporte profesional",
          "Eficiencia y durabilidad para tu negocio",
          "Rendimiento confiable en alto volumen",
        ]}
        intervalMs={3500}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
          <CategoryIntro
            title="Asadores"
            description="Soluciones de asado profesional en acero inoxidable, diseño a medida y montaje experto para operación exigente."
            primaryCtaHref="https://wa.me/593963163035?text=Hola%20Metalgas%20%2D%20quisiera%20informaci%C3%B3n%20sobre%20asadores"
          />
      </div>
      </div>
    </div>
  );
}
