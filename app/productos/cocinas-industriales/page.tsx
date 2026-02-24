import CategoryBanner from "@/app/components/CategoryBanner";
import CategoryIntro from "@/app/components/CategoryIntro";
import CategoryProducts, { ProductItem } from "@/app/components/CategoryProducts";
export default function CocinasIndustrialesPage() {
  const productos: ProductItem[] = [
    {
      id: "coc-4q",
      title: "Cocina industrial 4 quemadores",
      imageSrc: "/masvendidos/001.jpg",
      specs: ["Acero inoxidable", "Quemadores de alto rendimiento", "Parrillas reforzadas"],
    },
    {
      id: "coc-6q",
      title: "Cocina industrial 6 quemadores",
      imageSrc: "/masvendidos/002.jpg",
      specs: ["Control preciso", "Válvulas de seguridad", "Acabado sanitizable"],
    },
    {
      id: "coc-8q",
      title: "Cocina alta producción 8 quemadores",
      imageSrc: "/masvendidos/003.jpg",
      specs: ["Estructura robusta", "Operación continua", "Mantenimiento sencillo"],
    },
    {
      id: "coc-plancha",
      title: "Cocina con plancha y horno",
      imageSrc: "/masvendidos/004.jpg",
      specs: ["Plancha de acero", "Horno integrado", "Ideal para restaurante"],
    },
    {
      id: "coc-modular",
      title: "Línea de cocción modular 120cm",
      imageSrc: "/masvendidos/005.jpg",
      specs: ["Configuración flexible", "Componentes intercambiables", "Acero grado alimenticio"],
    },
    {
      id: "coc-isla",
      title: "Isla de cocción profesional",
      imageSrc: "/masvendidos/006.jpg",
      specs: ["Acceso 360°", "Optimización de flujo", "Diseño a medida"],
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <CategoryBanner
        title="Cocinas Industriales"
        breadcrumb={["Inicio","Productos","Cocinas Industriales"]}
        backgroundVideo="/fuego.mp4"
        messages={[
          "Cocinas industriales de alto rendimiento",
          "Fabricación a medida en acero inoxidable",
          "Diseño, instalación y soporte profesional",
          "Eficiencia y durabilidad para tu negocio",
        ]}
        intervalMs={3500}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <CategoryIntro
            title="Cocinas industriales"
            description="Fabricación en acero inoxidable con diseño a medida, soporte técnico y equipos eficientes y duraderos para alto volumen."
            primaryCtaHref="https://wa.me/593963163035?text=Hola%20Metalgas%20%2D%20quisiera%20informaci%C3%B3n%20sobre%20cocinas%20industriales"
          />
          <CategoryProducts products={productos} />
        </div>
      </div>
    </div>
  );
}
