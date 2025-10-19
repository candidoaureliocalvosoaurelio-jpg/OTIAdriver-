export const metadata = { title: "OTIAdriver" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
