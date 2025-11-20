import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export function renderModuloMarkdown(filename: string): string {
  const filePath = path.join(process.cwd(), 'content', 'modulos', filename);

  if (!fs.existsSync(filePath)) {
    return '<h1>Módulo não encontrado</h1><p>Arquivo de conteúdo não localizado.</p>';
  }

  const file = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(file);
  const html = marked(content);
  return html;
}
