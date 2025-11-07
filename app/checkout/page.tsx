// app/checkout/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

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
  headline: string;
  features: string[];
  // estilos do cartão da direita
  cardTint: string;  // fundo do cabeçalho
  button: string;    // cor do botão
  chip?: string;     // selo (usado no PRO)
};

const plans: Record<PlanKey, Plan> = {
  basico: {
    name: "Básico",
    price: "R$ 29,90 / mês",
    mpLink: "https://mpago.la/131Yx5T",
    headline: "Ideal para uso pessoal.",
    features: [
      "Fichas Técnicas Essenciais",
      "Acesso à Galeria",
      "Suporte Básico por Chat",
    ],
    cardTint: "bg-[#0F1E4D]",
    button: "bg-[#14265f] hover:bg-[#0d1a45]",
  },

  pro: {
    name: "PRO",
    price: "R$ 49,90 / mês",
    mpLink: "https://mpago.la/1KhUK3d",
    headline: "Ideal para Profissionais Exigentes.",
    features: [
      "Fichas Técnicas COMPLETAS",
      "Suporte Técnico IA Ilimitado",
      "Análise de Imagem (5/mês)",
      "Checklists de Viagem",
      "Sistema de Pontuação de Performance Inteligente",
      "Alertas de Pneus Inteligentes e GPS Inteligente",
    ],
    cardTint: "bg-emerald-600",
    button: "bg-emerald-600 hover:bg-emerald-700",
    chip: "RECOMENDADO",
  },

  premium: {
    name: "Premium",
    price: "R$ 99,90 / mês",
    mpLink: "https://mpago.la/1Xu1tTU",
    headline: "Ideal para Uso Profissional Ilimitado.",
    features: [
      "Todos os Recursos PRO",
      "Análise de Imagem ILIMITADA",
      "Treinamento IA Personalizado",
      "Acesso a Dados Históricos",
      "Suporte Prioritário",
    ],
    cardTint: "bg-[#102864]",
    button: "bg-[#102864] hover:bg-[#0b1c47]",
  },
};

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-slate-800">
      <span className="mt-[2px] inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500 shadow">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function CheckoutPage({
  searchParams,
}: {
  searchParams?: { plan?: string };
}) {
  const key = (searchParams?.plan as PlanKey) ?? "basico";
  const plan = plans[key];

  if (!plan) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16">
      {/* topo */}
      <div className="flex items-center justify-between text-sm text-slate-600">
        <Link href="/planos" className="inline-flex items-center gap-2 hover:underline">
          ← Voltar aos planos
        </Link>
        <span className="hidden md:block">Checkout seguro via Mercado Pago</span>
      </div>

      {/* marca + título */}
      <div className="mt-6 text-center">
        <h1 className="text-5xl font-extrabold leading-none tracking-tight">
          <span className="text-[#1F6FEB]">OTIA</span>
          <span className="text-[#40E0D0]">driver</span>
        </h1>
        <p className="mt-2 text-lg font-semibold text-slate-800">
          Conhecimento Inteligente para Motoristas
        </p>

        <h2 className="mt-8 text-3xl md:text-4xl font-extrabold tracking-tight">
          Finalizar Assinatura
        </h2>
        <p className="mt-2 text-slate-600">
          Você selecionou o plano{" "}
          <span className="font-semibold text-blue-700">
            {plan.name}
          </span>.
        </p>
      </div>

      {/* grid */}
      <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* coluna esquerda: resumo do plano */}
        <article className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            {plan.name}
          </h3>
          <p className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
            {plan.price}
          </p>
          <p className="mt-1 text-sm text-slate-600">{plan.headline}</p>

          <ul className="mt-6 space-y-4">
            {plan.features.map((f) => (
              <CheckItem key={f}>{f}</CheckItem>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
            <p className="font-semibold">
              Plano mensal com renovação automática a cada 30 dias.
            </p>
            <p className="mt-1">
              A cobrança será realizada no mesmo método de pagamento utilizado na
              primeira compra. Você pode cancelar a renovação a qualquer momento
              antes da próxima cobrança. Ao cancelar, o acesso permanece ativo até
              o fim do período já pago.
            </p>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Ao continuar, você concorda com nossos{" "}
            <a className="underline" href="#">Termos de Uso</a> e{" "}
            <a className="underline" href="#">Política de Privacidade</a>.
          </p>
        </article>

        {/* coluna direita: cartão de pagamento */}
        <aside className="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5">
          {/* cabeçalho do cartão */}
          <div className={`${plan.cardTint} relative rounded-t-2xl px-6 py-6 text-white`}>
            {/* selo (apenas PRO) */}
            {plan.chip && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-3 py-1 text-xs font-black tracking-wide text-slate-900 shadow">
                {plan.chip}
              </span>
            )}
            <div className="text-xl font-extrabold">{plan.name}</div>
            <div className="mt-1 text-lg font-bold opacity-95">{plan.price}</div>
          </div>

          {/* corpo do cartão */}
          <div className="px-6 py-6">
            <a
              href={plan.mpLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`mb-5 flex w-full items-center justify-center rounded-xl px-5 py-3 text-base font-extrabold text-white shadow-lg transition ${plan.button}`}
            >
              Pagar com Mercado Pago
            </a>

            <ul className="space-y-3 text-sm text-slate-700">
              <li>• Pagamento 100% seguro via Mercado Pago</li>
              <li>• Renovação automática a cada 30 dias</li>
              <li>• Cancelamento livre antes da próxima cobrança</li>
              <li>• Suporte ao assinante</li>
            </ul>

            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-xs text-slate-600">
              Dúvidas? Fale com a gente:{" "}
              <a className="font-semibold text-blue-700 hover:underline" href="mailto:otiadriver@gmail.com">
                otiadriver@gmail.com
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
