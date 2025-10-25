import MissaoVisaoValores from "../components/MissaoVisaoValores";
import Header from "../components/Header";

export default function PropositoPage() {
  return (
    <>
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo principal */}
      <main className="min-h-screen bg-[#D7F1FB] py-10">
        <MissaoVisaoValores />
      </main>
    </>
  );
}
