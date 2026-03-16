import VideoSubcategoryPage from "../VideoSubcategoryPage";
import { getVideoSubcategory } from "../videoSubcategories";

export default function VideosDeEventosPage() {
  const subcategory = getVideoSubcategory("videos-de-eventos");

  if (!subcategory) {
    throw new Error("Video subcategory not found: videos-de-eventos");
  }

  return <VideoSubcategoryPage subcategory={subcategory} />;
}
