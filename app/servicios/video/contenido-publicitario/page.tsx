import VideoSubcategoryPage from "../VideoSubcategoryPage";
import { getVideoSubcategory } from "../videoSubcategories";

const subcategory = getVideoSubcategory("contenido-publicitario");

if (!subcategory) {
  throw new Error("Video subcategory not found: contenido-publicitario");
}

export default function ContenidoPublicitarioPage() {
  return <VideoSubcategoryPage subcategory={subcategory} />;
}
