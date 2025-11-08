import Link from "next/link";
import HideHero from "@/components/HideHero";

export const metadata = {
  title: "Checkout • PRO | OTIAdriver",
  description: "Finalize sua assinatura mensal recorrente (Plano PRO).",
};

function It({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-slate-900">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-black">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function CheckoutPro() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:py-8">
      <HideHero />

      {/* trilha + selo */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
        <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      {/* título */}
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">Finalizar Assinatura</h1>
        <p className="text-slate-600 mt-1">Você selecionou o plano <strong>PRO</strong>.</p>
      </header>

      {/* grid */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-[1.8fr_1.2fr]">
        {/* card esquerda */}
        <article className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
          <div className="p-6 md:p-7">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-black">PRO</h2>
              <span className="rounded-full bg-amber-400/90 px-3 py-1 text-[11px] font-extrabold text-slate-800 shadow">
                RECOMENDADO
              </span>
            </div>

            <div className="mt-2 text-2xl md:text-3xl font-black">
              R$ 49,90 <span className="text-base font-semibold text-slate-600">/ mês</span>
            </div>
            <p className="mt-2 text-slate-600">Ideal para Profissionais Exigentes.</p>

            <ul className="mt-4 space-y-3 text-sm md:text-base">
              <It>Fichas Técnicas COMPLETAS</It>
              <It>Suporte Técnico IA ilimitado</It>
              <It>Análise de Imagem (5/mês)</It>
              <It>Checklists de Viagem</It>
              <It>Sistema de Pontuação de Performance Inteligente</It>
              <It>Alertas de Pneus Inteligentes e GPS Inteligente</It>
            </ul>

            <div className="mt-5 rounded-xl bg-slate-50 text-slate-700 p-4 text-sm leading-relaxed">
              <strong>Plano mensal com renovação automática a cada 30 dias.</strong> A cobrança será
              realizada no mesmo método de pagamento utilizado na primeira compra. Você pode cancelar
              a renovação a qualquer momento antes da próxima cobrança. Ao cancelar, o acesso
              permanece ativo até o fim do período já pago.
            </div>

            <p className="mt-3 text-[12px] text-slate-400">
              Ao continuar, você concorda com nossos <span className="underline">Termos de Uso</span> e{" "}
              <span className="underline">Política de Privacidade</span>.
            </p>
          </div>
        </article>

        {/* aside direita */}
        <aside className="rounded-2xl border border-emerald-200 bg-white shadow-2xl overflow-hidden ring-1 ring-emerald-200">
          <div className="bg-emerald-600 text-white p-6">
            <p className="text-xs opacity-90">Plano selecionado</p>
            <h3 className="text-2xl font-black mt-1">PRO</h3>
            <p className="mt-1 text-lg font-extrabold">R$ 49,90 <span className="text-white/80 text-sm font-semibold">/ mês</span></p>
          </div>

          <div className="p-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-black shadow-lg hover:opacity-95 active:translate-y-[1px] transition"
            >
              Pagar com Mercado&nbsp;Pago
            </a>

            <ul className="mt-4 text-sm text-slate-600 space-y-1">
              <li>• Pagamento 100% seguro via Mercado Pago</li>
              <li>• Renovação automática a cada 30 dias</li>
              <li>• Cancelamento livre antes da próxima cobrança</li>
              <li>• Suporte ao assinante</li>
            </ul>

            <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
              Dúvidas? Fale com a gente:{" "}
              <a href="mailto:otiadriver@gmail.com" className="underline text-blue-600 hover:text-blue-700">otiadriver@gmail.com</a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
