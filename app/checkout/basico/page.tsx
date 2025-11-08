import Link from "next/link";
import HideHero from "../../components/HideHero";
import s from "../Checkout.module.css";

export const metadata = {
  title: "Checkout Básico | OTIAdriver",
  description: "Finalize sua assinatura do plano Básico.",
};

export default function CheckoutBasico() {
  return (
    <main className={s.wrap}>
      <HideHero />

      <div className="text-xs text-slate-500 mb-2 flex justify-between">
        <Link href="/planos" className="hover:underline">← Voltar aos planos</Link>
        <span>Checkout seguro via Mercado Pago</span>
      </div>

      <div className={s.grid}>
        <section className={s.card}>
          <h1>Básico</h1>
          <div className={s.price}>R$ 29,90 <small>/ mês</small></div>
          <p className={s.subtitle}>Ideal para uso pessoal.</p>

          <ul className={s.list}>
            <li><span className={s.check}>✓</span> Fichas Técnicas Essenciais</li>
            <li><span className={s.check}>✓</span> Acesso à Galeria</li>
            <li><span className={s.check}>✓</span> Suporte Básico por Chat</li>
          </ul>

          <div className={s.terms}>
            <strong>Plano mensal com renovação automática a cada 30 dias.</strong> ...
          </div>

          <div className={s.footerNote}>
            Ao continuar, você concorda com nossos <Link href="/termos" className="underline">Termos de Uso</Link> e <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
          </div>
        </section>

        <aside className={s.aside}>
          <div className={s.selected}>
            Plano selecionado<br /><strong>Básico</strong><br />R$ 29,90 / mês
          </div>

          <a href="#" className={s.btn}>Pagar com Mercado Pago</a>

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
