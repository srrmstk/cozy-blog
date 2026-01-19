import { marked } from 'marked';

marked.setOptions({
  breaks: true,
});

export function renderMarkdown(md: string): string | Promise<string> {
  return marked.parse(md);
}
