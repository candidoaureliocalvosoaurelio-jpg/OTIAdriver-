import Header from "../components/Header";
import TruckGrid from "../components/TruckGrid";

export default function Home() {
  return (
    <>
      {/* TOPO */}
      <Header />

      {/* CORPO PRINCIPAL */}
      <main className="text-center mt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Bem-vindo à{" "}
          <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
            OTIAdriver
          </span>
        </h1>

        <p className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900">
          Conhecimento Inteligente para Motoristas
        </p>

        {/* GRID DOS CAMINHÕES */}
        <TruckGrid />
      </main>

      {/* RODAPÉ */}
      <footer className="bg-gradient-to-r from-blue-700 to-emerald-500 text-white py-6 text-center mt-10">
        <p className="text-sm">
          Termos e Condições • Política de Privacidade<br />
          © 2025 <span className="font-bold">OTIAdriver</span> — Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
