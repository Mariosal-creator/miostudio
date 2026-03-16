import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalPreloader from "./components/GlobalPreloader";
import WhatsAppQuoteButton from "./components/WhatsAppQuoteButton";
import InteractionGuard from "./components/InteractionGuard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moi Studio - Producción Audiovisual Profesional",
  description: "Producción audiovisual, filmmaking y contenido visual de clase mundial. Transformamos tus ideas en historias impactantes.",
  icons: {
    icon: "/favicon.ico?v=20260224",
    shortcut: "/favicon.ico?v=20260224",
    apple: "/favicon.ico?v=20260224",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <InteractionGuard />
        <GlobalPreloader />
        {children}
        <WhatsAppQuoteButton />
      </body>
    </html>
  );
}
