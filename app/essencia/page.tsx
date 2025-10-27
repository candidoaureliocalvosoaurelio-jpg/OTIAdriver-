import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Essência — OTIAdriver" };

export default function EssenciaPage() {
  return (
    <main>
      <Header />
      <section className="px-6 py-12">
        <h1 className="text-3xl font-bold">Nossa Essência</h1>
        <p className="mt-3 text-slate-700">Texto da página Essência…</p>
      </section>
      <Footer />
    </main>
  );
}
