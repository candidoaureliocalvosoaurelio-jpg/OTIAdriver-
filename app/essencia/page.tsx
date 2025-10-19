import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Missão, Visão e Valores — OTIAdriver" };

export default function Essencia() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <Header />

      <section className="text-center py-16">
        <h1 className="text-4xl font-extrabold text-slate-900">Missão, Visão e Valores</h1>
        <p className="mt-3 text-slate-600">
          IA, inovação e conhecimento para uma condução mais inteligente e sustentável.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-3 px-6 pb-20 text-center">
        <div>
          <div className="text-5xl">🚀</div>
          <h2 className="mt-4 text-xl font-bold">Missão</h2>
          <p className="mt-2 text-slate-600">
            Capacitar motoristas com IA, promovendo segurança, eficiência e inovação no transporte.
          </p>
        </div>

        <div>
          <div className="text-5xl">🌍</div>
          <h2 className="mt-4 text-xl font-bold">Visão</h2>
          <p className="mt-2 text-slate-600">
            Ser referência global em formação e tecnologia para motoristas, impulsionando a mobilidade inteligente.
          </p>
        </div>

        <div>
          <div className="text-5xl">💡</div>
          <h2 className="mt-4 text-xl font-bold">Valores</h2>
          <p className="mt-2 text-slate-600">
            Inovação, responsabilidade e excelência, impulsionando o futuro da mobilidade.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
