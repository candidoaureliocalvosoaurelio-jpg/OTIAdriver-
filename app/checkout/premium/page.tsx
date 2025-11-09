import Link from "next/link";
import HideHero from "../../components/HideHero";
import s from "../Checkout.module.css";

export default function CheckoutPremium(){
  return (
    <main className={s.wrap}>
      <HideHero />

      <div className="text-xs text-slate-500 mb-2 flex justify-between">
        <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      <div className={s.grid}>
        {/* CARD */}
        <section className={`${s.card} ${s.premiumCard}`}>
          <span className={s.badge}>MAIS VENDIDO</span>

          <h1>Premium</h1>
          <div className={s.price}>R$ 99,90 <small>/ mês</small></div>
          <p className={s.subtitle}>Melhor custo-benefício para Profissionais.</p>

          <ul className={s.list}>
            <li><span className={s.check}>✓</span> Fichas Técnicas COMPLETAS</li> 
            <li><span className={s.check}>✓</span> Suporte Técnico IA </li>
            <li><span className={s.check}>✓</span> Análise de Imagem </li>
            <li><span className={s.check}>✓</span> Checklists PRO </li>
            <li><span className={s.check}>✓</span> Assistente Inteligente de Performance </li>
          </ul>

          <div className={s.terms}>
            <strong>Plano mensal com renovação automática a cada 30 dias.</strong>
          </div>

          <div className={s.footerNote}>
            Ao continuar, você concorda com nossos <Link href="/termos" className="underline">Termos de Uso</Link> e <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
          </div>
        </section>

        {/* ASIDE */}
        <aside className={`${s.aside} ${s.premiumAside}`}>
          <div className={`${s.selected} ${s.selectedTopBox}`}>
            Plano selecionado<br/><strong>Premium</strong><br/>R$ 99,90 / mês
          </div>

          <a href="https://mpago.la/1Xu1tTU" className={`${s.btn} ${s.premiumBtn}`}>
           Pagar com Mercado Pago
          </a>

          <ul className={s.bullets}>
            <li>Pagamento 100% seguro via Mercado Pago</li>
            <li>Renovação automática a cada 30 dias</li>
            <li>Cancelamento livre antes da próxima cobrança</li>
            <li>Suporte ao assinante</li>
          </ul>

          <div className={s.help}>
            Dúvidas? Fale com a gente:{" "}
            <a href="mailto:otiadriver@gmail.com">otiadriver@gmail.com</a>
          </div>
        </aside>
      </div>
    </main>
  );
}
