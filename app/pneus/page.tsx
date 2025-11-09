// app/pneus/page.tsx

export default function PneusPage() {
  return (
    <>
      {/* esconder o HERO nessa página também (apenas aqui) */}
      <style>{`#site-hero { display:none !important; }`}</style>

      <main className="min-h-screen w-screen bg-[#D7F1FB] py-10 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Página de Pneus
        </h1>
      </main>
    </>
  );
}

