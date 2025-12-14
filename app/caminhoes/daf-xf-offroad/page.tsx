import Image from "next/image";
import Link from "next/link";

export default function DAFXFOFFROADPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 pb-16">
      {/* HERO – padrão OTIAdriver */}
      <section className="w-full bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[1.25fr,1fr] gap-10 items-center">
          {/* Texto principal */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-700 mb-3">
              Linha Vocacional • OFF-ROAD
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-4">
              DAF XF Off-Road
              <span className="block text-amber-600 text-xl md:text-2xl mt-1">
                robustez, tração e eficiência fora do asfalto
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl">
              O <strong>DAF XF Off-Road</strong> foi desenvolvido para operações
              severas, como <strong>construção pesada, mineração, canavieiro</strong>{" "}
              e aplicações mistas asfalto/terra. Combina motor PACCAR MX-13,
              transmissão ZF TraXon Heavy Duty e chassi reforçado para máxima
              disponibilidade operacional.
            </p>

            {/* Cards de destaque */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-amber-700">
                  Potência
                </p>
                <p className="text-lg font-bold text-slate-900">480–530 cv</p>
                <p className="text-[11px] text-slate-600">
                  Motor PACCAR MX-13 Euro 6
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-amber-700">
                  Tração
                </p>
                <p className="text-lg font-bold text-slate-900">6x4 / 8x4</p>
                <p className="text-[11px] text-slate-600">
                  Eixos reforçados Off-Road
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Aplicações
                </p>
                <p className="text-lg font-bold text-slate-900">
                  Construção / Mineração
                </p>
                <p className="text-[11px] text-slate-600">
                  Operações severas e mistas
                </p>
              </div>
            </div>

            {/* Botão */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#ficha-tecnica"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Ver ficha técnica completa
              </Link>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-900/5 border border-slate-200">
              <div style={{ aspectRatio: "4 / 3" }} className="relative">
                <Image
                  src="/images/trucks/daf-xf-offroad.jpg"
                  alt="DAF XF Off-Road – caminhão vocacional"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 text-center">
              Imagem ilustrativa DAF XF Off-Road – aplicação vocacional pesada.
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-4 mt-10 space-y-10">
        {/* Visão geral */}
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
              Plataforma vocacional DAF XF Off-Road
            </h2>
            <p className="text-sm md:text-base text-slate-700 mb-3">
              A versão Off-Road do DAF XF foi projetada para resistir a
              <strong> terrenos irregulares, lama, poeira e cargas elevadas</strong>,
              mantendo confiabilidade e produtividade em ambientes severos.
            </p>
            <p className="text-sm md:text-base text-slate-700">
              O conjunto inclui chassi reforçado, suspensão preparada para
              torção, eixos de alta capacidade e proteções adicionais para
              componentes críticos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Ambientes de trabalho
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Obras e terraplenagem</li>
                <li>• Mineração e pedreiras</li>
                <li>• Cana-de-açúcar e florestal</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <p className="text-xs font-semibold text-amber-600 mb-1 uppercase">
                Benefícios operacionais
              </p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• Alta tração e estabilidade</li>
                <li>• Menos paradas não programadas</li>
                <li>• Excelente TCO vocacional</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trem de força */}
        <section>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Trem de força PACCAR MX-13 + TraXon HD
          </h2>
          <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 items-start">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <ul className="text-sm text-slate-700 space-y-2">
                <li><strong>Motor:</strong> PACCAR MX-13 Euro 6</li>
                <li><strong>Potência:</strong> até 530 cv</li>
                <li><strong>Torque:</strong> elevado em baixas rotações</li>
                <li><strong>Transmissão:</strong> ZF TraXon Heavy Duty</li>
                <li><strong>Freio motor:</strong> MX Engine Brake de alta capacidade</li>
                <li><strong>Modos:</strong> Eco / Off-Road / Manobra pesada</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-slate-800">
              <p className="font-semibold text-amber-900 mb-2">
                Controle total fora do asfalto
              </p>
              <p>
                A calibração Off-Road privilegia tração contínua, arrancadas
                suaves com carga e controle em descidas longas, reduzindo
                desgaste dos freios de serviço.
              </p>
            </div>
          </div>
        </section>

        {/* Ficha técnica resumida */}
        <section id="ficha-tecnica">
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">
            Ficha técnica resumida – DAF XF Off-Road
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b bg-amber-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700 w-44">
                    Motor
                  </th>
                  <td className="px-4 py-3">
                    PACCAR MX-13 Euro 6, alto torque em baixa rotação
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Potência
                  </th>
                  <td className="px-4 py-3">480–530 cv</td>
                </tr>
                <tr className="border-b bg-slate-50/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Transmissão
                  </th>
                  <td className="px-4 py-3">
                    ZF TraXon automatizada Heavy Duty
                  </td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Configurações
                  </th>
                  <td className="px-4 py-3">6x4 • 8x4</td>
                </tr>
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Aplicação
                  </th>
                  <td className="px-4 py-3">
                    Construção pesada, mineração, canavieiro, florestal
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PDF */}
        <section className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Ficha técnica oficial – DAF XF Off-Road (PDF)
            </h2>
            <p className="text-sm text-slate-700 mb-4">
              Consulte o material oficial da DAF com dados completos de
              dimensões, capacidades, trem de força e aplicações vocacionais.
            </p>
            <a
              href="/fichas-tecnicas/daf-xf-offroad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition"
            >
              Abrir ficha técnica Off-Road (PDF)
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
