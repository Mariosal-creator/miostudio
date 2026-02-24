import CategoryBanner from "@/app/components/CategoryBanner";
import CategoryIntro from "@/app/components/CategoryIntro";
export default function FreidorasPage() {
  return (
    <div className="min-h-screen bg-white">
      <CategoryBanner
        title="Freidoras"
        breadcrumb={["Inicio","Productos","Freidoras"]}
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
            title="Freidoras"
            description="Freidoras industriales con eficiencia y seguridad, construidas en acero inoxidable y pensadas para alto desempeño."
            primaryCtaHref="https://wa.me/593963163035?text=Hola%20Metalgas%20%2D%20quisiera%20informaci%C3%B3n%20sobre%20freidoras"
          />
      </div>
      </div>
    </div>
  );
}
