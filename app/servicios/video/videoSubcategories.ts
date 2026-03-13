export const videoHighlights = [
  "Guion, produccion y postproduccion adaptados a objetivos de marca",
  "Cobertura con enfoque multiplataforma para formatos horizontales y verticales",
  "Equipo tecnico y direccion creativa para piezas comerciales y contenido continuo",
];

export type VideoSubcategory = {
  slug: string;
  href: string;
  title: string;
  description: string;
  image: string;
  eyebrow: string;
  intro: string;
  highlights: [string, string, string];
};

export const videoSubcategories: VideoSubcategory[] = [
  {
    slug: "contenido-vertical-redes-sociales",
    href: "/servicios/video/contenido-vertical-redes-sociales",
    title: "Contenido Vertical para Redes Sociales",
    description: "Piezas pensadas para reels, shorts y TikTok con ritmo, claridad de mensaje y optimizacion mobile-first.",
    image: "/categoriaserv/videos.jpg",
    eyebrow: "Subcategoria de video",
    intro:
      "Creamos contenido vertical diseñado para captar atencion rapido, comunicar valor de marca y mejorar el rendimiento en redes sociales.",
    highlights: [
      "Conceptos y grabacion orientados a retencion en primeros segundos",
      "Edicion dinamica con subtitulos, cortes agiles y llamadas a la accion",
      "Entregas listas para Instagram, TikTok, YouTube Shorts y pauta digital",
    ],
  },
  {
    slug: "podcast",
    href: "/servicios/video/podcast",
    title: "Produccion de Podcast",
    description: "Produccion audiovisual y sonora para podcasts de marca, entrevistas y formatos conversacionales de alta calidad.",
    image: "/categoriaserv/videos.jpg",
    eyebrow: "Subcategoria de video",
    intro:
      "Desarrollamos podcasts visuales y grabaciones conversacionales con una puesta tecnica limpia, identidad de marca y flujo de produccion consistente.",
    highlights: [
      "Montaje multicamara y captura de audio con criterio editorial",
      "Diseno visual y piezas derivadas para redes sociales y difusion",
      "Edicion por episodios con entregas optimizadas para plataformas y clips",
    ],
  },
  {
    slug: "contenido-publicitario",
    href: "/servicios/video/contenido-publicitario",
    title: "Contenido Publicitario",
    description: "Spots y piezas comerciales para lanzamientos, campañas y activaciones con narrativa orientada a conversion.",
    image: "/categoriaserv/videos.jpg",
    eyebrow: "Subcategoria de video",
    intro:
      "Producimos contenido publicitario con enfoque estrategico para presentar productos, servicios y propuestas de valor de forma clara y memorable.",
    highlights: [
      "Conceptualizacion creativa alineada a campaña, marca y audiencia",
      "Rodaje y direccion visual para piezas de alto impacto comercial",
      "Versiones adaptadas para redes, pauta, landing pages y presentaciones",
    ],
  },
  {
    slug: "videos-de-eventos",
    href: "/servicios/video/videos-de-eventos",
    title: "Videos de Eventos",
    description: "Cobertura audiovisual de congresos, lanzamientos y encuentros sociales o corporativos con edicion narrativa.",
    image: "/categoriaserv/videos.jpg",
    eyebrow: "Subcategoria de video",
    intro:
      "Registramos eventos con criterio documental y comercial para convertir cada momento clave en una pieza utilizable para memoria de marca y comunicacion.",
    highlights: [
      "Cobertura de momentos clave, entrevistas y ambiente general del evento",
      "Edicion resumen, highlights y piezas cortas para difusion inmediata",
      "Entrega en formatos listos para redes, prensa y uso institucional",
    ],
  },
  {
    slug: "transmisiones-en-vivo",
    href: "/servicios/video/transmisiones-en-vivo",
    title: "Transmisiones en Vivo",
    description: "Produccion de streaming para eventos, conferencias y lanzamientos con operacion tecnica estable y profesional.",
    image: "/categoriaserv/stream-live.jpg",
    eyebrow: "Subcategoria de video",
    intro:
      "Gestionamos transmisiones en vivo con planificacion tecnica, realizacion en tiempo real y salida adaptada a la plataforma que use tu audiencia.",
    highlights: [
      "Operacion multicamara, mezcla en vivo y control de audio",
      "Integracion de graficos, overlays y recursos visuales de marca",
      "Streaming optimizado para YouTube, Facebook, Instagram y plataformas privadas",
    ],
  },
];

export const getVideoSubcategory = (slug: string) =>
  videoSubcategories.find((subcategory) => subcategory.slug === slug);
