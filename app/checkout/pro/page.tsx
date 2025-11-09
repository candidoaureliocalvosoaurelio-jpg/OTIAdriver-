import Link from "next/link";
import HideHero from "../../components/HideHero";
import s from "../Checkout.module.css";

export default function CheckoutPro() {
  return (
    <main className={s.wrap}>
      <HideHero />

      <div className="text-xs text-slate-500 mb-2 flex justify-between">
        <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      <div className={s.grid}>
        {/* CARD */}
        <section className={`${s.card} ${s.proCard}`}>
          <span className={s.badge}>RECOMENDADO</span>

          <h1>PRO</h1>
          <div className={s.price}>R$ 49,90 <small>/ mês</small></div>
          <p className={s.subtitle}>Ideal para Profissionais Exigentes.</p>

          <ul className={s.list}>
            <li><span className={s.check}>✓</span> Fichas Técnicas COMPLETAS</li>
            <li><span className={s.check}>✓</span> Suporte Técnico IA </li>
            <li><span className={s.check}>✓</span> Análise de Imagem </li>
            <li><span className={s.check}>✓</span> Checklists de Viagem </li>
            <li><span className={s.check}>✓</span> Sistema de Pontuação de Performance Inteligente</li>
            <li><span className={s.check}>✓</span> Alertas Inteligentes e GPS Inteligente</li>
          </ul>

          <div className={s.terms}>
            <strong>Plano mensal com renovação automática a cada 30 dias.</strong>
          </div>

          <div className={s.footerNote}>
            Ao continuar, você concorda com nossos <Link href="/termos" className="underline">Termos de Uso</Link> e <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
          </div>
        </section>

        {/* ASIDE */}
        <aside className={`${s.aside} ${s.proAside}`}>
          <div className={`${s.selected} ${s.selectedTopBox}`}>
            Plano selecionado<br/><strong>PRO</strong><br/>R$ 49,90 / mês
          </div>

          <a href="https://mpago.la/131Yx5T" className={`${s.btn} ${s.proBtn}`}>
            Pagar com Mercado Pago
          </a>

          <ul className={s.bullets}>
            <li>Pagamento 100% seguro via Mercado Pago</li>
            <li>Renovação automática a cada 30 dias</li>
            <li>Cancelamento livre antes da próxima cobrança</li>
            <li>Suporte ao assinante</li>
          </ul>

          <div className={s.help}>
            Dúvidas? Fale com a gente: <a href="mailto:otiadriver@gmail.com">otiadriver@gmail.com</a>
          </div>
        </aside>
      </div>
    </main>
  );
}
