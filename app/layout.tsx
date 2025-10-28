 // app/layout.tsx
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "OTIAdriver",
  description: "Conhecimento Inteligente para Motoristas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
