import  Header from "@/components/Header";
import  Footer from "@/components/Footer";

export const metadata = { title: "Suporte ao Usuário — OTIAdriver" };

export default function Suporte() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Suporte ao Usuário</h1>
        <p className="mt-3 text-slate-600">Central de ajuda, FAQs e contato.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Central de Ajuda</h2>
            <p className="mt-2 text-slate-600">FAQs, guias e passo a passo.</p>
            <a href="#" className="mt-4 inline-block rounded-xl border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50">
              Acessar artigos
            </a>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Fale com a equipe</h2>
            <p className="mt-2 text-slate-600">Abra um chamado ou envie sua dúvida.</p>
            <a href="mailto:suporte@otiadriver.com.br" className="mt-4 inline-block rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
              Enviar e-mail
            </a>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
