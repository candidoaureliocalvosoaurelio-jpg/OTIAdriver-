import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

type ModuloPageProps = {
  params: { slug: string };
};

// Gera as rotas estáticas com base nos arquivos .md em content/modulos
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content', 'modulos');
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace('.md', ''),
    }));
}

export default function ModuloPage({ params }: ModuloPageProps) {
  const filePath = path.join(
    process.cwd(),
    'content',
    'modulos',
    `${params.slug}.md`
  );

  // Se não achar o arquivo .md, mostra mensagem amigável
  if (!fs.existsSync(filePath)) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>Módulo não encontrado</h1>
        <p>
          Não encontramos o conteúdo para o módulo: <strong>{params.slug}</strong>
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
