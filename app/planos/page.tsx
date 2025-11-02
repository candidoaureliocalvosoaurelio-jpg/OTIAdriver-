

export default function PlanosPage() {
    return (
        <main className="container-planos">

            {/* Título e Introdução Persuasiva */}
            <header className="introducao-planos">
                <h1>Escolha o Seu Nível de Inteligência e Performance.</h1>
                <p>O avanço da tecnologia automotiva exige ferramentas à altura. Na OTIADriver, criamos três níveis de serviço para garantir que você tenha exatamente o que precisa – seja você um entusiasta buscando dados essenciais ou um <b>profissional exigente</b> que depende da IA para decisões críticas.</p>
                <p><b>Recomendamos o plano PRO</b> para a maioria dos usuários, pois ele oferece a combinação perfeita de <b>Fichas Técnicas COMPLETAS</b> e suporte ilimitado da nossa IA, garantindo excelência e eficiência no seu dia a dia.</p>
            </header>

            {/* Seção de Cards de Planos (A estilização de colunas virá do seu CSS/Tailwind/etc.) */}
            <section className="planos-grid">

                {/* Card 1: BÁSICO (R$ 29,90) */}
                <div className="card plano-basico">
                    <h2>Básico</h2>
                    <p className="ideal-para">Ideal para Uso Pessoal</p>
                    <div className="preco">
                        <span className="cifra">R$</span>
                        <span className="valor">29,90</span>
                        <span className="periodo">/ mês</span>
                    </div>
                    <ul className="recursos">
                        <li>✔️ Fichas Técnicas Essenciais</li>
                        <li>✔️ Acesso à Galeria</li>
                        <li>✔️ Suporte Básico por Chat</li>
                        <li>❌ Análise de Imagem (IA)</li>
                        <li>❌ Acesso a Dados Históricos</li>
                    </ul>
                    <a href="#link-checkout-basico" className="btn btn-basico">ASSINAR AGORA (R$ 29,90)</a>
                </div>

                {/* Card 2: PRO (R$ 49,90) - DESTAQUE! */}
                <div className="card plano-pro destaque">
                    <span className="selo-recomendado">RECOMENDADO</span>
                    <h2>PRO</h2>
                    <p className="ideal-para">Ideal para Profissionais Exigentes</p>
                    <div className="preco">
                        <span className="cifra">R$</span>
                        <span className="valor">49,90</span>
                        <span className="periodo">/ mês</span>
                    </div>
                    <ul className="recursos">
                        <li>✔️ <b>Fichas Técnicas COMPLETAS</b></li>
                        <li>✔️ Suporte Técnico IA Ilimitado</li>
                        <li>✔️ Análise de Imagem (5/mês)</li>
                        <li>✔️ Checklists de Viagem</li>
                        <li>❌ Acesso a Dados Históricos</li>
                    </ul>
                    <a href="#link-checkout-pro" className="btn btn-pro">ASSINAR AGORA (RECOMENDADO)</a>
                </div>

                {/* Card 3: PREMIUM (R$ 99,90) */}
                <div className="card plano-premium">
                    <h2>Premium</h2>
                    <p className="ideal-para">Ideal para Uso Profissional Ilimitado</p>
                    <div className="preco">
                        <span className="cifra">R$</span>
                        <span className="valor">99,90</span>
                        <span className="periodo">/ mês</span>
                    </div>
                    <ul className="recursos">
                        <li>✔️ Todos os Recursos PRO</li>
                        <li>✔️ Análise de Imagem <b>ILIMITADA</b></li>
                        <li>✔️ Treinamento Personalizado IA</li>
                        <li>✔️ <b>Acesso a Dados Históricos</b></li>
                        <li>✔️ Suporte Prioritário</li>
                    </ul>
                    <a href="#link-checkout-premium" className="btn btn-premium">ASSINAR AGORA (R$ 99,90)</a>
                </div>

            </section>

            {/* Seção de Perguntas Frequentes (FAQ) */}
            <section className="faq-secao">
                <h2>Perguntas Frequentes</h2>

                <div className="faq-item">
                    <h3>1. Qual a diferença entre as Fichas Técnicas Essenciais e as COMPLETAS?</h3>
                    <p>R: As Fichas Essenciais são para consultas rápidas. As Fichas COMPLETAS (PRO e Premium) oferecem maior detalhe, incluindo diagramas, especificações avançadas e procedimentos detalhados.</p>
                </div>

                <div className="faq-item">
                    <h3>2. O que significa "Análise de Imagem" e o limite do Plano PRO?</h3>
                    <p>R: A Análise de Imagem utiliza IA para fornecer insights sobre fotos que você carrega. No Plano PRO, você tem direito a 5 análises por mês. O Premium é Ilimitado.</p>
                </div>
                
                <div className="faq-item">
                    <h3>3. Posso mudar de plano (Upgrade ou Downgrade) a qualquer momento?</h3>
                    <p>R: Sim. Você pode solicitar a mudança diretamente na sua área de usuário. O ajuste de preço será feito de forma proporcional na sua próxima fatura.</p>
                </div>
                
                <div className="faq-item">
                    <h3>4. O que inclui o "Treinamento Personalizado IA" do Plano Premium?</h3>
                    <p>R: Sessões de consultoria individualizadas com um especialista da OTIADriver para integrar as funcionalidades da IA aos seus processos de trabalho.</p>
                </div>

                <div className="faq-item">
                    <h3>5. Existe algum período de fidelidade ou multa por cancelamento?</h3>
                    <p>R: Não. Nossos planos são mensais e você pode cancelar a qualquer momento, sem taxas ou multas. O acesso permanece ativo até o final do ciclo de cobrança.</p>
                </div>
            </section>

        </main>
    );
}
