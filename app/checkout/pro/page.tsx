import Link from "next/link";
import HideHero from "../../components/HideHero";
import s from "../Checkout.module.css";

export const metadata = {
  title: "Checkout • PRO | OTIAdriver",
  description: "Finalize sua assinatura mensal recorrente (Plano PRO).",
};

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className={s.li}>
      <span className={s.check}>✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function CheckoutPro() {
  return (
    <main className={s.theme}>
      <HideHero />

      <div className={s.wrap}>
        {/* trilha */}
        <div className="text-xs text-slate-500 mb-2 flex justify-between">
          <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
          <span>Checkout seguro via Mercado&nbsp;Pago</span>
        </div>

        {/* título */}
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Finalizar Assinatura</h1>
          <p className="text-slate-600 mt-1">Você selecionou o plano <strong>PRO</strong>.</p>
        </header>

        {/* GRID */}
        <section className={s.grid}>
          {/* ESQUERDA */}
          <article className={s.card}>
            <div className={s.cardIn}>
              <div className="flex items-center justify-between">
                <h2 className={s.title}>PRO</h2>
                <span className={s.badge}>RECOMENDADO</span>
              </div>

              <div className={`${s.priceBig} mt-2`}>
                R$ 49,90 <small>/ mês</small>
              </div>
              <p className="mt-1 text-slate-600">Ideal para Profissionais Exigentes.</p>

              <ul className={`${s.list} text-[15px]`}>
                <Check>Fichas Técnicas COMPLETAS</Check>
                <Check>Suporte Técnico IA Ilimitado</Check>
                <Check>Análise de Imagem (5/mês)</Check>
                <Check>Checklists de Viagem</Check>
                <Check>Sistema de Pontuação de Performance Inteligente</Check>
                <Check>Alertas de Pneus Inteligentes e GPS Inteligente</Check>
              </ul>

              <div className={s.notice}>
                <strong>Plano mensal com renovação automática a cada 30 dias.</strong>
                &nbsp;A cobrança será realizada no mesmo método de pagamento utilizado na primeira compra.
                Você pode cancelar a renovação a qualquer momento antes da próxima cobrança. Ao cancelar,
                o acesso permanece ativo até o fim do período já pago.
              </div>

              <p className="mt-3 text-[12px] text-slate-400">
                Ao continuar, você concorda com nossos <span className="underline">Termos de Uso</span> e{" "}
                <span className="underline">Política de Privacidade</span>.
              </p>
            </div>
          </article>

          {/* DIREITA (ASIDE) */}
          <aside className={s.card} style={{overflow:'hidden'}}>
            <div className={`${s.asideHeader} ${s.proAside}`}>
              <p className="text-xs/none opacity-90">Plano selecionado</p>
              <h3 className="mt-1 text-2xl font-black">PRO</h3>
              <p className="mt-1 text-lg font-extrabold">R$ 49,90 <span className="text-white/80 text-sm font-semibold">/ mês</span></p>
            </div>

            <div className={s.asideBody}>
              <a
                href="https://mpago.la/1Xu1tTU"
                target="_blank"
                rel="noopener noreferrer"
                className={`${s.btn} ${s.proBtn}`}
                aria-label="Pagar com Mercado Pago — PRO"
              >
                Pagar com Mercado&nbsp;Pago
              </a>

              <ul className={`${s.bullets} text-sm`}>
                <li>Pagamento 100% seguro via Mercado Pago</li>
                <li>Renovação automática a cada 30 dias</li>
                <li>Cancelamento livre antes da próxima cobrança</li>
                <li>Suporte ao assinante</li>
              </ul>

              <div className="mt-4 text-xs text-slate-600">
                Dúvidas? Fale com a gente:&nbsp;
                <a href="mailto:otiadriver@gmail.com" className={s.mail}>otiadriver@gmail.com</a>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
