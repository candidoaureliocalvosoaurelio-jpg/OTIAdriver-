import Header from "../components/Header";
import TruckGrid from "../components/TruckGrid";
import MissaoVisaoValores from "../components/MissaoVisaoValores"; // ✅ Import novo

export default function Home() {
  return (
    <>
      {/* TOPO */}
      <Header />

      {/* FAIXA DE COR DEGRADÊ NO TOPO */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-800 to-green-500"></div>

      {/* CORPO PRINCIPAL */}
      <main className="mx-auto max-w-6xl px-4 py-10">

        {/* Título central */}
        <h1 className="text-6xl md:text-7xl font-bold text-center">
          <span style={{ color: "#0033A0" }}>OTIA</span>
          <span style={{ color: "#00C3A0" }}>driver</span>
        </h1>

        {/* Slogan */}
        <p className="mt-6 text-2xl text-center text-gray-700">
          Conhecimento Inteligente para Motoristas
        </p>

        {/* GRID DOS CAMINHÕES */}
        <div className="mt-12 w-full">
          <TruckGrid />
        </div>

        {/* 🔹 Seção Propósito (Missão, Visão e Valores) */}
        <MissaoVisaoValores />

      </main>

      {/* RODAPÉ */}
      <footer className="bg-gradient-to-r from-blue-900 to-green-600 text-white py-4 text-center mt-10">
        <p className="text-sm">
          Termos e Condições • Política de Privacidade <br />
          © 2025 <span className="font-bold">OTIAdriver</span> | Conhecimento Inteligente para Motoristas
        </p>
      </footer>
    </>
  );
}
