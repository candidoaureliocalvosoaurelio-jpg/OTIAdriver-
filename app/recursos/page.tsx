import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Recursos — OTIAdriver" };

export default function Recursos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Recursos</h1>
        <p className="mt-3 text-slate-600">Documentação, integrações e novidades.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Documentação</h2>
            <p className="mt-2 text-slate-600">Guias técnicos e manuais.</p>
            <a href="#" className="mt-4 inline-block rounded-xl border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50">
              Ver docs
            </a>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Integrações</h2>
            <p className="mt-2 text-slate-600">Conecte com seus sistemas.</p>
            <a href="#" className="mt-4 inline-block rounded-xl border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50">
              Ver integrações
            </a>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Novidades</h2>
            <p className="mt-2 text-slate-600">Atualizações e roadmap.</p>
            <a href="#" className="mt-4 inline-block rounded-xl border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50">
              Ver novidades
            </a>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
