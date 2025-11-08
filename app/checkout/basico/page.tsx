// app/checkout/basico/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Checkout • Básico | OTIAdriver",
  description: "Finalize sua assinatura mensal recorrente (Plano Básico).",
};

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-slate-900">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-black">✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function CheckoutBasico() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:py-8">
      {/* Esconde o hero global só nesta página */}
      <style>{`#site-hero { display: none !important; }`}</style>

      {/* trilha + selo */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
        <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      {/* título */}
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">Finalizar Assinatura</h1>
        <p className="text-slate-600 mt-1">Você selecionou o plano <strong>Básico</strong>.</p>
      </header>

      {/* grid */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-[1.8fr_1.2fr]">
        {/* card esquerda */}
        <article className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
          <div className="p-6 md:p-7">
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-black">Básico</h2>
            </div>

            <div className="mt-2 text-2xl md:text-3xl font-black">
              R$ 29,90 <span className="text-base font-semibold text-slate-600">/ mês</span>
            </div>
            <p className="mt-2 text-slate-600">Ideal para uso pessoal.</p>

            <ul className="mt-4 space-y-3 text-sm md:text-base">
              <Check>Fichas Técnicas Essenciais</Check>
              <Check>Acesso à Galeria</Check>
              <Check>Suporte Básico por Chat</Check>
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
        <aside className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden flex flex-col">
          {/* FAIXA AZUL: forçamos a cor com style para evitar falha de classe */}
          <div className="p-6 text-white" style={{ background: "#0F2454" }}>
            <p className="text-xs opacity-90">Plano selecionado</p>
            <h3 className="text-2xl font-black mt-1">Básico</h3>
            <p className="mt-1 text-lg font-extrabold">
              R$ 29,90 <span className="text-white/80 text-sm font-semibold">/ mês</span>
            </p>
          </div>

          <div className="p-6">
            <a
              href="https://mpago.la/131Yx5T"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-white font-black shadow-lg hover:opacity-95 active:translate-y-[1px] transition"
              style={{ background: "#0F2454" }}  // botão azul garantido
            >
              Pagar com Mercado&nbsp;Pago
            </a>

            <ul className="mt-4 text-sm text-slate-600 space-y-1">
              <li>• Pagamento 100% seguro via Mercado Pago</li>
              <li>• Renovação automática a cada 30 dias</li>
              <li>• Cancelamento livre antes da próxima cobrança</li>
              <li>• Suporte ao assinante</li>
            </ul>

            <div className="underline text-blue-600 hover:text-blue-700"
              Dúvidas? Fale com a gente:{" "}
              <a href="mailto:otiadriver@gmail.com" className="underline">otiadriver@gmail.com</a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
