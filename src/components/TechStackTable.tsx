import React from 'react';
import { techStack } from '../data/techStack';

export function TechStackTable() {
  return (
    <dl className="divide-y divide-ink-100 border-y border-ink-100">
      {techStack.map((group) =>
      <div key={group.category} className="grid gap-3 py-4 sm:grid-cols-[180px_1fr] sm:items-center">
          <dt className="text-sm font-medium text-ink-500">{group.category}</dt>
          <dd className="flex flex-wrap gap-2">
            {group.tools.map((tool) =>
          <span key={tool} className="rounded-md bg-ink-50 px-2.5 py-1 text-sm font-semibold text-ink-900 ring-1 ring-ink-200">
                {tool}
              </span>
          )}
          </dd>
        </div>
      )}
    </dl>);

}