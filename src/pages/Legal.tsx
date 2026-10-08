import React from 'react';
import { Link } from 'react-router-dom';
import { legalDocs } from '../data/legal';
import { usePageTitle } from '../hooks/usePageTitle';

interface LegalProps {
  doc: keyof typeof legalDocs;
}

const tabs: {key: keyof typeof legalDocs;to: string;label: string;}[] = [
{ key: 'terms', to: '/terms', label: 'Terms of Service' },
{ key: 'privacy', to: '/privacy', label: 'Privacy Policy' },
{ key: 'cookies', to: '/cookies', label: 'Cookie Policy' }];


export function Legal({ doc }: LegalProps) {
  const content = legalDocs[doc];
  usePageTitle(content.title, {
    description: `Read Devrious's official ${content.title}. Learn about our policies, terms, and commitment to transparency.`,
    canonicalPath: `/${doc}`,
  });

  return (
    <div className="bg-canvas">
      <header className="border-b border-ink-100 bg-ink-50">
        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">{content.title}</h1>
          <p className="mt-3 text-sm text-ink-500">Last updated: {content.updated}</p>
          <nav aria-label="Legal documents" className="mt-8 flex flex-wrap gap-2">
            {tabs.map((t) =>
            <Link
              key={t.key}
              to={t.to}
              aria-current={t.key === doc ? 'page' : undefined}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium ${
              t.key === doc ? 'bg-brand-500 text-canvas' : 'bg-canvas text-ink-700 ring-1 ring-ink-200 hover:bg-ink-100'}`
              }>
              
                {t.label}
              </Link>
            )}
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <div className="space-y-10">
          {content.sections.map((section) =>
          <section key={section.heading}>
              <h2 className="font-display text-xl font-bold text-ink-950">{section.heading}</h2>
              {section.paragraphs?.map((p) =>
            <p key={p} className="mt-3 leading-relaxed text-ink-700">{p}</p>
            )}
              {section.list &&
            <ul className="mt-3 list-disc space-y-1.5 pl-6 text-ink-700 marker:text-brand-600">
                  {section.list.map((item) =>
              <li key={item.text}>
                      {item.label && <strong className="font-semibold text-ink-900">{item.label} </strong>}
                      {item.text}
                    </li>
              )}
                </ul>
            }
            </section>
          )}
        </div>
      </article>
    </div>);

}