import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

type ModuloPageProps = {
  params: { slug: string };
};

// Slugs disponíveis (cada um corresponde a um .md em content/modulos)
const MODULO_SLUGS = [
  'carregamento-eficiente',
  'analise-tco-sustentabilidade',
  'conformidade-legal',
  'eficiencia-diesel',
  'fator-humano-dirigibilidade',
  'inspecao-diagnostico-ev',
  'seguranca-alta-tensao',
];

// Gera as rotas estáticas /modulos/[slug]
export async function generateStaticParams() {
  return MODULO_SLUGS.map((slug) => ({ slug }));
}

// (opcional) Diz ao Next que só existem esses slugs
export const dynamicParams = false;

export default function ModuloPage({ params }: ModuloPageProps) {
  const filePath = path.join(
    process.cwd(),
    'content',
    'modulos',
    `${params.slug}.md`
  );

  // Se não achar o arquivo .md, mostra mensagem amigável
  if (!fs.existsSync(filePath)) {
    console.error(
      `Arquivo de módulo não encontrado: ${filePath} (slug: ${params.slug})`
    );

    return (
      <main style={{ padding: '2rem' }}>
        <h1>Módulo não encontrado</h1>
        <p>
          Não encontramos o conteúdo para o módulo:{' '}
          <strong>{params.slug}</strong>
        </p>
      </main>
    );
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(raw);
  const html = marked(content);

  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '16px',
      }}
    >
      {data.title && (
        <header style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ marginBottom: '0.5rem' }}>{String(data.title)}</h1>
          {data.description && (
            <p style={{ color: '#555' }}>{String(data.description)}</p>
          )}
        </header>
      )}

      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
