import CategoryBanner from "@/app/components/CategoryBanner";
import CategoryIntro from "@/app/components/CategoryIntro";

export default function PublicidadComercialesPage() {
  return (
    <div className="min-h-screen bg-white">
      <CategoryBanner
        title="Publicidad y Comerciales"
        breadcrumb={["Inicio", "Servicios", "Publicidad y Comerciales"]}
        backgroundVideo="/fuego.mp4"
        messages={[
          "Campañas audiovisuales para conversión y marca",
          "Concepto creativo, producción y entrega final",
          "Piezas para pauta digital y medios tradicionales",
          "Contenido publicitario con enfoque estratégico",
        ]}
        intervalMs={3500}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
          <CategoryIntro
            title="Publicidad y comerciales"
            description="Creamos campañas visuales que potencian posicionamiento, recordación y resultados comerciales en diferentes canales."
            primaryCtaHref="https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20quiero%20informaci%C3%B3n%20sobre%20publicidad%20y%20comerciales"
          />
      </div>
      </div>
    </div>
  );
}
