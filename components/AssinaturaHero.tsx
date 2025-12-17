// components/AssinaturaHero.tsx
import Link from "next/link";

export default function AssinaturaHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-6 md:pb-8">
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white shadow-xl">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/90 mb-3">
          Assinatura OTIADRIVER
        </p>

        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          Treinamento, conhecimento e tecnologia
          <span className="block">para profissionais do transporte</span>
        </h2>

        <p className="mt-4 md:text-lg text-white/90 max-w-5xl leading-relaxed">
          A OTIAdriver redefiniu a forma como os profissionais de transporte se
          capacitam. Nossas tecnologias avançadas oferecem aos motoristas um
          modelo de aprendizagem personalizado e adaptativo, processando dados
          em tempo real de forma segura e instantânea. Os condutores recebem um
          desenvolvimento profissional que economiza tempo e previne problemas
          futuros. O processo é rápido, interativo e envolvente, tornando o
          aprendizado mais eficaz e dinâmico na resolução de problemas e na
          construção do conhecimento.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/planos"
            className="rounded-xl bg-white/15 px-5 py-3 text-sm font-semibold text-white border border-white/20 hover:bg-white/20 transition"
          >
            Assine OTIAdriver Premium
          </Link>

          <span className="text-sm text-white/85">
            Mais segurança • Mais eficiência • Mais valorização profissional
          </span>
        </div>
      </div>
    </section>
  );
}
