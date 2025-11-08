import Link from "next/link";
import HideHero from "../../components/HideHero";
import s from "../Checkout.module.css";

export const metadata = {
  title: "Checkout Premium | OTIAdriver",
  description: "Finalize sua assinatura do plano Premium.",
};

export default function CheckoutPremium() {
  return (
    <main className={s.wrap}>
      <HideHero />

      <div className="text-xs text-slate-500 mb-2 flex justify-between">
        <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      <div className={s.grid}>
        <section className={`${s.card} ${s.premiumCard}`}>
          <h1>Premium</h1>
          <div className={s.price}>R$ 99,90 <small>/ mês</small></div>
          <p className={s.subtitle}>Ideal para Uso Profissional ilimitado.</p>

          <ul className={s.list}>
            <li><span className={s.check}>✓</span> Todos os Recursos PRO</li>
            <li><span className={s.check}>✓</span> Análise de Imagem ILIMITADA</li>
            <li><span className={s.check}>✓</span> Treinamento IA Personalizado</li>
            <li><span className={s.check}>✓</span> Acesso a Dados Históricos</li>
            <li><span className={s.check}>✓</span> Suporte Prioritário</li>
          </ul>

          <div className={s.terms}>
            <strong>Plano mensal com renovação automática a cada 30 dias.</strong>
            &nbsp;A cobrança será realizada no mesmo método de pagamento utilizado na primeira compra...
          </div>

          <div className={s.footerNote}>
            Ao continuar, você concorda com nossos <Link href="/termos" className="underline">Termos de Uso</Link> e <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
          </div>
        </section>

        <aside className={`${s.aside} ${s.premiumAside}`}>
          <div className={`${s.selected} ${s.premiumSelected}`}>
            Plano selecionado<br /><strong>Premium</strong><br />R$ 99,90 / mês
          </div>

          <a href="#" className={`${s.btn} ${s.premiumBtn}`}>Pagar com Mercado Pago</a>

          <ul className={s.bullets}>
            <li>Pagamento 100% seguro via Mercado Pago</li>
            <li>Renovação automática a cada 30 dias</li>
            <li>Cancelamento livre antes da próxima cobrança</li>
            <li>Suporte ao assinante</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
