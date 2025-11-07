// app/checkout/premium/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Checkout • Premium | OTIAdriver",
  description: "Finalize sua assinatura mensal recorrente (Plano Premium).",
};

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-slate-900">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-black">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function CheckoutPremium() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:py-8">
      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
        <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">Finalizar Assinatura</h1>
        <p className="text-slate-600 mt-1">Você selecionou o plano <strong>Premium</strong>.</p>
      </header>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-[1.8fr_1.2fr]">
        <article className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
          <div className="p-6 md:p-7">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-black">Premium</h2>
            </div>

            <div className="mt-2 text-2xl md:text-3xl font-black">
              R$ 99,90 <span className="text-base font-semibold text-slate-600">/ mês</span>
            </div>
            <p className="mt-2 text-slate-600">Ideal para Uso Profissional Ilimitado.</p>

            <ul className="mt-4 space-y-3 text-sm md:text-base">
              <Check>Todos os Recursos PRO</Check>
              <Check>Análise de Imagem ILIMITADA</Check>
              <Check>Treinamento IA Personalizado</Check>
              <Check>Acesso a Dados Históricos</Check>
              <Check>Suporte Prioritário</Check>
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

        <aside className="rounded-2xl border border-[#0a2f75]/40 bg-white shadow-2xl overflow-hidden">
          <div className="bg-[#0a2f75] text-white p-6">
            <p className="text-xs opacity-95">Plano selecionado</p>
            <h3 className="text-2xl font-black mt-1">Premium</h3>
            <p className="mt-1 text-lg font-extrabold">R$ 99,90 <span className="text-white/90 text-sm font-semibold">/ mês</span></p>
          </div>

          <div className="p-6">
            <a
              href="https://mpago.la/1Xu1tTU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#0a2f75] px-5 py-3 text-white font-black shadow-lg hover:bg-[#072557] active:translate-y-[1px] transition"
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
              <a href="mailto:otiadriver@gmail.com" className="underline">otiadriver@gmail.com</a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
