import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SearchXIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductFilters } from '../components/products/ProductFilters';
import { ProductCard } from '../components/products/ProductCard';
import { StepsTimeline } from '../components/sections/StepsTimeline';
import { CtaBanner } from '../components/sections/CtaBanner';
import { preBuildSteps, products, sharedPreBuildFeatures } from '../data/products';
import { usePageMeta } from '../hooks/usePageMeta';
import { easeOut } from '../utils/accent';
import type { ProductCategory } from '../types/content';

export function PreBuilds() {
  usePageMeta(
    'Pre Builts',
    'Ready-made sale & rental POS, CMS, ERP, hotel, fleet, social media and e-commerce systems from Devrious with role-based access and multi-branch management.'
  );
  const reduce = useReducedMotion();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'All' | ProductCategory>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.bestFor.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <PageTransition>
      <PageHero
        eyebrow={`Pre Builts · ${products.length} ready-to-deploy systems`}
        bannerImage="/banners/prebuilds-banner.jpg"
        title={
          <>
            Powerful business systems. <span className="text-[#ff5c78]">Ready when you are.</span>
          </>
        }
        description="Skip months of development. Deploy proven business management systems with role-based user access and multi-branch control built in.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact?intent=demo" variant="light">
            Request a demo
          </ButtonLink>
          <ButtonLink to="/contact?intent=quote" variant="outlineLight">
            Get a quote
          </ButtonLink>
        </div>
      </PageHero>

      <section aria-label="Pre Built catalogue" className="bg-canvas pb-16 pt-6 sm:pb-20 sm:pt-8 md:pb-28 md:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="glass relative z-30 overflow-hidden rounded-[1.5rem] p-3.5 shadow-soft sm:rounded-[1.75rem] sm:p-4 md:p-5 lg:sticky lg:top-[84px]">
            <ProductFilters
              query={query}
              onQueryChange={setQuery}
              category={category}
              onCategoryChange={setCategory}
              resultCount={filtered.length}
            />
          </div>

          {filtered.length > 0 ? (
            <motion.ul layout={!reduce} className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {filtered.map((product, i) => (
                  <motion.li
                    key={product.slug}
                    layout={!reduce}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.22, delay: Math.min(i * 0.03, 0.18), ease: easeOut }}>
                    <ProductCard product={product} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          ) : (
            <div className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-line bg-white px-5 py-16 text-center sm:mt-10 sm:px-6 sm:py-20">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-canvas text-muted">
                <SearchXIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-xl font-extrabold text-ink">No systems match that search</h2>
              <p className="mt-2 max-w-sm text-sm text-muted sm:text-base">
                Try another keyword or category — or tell us what you need and we’ll build it.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setCategory('All');
                }}
                className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand active:scale-[0.97]">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="standard-features-heading" className="bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            id="standard-features-heading"
            label="Included in every Pre Built"
            title="Enterprise foundations, standard from day one."
            description="Every system in our catalogue ships with multi-branch architecture, granular user permissions, live reporting and automated cloud backups."
          />
          <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {sharedPreBuildFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <li key={feature.title}>
                  <Reveal delay={i * 0.04} className="h-full">
                    <div className="flex h-full flex-col rounded-3xl border border-line bg-canvas p-5 sm:p-6">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand shadow-soft">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-lg font-extrabold tracking-tight text-ink">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <StepsTimeline
        id="prebuild-steps-heading"
        label="How Pre Builts work"
        title="From demo to deployed in weeks, not months."
        steps={preBuildSteps}
        tone="canvas"
      />
      <CtaBanner />
    </PageTransition>
  );
}
