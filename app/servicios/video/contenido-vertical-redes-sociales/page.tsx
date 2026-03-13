import VideoSubcategoryPage from "../VideoSubcategoryPage";
import { getVideoSubcategory } from "../videoSubcategories";

const subcategory = getVideoSubcategory("contenido-vertical-redes-sociales");

if (!subcategory) {
  throw new Error("Video subcategory not found: contenido-vertical-redes-sociales");
}

export default function ContenidoVerticalRedesSocialesPage() {
  return <VideoSubcategoryPage subcategory={subcategory} />;
}
