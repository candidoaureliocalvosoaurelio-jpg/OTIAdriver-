// app/checkout/[plano]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

type PlanKey = "basico" | "pro" | "premium";

const plans: Record<
  PlanKey,
  {
    name: string;
    price: string;
    mpLink: string;
    headline: string;
    features: string[];
    // estilos por plano
    cardTint: string; // cor do card da direita
    button: string;   // cor do botão
    chip?: string;    // selo "RECOMENDADO" (só no PRO)
  }
> = {
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
    cardTint: "bg-[#122a66]",
    button: "bg-[#0F2B6C] hover:bg-[#0b2155]",
  },
  pro: {
    name: "PRO",
    price: "R$ 49,90 / mês",
    mpLink: "https://mpago.la/1KhUK3d",
    headline: "Ideal para Profissionais Exigentes.",
    // ✅ 6 FEATURES DO PRO como combinamos
    features: [
      "Fichas Técnicas COMPLETAS",
      "Suporte Técnico IA Ilimitado",
      "Análise de Imagem (5/mês)",
      "Checklists de Viagem",
      "Sistema de Pontuação de Performance Inteligente",
      "Alertas de Pneus Inteligentes e GPS Inteligente",
    ],
    cardTint: "bg-emerald-700",
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
    cardTint: "bg-[#0b2470]",
    button: "bg-[#0b2470] hover:bg-[#081b56]",
  },
};

export function generateStaticParams() {
  return [{ plano: "basico" }, { plano: "pro" }, { plano: "premium" }];
}

export async function generateMetadata({
  params,
}: {
  params: { plano: string };
}) {
  const key = params.plano?.toLowerCase() as PlanKey;
  const plan = plans[key];
  return {
    title: plan ? `Checkout ${plan.name} | OTIAdriver` : "Checkout | OTIAdriver",
    description:
      plan?.headline ??
      "Finalize sua assinatura da plataforma OTIAdriver com pagamento seguro via Mercado Pago.",
  };
}

export default function CheckoutPage({
  params,
}: {
  params: { plano: string };
}) {
  const key = params.plano?.toLowerCase() as PlanKey;
  const plan = plans[key];
  if (!plan) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* topo */}
      <div className="flex items-center justify-between">
        <Link
          href="/planos"
          className="text-sm text-[#0F2B6C] hover:underline"
        >
          ← Voltar aos planos
        </Link>
        <div className="text-sm text-slate-600">
          Checkout seguro via Mercado Pago
        </div>
      </div>

      {/* título central */}
      <div className="mt-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Finalizar Assinatura
        </h1>
        <p className="mt-1 text-slate-700">
          Você selecionou o plano{" "}
          <span className="font-semibold">{plan.name}</span>.
        </p>
      </div>

      {/* grid 2 colunas */}
      <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1.6fr_1fr]">
        {/* Coluna esquerda (resumo bonito) */}
        <article className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
          {/* selo recomendado pro PRO */}
          {plan.chip && (
            <div className="mb-2 inline-flex items-center rounded-full bg-amber-400/90 px-3 py-1 text-xs font-extrabold text-slate-900">
              {plan.chip}
            </div>
          )}

          <h2 className="text-2xl md:text-3xl font-extrabold">
            {plan.name}
          </h2>
          <div className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
            {plan.price}
          </div>
          <p className="mt-1 text-slate-600">{plan.headline}</p>

          <ul className="mt-5 space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
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
                <span className="text-[15px] text-slate-800">{f}</span>
              </li>
            ))}
          </ul>

          {/* aviso de recorrência */}
          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-[15px] text-slate-700 ring-1 ring-slate-200">
            <p className="font-bold">
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
            <a className="underline" href="#" onClick={(e) => e.preventDefault()}>
              Termos de Uso
            </a>{" "}
            e{" "}
            <a className="underline" href="#" onClick={(e) => e.preventDefault()}>
              Política de Privacidade
            </a>
            .
          </p>
        </article>

        {/* Coluna direita (cartão de pagamento) */}
        <aside className="rounded-2xl bg-white p-0 shadow-2xl ring-1 ring-black/5 overflow-hidden">
          <div className={`${plan.cardTint} px-6 py-5 text-white`}>
            <div className="text-sm opacity-90">Plano selecionado</div>
            <div className="mt-1 text-2xl font-extrabold">{plan.name}</div>
            <div className="mt-1 text-lg font-semibold opacity-95">
              {plan.price}
            </div>
          </div>

          <div className="p-6">
            <a
              href={plan.mpLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full rounded-xl px-5 py-3 text-center text-white font-extrabold shadow-lg transition ${plan.button}`}
            >
              Pagar com Mercado Pago
            </a>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Pagamento 100% seguro via Mercado Pago</li>
              <li>• Renovação automática a cada 30 dias</li>
              <li>• Cancelamento livre antes da próxima cobrança</li>
              <li>• Suporte ao assinante</li>
            </ul>

            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
              <div className="font-semibold">Dúvidas?</div>
              <div>
                Fale com a gente:{" "}
                <a
                  href="mailto:otiadriver@gmail.com"
                  className="text-[#0F2B6C] hover:underline font-medium"
                >
                  otiadriver@gmail.com
                </a>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

