import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OTIAdriver",
  description: "Conhecimento Inteligente para Motoristas",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Bem-vindo à OTIAdriver
        </h1>
        <p className="mt-3 text-slate-600">
          Conhecimento Inteligente para Motoristas 🚙🧠
        </p>
      </section>

      <Footer />
    </main>
  );
}
