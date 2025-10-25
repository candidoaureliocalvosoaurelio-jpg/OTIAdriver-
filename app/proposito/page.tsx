// app/proposito/page.tsx
export const metadata = {
  title: "Propósito | OTIAdriver",
  description: "Missão, Visão e Valores da OTIAdriver",
};

export default function PropositoPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Propósito</h1>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-5 bg-white">
          <h2 className="font-bold text-lg mb-2">🚀 Missão</h2>
          <p className="text-gray-700">
            Proporcionar conhecimento inteligente e acessível para motoristas em todo o mundo,
            unindo tecnologia, educação e inovação para elevar a segurança, eficiência e prestígio da profissão.
          </p>
        </div>

        <div className="rounded-xl border p-5 bg-white">
          <h2 className="font-bold text-lg mb-2">🌍 Visão</h2>
          <p className="text-gray-700">
            Ser a plataforma de IA nº 1 do mundo na capacitação de motoristas, tornando-se um unicórnio global
            (Hectocorn) e revolucionando mobilidade e aprendizado profissional.
          </p>
        </div>

        <div className="rounded-xl border p-5 bg-white">
          <h2 className="font-bold text-lg mb-2">💎 Valores</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Inovação constante e ética.</li>
            <li>Educação prática e acessível.</li>
            <li>Segurança e responsabilidade nas estradas.</li>
            <li>Sustentabilidade e transição para frotas limpas.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
