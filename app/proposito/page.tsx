import Header from "../../components/Header"; // se o Header está em /components
import MissaoVisaoValores from "../../components/MissaoVisaoValores"; // (ou .../components/... se você mover)

export default function PropositoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#D7F1FB] py-10">
        <MissaoVisaoValores />
      </main>
    </>
  );
}
