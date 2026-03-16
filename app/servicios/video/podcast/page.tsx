import VideoSubcategoryPage from "../VideoSubcategoryPage";
import { getVideoSubcategory } from "../videoSubcategories";

export default function PodcastPage() {
  const subcategory = getVideoSubcategory("podcast");

  if (!subcategory) {
    throw new Error("Video subcategory not found: podcast");
  }

  return <VideoSubcategoryPage subcategory={subcategory} />;
}
