// app/checkout/pro/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Checkout • PRO | OTIAdriver",
  description: "Finalize sua assinatura PRO com renovação mensal automática.",
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 shadow">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span className="text-slate-800"> {children} </span>
    </li>
  );
}

export default function CheckoutPro() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* trilha + selo topo */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      {/* título da página */}
      <header className="mt-6 mb-2 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Finalizar Assinatura</h1>
        <p className="mt-1 text-slate-600">
          Você selecionou o plano <span className="font-extrabold text-emerald-700">PRO</span>.
        </p>
      </header>

      {/* GRID */}
      <section className="mt-6 grid gap-6 md:grid-cols-2">
        {/* COLUNA ESQUERDA — CARD DO PLANO */}
        <article className="rounded-2xl bg-white shadow ring-1 ring-black/5">
          <div className="px-6 py-7 bg-teal-500 text-white rounded-t-2xl">
            <div className="inline-block -mt-4 mb-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black tracking-wide text-emerald-700 shadow">
              RECOMENDADO
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold">PRO</h2>
            <p className="mt-1 text-3xl md:text-4xl font-black">
              R$ 49,90 <span className="text-sm font-semibold opacity-90">/ mês</span>
            </p>
            <p className="mt-2 text-sm/6 opacity-95">Ideal para Profissionais Exigentes.</p>
          </div>

          <div className="px-6 py-6">
            <ul className="space-y-3">
              <Chip>Fichas Técnicas COMPLETAS</Chip>
              <Chip>Suporte Técnico IA ilimitado</Chip>
              <Chip>Análise de Imagem (5/mês)</Chip>
              <Chip>Checklists de Viagem</Chip>
              <Chip>Sistema de Pontuação de Performance Inteligente</Chip>
              <Chip>Alertas de Pneus Inteligentes e GPS Inteligente</Chip>
            </ul>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
              <p className="font-bold">
                Plano mensal com renovação automática a cada 30 dias.
              </p>
              <p className="mt-1">
                A cobrança será realizada no mesmo método de pagamento utilizado na primeira compra.
                Você pode cancelar a renovação a qualquer momento antes da próxima cobrança.
                Ao cancelar, o acesso permanece ativo até o fim do período já pago.
              </p>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Ao continuar, você concorda com nossos{" "}
              <Link href="/termos" className="underline">Termos de Uso</Link> e{" "}
              <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
            </p>
          </div>
        </article>

        {/* COLUNA DIREITA — RESUMO + BOTÃO */}
        <aside className="rounded-2xl bg-white shadow ring-1 ring-black/5">
          <div className="rounded-t-2xl bg-[#0b2a6b] px-6 py-7 text-white">
            <p className="text-xs/5 opacity-80">Plano selecionado</p>
            <h3 className="mt-1 text-2xl md:text-3xl font-extrabold">PRO</h3>
            <p className="mt-1 text-lg font-bold opacity-95">
              R$ 49,90 <span className="text-sm font-medium opacity-90">/ mês</span>
            </p>
          </div>

          <div className="px-6 py-6">
            <a
              href="https://mpago.la/1KhUK3d"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl bg-[#0b2a6b] px-5 py-4 text-center text-base font-extrabold text-white shadow-lg hover:bg-[#173a86] active:translate-y-[1px] transition"
            >
              Pagar com Mercado Pago
            </a>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Pagamento 100% seguro via Mercado Pago</li>
              <li>• Renovação automática a cada 30 dias</li>
              <li>• Cancelamento livre antes da próxima cobrança</li>
              <li>• Suporte ao assinante</li>
            </ul>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-xs text-slate-600 ring-1 ring-slate-200">
              <p>
                Dúvidas? Fale com a gente:
                <a href="mailto:otiadriver@gmail.com" className="ml-1 underline">
                  otiadriver@gmail.com
                </a>
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
