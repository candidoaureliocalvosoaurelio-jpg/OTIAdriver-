// components/Footer.tsx
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gradient-to-r from-[#0AD88F] via-[#1473E6] to-[#0A2A6C] text-white text-center text-sm">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="opacity-90">
          © {year} OTIAdriver — Conhecimento Inteligente para Motoristas
        </p>
        <nav className="flex items-center gap-5">
          <a href="/essencia" className="hover:underline">Essência</a>
          <a href="/contato" className="hover:underline">Contato</a>
          <a href="/" className="hover:underline">Home</a>
        </nav>
      </div>
    </footer>
  );
}
