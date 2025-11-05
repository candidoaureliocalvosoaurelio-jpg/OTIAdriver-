// Seu código PlanosPage.tsx (INÍCIO DO ARQUIVO)

// 1. IMPORTAR OS ESTILOS:
import styles from './Planos.module.css'; 
// OBS: 'styles' será um objeto com todas as classes CSS

export default function PlanosPage() {
    return (
        // 2. USAR AS CLASSES IMPORTADAS:
        <main className={styles.containerPlanos}>

            {/* ... header ... */}

            {/* Seção de Cards de Planos (Layout de Colunas) */}
            <section className={styles.planosGrid}>

                {/* Card 1: BÁSICO (R$ 29,90) */}
                <div className={`${styles.card} ${styles.planoBasico}`}>
                    <h2>Básico</h2>
                    <p className={styles.idealPara}>Ideal para Uso Pessoal</p>
                    <div className={styles.preco}>
                        <span className={styles.cifra}>R$</span>
                        <span className={styles.valor}>29,90</span> {/* PREÇO CORRIGIDO */}
                        <span className={styles.periodo}>/ mês</span>
                    </div>
                    <ul className={styles.recursos}>
                        <li>✔️ Fichas Técnicas Essenciais</li>
                        {/* ... outros recursos ... */}
                    </ul>
                    <a href="#link-checkout-basico" className={`${styles.btn} ${styles.btnBasico}`}>ASSINAR AGORA (R$ 29,90)</a>
                </div>

                {/* Card 2: PRO (R$ 49,90) - DESTAQUE! */}
                <div className={`
                    ${styles.card} 
                    ${styles.planoPro} 
                    ${styles.destaque}
                `}>
                    <span className={styles.seloRecomendado}>RECOMENDADO</span>
                    <h2>PRO</h2>
                    <p className={styles.idealPara}>Ideal para Profissionais Exigentes</p>
                    <div className={styles.preco}>
                        <span className={styles.cifra}>R$</span>
                        <span className={styles.valor}>49,90</span> {/* PREÇO CORRIGIDO */}
                        <span className={styles.periodo}>/ mês</span>
                    </div>
                    <ul className={styles.recursos}>
                        {/* ... recursos ... */}
                    </ul>
                    <a href="#link-checkout-pro" className={`${styles.btn} ${styles.btnPro}`}>ASSINAR AGORA (RECOMENDADO)</a>
                </div>
                
                {/* Card 3: PREMIUM (R$ 99,90) */}
                <div className={`${styles.card} ${styles.planoPremium}`}>
                    <h2>Premium</h2>
                    <p className={styles.idealPara}>Ideal para Uso Profissional Ilimitado</p>
                    <div className={styles.preco}>
                        <span className={styles.cifra}>R$</span>
                        <span className={styles.valor}>99,90</span> {/* PREÇO CORRIGIDO */}
                        <span className={styles.periodo}>/ mês</span>
                    </div>
                    {/* ... recursos e botão ... */}
                    <a href="#link-checkout-premium" className={`${styles.btn} ${styles.btnPremium}`}>ASSINAR AGORA (R$ 99,90)</a>
                </div>

            </section>
            
            {/* ... Seção FAQ ... */}
        </main>
    );
}
