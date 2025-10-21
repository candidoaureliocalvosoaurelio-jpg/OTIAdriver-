export const metadata: Metadata = {
  title: "OTIAdriver",
  description: "Conhecimento Inteligente para Motoristas",
};
type RootLayoutProps = { children: React.ReactNode;};

export default function 
RootLayout({children}:
RootLayoutProps) {
return (
    <html lang="pt-BR">
      <body>     
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
       </body> 
      </html>
  );
}
