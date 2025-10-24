// components/Header.tsx
import Link from "next/link";
// import LanguageSwitcher from "./LanguageSwitcher"; // se você usa

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Marca removida (logo + nome) */}

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/proposito" className="hover:underline">Propósito</Link>
          <Link href="/planos" className="hover:underline">Planos</Link>
          <Link href="/suporte" className="hover:underline">Suporte</Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* <LanguageSwitcher /> */}
          <span className="text-xs text-gray-500">BR</span>
        </div>
      </div>
    </header>
  );
}      {/* 🔹 Globo de idiomas */}
      <LanguageSwitcher />
    </header>
  );
}
