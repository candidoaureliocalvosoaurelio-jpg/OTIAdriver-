export const metadata = {
  title: "OTIAdriver",
  description: "Conhecimento Inteligente para Motoristas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
