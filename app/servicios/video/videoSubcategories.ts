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
  showHeroImage?: boolean;
  cardAspectRatio?: string;
  videosAspectRatio?: string;
  videos?: {
    title: string;
    embedUrl: string;
  }[];
};

export const videoSubcategories: VideoSubcategory[] = [
  {
    slug: "contenido-vertical-redes-sociales",
    href: "/servicios/video/contenido-vertical-redes-sociales",
    title: "Contenido Vertical para Redes Sociales",
    description: "Piezas pensadas para reels, shorts y TikTok con ritmo, claridad de mensaje y optimizacion mobile-first.",
    image: "/MINIAVERT.jpg",
    eyebrow: "Subcategoria de video",
    cardAspectRatio: "aspect-[16/10]",
    videosAspectRatio: "aspect-[9/16]",
    intro:
      "Creamos contenido vertical diseñado para captar atencion rapido, comunicar valor de marca y mejorar el rendimiento en redes sociales.",
    highlights: [
      "Conceptos y grabacion orientados a retencion en primeros segundos",
      "Edicion dinamica con subtitulos, cortes agiles y llamadas a la accion",
      "Entregas listas para Instagram, TikTok, YouTube Shorts y pauta digital",
    ],
    videos: [
      {
        title: "Video vertical destacado 1",
        embedUrl: "https://www.youtube.com/embed/Bbqb6e3JW2E?rel=0",
      },
      {
        title: "Video vertical destacado 2",
        embedUrl: "https://www.youtube.com/embed/AMRhP3KaOro?rel=0",
      },
      {
        title: "Video vertical destacado 3",
        embedUrl: "https://www.youtube.com/embed/tvk1WS6motk?rel=0",
      },
    ],
  },
  {
    slug: "podcast",
    href: "/servicios/video/podcast",
    title: "Produccion de Podcast",
    description: "Produccion audiovisual y sonora para podcasts de marca, entrevistas y formatos conversacionales de alta calidad.",
    image: "https://i.ytimg.com/vi/02qj7UNp9yk/hqdefault.jpg",
    eyebrow: "Subcategoria de video",
    intro:
      "Desarrollamos podcasts visuales y grabaciones conversacionales con una puesta tecnica limpia, identidad de marca y flujo de produccion consistente.",
    showHeroImage: false,
    highlights: [
      "Montaje multicamara y captura de audio con criterio editorial",
      "Diseno visual y piezas derivadas para redes sociales y difusion",
      "Edicion por episodios con entregas optimizadas para plataformas y clips",
    ],
    videos: [
      {
        title: "Podcast destacado",
        embedUrl: "https://www.youtube.com/embed/02qj7UNp9yk?start=7&rel=0",
      },
    ],
  },
  {
    slug: "contenido-publicitario",
    href: "/servicios/video/contenido-publicitario",
    title: "Contenido Publicitario",
    description: "Spots y piezas comerciales para lanzamientos, campañas y activaciones con narrativa orientada a conversion.",
    image: "https://i.ytimg.com/vi/RD31I7tbytE/hqdefault.jpg",
    eyebrow: "Subcategoria de video",
    intro:
      "Producimos contenido publicitario con enfoque estrategico para presentar productos, servicios y propuestas de valor de forma clara y memorable.",
    showHeroImage: false,
    highlights: [
      "Conceptualizacion creativa alineada a campaña, marca y audiencia",
      "Rodaje y direccion visual para piezas de alto impacto comercial",
      "Versiones adaptadas para redes, pauta, landing pages y presentaciones",
    ],
    videos: [
      {
        title: "Contenido publicitario destacado",
        embedUrl: "https://www.youtube.com/embed/RD31I7tbytE?rel=0",
      },
    ],
  },
  {
    slug: "videos-de-eventos",
    href: "/servicios/video/videos-de-eventos",
    title: "Videos de Eventos",
    description: "Cobertura audiovisual de congresos, lanzamientos y encuentros sociales o corporativos con edicion narrativa.",
    image: "/MINIAEV.jpg",
    eyebrow: "Subcategoria de video",
    intro:
      "Registramos eventos con criterio documental y comercial para convertir cada momento clave en una pieza utilizable para memoria de marca y comunicacion.",
    highlights: [
      "Cobertura de momentos clave, entrevistas y ambiente general del evento",
      "Edicion resumen, highlights y piezas cortas para difusion inmediata",
      "Entrega en formatos listos para redes, prensa y uso institucional",
    ],
    videos: [
      {
        title: "Video de evento destacado",
        embedUrl: "https://www.youtube.com/embed/baFwWVLHpXM?rel=0",
      },
    ],
  },
  {
    slug: "transmisiones-en-vivo",
    href: "/servicios/video/transmisiones-en-vivo",
    title: "Transmisiones en Vivo",
    description: "Produccion de streaming para eventos, conferencias y lanzamientos con operacion tecnica estable y profesional.",
    image: "/MINIALIVE.jpg",
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
