export const metadata = { title: "Política de Privacidade — OTIAdriver" };

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Política de Privacidade
        </h1>

        <p className="mt-3 text-slate-600">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="mt-8 space-y-4 text-slate-700 leading-relaxed">
          <p>
            A <strong>OTIAdriver</strong> valoriza a sua privacidade e está
            comprometida em proteger os dados pessoais dos usuários, em
            conformidade com a LGPD.
          </p>

          <p>
            Coletamos dados mínimos necessários (ex.: nome, e-mail). Dados de
            pagamento são processados diretamente pelo{" "}
            <strong>Mercado Pago</strong> em ambiente seguro.
          </p>

          <p>
            Não compartilhamos dados com terceiros, exceto quando necessário
            para cumprir obrigações legais, operacionais ou com o seu
            consentimento.
          </p>

          <p>
            Você pode solicitar acesso, atualização ou exclusão dos seus dados
            entrando em contato conosco.
          </p>
        </div>

        <p className="mt-8 text-slate-500 text-sm">
          Dúvidas sobre esta Política? Fale com a gente em{" "}
          <a
            href="mailto:privacidade@otiadriver.com.br"
            className="text-emerald-600 hover:underline"
          >
            privacidade@otiadriver.com.br
          </a>
        </p>
      </section>
    </main>
  );
}
