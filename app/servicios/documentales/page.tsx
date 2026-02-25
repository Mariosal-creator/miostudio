import CategoryBanner from "@/app/components/CategoryBanner";
import CategoryIntro from "@/app/components/CategoryIntro";

export default function DocumentalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <CategoryBanner
        title="Documentales"
        breadcrumb={["Inicio", "Servicios", "Documentales"]}
        backgroundVideo="/fuego.mp4"
        messages={[
          "Historias auténticas contadas con sensibilidad",
          "Investigación, guion y producción integral",
          "Enfoque humano y narrativa cinematográfica",
          "Piezas listas para difusión y festivales",
        ]}
        intervalMs={3500}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
          <CategoryIntro
            title="Documentales"
            description="Desarrollamos documentales que conectan con la audiencia a través de relatos reales, estética cuidada y construcción narrativa sólida."
            primaryCtaHref="https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20quiero%20informaci%C3%B3n%20sobre%20documentales"
          />
      </div>
      </div>
    </div>
  );
}
