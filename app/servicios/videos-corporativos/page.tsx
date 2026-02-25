import CategoryBanner from "@/app/components/CategoryBanner";
import CategoryIntro from "@/app/components/CategoryIntro";
import CategoryCatalog, { CatalogItem } from "@/app/components/CategoryCatalog";

export default function VideosCorporativosPage() {
  const catalogo: CatalogItem[] = [
    {
      id: "vc-1",
      title: "Video institucional",
      imageSrc: "/masvendidos/001.jpg",
      specs: ["Guion base", "Rodaje de jornada", "Entrega optimizada para web"],
    },
    {
      id: "vc-2",
      title: "Cobertura corporativa",
      imageSrc: "/masvendidos/002.jpg",
      specs: ["Registro de evento", "Edición dinámica", "Versión horizontal y vertical"],
    },
    {
      id: "vc-3",
      title: "Testimoniales de marca",
      imageSrc: "/masvendidos/003.jpg",
      specs: ["Entrevistas guiadas", "Diseño sonoro", "Color grading profesional"],
    },
    {
      id: "vc-4",
      title: "Lanzamiento de servicios",
      imageSrc: "/masvendidos/004.jpg",
      specs: ["Concepto creativo", "Producción en locación", "Piezas para pauta"],
    },
    {
      id: "vc-5",
      title: "Video de cultura organizacional",
      imageSrc: "/masvendidos/005.jpg",
      specs: ["Narrativa humana", "Dirección de entrevistas", "Edición con branding"],
    },
    {
      id: "vc-6",
      title: "Contenido para redes empresariales",
      imageSrc: "/masvendidos/006.jpg",
      specs: ["Formato corto", "Subtítulos dinámicos", "Exportación multi-plataforma"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <CategoryBanner
        title="Videos Corporativos"
        breadcrumb={["Inicio", "Servicios", "Videos Corporativos"]}
        backgroundVideo="/fuego.mp4"
        messages={[
          "Contenido corporativo con enfoque estratégico",
          "Producción profesional para fortalecer tu marca",
          "Storytelling audiovisual orientado a resultados",
          "Entregas optimizadas para web y redes",
        ]}
        intervalMs={3500}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <CategoryIntro
            title="Videos corporativos"
            description="Creamos piezas audiovisuales que comunican la esencia de tu empresa, refuerzan credibilidad y mejoran la conexión con tu audiencia."
            primaryCtaHref="https://wa.me/593963163035?text=Hola%20Moi%20Studio%20%2D%20quiero%20informaci%C3%B3n%20sobre%20videos%20corporativos"
          />
          <CategoryCatalog items={catalogo} />
        </div>
      </div>
    </div>
  );
}
