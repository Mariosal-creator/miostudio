import VideoSubcategoryPage from "../VideoSubcategoryPage";
import { getVideoSubcategory } from "../videoSubcategories";

export default function ContenidoVerticalRedesSocialesPage() {
  const subcategory = getVideoSubcategory("contenido-vertical-redes-sociales");

  if (!subcategory) {
    throw new Error("Video subcategory not found: contenido-vertical-redes-sociales");
  }

  return <VideoSubcategoryPage subcategory={subcategory} />;
}
