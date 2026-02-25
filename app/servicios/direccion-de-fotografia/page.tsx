import CategoryBanner from "@/app/components/CategoryBanner";
import CategoryIntro from "@/app/components/CategoryIntro";

export default function DireccionDeFotografiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <CategoryBanner
        title="Dirección de Fotografía"
        breadcrumb={["Inicio", "Servicios", "Dirección de Fotografía"]}
        backgroundVideo="/fuego.mp4"
        messages={[
          "Cinematografía con identidad visual sólida",
          "Iluminación y composición para narrativas impactantes",
          "Equipo técnico especializado en set",
          "Coherencia estética en cada plano",
        ]}
        intervalMs={3500}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
          <CategoryIntro
            title="Dirección de fotografía"
            description="Diseñamos la estética visual de cada proyecto con una propuesta cinematográfica alineada a tu marca y objetivos de comunicación."
            primaryCtaHref="https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20quiero%20informaci%C3%B3n%20sobre%20direcci%C3%B3n%20de%20fotograf%C3%ADa"
          />
      </div>
      </div>
    </div>
  );
}
