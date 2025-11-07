// app/checkout/page.tsx
import Link from "next/link";

// Server Component – lê ?plan= basico | pro | premium
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export const metadata = {
  title: "Checkout | OTIAdriver",
  description: "Finalize sua assinatura mensal recorrente da OTIAdriver.",
};

type PlanKey = "basico" | "pro" | "premium";

type Plan = {
  name: string;
  price: string;
  mpLink: string;
  // headline curto sob o preço
  tagline: string;
  // recursos mostrados no resumo (esquerda)
  featuresLeft: string[];
  // itens informativos do painel de pagamento (direita)
  payNotes: string[];
  // cores do cabeçalho do aside (direita)
  headerColor: string; // ex: "bg-blue-900" | "bg-emerald-600"
  // cor do botão do aside (direita)
  buttonColor: string; // ex: "bg-blue-900" | "bg-emerald-600"
  // selo do PRO
  badge?: "RECOMENDADO";
};

// 6 itens do PRO (como combinamos)
const proSix: string[] = [
  "Fichas Técnicas COMPLETAS",
  "Suporte Técnico IA Ilimitado",
  "Análise de Imagem (5/mês)",
  "Checklists de Viagem",
  "Sistema de Pontuação de Performance Inteligente",
  "Alertas de Pneus Inteligentes e GPS Inteligente",
];

const plans: Record<PlanKey, Plan> = {
  basico: {
    name: "Básico",
    price: "R$ 29,90 / mês",
    mpLink: "https://mpago.la/131Yx5T",
    tagline: "Ideal para uso pessoal.",
    featuresLeft: [
      "Fichas Técnicas Essenciais",
      "Acesso à Galeria",
      "Suporte Básico por Chat",
    ],
    payNotes: [
      "Pagamento 100% seguro via Mercado Pago",
      "Renovação automática a cada 30 dias",
      "Cancelamento livre antes da próxima cobrança",
      "Suporte ao assinante",
    ],
    headerColor: "bg-blue-900",
    buttonColor: "bg-blue-900",
  },

  pro: {
    name: "PRO",
    price: "R$ 49,90 / mês",
    mpLink: "https://mpago.la/1KhUK3d",
    badge: "RECOMENDADO",
    tagline: "Ideal para Profissionais Exigentes.",
    featuresLeft: proSix,
    payNotes: [
      "Pagamento 100% seguro via Mercado Pago",
      "Renovação automática a cada 30 dias",
      "Cancelamento livre antes da próxima cobrança",
      "Suporte ao assinante",
    ],
    headerColor: "bg-emerald-600",
    buttonColor: "bg-emerald-600",
  },

  premium: {
    name: "Premium",
    price: "R$ 99,90 / mês",
    mpLink: "https://mpago.la/1Xu1tTU",
    tagline: "Ideal para Uso Profissional Ilimitado.",
    featuresLeft: [
      "Todos os Recursos PRO",
      "Análise de Imagem ILIMITADA",
      "Treinamento IA Personalizado",
      "Acesso a Dados Históricos",
      "Suporte Prioritário",
    ],
    payNotes: [
      "Pagamento 100% seguro via Mercado Pago",
      "Renovação automática a cada 30 dias",
      "Cancelamento livre antes da próxima cobrança",
      "Suporte ao assinante",
    ],
    headerColor: "bg-blue-900",
    buttonColor: "bg-blue-900",
  },
};

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: PlanKey };
}) {
  const key: PlanKey = (searchParams?.plan as PlanKey) ?? "basico";
  const plan = plans[key] ?? plans.basico;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* Top bar */}
      <div className="flex items-center justify-between text-sm text-slate-600">
        <Link href="/planos" className="hover:underline">
          ← Voltar aos planos
        </Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      {/* Marca + título */}
      <div className="mt-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Finalizar Assinatura
        </h1>
        <p className="mt-2 text-slate-700">
          Você selecionou o plano{" "}
          <strong className="text-blue-800">{plan.name}</strong>.
        </p>
      </div>

      {/* GRID: ESQUERDA (resumo estilizado) + DIREITA (pagamento) */}
      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* ESQUERDA — agora com o mesmo acabamento do painel da direita */}
        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
          {/* Cabeçalho (título + preço) */}
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-extrabold">{plan.name}</h2>
            <p className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
              {plan.price}
            </p>
            <p className="mt-1 text-sm text-slate-600">{plan.tagline}</p>
          </div>

          {/* Lista com check (idêntica visualmente) */}
          <ul className="space-y-3">
            {plan.featuresLeft.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500 shadow">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-slate-800">{f}</span>
              </li>
            ))}
          </ul>

          {/* Aviso de recorrência */}
          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 shadow-sm">
            <p className="font-semibold text-slate-900">
              Plano mensal com renovação automática a cada 30 dias.
            </p>
            <p className="mt-1">
              A cobrança será realizada no mesmo método de pagamento utilizado
              na primeira compra. Você pode cancelar a renovação a qualquer
              momento antes da próxima cobrança. Ao cancelar, o acesso permanece
              ativo até o fim do período já pago.
            </p>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Ao continuar, você concorda com nossos{" "}
            <a className="underline hover:opacity-80" href="#">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a className="underline hover:opacity-80" href="#">
              Política de Privacidade
            </a>
            .
          </p>
        </div>

        {/* DIREITA — painel de pagamento (como antes) */}
        <aside className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          {/* Cabeçalho colorido */}
          <div
            className={`${plan.headerColor} rounded-t-2xl px-6 py-5 text-white`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm opacity-90">Plano selecionado</div>
                <div className="mt-1 text-2xl font-extrabold">{plan.name}</div>
                <div className="mt-1 text-lg font-semibold opacity-95">
                  {plan.price}
                </div>
              </div>

              {plan.badge && (
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black tracking-wide text-slate-900 shadow">
                  {plan.badge}
                </span>
              )}
            </div>
          </div>

          {/* Corpo */}
          <div className="px-6 py-5">
            <a
              href={plan.mpLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full rounded-xl ${plan.buttonColor} px-5 py-3 text-center text-base font-extrabold text-white shadow-lg hover:translate-y-[1px] hover:opacity-95 active:translate-y-[2px] transition`}
            >
              Pagar com Mercado Pago
            </a>

            <ul className="mt-5 space-y-2 text-sm text-slate-800">
              {plan.payNotes.map((n) => (
                <li key={n} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-400"></span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-xs text-slate-600">
              Dúvidas? Fale com a gente:{" "}
              <a
                href="mailto:otiadriver@gmail.com"
                className="font-semibold text-blue-700 underline"
              >
                otiadriver@gmail.com
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
