// app/checkout/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Checkout | OTIAdriver",
  description: "Finalize sua assinatura mensal recorrente da OTIAdriver.",
};

type PlanKey = "basico" | "pro" | "premium";

type Plan = {
  name: string;
  price: string;
  mpLink: string;
  features: string[];
  badge?: "RECOMENDADO" | "MAIS VENDIDO";
  // classes/tailwind para cores do cabeçalho do cartão de pagamento
  headerColor: string; // ex: "bg-[#0D2D60]" | "bg-emerald-600" | "bg-blue-900"
  // cor de destaque opcional (borda/sombra) do aside
  asideRing?: string; // ex: "ring-2 ring-emerald-300 shadow-2xl"
};

const plans: Record<PlanKey, Plan> = {
  basico: {
    name: "Básico",
    price: "R$ 29,90 / mês",
    mpLink: "https://mpago.la/131Yx5T",
    headerColor: "bg-[#0D2D60]",
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
    headerColor: "bg-emerald-600",
    asideRing: "ring-2 ring-emerald-300 shadow-2xl",
    badge: "RECOMENDADO",
    features: [
      "Fichas Técnicas COMPLETAS",
      "Suporte Técnico IA Ilimitado",
      "Análise de Imagem (5/mês)",
      "Checklists de Viagem",
      "Sistema de Pontuação de Performance Inteligente",
      "Alertas de Pneus Inteligentes e GPS Inteligente",
    ],
  },
  premium: {
    name: "Premium",
    price: "R$ 99,90 / mês",
    mpLink: "https://mpago.la/1Xu1tTU",
    headerColor: "bg-blue-900",
    features: [
      "Todos os Recursos PRO",
      "Análise de Imagem ILIMITADA",
      "Treinamento IA Personalizado",
      "Acesso a Dados Históricos",
      "Suporte Prioritário",
    ],
  },
};

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-slate-900">
      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500">
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
      <span>{children}</span>
    </li>
  );
}

export default function CheckoutPage({
  searchParams,
}: {
  searchParams?: { plan?: string };
}) {
  const key = (searchParams?.plan?.toLowerCase() as PlanKey) || "pro";
  const plan = plans[key] ?? plans.pro;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      {/* Breadcrumb + info segurança */}
      <div className="mb-4 flex items-center justify-between">
        <Link href="/planos" className="text-sm text-blue-700 hover:underline">
          ← Voltar aos planos
        </Link>
        <span className="text-xs text-slate-500">
          Checkout seguro via Mercado&nbsp;Pago
        </span>
      </div>

      {/* Cabeçalho da página */}
      <header className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Finalizar Assinatura
        </h1>
        <p className="mt-2 text-slate-600">
          Você selecionou o plano{" "}
          <span className="font-semibold text-blue-800">{plan.name}</span>.
        </p>
      </header>

      {/* Grid principal */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-5">
        {/* Resumo à esquerda */}
        <article className="md:col-span-3 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="p-6">
            {/* Selo (quando existir) */}
            {plan.badge && (
              <div className="mb-2 flex justify-center">
                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black tracking-wide text-slate-900 shadow">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-extrabold">
                {plan.name}
              </h2>
            </div>

            <p className="mt-2 text-2xl font-black text-slate-900">
              {plan.price}
            </p>

            {/* Subtítulo do PRO (mantido conforme combinado) */}
            {key === "pro" && (
              <p className="mt-1 text-sm text-slate-600">
                Ideal para Profissionais Exigentes.
              </p>
            )}
            {key === "premium" && (
              <p className="mt-1 text-sm text-slate-600">
                Ideal para Uso Profissional Ilimitado.
              </p>
            )}
            {key === "basico" && (
              <p className="mt-1 text-sm text-slate-600">Ideal para uso pessoal.</p>
            )}

            {/* Lista de recursos */}
            <ul className="mt-4 space-y-3">
              {plan.features.map((f) => (
                <Check key={f}>{f}</Check>
              ))}
            </ul>

            {/* Texto legal de recorrência */}
            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              <p>
                <strong>Plano mensal com renovação automática a cada 30 dias.</strong>{" "}
                A cobrança será realizada no mesmo método de pagamento utilizado na
                primeira compra. Você pode cancelar a renovação a qualquer momento
                antes da próxima cobrança. Ao cancelar, o acesso permanece ativo
                até o fim do período já pago.
              </p>
            </div>

            {/* Termos/Políticas (ajuste os links quando criar as páginas) */}
            <div className="mt-3 text-xs text-slate-500">
              Ao continuar, você concorda com nossos{" "}
              <Link href="/termos" className="text-blue-700 hover:underline">
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className="text-blue-700 hover:underline">
                Política de Privacidade
              </Link>
              .
            </div>
          </div>
        </article>

        {/* Cartão de pagamento à direita */}
        <aside
          className={[
            "md:col-span-2 overflow-hidden rounded-2xl border bg-white",
            plan.asideRing ?? "shadow-sm",
          ].join(" ")}
        >
          <div className={["px-5 py-5 text-white", plan.headerColor].join(" ")}>
            <p className="text-sm/5 opacity-95">Plano selecionado</p>
            <h3 className="mt-1 text-2xl font-extrabold leading-tight">
              {plan.name}
            </h3>
            <p className="mt-1 text-lg font-bold">{plan.price}</p>
          </div>

          <div className="p-5">
            {/* TODO: bloquear se user tiver assinatura ativa (quando login estiver implementado) */}
            <a
              href={plan.mpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-base font-extrabold text-white shadow-lg hover:opacity-95 active:translate-y-[1px] transition"
              // cor do botão igual ao cabeçalho
              style={{ background: "transparent" }}
            >
              {/* a cor real vem pelo utilitário abaixo */}
              <span className={["absolute inset-0 -z-10", plan.headerColor].join(" ")} />
              Pagar com Mercado&nbsp;Pago
            </a>

            {/* Confiança/garantias */}
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li>• Pagamento 100% seguro via Mercado Pago</li>
              <li>• Renovação automática a cada 30 dias</li>
              <li>• Cancelamento livre antes da próxima cobrança</li>
              <li>• Suporte ao assinante</li>
            </ul>

            {/* Suporte */}
            <div className="mt-5 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
              Dúvidas? Fale com a gente:{" "}
              <a
                href="mailto:otiadriver@gmail.com"
                className="text-blue-700 hover:underline"
              >
                otiadriver@gmail.com
              </a>
            </div>
          </div>

          <p className="px-5 pb-5 text-center text-[11px] text-slate-500">
            Plano mensal com renovação automática. Cancele a qualquer momento.
          </p>
        </aside>
      </section>

      {/* Rodapé enxuto */}
      <div className="mt-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} OTIAdriver — Todos os direitos reservados
      </div>
    </main>
  );
}
