import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

type ModuloPageProps = {
  params: { slug: string };
};

// Gera as páginas estáticas para cada .md em content/modulos
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
    `${params.slug}.md`,
  );

  if (!fs.existsSync(filePath)) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>Módulo não encontrado</h1>
        <p>Verifique se o endereço está correto.</p>
      </main>
    );
  }

  const file = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(file);
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
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
