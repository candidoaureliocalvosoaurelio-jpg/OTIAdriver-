// app/caminhoes/mercedes-arocs-3353s-6x4/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function MercedesArocs3353Page() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-20">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white border-b border-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-[1.3fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300 mb-3">
              Aplicações Severas • Fora de Estrada
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Mercedes-Benz Arocs{" "}
              <span className="text-amber-300">3353 S 6x4</span>
            </h1>

            <p className="text-sm md:text-base text-slate-100/85 mb-6 max-w-xl">
              O <strong>Mercedes-Benz Arocs 3353 S 6x4</strong> é um cavalo mecânico
              vocacional projetado para operações extremamente severas: mineração,
              construção pesada, florestal e transporte com alto CMT. Equipado com o
              motor <strong>OM 471 (530 cv)</strong>, tração 6x4 e chassi reforçado,
              entrega robustez, força contínua em aclives e alta confiabilidade.
            </p>

            {/* Cards do HERO */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Potência
                </p>
                <p className="text-lg font-bold">530 cv</p>
                <p className="text-[11px] text-slate-300">Motor OM 471</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  Tração
                </p>
                <p className="text-lg font-bold">6x4</p>
                <p className="text-[11px] text-slate-300">
                  Operação vocacional severa
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-300">
                  CMT
                </p>
                <p className="text-lg font-bold">até 150 t*</p>
                <p className="text-[11px] text-slate-300">
                  Conforme configuração/homologação
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-amber-300 text-black text-sm font-semibold hover:bg-amber-200 transition"
              >
                Ver ficha técnica resumida
              </Link>

              <Link
                href="#materiais-pdf"
                className="inline-flex items-center px-5 py-2.5 rounded-lg border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition"
              >
                Ver materiais em PDF
              </Link>
            </div>

            <p className="mt-3 text-[11px] text-slate-300">
              *Valores de CMT variam conforme versão, implementação e legislação.
            </p>
          </div>

          {/* Imagem */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/mercedes-arocs-3353s-6x4.jpg"
                  alt="Mercedes-Benz Arocs 3353 S 6x4"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="mt-2 text-[11px] text-slate-300 text-center">
              Imagem ilustrativa Mercedes-Benz Arocs 3353 S 6x4.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-4 mt-12 space-y-12">
        {/* MOTOR */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Motor OM 471: alto torque e durabilidade em serviço severo
          </h2>

          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 text-sm text-slate-800">
              <ul className="space-y-2">
                <li>
                  • 6 cilindros em linha com foco em força contínua para aclives e
                  ciclos pesados.
                </li>
                <li>
                  • Freio-motor de alta capacidade (conforme configuração) para
                  descidas longas com carga.
                </li>
                <li>
                  • Construção robusta para ambientes com poeira, vibração e alta
                  solicitação térmica.
                </li>
                <li>
                  • Projeto voltado a disponibilidade operacional e menor custo por
                  km.
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-amber-900 mb-2">
                Por que isso importa?
              </p>
              <p>
                Em mineração e obras, o motor trabalha sob carga elevada por longos
                períodos. Alto torque e boa capacidade de frenagem auxiliam
                performance e segurança, além de reduzir desgaste do sistema de freios.
              </p>
            </div>
          </div>
        </section>

        {/* TRANSMISSÃO + TRAÇÃO */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            PowerShift Advanced + tração 6x4: controle e produtividade
          </h2>

          <div className="grid md:grid-cols-3 gap-5 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                PowerShift Advanced
              </p>
              <p>
                Transmissão automatizada calibrada para serviço pesado, com lógica de
                trocas voltada a tração, embalo e proteção do trem de força.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Tração 6x4
              </p>
              <p>
                Dois eixos de tração para arrancadas com carga e melhor capacidade de
                transpor pisos irregulares e baixa aderência.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-700 mb-1 uppercase">
                Bloqueios
              </p>
              <p>
                Bloqueios de diferencial (conforme configuração) para reduzir patinagem
                e manter o veículo em movimento em lama, cascalho e rampas.
              </p>
            </div>
          </div>
        </section>

        {/* CHASSI */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Chassi reforçado e preparação vocacional
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-800">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <ul className="space-y-2">
                <li>• Longarinas de alta resistência e elevada rigidez torcional.</li>
                <li>• Suspensão e componentes dimensionados para ciclos severos.</li>
                <li>• Preparação para implementos vocacionais e operação contínua.</li>
                <li>• Proteções e geometria voltadas a melhor ângulo de ataque.</li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-50 rounded-2xl border border-slate-800 shadow-sm p-5">
              <p className="font-semibold text-amber-300 mb-2 uppercase">
                Robustez estrutural
              </p>
              <p>
                Ideal para ambientes agressivos (lama, cascalho, rampas) e para
                operações com alta solicitação de chassi e trem de força.
              </p>
            </div>
          </div>
        </section>

        {/* APLICAÇÕES */}
        <section>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Aplicações típicas do Arocs 3353 S 6x4
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 text-sm text-slate-800">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold mb-2">Mineração</h3>
              <p>Operações internas, apoio logístico e transporte em vias não pavimentadas.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold mb-2">Florestal / Madeira</h3>
              <p>Tração constante e robustez para pisos de terra, lama e aclives longos.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
              <h3 className="font-semibold mb-2">Construção pesada</h3>
              <p>Movimentação de agregados, equipamentos e implementos vocacionais.</p>
            </div>
          </div>
        </section>

        {/* FICHA TÉCNICA */}
        <section id="ficha-tecnica">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – Arocs 3353 S 6x4
          </h2>

          <div className="overflow-x-auto border border-slate-200 bg-white rounded-2xl shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 w-44">
                    Motor
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    OM 471 – 6 cilindros em linha, 530 cv (conforme versão/mercado).
                  </td>
                </tr>

                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    PowerShift Advanced (calibração vocacional), 12 marchas (conforme
                    configuração).
                  </td>
                </tr>

                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Tração
                  </th>
                  <td className="px-4 py-3 text-slate-800">6x4 (dois eixos de tração).</td>
                </tr>

                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    CMT
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Até 150 t* (varia por versão e homologação).
                  </td>
                </tr>

                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Chassi
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Longarinas reforçadas e preparação vocacional.
                  </td>
                </tr>

                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Aplicações
                  </th>
                  <td className="px-4 py-3 text-slate-800">
                    Mineração, construção pesada, florestal, operações severas.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            *Valores e disponibilidade dependem do mercado, pacote e configuração do veículo.
          </p>
        </section>

        {/* BLOCO FINAL – Materiais em PDF (2 cards) */}
        <section id="materiais-pdf" className="mt-10">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 – Ficha técnica oficial */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Ficha técnica oficial – Mercedes-Benz Arocs 3353 S 6x4 (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Consulte a ficha técnica oficial do{" "}
                <strong>Mercedes-Benz Arocs 3353 S 6x4</strong> com dados completos
                para apoiar dimensionamento e aplicação.
              </p>

              <a
                href="/fichas-tecnicas/mercedes-arocs-3353s-6x4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir ficha técnica (PDF)
              </a>
            </div>

            {/* Card 2 – Luzes de advertência */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm flex flex-col min-h-[260px]">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                Luzes de Advertência e Indicadoras – Mercedes-Benz (PDF)
              </h2>

              <p className="text-sm text-slate-700 mb-4">
                Guia de luzes de advertência e indicadores do painel Mercedes-Benz.
                Material essencial para identificar alertas e agir corretamente.
              </p>

              <a
                href="/fichas-tecnicas/luzes-advertencia-indicadora-mercedes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
              >
                Abrir guia de luzes (PDF)
              </a>
            </div>
          </div>
        </section>

       {/* CTA FINAL – Página exclusiva da transmissão Mercedes G340 */}
<section className="mt-14 rounded-3xl bg-[#0f172a] p-8 md:p-10 shadow-xl">
  <div className="flex flex-col items-center text-center">
    <h3 className="text-2xl md:text-3xl font-extrabold text-white">
      Acesse o guia técnico completo da transmissão Mercedes G340
    </h3>

    <p className="mt-2 max-w-2xl text-slate-200">
      Página exclusiva com funcionamento detalhado da caixa G340 (12 marchas),
      modos de operação, recomendações de uso, integração com freio motor
      e boas práticas para máxima durabilidade e eficiência.
    </p>

    <div className="mt-6">
      <Link
        href="/caminhoes/mercedes/g340"
        className="inline-flex items-center justify-center rounded-2xl
                   bg-gradient-to-r from-sky-600 to-sky-800
                   px-12 py-4 text-base font-extrabold text-white
                   shadow-lg shadow-sky-900/30
                   hover:from-sky-500 hover:to-sky-700
                   hover:shadow-xl transition-all duration-200"
      >
        Acessar página completa – Caixa Mercedes G340
      </Link>
     </div>
  </div>
</section>
</section>
    </main>
  );
}
