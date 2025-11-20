import { renderModuloMarkdown } from '../markdownUtils';

export default function Page() {
  const html = renderModuloMarkdown('fator-humano-dirigibilidade.md');

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
