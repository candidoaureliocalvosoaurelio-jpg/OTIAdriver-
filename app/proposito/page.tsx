// app/proposito/page.tsx
import MissaoVisaoValores from "@/components/MissaoVisaoValores";

export default function PropositoPage() {
  return (
    <>
      {/* Esconde o HERO (OTIAdriver grande) SOMENTE nesta página */}
      <style>{`#site-hero { display: none !important; }`}</style>

      {/* Fundo azul em tela cheia */}
      <main className="min-h-screen w-screen bg-[#D7F1FB] py-10">
        {/* O conteúdo interno fica centralizado e com largura confortável */}
        <div className="mx-auto max-w-6xl px-4">
          <MissaoVisaoValores />
        </div>
      </main>
    </>
  );
}
