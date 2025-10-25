import Image from "next/image";
import Footer from "@/components/Footer";
import { PRICING } from "@/data/pricing";

type Props = {
  params: { plan: "free" | "premium" };
  searchParams: { period?: "monthly" | "annual" };
};

export const metadata = { title: "Pagamento — OTIAdriver" };

export default function CheckoutPage({ params, searchParams }: Props) {
  const planKey = params.plan as keyof typeof PRICING;
  const period = searchParams.period === "annual" ? "annual" : "monthly";
  const plan = PRICING[planKey];

const priceLabel =
  period === "monthly"
    ? `${plan.monthly} / mês`
    : `${plan.annual} / ano (-10%)`;

  const payLink = period === "monthly" ? plan.mpMonthly : plan.mpAnnual;
  const periodLabel = period === "monthly" ? "Mensal" : "Anual (-10%)";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <Header />
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Pagamento Seguro
        </h1>
        <p className="mt-3 text-slate-600">
          Plano <strong>{plan.name}</strong> — {periodLabel} • {priceLabel}
        </p>
      </section>

      {/* Detalhes + ação */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">O que está incluído</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-slate-700">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={payLink}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              <Image
                src="/assets/mercadopago-logo.png"
                alt="Mercado Pago"
                width={22}
                height={22}
                className="mr-2"
              />
              Ir para pagamento
            </a>
            <a
              href="/planos"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Voltar aos planos
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500 text-center">
            Pagamento seguro via <span className="font-semibold">Mercado Pago</span> — ambiente criptografado.
          </p>

          <p className="mt-3 text-sm text-slate-500 text-center">
            Cobrança mensal, pode cancelar quando quiser.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
