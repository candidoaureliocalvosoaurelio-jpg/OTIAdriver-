// app/checkout/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Checkout | OTIAdriver",
  description: "Finalize sua assinatura mensal recorrente da OTIAdriver.",
};

// --- Tipos e dados dos planos ---
type PlanKey = "basico" | "pro" | "premium";

type Plan = {
  name: string;
  price: string;
  mpLink: string;
  features: string[];
  headerColor: string;     // cor do cabeçalho do card
  badge?: "RECOMENDADO" | "MAIS VENDIDO";
};

const plans: Record<PlanKey, Plan> = {
  basico: {
    name: "Básico",
    price: "R$ 29,90 / mês",
    mpLink: "https://mpago.la/131Yx5T",
    features: [
      "Fichas Técnicas Essenciais",
      "Acesso à Galeria",
      "Suporte Básico por Chat",
    ],
    headerColor: "bg-slate-100 text-slate-900",
  },
  pro: {
    name: "PRO",
    price: "R$ 49,90 / mês",
    mpLink: "https://mpago.la/1KhUK3d",
    // ✅ 6 itens do PRO
    features: [
      "Fichas Técnicas COMPLETAS",
      "Suporte Técnico IA Ilimitado",
      "Análise de Imagem (5/mês)",
      "Checklists de Viagem",
      "Sistema de Pontuação de Performance Inteligente",
      "Alertas de Pneus Inteligentes e GPS Inteligente",
    ],
    headerColor: "bg-teal-600 text-white",
    badge: "RECOMENDADO",
  },
  premium: {
    name: "Premium",
    price: "R$ 99,90 / mês",
    mpLink: "https://mpago.la/1Xu1tTU",
    features: [
      "Todos os Recursos PRO",
      "Análise de Imagem ILIMITADA",
      "Treinamento IA Personalizado",
      "Acesso a Dados Históricos",
      "Suporte Prioritário",
    ],
    headerColor: "bg-blue-900 text-white",
  },
};

// Ícone check
function Check() {
  return (
    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: PlanKey };
}) {
  const key = (searchParams.plan ?? "basico") as PlanKey;
  const plan = plans[key] ?? plans.basico;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* topo */}
      <div className="flex items-center justify-between text-sm text-slate-600">
        <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
        <span className="text-slate-500">Checkout seguro via Mercado Pago</span>
      </div>

      {/* título principal */}
      <h1 className="mt-6 text-center text-3xl md:text-4xl font-extrabold tracking-tight">
        Finalizar Assinatura
      </h1>
      <p className="mt-2 text-center text-slate-600">
        Você selecionou o plano{" "}
        <span className="font-bold">{plan.name}</span>.
      </p>

      {/* Card do plano (layout vertical – opção B) */}
      <section className="mt-8 overflow-hidden rounded-2xl bg-white shadow ring-1 ring-black/5">
        {/* cabeçalho colorido */}
        <div className={`px-6 py-5 ${plan.headerColor}`}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-extrabold">{plan.name}</h2>
            {plan.badge && (
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black tracking-wide text-slate-900 shadow">
                {plan.badge}
              </span>
            )}
          </div>
          <p className="mt-1 text-xl md:text-2xl font-black">
            {plan.price}
          </p>
        </div>

        {/* corpo */}
        <div className="px-6 py-6">
          <ul className="space-y-3 text-slate-800">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* aviso de recorrência */}
          <div className="mt-6 rounded-xl bg-slate-50 px-4 py-4 text-sm leading-relaxed text-slate-700">
            <p className="font-semibold">
              Plano mensal com renovação automática a cada 30 dias.
            </p>
            <p className="mt-1">
              A cobrança será realizada no mesmo método de pagamento utilizado na primeira compra.
              Você pode cancelar a renovação a qualquer momento antes da próxima cobrança.
              Ao cancelar, o acesso permanece ativo até o fim do período já pago.
            </p>
          </div>

          {/* termos */}
          <p className="mt-3 text-xs text-slate-500">
            Ao continuar, você concorda com nossos{" "}
            <a className="underline hover:opacity-80" href="#" onClick={(e)=>e.preventDefault()}>Termos de Uso</a>{" "}
            e{" "}
            <a className="underline hover:opacity-80" href="#" onClick={(e)=>e.preventDefault()}>Política de Privacidade</a>.
          </p>

          {/* botão pagar */}
          <a
            href={plan.mpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full rounded-xl bg-blue-900 px-4 py-4 text-center text-base font-extrabold text-white shadow-lg ring-1 ring-black/5 hover:opacity-95 active:translate-y-[1px] transition"
          >
            Pagar com Mercado Pago
          </a>
        </div>
      </section>

      {/* bloco informativo (vertical) */}
      <aside className="mt-6 rounded-2xl bg-white shadow ring-1 ring-black/5">
        <div className="px-6 py-5">
          <h3 className="text-lg font-bold text-slate-900">Dicas rápidas</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
            <li>Pagamento 100% seguro via Mercado Pago</li>
            <li>Renovação automática a cada 30 dias</li>
            <li>Cancelamento livre antes da próxima cobrança</li>
            <li>Suporte ao assinante: <a className="underline" href="mailto:otiadriver@gmail.com">otiadriver@gmail.com</a></li>
          </ul>
        </div>
      </aside>
    </main>
  );
}
