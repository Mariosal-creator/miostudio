import CategoryBanner from "@/app/components/CategoryBanner";
import CategoryIntro from "@/app/components/CategoryIntro";

export default function EdicionPostproduccionPage() {
  return (
    <div className="min-h-screen bg-white">
      <CategoryBanner
        title="Edición y Postproducción"
        breadcrumb={["Inicio", "Servicios", "Edición y Postproducción"]}
        backgroundVideo="/fuego.mp4"
        messages={[
          "Montaje narrativo para retención y claridad",
          "Color, audio y ritmo con estándar profesional",
          "Optimización para plataformas digitales",
          "Entregas precisas en tiempos acordados",
        ]}
        intervalMs={3500}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
          <CategoryIntro
            title="Edición y postproducción"
            description="Transformamos material en bruto en piezas de alto impacto con edición dinámica, corrección de color y mezcla de sonido profesional."
            primaryCtaHref="https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20quiero%20informaci%C3%B3n%20sobre%20edici%C3%B3n%20y%20postproducci%C3%B3n"
          />
      </div>
      </div>
    </div>
  );
}
