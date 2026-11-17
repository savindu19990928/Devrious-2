import { Link, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, MessageCircleIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { ButtonLink } from '../components/ui/ButtonLink';
import { CurrencyToggle } from '../components/ui/CurrencyToggle';
import { AnimatedPrice } from '../components/ui/AnimatedPrice';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductPreview, productAccent } from '../components/products/ProductPreview';
import { ProductCard } from '../components/products/ProductCard';
import { StepsTimeline } from '../components/sections/StepsTimeline';
import { CtaBanner } from '../components/sections/CtaBanner';
import { NotFound } from './NotFound';
import { preBuildSteps, products } from '../data/products';
import { contact } from '../data/devrious';
import { accentClasses, easeOut } from '../utils/accent';
import { usePageMeta } from '../hooks/usePageMeta';

export function ProductDetail() {
  const { slug } = useParams();
  const reduce = useReducedMotion();
  const product = products.find((p) => p.slug === slug);
  usePageMeta(product?.name ?? 'System not found', product?.summary ?? 'This Pre Build could not be found.');

  if (!product) return <NotFound />;

  const accent = accentClasses(productAccent(product.category));
  const Icon = product.icon;
  const sameCategory = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const related = [...sameCategory, ...products.filter((p) => p.slug !== product.slug && p.category !== product.category)].slice(0, 3);

  return (
    <PageTransition>
      <section className="mesh-bg relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <div aria-hidden="true" className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-muted">
              <li>
                <Link to="/pre-builds" className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-ink">
                  <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> Pre Builds
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-5"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: easeOut }}>
              
              <div className="flex items-center gap-3">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.solid}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${accent.soft} ${accent.text}`}>{product.category}</span>
                <span className="text-sm font-semibold text-muted">{product.bestFor}</span>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] text-ink md:text-6xl">{product.name}</h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">{product.summary}</p>

              <div className="mt-8 rounded-3xl border border-line bg-white p-6 shadow-soft">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-muted">Starting from</p>
                    <AnimatedPrice priceLkr={product.priceLkr} className="text-4xl" heightClass="h-12" />
                  </div>
                  <CurrencyToggle />
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink to={`/contact?product=${product.slug}&intent=demo`} variant="jade">
                    Request a demo
                  </ButtonLink>
                  <ButtonLink to={`/contact?product=${product.slug}&intent=quote`} variant="secondary">
                    Get a quote
                  </ButtonLink>
                </div>
                <a
                  href={`${contact.whatsappHref}?text=${encodeURIComponent(`Hi Devrious, I'm interested in the ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
                  
                  <MessageCircleIcon className="h-4 w-4" aria-hidden="true" /> Ask on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              className="group lg:col-span-7"
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1, ease: easeOut }}>
              
              <ProductPreview product={product} size="lg" />
              <p className="mt-3 text-center text-xs text-muted">Illustrative preview — request a demo to see the live system.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section aria-labelledby="tailored-heading" className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 id="tailored-heading" className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-ink md:text-4xl">
              Proven foundations, <span className="text-gradient">tailored to your workflow.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-muted">
              Every Pre Build is a ready-made system you can deploy in weeks, not months. We configure the {product.name} around
              how your business runs, so you skip months of development without settling for software that doesn’t fit.
            </p>
          </Reveal>
        </div>
      </section>

      <StepsTimeline id="product-steps-heading" label="How it works" title="From demo to deployed." steps={preBuildSteps} tone="canvas" />

      <section aria-labelledby="related-heading" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading id="related-heading" label="More Pre Builds" title="You might also consider." action={{ label: 'All Pre Builds', to: '/pre-builds' }} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) =>
            <li key={p.slug}>
                <Reveal delay={i * 0.05} className="h-full">
                  <ProductCard product={p} showActions={false} />
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </PageTransition>);

}