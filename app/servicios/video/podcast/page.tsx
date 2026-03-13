import VideoSubcategoryPage from "../VideoSubcategoryPage";
import { getVideoSubcategory } from "../videoSubcategories";

const subcategory = getVideoSubcategory("podcast");

if (!subcategory) {
  throw new Error("Video subcategory not found: podcast");
}

export default function PodcastPage() {
  return <VideoSubcategoryPage subcategory={subcategory} />;
}
