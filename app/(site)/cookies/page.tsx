export const metadata = { title: "Política de Cookies — OTIAdriver" };

export default function Cookies() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Política de Cookies
        </h1>

        <p className="mt-3 text-slate-600">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="mt-10 space-y-8 text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. O que são cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos armazenados no seu navegador quando você
              visita um site. Eles servem para manter sua sessão, melhorar a experiência,
              medir desempenho e, em alguns casos, exibir anúncios.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Por que usamos cookies?
            </h2>
            <p>Utilizamos cookies para:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>manter login e sessão do usuário;</li>
              <li>garantir segurança e prevenir fraudes;</li>
              <li>salvar preferências (idioma, navegação);</li>
              <li>analisar performance e melhorar o site;</li>
              <li>exibir anúncios (Google AdSense), quando aplicável.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Cookies de terceiros (Google AdSense)
            </h2>
            <p>
              Alguns cookies podem ser definidos por serviços de terceiros, como o Google,
              para exibição de anúncios e métricas.
            </p>
            <p>
              Quando anúncios do Google são exibidos, o Google pode usar cookies para
              mostrar anúncios personalizados ou não personalizados, de acordo com a sua
              região e configurações do navegador.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Como controlar cookies
            </h2>
            <p>
              Você pode bloquear ou apagar cookies diretamente nas configurações do seu
              navegador. No entanto, algumas funcionalidades do site podem não funcionar
              corretamente se cookies essenciais forem desativados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Contato
            </h2>
            <p>Se você tiver dúvidas sobre cookies e privacidade, fale conosco:</p>

            <p className="text-slate-500 text-sm">
              E-mail:{" "}
              <a
                href="mailto:otiadriver@gmail.com"
                className="text-emerald-600 hover:underline"
              >
                otiadriver@gmail.com
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
