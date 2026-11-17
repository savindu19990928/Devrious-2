import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SearchXIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { ButtonLink } from '../components/ui/ButtonLink';
import { ProductFilters } from '../components/products/ProductFilters';
import { ProductCard } from '../components/products/ProductCard';
import { StepsTimeline } from '../components/sections/StepsTimeline';
import { CtaBanner } from '../components/sections/CtaBanner';
import { preBuildSteps, products } from '../data/products';
import { usePageMeta } from '../hooks/usePageMeta';
import { easeOut } from '../utils/accent';
import type { ProductCategory } from '../types/content';

export function PreBuilds() {
  usePageMeta(
    'Pre Builds',
    'Ready-made POS, ERP, hotel, fleet, social media and e-commerce systems from Devrious. Deploy in weeks, not months.'
  );
  const reduce = useReducedMotion();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'All' | ProductCategory>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesQuery =
      !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.bestFor.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <PageTransition>
      <PageHero
        eyebrow={`Pre Builds · ${products.length} ready-to-deploy systems`}
        title={
        <>
            Powerful business systems. <span className="text-gradient">Ready when you are.</span>
          </>
        }
        description="Skip months of development. Deploy proven business management systems tailored to your workflow.">
        
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact?intent=demo" variant="jade">
            Request a demo
          </ButtonLink>
          <ButtonLink to="/contact?intent=quote" variant="secondary">
            Get a quote
          </ButtonLink>
        </div>
      </PageHero>

      <section aria-label="Pre Build catalogue" className="bg-canvas pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass relative z-30 lg:sticky lg:top-[84px] -mx-2 rounded-[1.75rem] p-4 shadow-soft md:p-5">
            <ProductFilters
              query={query}
              onQueryChange={setQuery}
              category={category}
              onCategoryChange={setCategory}
              resultCount={filtered.length} />
            
          </div>

          {filtered.length > 0 ?
          <motion.ul layout={!reduce} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {filtered.map((product, i) =>
              <motion.li
                key={product.slug}
                layout={!reduce}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22, delay: Math.min(i * 0.03, 0.18), ease: easeOut }}>
                
                    <ProductCard product={product} />
                  </motion.li>
              )}
              </AnimatePresence>
            </motion.ul> :

          <div className="mt-10 flex flex-col items-center rounded-3xl border border-dashed border-line bg-white px-6 py-20 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-canvas text-muted">
                <SearchXIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-xl font-extrabold text-ink">No systems match that search</h2>
              <p className="mt-2 max-w-sm text-muted">
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
          }
        </div>
      </section>

      <StepsTimeline id="prebuild-steps-heading" label="How Pre Builds work" title="From demo to deployed in weeks, not months." steps={preBuildSteps} />
      <CtaBanner />
    </PageTransition>);

}