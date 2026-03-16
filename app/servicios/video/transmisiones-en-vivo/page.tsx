import VideoSubcategoryPage from "../VideoSubcategoryPage";
import { getVideoSubcategory } from "../videoSubcategories";

export default function TransmisionesEnVivoPage() {
  const subcategory = getVideoSubcategory("transmisiones-en-vivo");

  if (!subcategory) {
    throw new Error("Video subcategory not found: transmisiones-en-vivo");
  }

  return <VideoSubcategoryPage subcategory={subcategory} />;
}
