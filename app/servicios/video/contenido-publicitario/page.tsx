import VideoSubcategoryPage from "../VideoSubcategoryPage";
import { getVideoSubcategory } from "../videoSubcategories";

export default function ContenidoPublicitarioPage() {
  const subcategory = getVideoSubcategory("contenido-publicitario");

  if (!subcategory) {
    throw new Error("Video subcategory not found: contenido-publicitario");
  }

  return <VideoSubcategoryPage subcategory={subcategory} />;
}
