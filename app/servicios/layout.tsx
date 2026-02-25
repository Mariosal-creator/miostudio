import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
