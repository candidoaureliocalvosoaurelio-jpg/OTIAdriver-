import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PRICING } from "../../data/pricing";

export const metadata = { title: "Planos — OTIAdriver" };

export default function Planos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <Header />

      <section className="text-center py-16">
        <h1 className="text-4xl font-extrabold text-slate-900">Escolha seu plano</h1>
        <p className="mt-3 text-slate-600">
          Cobrança mensal, cancele quando quiser • Anual com 10% de economia
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 px-6 pb-12">
        {Object.values(PRICING).map((plan) => (
          <article key={plan.name} className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
            <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">{plan.name}</h2>
            <div className="mb-4 text-center">
              <div className="text-3xl font-extrabold text-slate-900">{plan.monthly}</div>
              <div className="text-slate-500">/mês</div>
              <div className="text-xl font-bold text-slate-900 mt-2">{plan.annual}</div>
              <div className="text-slate-500">/ano (-10%)</div>
            </div>
            <ul className="mt-4 space-y-2 text-slate-700">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2">
              <a className="rounded-xl bg-emerald-600 text-white font-semibold py-3 text-center hover:bg-emerald-700" href={plan.mpMonthly}>
                Assinar Mensal
              </a>
              <a className="rounded-xl border border-slate-300 font-semibold py-3 text-center hover:bg-slate-50" href={plan.mpAnnual}>
                Assinar Anual (-10%)
              </a>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
