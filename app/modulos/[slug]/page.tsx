// app/modulos/[slug]/page.tsx

import React from "react";

type PageProps = {
  params: { slug: string };
};

export default function ModuloPage({ params }: PageProps) {
  return (
    <main style={{ padding: 32 }}>
      <h1>Página de módulo dinâmica</h1>
      <p>Slug recebido: <strong>{params.slug}</strong></p>
    </main>
  );
}
