import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
        {/* LOGO OTIAdriver */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo-otia.png"
            alt="OTIAdriver Logo"
            width={220}
            height={80}
            priority
          />
        </Link>

        {/* MENU DE NAVEGAÇÃO */}
        <nav className="flex space-x-6 text-gray-800 font-semibold text-lg">
          <Link href="/caminhoes" className="hover:text-blue-600 transition">
            Caminhões
          </Link>
          <Link href="/eletricos" className="hover:text-blue-600 transition">
            Elétricos
          </Link>
          <Link href="/planos" className="hover:text-blue-600 transition">
            Planos
          </Link>
        </nav>
      </div>
    </header>
  );
}
