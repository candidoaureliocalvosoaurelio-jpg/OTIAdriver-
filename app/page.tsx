import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "OTIAdriver — Conhecimento Inteligente Avançado",
  description:
    "IA, educação e inovação digital para motoristas profissionais — OTIAdriver Global.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <Header />

      {/* HERO principal */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
          Conhecimento Inteligente Avançado
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          A OTIAdriver impulsiona sua jornada com tecnologia e aprendizado prático —
          conteúdos curtos, pesquisa por voz e visão, além de uma biblioteca sempre atualizada.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/planos"
            className="rounded-xl bg-emerald-600 text-white font-semibold px-8 py-4 hover:bg-emerald-700 transition"
          >
            Ver Planos
          </a>
          <a
            href="/essencia"
            className="rounded-xl border border-emerald-600 text-emerald-700 font-semibold px-8 py-4 hover:bg-emerald-50 transition"
          >
            Missão, Visão e Valores
          </a>
        </div>
      </section>

      {/* Imagem ilustrativa opcional */}
      <section className="mx-auto max-w-5xl px-6 pb-16 text-center">
        <Image
          src="/assets/hero-illustration.png"
          alt="Dashboard OTIAdriver"
          width={900}
          height={500}
          className="mx-auto rounded-2xl shadow-md"
        />
      </section>

      <Footer />
    </main>
  );
}
