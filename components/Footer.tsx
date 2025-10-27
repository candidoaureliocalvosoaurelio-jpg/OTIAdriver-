// app/essencia/page.tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Essência — OTIAdriver" };

export default function EssenciaPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Essência OTIAdriver
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Conhecimento inteligente para motoristas, com inovação, segurança e eficiência.
        </p>
      </main>
      <Footer />
    </>
  );
}
