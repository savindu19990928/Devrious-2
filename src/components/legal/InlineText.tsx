import type { ReactNode } from 'react';

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function InlineText({ text }: {text: string;}) {
  return <>{renderInline(text)}</>;
}

function renderInline(text: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {renderInline(part.slice(2, -2))}
        </strong>);

    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a
          key={i}
          href={link[2]}
          className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition-colors duration-150 hover:decoration-brand">
          
          {link[1]}
        </a>);

    }
    return part;
  });
}