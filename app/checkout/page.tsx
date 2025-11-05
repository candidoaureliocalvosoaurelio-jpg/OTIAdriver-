// app/checkout/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Checkout | OTIAdriver",
  description: "Finalizar assinatura mensal recorrente da OTIAdriver",
};

type PlanKey = "basico" | "pro" | "premium";

const plans: Record<
  PlanKey,
  { name: string; price: string; mpLink: string; features: string[]; color: string; badge?: string }
> = {
  basico: {
    name: "Básico",
    price: "R$ 29,90 / mês",
    mpLink: "https://mpago.la/131Yx5T",
    color: "#0D2D60",
    features: [
      "Fichas Técnicas Essenciais",
      "Acesso à Galeria",
      "Suporte Básico por Chat",
    ],
  },
  pro: {
    name: "PRO",
    price: "R$ 49,90 / mês",
    mpLink: "https://mpago.la/1KhUK3d",
    color: "#1DBF73",
    badge: "RECOMENDADO",
    features: [
      "Fichas Técnicas COMPLETAS",
      "Suporte Técnico IA Ilimitado",
      "Análise de Imagem (5/mês)",
      "Checklists de Viagem",
    ],
  },
  premium: {
    name: "Premium",
    price: "R$ 99,90 / mês",
    mpLink: "https://mpago.la/1Xu1tTU",
    color: "#0A2F75",
    features: [
      "Todos os Recursos PRO",
      "Análise de Imagem ILIMITADA",
      "Treinamento IA Personalizado",
      "Acesso a Dados Históricos",
      "Suporte Prioritário",
    ],
  },
};

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const key = (searchParams?.plan?.toLowerCase() as PlanKey) || "pro";
  const plan = plans[key] ?? plans.pro;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      {/* Breadcrumb + voltar */}
      <div className="mb-4 flex items-center justify-between">
        <Link href="/planos" className="text-sm text-blue-700 hover:underline">
          ← Voltar aos planos
        </Link>
        <span className="text-xs text-slate-500">
          Checkout seguro via Mercado Pago
        </span>
      </div>

      {/* Cabeçalho */}
      <header className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Finalizar Assinatura
        </h1>
        <p className="mt-2 text-slate-600">
          Você selecionou o plano{" "}
          <span className="font-semibold text-blue-800">{plan.name}</span>.
        </p>
      </header>

      {/* Resumo do Plano + Pagamento */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Resumo (esquerda) */}
        <article className="md:col-span-3 rounded-2xl border bg-white shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-extrabold">
                {plan.name}
              </h2>
              {plan.badge ? (
                <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-black tracking-wide text-white shadow">
                  {plan.badge}
                </span>
              ) : null}
            </div>

            <p className="mt-2 text-2xl font-black text-slate-900">
              {plan.price}
            </p>

            <ul className="mt-4 space-y-3 text-slate-800">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500">
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
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Texto de recorrência automática (obrigatório) */}
            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              <p>
                <strong>Plano mensal com renovação automática a cada 30 dias.</strong>
                {" "}A cobrança será realizada no mesmo método de pagamento utilizado
                na primeira compra. Você pode cancelar a renovação a qualquer momento
                antes da próxima cobrança. Ao cancelar, o acesso permanece ativo
                até o fim do período já pago.
              </p>
            </div>

            {/* Termos/Políticas – links de exemplo (trocar depois) */}
            <div className="mt-3 text-xs text-slate-500">
              Ao continuar, você concorda com nossos{" "}
              <Link href="/termos" className="text-blue-700 hover:underline">
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className="text-blue-700 hover:underline">
                Política de Privacidade
              </Link>.
            </div>
          </div>
        </article>

        {/* Cartão de Pagamento (direita) */}
        <aside className="md:col-span-2">
          <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
            <div
              className="p-5 text-white"
              style={{ background: plan.color }}
            >
              <p className="text-sm opacity-90">Plano selecionado</p>
              <h3 className="mt-1 text-2xl font-extrabold leading-tight">
                {plan.name}
              </h3>
              <p className="mt-1 text-lg font-bold">{plan.price}</p>
            </div>

            <div className="p-5">
              {/* CTA principal */}
              <a
                href={plan.mpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-base font-extrabold text-white shadow-lg hover:opacity-90 active:translate-y-[1px] transition"
                style={{ background: plan.color }}
              >
                Pagar com Mercado&nbsp;Pago
              </a>

              {/* Itens de confiança */}
              <ul className="mt-4 space-y-2 text-xs text-slate-600">
                <li>• Pagamento 100% seguro via Mercado Pago</li>
                <li>• Renovação automática a cada 30 dias</li>
                <li>• Cancelamento livre antes da próxima cobrança</li>
                <li>• Suporte ao assinante</li>
              </ul>

              {/* Dúvida / suporte */}
              <div className="mt-5 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
                Dúvidas? Fale com a gente:{" "}
                <a
                  href="mailto:suporte@otiadriver.com.br"
                  className="text-blue-700 hover:underline"
                >
                  suporte@otiadriver.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Aviso de cobrança recorrente curto */}
          <p className="mt-3 text-center text-[11px] text-slate-500">
            Plano mensal com renovação automática. Cancele a qualquer momento.
          </p>
        </aside>
      </section>

      {/* Rodapé pequeno */}
      <div className="mt-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} OTIAdriver — Todos os direitos reservados
      </div>
    </main>
  );
}

