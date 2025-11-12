import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0A1D4D] to-[#038C73] text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-2 text-sm">
        <div className="space-x-4">
          <Link href="/termos" className="hover:underline">
            Termos e Condições
          </Link>
          <span>•</span>
          <Link href="/privacidade" className="hover:underline">
            Política de Privacidade
          </Link>
        </div>
        <p>
          © 2025 <span className="font-bold">OTIAdriver</span> | Conhecimento Inteligente para Motoristas
        </p>
      </div>
    </footer>
  );
}
