// app/checkout/page.tsx
import Link from "next/link";

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
  // estilos do aside direito
  cardTint: string; // fundo do cabeçalho
  button: string;   // cor do botão
  chip?: string;    // selo "RECOMENDADO" (no PRO)
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
    cardTint: "bg-slate-800",
    button: "bg-slate-800 hover:bg-slate-900",
  },

  pro: {
    name: "PRO",
    price: "R$ 49,90 / mês",
    mpLink: "https://mpago.la/1KhUK3d",
    headline: "Ideal para Profissionais Exigentes.",
    features: [
      "Fichas Técnicas COMPLETAS",
      "Suporte Técnico IA Ilimitado",
      "Suporte Técnico IA Ilimitado", // mantido conforme seu mock
      "Análise de Imagem (5/mês)",
      "Checklists de Viagem",
      "Sistema de Pontuação de Performance Inteligente",
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
      "Análise de Imagem ILIMITADA", // mantido conforme seu mock
      "Treinamento IA Personalizado",
      "Acesso a Dados Históricos",
      "Suporte Prioritário",
    ],
    cardTint: "bg-blue-900",
    button: "bg-blue-900 hover:bg-blue-800",
  },
};

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500 shadow">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span className="text-slate-800">{children}</span>
    </li>
  );
}

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const planKey = (searchParams?.plan as PlanKey) ?? "basico";
  const plan = plans[planKey] ?? plans.basico;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-center justify-between">
        <Link href="/planos" className="text-sm text-blue-700 hover:underline">← Voltar aos planos</Link>
        <span className="text-sm text-slate-600">Checkout seguro via Mercado Pago</span>
      </div>

      {/* título e marca */}
      <div className="mt-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-[#1F6FEB]">OTIA</span>
          <span className="text-[#40E0D0]">driver</span>
        </h1>
        <p className="mt-2 text-lg font-semibold">Conhecimento Inteligente para Motoristas</p>
      </div>

      <h2 className="mt-8 text-center text-3xl md:text-4xl font-extrabold tracking-tight">
        Finalizar Assinatura
      </h2>
      <p className="mt-2 text-center text-slate-600">
        Você selecionou o plano <span className="font-semibold">{plan.name}</span>.
      </p>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Resumo do plano (esquerda / ocupa 2 colunas no desktop) */}
        <article className="md:col-span-2 rounded-2xl bg-white ring-1 ring-black/5 shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-extrabold">{plan.name}</h3>
            <p className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
              {plan.price}
            </p>
            <p className="mt-2 text-slate-600">{plan.headline}</p>

            <ul className="mt-6 space-y-4">
              {plan.features.map((f) => (
                <CheckItem key={f}>{f}</CheckItem>
              ))}
            </ul>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold">
                Plano mensal com renovação automática a cada 30 dias.
              </p>
              <p className="mt-1">
                A cobrança será realizada no mesmo método de pagamento utilizado na primeira compra.
                Você pode cancelar a renovação a qualquer momento antes da próxima cobrança. Ao cancelar, o acesso permanece ativo até o fim do período já pago.
              </p>
              <p className="mt-2">
                Ao continuar, você concorda com nossos{" "}
                <a className="text-blue-700 underline" href="#">Termos de Uso</a> e{" "}
                <a className="text-blue-700 underline" href="#">Política de Privacidade</a>.
              </p>
            </div>
          </div>
        </article>

        {/* Aside de pagamento */}
        <aside className="rounded-2xl ring-1 ring-black/5 shadow-xl overflow-hidden">
          <div className={`${plan.cardTint} px-6 py-5 text-white relative`}>
            {plan.chip && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 text-black px-3 py-1 text-xs font-black shadow">
                {plan.chip}
              </span>
            )}
            <h4 className="text-xl font-extrabold">Plano selecionado</h4>
            <div className="mt-1 text-2xl font-extrabold">{plan.name}</div>
            <div className="mt-1 opacity-90">{plan.price}</div>
          </div>

          <div className="px-6 py-5 bg-white">
            <a
              href={plan.mpLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center text-white font-extrabold rounded-xl px-4 py-3 shadow-md ${plan.button}`}
            >
              Pagar com Mercado Pago
            </a>

            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li>• Pagamento 100% seguro via Mercado Pago</li>
              <li>• Renovação automática a cada 30 dias</li>
              <li>• Cancelamento livre antes da próxima cobrança</li>
              <li>• Suporte ao assinante</li>
            </ul>

            <div className="mt-5 rounded-lg bg-slate-50 px-4 py-3 text-xs text-slate-600">
              Dúvidas? Fale com a gente:{" "}
              <a className="text-blue-700 underline" href="mailto:otiadriver@gmail.com">
                otiadriver@gmail.com
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
