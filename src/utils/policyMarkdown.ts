import type { PolicyBlock, PolicyHeading } from '../types/legal';

export function slugify(text: string): string {
  return text.
  toLowerCase().
  replace(/[^a-z0-9\s-]/g, '').
  trim().
  replace(/\s+/g, '-');
}

/** Parses the small markdown subset used by the policy documents. */
export function parsePolicy(markdown: string): PolicyBlock[] {
  const blocks: PolicyBlock[] = [];
  let paragraph: string[] = [];
  let list: string[] | null = null;

  const flush = () => {
    if (paragraph.length) {
      blocks.push({ type: 'p', text: paragraph.join(' ') });
      paragraph = [];
    }
    if (list) {
      blocks.push({ type: 'ul', items: list });
      list = null;
    }
  };

  for (const raw of markdown.split('\n')) {
    const line = raw.trim();
    if (!line) {
      flush();
    } else if (line.startsWith('### ')) {
      flush();
      const text = line.slice(4);
      blocks.push({ type: 'h3', id: slugify(text), text });
    } else if (line.startsWith('## ')) {
      flush();
      const text = line.slice(3);
      blocks.push({ type: 'h2', id: slugify(text), text });
    } else if (/^[-*]\s/.test(line)) {
      if (paragraph.length) flush();
      list = list ?? [];
      list.push(line.slice(2));
    } else {
      if (list) flush();
      paragraph.push(line);
    }
  }
  flush();
  return blocks;
}

export function getHeadings(blocks: PolicyBlock[]): PolicyHeading[] {
  return blocks.flatMap((block) => block.type === 'h2' ? [{ id: block.id, text: block.text }] : []);
}