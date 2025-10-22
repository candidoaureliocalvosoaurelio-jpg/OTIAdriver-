import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-700 to-emerald-500 px-6 py-4 flex items-center justify-between shadow-md">
      {/* 🔹 Logo + Nome */}
      <div className="flex items-center gap-3">
        <img
          src="/logo-otiadriver.png" // certifique-se que o arquivo está em /public/
          alt="Logo OTIAdriver"
          className="w-12 h-12 object-contain"
        />

        <a
          href="/"
          className="font-bold text-2xl bg-gradient-to-r from-blue-800 via-blue-600 to-emerald-500 bg-clip-text text-transparent tracking-tight"
        >
          OTIAdriver
        </a>
      </div>

      {/* 🔹 Menu principal */}
      <nav className="hidden md:flex items-center gap-8 text-white font-semibold">
        <a href="#proposito" className="hover:text-gray-100 transition">Propósito</a>
        <a href="#planos" className="hover:text-gray-100 transition">Planos</a>
        <a href="#suporte" className="hover:text-gray-100 transition">Suporte</a>
      </nav>

      {/* 🔹 Globo de idiomas */}
      <LanguageSwitcher />
    </header>
  );
}
