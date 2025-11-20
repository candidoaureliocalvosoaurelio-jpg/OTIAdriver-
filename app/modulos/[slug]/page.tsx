// app/modulos/[slug]/page.jsx

export default function ModuloPage({ params }) {
  return (
    <main style={{ padding: 32 }}>
      <h1>Rota dinâmica de módulos</h1>
      <p>
        Slug recebido: <strong>{params.slug}</strong>
      </p>
    </main>
  );
}
