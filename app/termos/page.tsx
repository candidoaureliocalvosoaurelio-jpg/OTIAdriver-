import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Termos e Condições — OTIAdriver" };

export default function Termos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EAF3FA] to-white text-slate-800">
      <Header />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Termos e Condições
        </h1>
        <p className="mt-3 text-slate-600">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
        <div className="mt-8 space-y-4 text-slate-700 leading-relaxed">
          <p>
            Bem-vindo à <strong>OTIAdriver</strong>. Ao acessar ou utilizar nossa
            plataforma, você concorda com os seguintes termos e condições de uso.
          </p>
          <p>
            Os serviços e conteúdos disponibilizados destinam-se exclusivamente
            para fins educacionais e informativos. É proibido o uso não autorizado,
            cópia, distribuição ou engenharia reversa dos materiais da OTIAdriver.
          </p>
          <p>
            Reservamo-nos o direito de alterar estes termos a qualquer momento,
            mediante publicação da nova versão nesta página.
          </p>
          <p>
            O uso contínuo da plataforma após atualizações implica aceitação das
            novas condições.
          </p>
        </div>
        <p className="mt-8 text-slate-500 text-sm">
          Dúvidas sobre estes Termos? Envie um e-mail para{" "}
          <a
            href="mailto:contato@otiadriver.com.br"
            className="text-emerald-600 hover:underline"
          >
            contato@otiadriver.com.br
          </a>
        </p>
      </section>
      <Footer />
    </main>
  );
}
