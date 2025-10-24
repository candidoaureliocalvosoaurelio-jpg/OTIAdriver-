import Header from "../components/Header";
import TruckGrid from "../components/TruckGrid";

export default function Home() {
  return (
    <>
      {/* TOPO */}
      <Header />

      {/* CORPO PRINCIPAL */}
      <main className="mx-auto max-w-6xl px-4 py-16 flex flex-col items-center text-center">
        {/* Título central com as cores oficiais */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          <span style={{ color: "#0033A0" }}>OTIA</span>
          <span style={{ color: "#00C389" }}>driver</span>
        </h1>

        {/* Slogan (remova se não quiser) */}
        <p className="mt-6 text-2xl md:text-3xl font-semibold text-gray-800">
          Conhecimento Inteligente para Motoristas
        </p>

        {/* GRID DOS CAMINHÕES */}
        <div className="mt-12 w-full">
          <TruckGrid />
        </div>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-gradient-to-r from-[#0033A0] to-[#00C389] text-white py-6 text-center mt-16">
        <p className="text-sm">
          Termos e Condições • Política de Privacidade<br />
          © 2025 <span className="font-bold">OTIAdriver</span> — Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
