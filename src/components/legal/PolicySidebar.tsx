import { Link } from 'react-router-dom';
import type { Policy, PolicyHeading } from '../../types/legal';

interface PolicySidebarProps {
  policies: Policy[];
  currentSlug: string;
  headings: PolicyHeading[];
  activeId: string;
}

export function PolicySidebar({ policies, currentSlug, headings, activeId }: PolicySidebarProps) {
  return (
    <div className="flex flex-col gap-10 lg:sticky lg:top-32 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto lg:pb-6">
      <nav aria-label="Policies">
        <h2 className="text-sm font-semibold text-ink">Policies</h2>
        <ul className="mt-4 flex flex-col gap-1">
          {policies.map((policy) => {
            const current = policy.slug === currentSlug;
            return (
              <li key={policy.slug}>
                <Link
                  to={`/legal/${policy.slug}`}
                  aria-current={current ? 'page' : undefined}
                  className={`block rounded-xl px-3.5 py-2.5 text-[15px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  current ? 'bg-ink text-white' : 'text-ink/70 hover:bg-white hover:text-ink'}`
                  }>
                  
                  {policy.navLabel}
                </Link>
              </li>);

          })}
        </ul>
      </nav>

      {headings.length > 1 &&
      <nav aria-label="On this page">
          <h2 className="text-sm font-semibold text-ink">On this page</h2>
          <ul className="mt-4 flex flex-col border-l border-line">
            {headings.map((heading) => {
            const active = heading.id === activeId;
            return (
              <li key={heading.id}>
                  <a
                  href={`#${heading.id}`}
                  className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors duration-150 focus-visible:outline-none focus-visible:underline ${
                  active ? 'border-brand font-semibold text-ink' : 'border-transparent text-muted hover:text-ink'}`
                  }>
                  
                    {heading.text}
                  </a>
                </li>);

          })}
          </ul>
        </nav>
      }
    </div>);

}