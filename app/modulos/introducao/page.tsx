export default function IntroducaoPage() {
  return (
    <main
      style={{
        padding: 32,
        maxWidth: 800,
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        Módulo de Introdução
      </h1>

      <p style={{ fontSize: 18, marginBottom: 12 }}>
        Esta é uma página simples do módulo <strong>Introdução</strong>, criada só para
        testar a rota <code>/modulos/introducao</code>.
      </p>

      <p style={{ fontSize: 16 }}>
        Se você está vendo este texto no navegador, significa que:<br />
        ➜ a pasta <code>app/modulos/introducao</code> está correta;<br />
        ➜ o arquivo <code>page.tsx</code> está sendo reconhecido pelo Next.js;<br />
        ➜ a rota está funcionando sem mexer na estrutura do projeto.
      </p>
    </main>
  );
}
