import { plans } from "@/data/pricing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

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
        {Object.values( plans ).map((plan) => (
          <article key={plan.name} className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
            <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">{plan.name}</h2>

            <div className="mb-4 text-center">
              <div className="text-3xl font-extrabold text-slate-900">{plan.monthly}</div>
              <div className="text-slate-500">/mês</div>
              <div className="text-xl font-bold text-slate-900 mt-2">{plan.annual}</div>
              <div className="text-slate-500">/ano (–10%)</div>
            </div>

            <ul className="space-y-2 text-slate-700 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> {f}
                </li>
              ))}
            </ul>

            {/* Botões Mercado Pago */}
            <div className="flex flex-col gap-2">
              <a
                href={plan.mpMonthly}
                className="inline-flex justify-center items-center rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3"
              >
                Ir para pagamento mensal
                <Image src="/assets/mercadopago-logo.png" alt="Mercado Pago" width={22} height={22} className="ml-2" />
              </a>

              <a
                href={plan.mpAnnual}
                className="inline-flex justify-center items-center rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold py-3"
              >
                Ir para pagamento anual (–10%)
                <Image src="/assets/mercadopago-logo.png" alt="Mercado Pago" width={22} height={22} className="ml-2" />
              </a>
            </div>

            {/* Selo de segurança */}
            <p className="mt-4 text-xs text-slate-500 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-emerald-600">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M16.5 10.5V7.5a4.5 4.5 0 10-9 0v3m-1.5 0h12m-12 0a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5m-12 0h12" />
              </svg>
              Pagamento seguro via <span className="font-semibold">Mercado Pago</span> — ambiente criptografado.
            </p>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
