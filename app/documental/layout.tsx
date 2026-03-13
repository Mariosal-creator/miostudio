import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documental para Licitaciones ONG | Moi Studio",
  description:
    "Produccion audiovisual para ONG y cooperacion internacional en Ecuador. Portafolio para licitaciones con enfoque de genero y derechos humanos.",
  keywords: [
    "produccion audiovisual para ONG",
    "portafolio licitaciones Ecuador",
    "productora con enfoque de genero",
    "documental para cooperacion internacional",
    "Fundacion AVSI",
  ],
};

export default function DocumentalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
