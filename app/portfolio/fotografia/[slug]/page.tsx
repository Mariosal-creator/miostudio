import Link from "next/link";
import { notFound } from "next/navigation";

import ImageLightboxGallery from "@/app/components/ImageLightboxGallery";
import { trabajosFotografia } from "../trabajos";

type PortfolioFotografiaDetallePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PortfolioFotografiaDetallePage({
  params,
}: PortfolioFotografiaDetallePageProps) {
  const { slug } = await params;
  const trabajo = trabajosFotografia.find(
    (item) => item.slug === slug || item.aliases?.includes(slug)
  );

  if (!trabajo) {
    notFound();
  }

  const imagenes = trabajo.imagenes ?? [trabajo.miniatura ?? "/categoriaserv/fotografia.jpg"];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">{trabajo.titulo}</h1>
        <p className="mt-4 text-base text-gray-300 sm:text-lg">{trabajo.detalle}</p>

        <ImageLightboxGallery images={imagenes} title={trabajo.titulo} />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/portfolio/fotografia"
            className="inline-flex rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Volver a fotografía
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Volver a categorías
          </Link>
        </div>
      </div>
    </section>
  );
}
