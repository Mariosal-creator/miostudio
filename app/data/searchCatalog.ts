export type SearchItem = {
  name: string;
  href: string;
  image: string;
  keywords?: string[];
};

export const searchItems: SearchItem[] = [
  { name: "Inicio", href: "/", image: "/logohead.png", keywords: ["home", "principal"] },
  { name: "Portfolio", href: "/portfolio", image: "/categoriaserv/videos.jpg", keywords: ["trabajos", "proyectos", "muestrario"] },
  { name: "Videos", href: "/portfolio/videos", image: "/categoriaserv/videos.jpg", keywords: ["video", "videos", "audiovisual", "horizontal", "vertical"] },
  { name: "Cursos en Video", href: "/portfolio/videos?video=-rpHP2Q6Tow", image: "/categoriaserv/videos.jpg", keywords: ["curso", "capacitacion", "educativo"] },
  { name: "Videos de Bodas", href: "/portfolio/videos?video=L1gUbHzWxG8", image: "/categoriaserv/videos.jpg", keywords: ["boda", "wedding", "evento"] },
  { name: "Reels Publicitarios", href: "/portfolio/videos?video=fJk7KtLVDGE", image: "/categoriaserv/videos.jpg", keywords: ["reel", "publicidad", "marketing"] },
  { name: "Fotografía", href: "/portfolio/fotografia", image: "/categoriaserv/fotografia.jpg", keywords: ["foto", "fotografia", "imagen"] },
  { name: "Fotografía Comercial", href: "/portfolio/fotografia", image: "/categoriaserv/fotografia.jpg", keywords: ["comercial", "fondo", "iluminacion", "ecommerce"] },
  { name: "Fotografía Publicitaria", href: "/portfolio/fotografia", image: "/categoriaserv/fotografia.jpg", keywords: ["publicidad", "branding", "campana"] },
  { name: "Streaming en Vivo", href: "/portfolio/stream-live", image: "/categoriaserv/stream-live.jpg", keywords: ["stream", "streaming", "en vivo", "directo"] },
  { name: "Servicios", href: "/servicios", image: "/logohead.png", keywords: ["servicios", "especialidades", "areas"] },
  { name: "Videos Corporativos", href: "/servicios/videos-corporativos", image: "/categoriaserv/videos.jpg", keywords: ["corporativo", "empresa", "institucional"] },
  { name: "Dirección de Fotografía", href: "/servicios/direccion-de-fotografia", image: "/categoriaserv/fotografia.jpg", keywords: ["direccion", "fotografia", "df"] },
  { name: "Edición y Postproducción", href: "/servicios/edicion-postproduccion", image: "/categoriaserv/videos.jpg", keywords: ["edicion", "post", "color", "audio"] },
  { name: "Motion Graphics", href: "/servicios/motion-graphics", image: "/categoriaserv/videos.jpg", keywords: ["motion", "graphics", "animacion"] },
  { name: "Documentales", href: "/servicios/documentales", image: "/categoriaserv/videos.jpg", keywords: ["documental", "narrativa", "historia"] },
  { name: "Publicidad y Comerciales", href: "/servicios/publicidad-comerciales", image: "/categoriaserv/videos.jpg", keywords: ["publicidad", "comercial", "spot"] },
  { name: "Transmisión en Vivo", href: "/servicios/transmision-en-vivo", image: "/categoriaserv/stream-live.jpg", keywords: ["transmision", "stream", "live"] },
  { name: "Consultoría Audiovisual", href: "/servicios/consultoria-audiovisual", image: "/logohead.png", keywords: ["consultoria", "asesoria", "estrategia"] },
  { name: "Nuestro Equipo", href: "/nuestro-equipo", image: "/equipo/mario-salazar.jpg", keywords: ["equipo", "staff", "nosotros"] },
  { name: "Contacto", href: "/contacto", image: "/logohead.png", keywords: ["whatsapp", "contactar"] },
  { name: "Horarios", href: "/horarios", image: "/logohead.png", keywords: ["atencion", "hora"] },
];
