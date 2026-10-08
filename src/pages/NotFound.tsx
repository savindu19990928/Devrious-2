import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export function NotFound() {
  usePageTitle('Page Not Found', {
    description: 'The requested page could not be found.',
    noindex: true,
  });
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-6 py-32 lg:px-8">
      <p className="text-sm font-semibold text-brand-700">404</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink-950">This page doesn’t exist.</h1>
      <p className="mt-4 text-lg text-ink-600">The link may be broken or the page may have moved.</p>
      <Link to="/" className="mt-8 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-canvas transition-colors duration-150 hover:bg-brand-400">
        Back to home
      </Link>
    </section>);

}