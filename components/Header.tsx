import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-700 to-emerald-500 py-4 px-6 flex items-center justify-between">
      {/* 🔹 Logo + Nome */}
      <div className="flex items-center space-x-3">
        <img
          src="/logo-otiadriver.png"
          alt="Logo OTIAdriver"
          className="w-12 h-12 object-contain"
        />
        <a
          href="/"
          className="font-bold text-2xl bg-gradient-to-r from-blue-800 via-blue-600 to-emerald-500 bg-clip-text text-transparent"
        >
          OTIAdriver
        </a>
      </div>

      {/* 🔹 Menu */}
      <nav className="hidden md:flex space-x-8 text-white font-semibold">
        <a href="#essencia" className="hover:text-gray-100">Propósito</a>
        <a href="#planos" className="hover:text-gray-100">Planos</a>
        <a href="#suporte" className="hover:text-gray-100">Suporte</a>
      </nav>

      {/* 🔹 Globo de idiomas */}
      <LanguageSwitcher />
    </header>
  );
}
