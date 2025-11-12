import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Inspeção e Manutenção | OTIAdriver",
  description:
    "Programa de manutenção, verificações diárias e intervalos recomendados por aplicação. Guia premium OTIAdriver.",
};

export default function InspecaoManutencaoPage() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* breadcrumb */}
      <div className="mb-6 text-sm text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:underline">Início</Link>
        <span>›</span>
        <span className="text-slate-700">Inspeção e Manutenção</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white shadow-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Inspeção e Manutenção
        </h1>
        <p className="mt-3 md:text-lg text-white/90 max-w-3xl">
          Defina o programa ideal conforme tipo de uso, aplicação e fluídos recomendados.
          Esta página reúne critérios de determinação do plano, verificações do dia a dia,
          observações essenciais e quadros de intervalos por aplicação (rodoviário e fora de estrada).
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/planos"
            className="rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20 transition"
          >
            Assine OTIAdriver Premium
          </Link>
        </div>
      </section>

      {/* COMO DETERMINAR O PROGRAMA */}
      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Como determinar o Programa de Manutenção</h2>
          <p className="mt-3 text-slate-700">
            O plano adequado deve ser definido considerando o tipo específico de operação,
            a aplicação (urbano, rodoviário, fora de estrada), especificações de óleos e graxas
            e o perfil de uso do veículo. Em geral, os serviços se organizam em:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
            <li><b>Primeiro Serviço:</b> checagens e conferências gerais pós-entrega.</li>
            <li><b>Intermediária:</b> checagens, troca de filtros e conferências gerais.</li>
            <li><b>Serviço X (básico):</b> troca de óleo + inspeções visuais; pode incluir atividades adicionais.</li>
            <li><b>Serviço Y:</b> combina o básico com atividades adicionais (ex.: óleos de transmissão e eixo traseiro conforme cronograma).</li>
            <li><b>Inspeção Legal:</b> segurança e manutenção conforme requisitos legais.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow">
          <h3 className="text-xl font-semibold">Verificações diárias/semanais</h3>
          <p className="mt-3 text-slate-700">
            Devem ser feitas pelo motorista e registradas na lista de verificação.
            Itens encontrados serão examinados na visita à concessionária/oficina.
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
            <li>Níveis: óleo do motor, fluido de arrefecimento, fluido de freio/embreagem, Arla 32.</li>
            <li>Vazamentos, mangueiras, conexões e ruídos anormais.</li>
            <li>Iluminação, limpadores, buzina e equipamentos de segurança.</li>
            <li>Documentação do veículo e validade de itens obrigatórios.</li>
          </ul>

          <h4 className="mt-6 font-semibold">Retratamento da cabine</h4>
          <p className="mt-2 text-slate-700">
            Entre o 9º e o 15º mês após a entrega, realizar retratamento anticorrosão (quando aplicável).
          </p>
        </div>
      </section>

      {/* GRUPOS DE OPERAÇÃO */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Grupos de Operação (perfil de uso)</h2>
        <p className="mt-2 text-slate-700">
          Selecione o grupo que melhor representa a sua operação para consultar os intervalos.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {/* Grupo I */}
          <div className="rounded-3xl bg-white shadow overflow-hidden">
            <div className="relative w-full bg-gray-50" style={{aspectRatio:"16/9"}}>
              <Image src="/images/manutencao/grupo-rodoviario-I.png" alt="Grupo I" fill className="object-contain p-3"/>
            </div>
            <div className="p-5">
              <h3 className="font-semibold">Grupo I</h3>
              <p className="text-slate-700 text-sm mt-1">
                Aplicações severas (aclives, rotas sinuosas, uso urbano com PTO ativo),
                alto fator de carga e consumo menor que 1,99 km/l.
              </p>
            </div>
          </div>

          {/* Grupo II */}
          <div className="rounded-3xl bg-white shadow overflow-hidden">
            <div className="relative w-full bg-gray-50" style={{aspectRatio:"16/9"}}>
              <Image src="/images/manutencao/grupo-rodoviario-II.png" alt="Grupo II" fill className="object-contain p-3"/>
            </div>
            <div className="p-5">
              <h3 className="font-semibold">Grupo II</h3>
              <p className="text-slate-700 text-sm mt-1">
                Aplicações rodoviárias padrão e boas condições de rodagem, consumo entre 2 e 2,99 km/l.
              </p>
            </div>
          </div>

          {/* Grupo III */}
          <div className="rounded-3xl bg-white shadow overflow-hidden">
            <div className="relative w-full bg-gray-50" style={{aspectRatio:"16/9"}}>
              <Image src="/images/manutencao/grupo-rodoviario-III.png" alt="Grupo III" fill className="object-contain p-3"/>
            </div>
            <div className="p-5">
              <h3 className="font-semibold">Grupo III</h3>
              <p className="text-slate-700 text-sm mt-1">
                Aplicações leves e rotas planas, consumo acima de 3 km/l, longas distâncias em boas condições.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBSERVAÇÕES ESSENCIAIS */}
      <section className="mt-10 rounded-3xl bg-white p-6 shadow">
        <h2 className="text-2xl font-bold">Observações Importantes</h2>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
          <li>Valores de intervalos expressos em quilômetros; considerar o que ocorrer primeiro: tempo ou quilometragem.</li>
          <li>Combustível com enxofre abaixo de 50 ppm e Biodiesel até 10%.</li>
          <li>Veículos saem com óleo sintético no eixo traseiro; se usar óleo mineral, reduzir o período conforme o manual.</li>
          <li>Operações específicas ou severas exigem plano ajustado pelo fabricante.</li>
          <li>Trocar o óleo do motor conforme quilometragem indicada ou a cada 500 horas de uso.</li>
          <li>Planos incorretos podem acarretar perda de garantia.</li>
        </ul>
      </section>

      {/* QUADROS DE REFERÊNCIA */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Quadros de Intervalos</h2>
        <p className="mt-2 text-slate-700">
          Utilize os quadros abaixo como referência visual para rodoviário e fora de estrada.
        </p>

        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <figure className="rounded-3xl bg-white p-3 shadow">
            <div className="relative w-full bg-gray-50 rounded-2xl overflow-hidden" style={{aspectRatio:"4/3"}}>
              <Image
                src="/images/manutencao/quadro-rodoviario-1.png"
                alt="Programa Rodoviário – Intervalos e Atividades"
                fill
                className="object-contain"
              />
            </div>
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              Programa Rodoviário: Intermediária, X, Y, atividades adicionais (Eixo, Gearbox, DPF)
            </figcaption>
          </figure>

          <figure className="rounded-3xl bg-white p-3 shadow">
            <div className="relative w-full bg-gray-50 rounded-2xl overflow-hidden" style={{aspectRatio:"4/3"}}>
              <Image
                src="/images/manutencao/quadro-offroad-1.png"
                alt="Programa Off-Road – Intervalos e Atividades"
                fill
                className="object-contain"
              />
            </div>
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              Programa Fora de Estrada: Revisões X e Y, atividades adicionais
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-12 mb-4 rounded-3xl bg-gradient-to-r from-[#1F6FEB] to-[#40E0D0] text-white p-8 shadow-xl">
        <h3 className="text-2xl font-bold">Precisa de um plano sob medida?</h3>
        <p className="mt-2 text-white/90">
          Entre em contato e ajustamos o programa conforme sua operação, frota e contratos de manutenção.
        </p>
        <div className="mt-4">
          <Link href="/contato" className="inline-block rounded-xl bg-white/10 px-5 py-2 hover:bg-white/20 transition">
            Falar com Especialista
          </Link>
        </div>
      </section>
    </main>
  );
}
