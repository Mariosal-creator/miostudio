import VideoSubcategoryPage from "../VideoSubcategoryPage";
import { getVideoSubcategory } from "../videoSubcategories";

const subcategory = getVideoSubcategory("videos-de-eventos");

if (!subcategory) {
  throw new Error("Video subcategory not found: videos-de-eventos");
}

export default function VideosDeEventosPage() {
  return <VideoSubcategoryPage subcategory={subcategory} />;
}
