import React from 'react';
import { Link } from 'react-router-dom';
import { FileTextIcon, ShieldCheckIcon, CalendarIcon, ArrowUpRightIcon } from 'lucide-react';
import { legalDocs } from '../data/legal';
import { usePageTitle } from '../hooks/usePageTitle';

interface LegalProps {
  doc: keyof typeof legalDocs;
}

const tabs: { key: keyof typeof legalDocs; to: string; label: string }[] = [
  { key: 'refund', to: '/refund', label: 'Refund & Cancellation' },
  { key: 'privacy', to: '/privacy', label: 'Privacy Policy' },
  { key: 'terms', to: '/terms', label: 'Terms & Conditions' },
  { key: 'cookies', to: '/cookies', label: 'Cookie Policy' },
];

function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function renderFormattedValue(text: string, label?: string) {
  if (label?.toLowerCase().includes('email')) {
    return (
      <a
        href={`mailto:${text.trim()}`}
        className="font-medium text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-700"
      >
        {text}
      </a>
    );
  }
  if (label?.toLowerCase().includes('phone')) {
    const cleanPhone = text.replace(/[^0-9+]/g, '');
    return (
      <a
        href={`tel:${cleanPhone}`}
        className="font-medium text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-700"
      >
        {text}
      </a>
    );
  }
  if (label?.toLowerCase().includes('website')) {
    const cleanUrl = text.startsWith('http') ? text : `https://${text}`;
    return (
      <a
        href={cleanUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 font-medium text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-brand-700"
      >
        {text}
        <ArrowUpRightIcon className="h-3 w-3" />
      </a>
    );
  }
  return text;
}

export function Legal({ doc }: LegalProps) {
  const content = legalDocs[doc] ?? legalDocs.terms;

  usePageTitle(content.title, {
    description: `Read Devrious's official ${content.title}. Learn about our policies, terms, and commitment to transparency.`,
    canonicalPath: `/${doc === 'terms' ? 'terms' : doc}`,
  });

  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Banner */}
      <header className="border-b border-ink-100 bg-ink-50/70 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 ring-1 ring-inset ring-brand-500/20">
              <ShieldCheckIcon className="h-3.5 w-3.5 text-brand-600" />
              Official Devrious Policy
            </span>
            <span className="text-ink-400">•</span>
            <span className="inline-flex items-center gap-1 text-ink-500">
              <CalendarIcon className="h-3.5 w-3.5 text-ink-400" />
              Last updated: {content.updated}
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
            {content.title}
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-600 sm:text-base">
            Clear, transparent, and binding terms governing your relationship with Devrious, our website, prebuilt
            solutions, and software engineering services.
          </p>

          {/* Navigation Tabs */}
          <nav aria-label="Legal documents" className="mt-8 flex flex-wrap gap-2 pt-2">
            {tabs.map((t) => {
              const isActive = t.key === doc;
              return (
                <Link
                  key={t.key}
                  to={t.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-150 ${isActive
                      ? 'bg-brand-500 text-canvas shadow-sm'
                      : 'bg-canvas text-ink-700 ring-1 ring-ink-200/80 hover:bg-ink-100 hover:text-ink-900'
                    }`}
                >
                  <FileTextIcon className={`h-4 w-4 ${isActive ? 'text-canvas' : 'text-ink-400'}`} />
                  {t.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Body */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_280px]">
          {/* Main Article Content */}
          <article className="min-w-0">
            <div className="space-y-12 rounded-2xl bg-canvas p-6 shadow-sm ring-1 ring-ink-100 sm:p-10">
              {content.sections.map((section, idx) => {
                const sectionId = slugifyHeading(section.heading);
                return (
                  <section
                    key={`${section.heading}-${idx}`}
                    id={sectionId}
                    className="scroll-mt-24 border-b border-ink-100/80 pb-10 last:border-b-0 last:pb-0"
                  >
                    <h2 className="group flex items-center font-display text-xl font-bold tracking-tight text-ink-950 sm:text-2xl">
                      <span>{section.heading}</span>
                    </h2>

                    {section.paragraphs?.map((p, pIdx) => (
                      <p key={pIdx} className="mt-3.5 leading-relaxed text-ink-700">
                        {p}
                      </p>
                    ))}

                    {section.list && (
                      <ul className="mt-4 list-disc space-y-2 pl-6 text-ink-700 marker:text-brand-500">
                        {section.list.map((item, iIdx) => (
                          <li key={iIdx} className="leading-relaxed">
                            {item.label && (
                              <strong className="font-semibold text-ink-900">
                                {item.label}{' '}
                              </strong>
                            )}
                            {renderFormattedValue(item.text, item.label)}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.after?.map((p, aIdx) => (
                      <p key={aIdx} className="mt-4 leading-relaxed text-ink-700">
                        {p}
                      </p>
                    ))}

                    {/* Subsections */}
                    {section.subsections && (
                      <div className="mt-8 space-y-8 pl-1 sm:pl-4">
                        {section.subsections.map((sub, sIdx) => {
                          const subId = slugifyHeading(sub.heading);
                          return (
                            <div
                              key={`${sub.heading}-${sIdx}`}
                              id={subId}
                              className="scroll-mt-24 rounded-xl border border-ink-100 bg-ink-50/40 p-5 sm:p-6"
                            >
                              <h3 className="font-display text-lg font-bold text-ink-900">
                                {sub.heading}
                              </h3>

                              {sub.paragraphs?.map((p, spIdx) => (
                                <p key={spIdx} className="mt-3 leading-relaxed text-ink-700">
                                  {p}
                                </p>
                              ))}

                              {sub.list && (
                                <ul className="mt-3.5 list-disc space-y-1.5 pl-5 text-ink-700 marker:text-brand-600">
                                  {sub.list.map((item, siIdx) => (
                                    <li key={siIdx} className="leading-relaxed">
                                      {item.label && (
                                        <strong className="font-semibold text-ink-900">
                                          {item.label}{' '}
                                        </strong>
                                      )}
                                      {renderFormattedValue(item.text, item.label)}
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {sub.after?.map((p, saIdx) => (
                                <p key={saIdx} className="mt-3 leading-relaxed text-ink-700">
                                  {p}
                                </p>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </article>

          {/* Sticky Quick-Navigation Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-ink-100 bg-canvas p-5 shadow-sm ring-1 ring-ink-100">
              <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-900">
                <FileTextIcon className="h-3.5 w-3.5 text-brand-500" />
                Table of Contents
              </h4>

              <div className="mt-4 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                <nav className="space-y-1 text-xs">
                  {content.sections.map((section, sIdx) => {
                    const sectionId = slugifyHeading(section.heading);
                    return (
                      <div key={`nav-${sectionId}-${sIdx}`}>
                        <a
                          href={`#${sectionId}`}
                          className="block rounded-md px-2 py-1.5 font-medium text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                          {section.heading}
                        </a>
                        {section.subsections && (
                          <div className="ml-2 border-l border-ink-200 pl-2 space-y-1 my-0.5">
                            {section.subsections.map((sub, subIdx) => {
                              const subId = slugifyHeading(sub.heading);
                              return (
                                <a
                                  key={`sub-${subId}-${subIdx}`}
                                  href={`#${subId}`}
                                  className="block truncate rounded px-1.5 py-1 text-[11px] text-ink-500 hover:text-brand-600"
                                  title={sub.heading}
                                >
                                  {sub.heading}
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              <div className="mt-6 border-t border-ink-100 pt-4">
                <p className="text-xs text-ink-500 leading-relaxed">
                  Have questions regarding this agreement?
                </p>
                <a
                  href="mailto:info@devrious.lk"
                  className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-ink-900 px-3 py-2 text-xs font-medium text-canvas hover:bg-ink-800"
                >
                  Contact Legal Support
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}