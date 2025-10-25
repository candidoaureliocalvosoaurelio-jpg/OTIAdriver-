export default function MissaoVisaoValores() {
  return (
    <section className="max-w-6xl mx-auto bg-[#D7F1FB] text-gray-800 rounded-2xl p-8 leading-relaxed">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Missão */}
        <div>
          <h2 className="text-xl font-semibold mb-3">🚀 Missão</h2>
          <p>
            Proporcionar conhecimento inteligente e acessível para motoristas
            em todo o mundo, unindo tecnologia, educação e inovação para elevar
            a segurança, a eficiência e o prestígio da profissão.
            <br />
            <br />
            A OTIAdriver existe para empoderar quem move o planeta — os
            condutores que impulsionam o transporte e o progresso global.
          </p>
        </div>

        {/* Visão */}
        <div>
          <h2 className="text-xl font-semibold mb-3">🌍 Visão</h2>
          <p>
            Ser a plataforma de IA número 1 do mundo em capacitação de
            motoristas, reconhecida por transformar o transporte em uma
            experiência inteligente, segura e sustentável, tornando-se um
            unicórnio global (Hectocorn) que revoluciona a mobilidade e o
            aprendizado profissional.
          </p>
        </div>

        {/* Valores */}
        <div>
          <h2 className="text-xl font-semibold mb-3">💎 Valores</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Inovação constante: Evoluir sempre.</li>
            <li>Educação inteligente: prática e personalizada.</li>
            <li>Segurança e responsabilidade nas estradas.</li>
            <li>Sustentabilidade e eficiência global.</li>
            <li>Excelência humana e ética profissional.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <h3 className="text-2xl font-extrabold text-blue-700">OTIAdriver</h3>
        <p className="text-gray-600">
          Conhecimento Inteligente para Motoristas
        </p>
      </div>
    </section>
  );
}
