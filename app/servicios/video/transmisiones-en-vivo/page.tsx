import VideoSubcategoryPage from "../VideoSubcategoryPage";
import { getVideoSubcategory } from "../videoSubcategories";

const subcategory = getVideoSubcategory("transmisiones-en-vivo");

if (!subcategory) {
  throw new Error("Video subcategory not found: transmisiones-en-vivo");
}

export default function TransmisionesEnVivoPage() {
  return <VideoSubcategoryPage subcategory={subcategory} />;
}
