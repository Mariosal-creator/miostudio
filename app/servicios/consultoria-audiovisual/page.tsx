import CategoryBanner from "@/app/components/CategoryBanner";
import CategoryIntro from "@/app/components/CategoryIntro";

export default function ConsultoriaAudiovisualPage() {
  return (
    <div className="min-h-screen bg-white">
      <CategoryBanner
        title="Consultoría Audiovisual"
        breadcrumb={["Inicio", "Servicios", "Consultoría Audiovisual"]}
        backgroundVideo="/fuego.mp4"
        messages={[
          "Estrategia de contenido para crecimiento de marca",
          "Diagnóstico técnico y creativo personalizado",
          "Plan de producción adaptable a presupuesto",
          "Acompañamiento para ejecución y mejora continua",
        ]}
        intervalMs={3500}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
          <CategoryIntro
            title="Consultoría audiovisual"
            description="Te ayudamos a definir estrategia, formatos y flujo de trabajo para que tu contenido audiovisual cumpla objetivos de negocio."
            primaryCtaHref="https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20quiero%20informaci%C3%B3n%20sobre%20consultor%C3%ADa%20audiovisual"
          />
      </div>
      </div>
    </div>
  );
}
