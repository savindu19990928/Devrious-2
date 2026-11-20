import { Link, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon, MessageCircleIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { ButtonLink } from '../components/ui/ButtonLink';
import { CurrencyToggle } from '../components/ui/CurrencyToggle';
import { AnimatedPrice } from '../components/ui/AnimatedPrice';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductPreview } from '../components/products/ProductPreview';
import { ProductCard } from '../components/products/ProductCard';
import { StepsTimeline } from '../components/sections/StepsTimeline';
import { CtaBanner } from '../components/sections/CtaBanner';
import { NotFound } from './NotFound';
import { preBuildSteps, products, sharedPreBuildFeatures } from '../data/products';
import { contact } from '../data/devrious';
import { accentClasses, easeOut, productAccent } from '../utils/accent';
import { usePageMeta } from '../hooks/usePageMeta';

export function ProductDetail() {
  const { slug } = useParams();
  const reduce = useReducedMotion();
  const product = products.find((p) => p.slug === slug);
  usePageMeta(product?.name ?? 'System not found', product?.summary ?? 'This Pre Built could not be found.');

  if (!product) return <NotFound />;

  const accent = accentClasses(productAccent(product.category));
  const Icon = product.icon;
  const sameCategory = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const related = [...sameCategory, ...products.filter((p) => p.slug !== product.slug && p.category !== product.category)].slice(0, 3);

  return (
    <PageTransition>
      <section className="bg-canvas p-2 sm:p-3 md:p-4">
        <div className="relative isolate overflow-hidden rounded-[20px] bg-wine-deep pb-12 pt-24 text-white sm:rounded-[22px] sm:pb-16 sm:pt-28 md:rounded-frame md:pb-20 md:pt-36">
          <div aria-hidden="true" className="absolute inset-0 -z-20">
            <img src="/banners/prebuilds-banner.jpg" alt="" className="h-full w-full object-cover object-center" />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#160307]/92 via-[#24060c]/80 to-[#160307]/55"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/70 sm:text-sm">
                <li>
                  <Link to="/pre-builts" className="inline-flex items-center gap-1.5 transition-colors duration-150 hover:text-white">
                    <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> Pre Builts
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  {product.name}
                </li>
              </ol>
            </nav>

            <div className="mt-7 grid items-center gap-8 sm:mt-10 sm:gap-12 lg:grid-cols-12">
              <motion.div
                className="lg:col-span-5"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: easeOut }}>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12 ${accent.solid}`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">{product.category}</span>
                  <span className="text-xs font-semibold text-white/75 sm:text-sm">{product.bestFor}</span>
                </div>
                <h1 className="mt-5 text-3xl font-extrabold leading-[1.06] tracking-[-0.035em] text-white sm:mt-6 sm:text-4xl md:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-white/80 sm:mt-5 sm:text-lg">{product.summary}</p>

                <div className="mt-6 rounded-3xl border border-white/15 bg-white p-5 text-ink shadow-lift sm:mt-8 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                    <div>
                      <p className="text-xs font-semibold text-muted sm:text-sm">Starting from</p>
                      <AnimatedPrice priceLkr={product.priceLkr} className="text-3xl sm:text-4xl" heightClass="h-10 sm:h-12" />
                    </div>
                    <CurrencyToggle />
                  </div>
                  <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
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
                <p className="mt-3 text-center text-xs text-white/70">
                  Request a live walkthrough to see how we tailor {product.name} to your branches and team.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="tailored-heading" className="bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="flex items-center gap-2 text-xs font-semibold text-brand sm:text-sm">
              <span aria-hidden="true" className="h-1.5 w-6 rounded-full bg-tri-gradient" />
              System modules
            </p>
            <h2 id="tailored-heading" className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:mt-4 sm:text-3xl md:text-4xl">
              Proven foundations, <span className="text-gradient">tailored to your workflow.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Every Pre Built is a ready-made system you can deploy in weeks, not months. We configure the {product.name} around
              how your business runs — across single counters or multi-branch networks.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-6 lg:col-start-7">
            <h3 className="text-sm font-bold text-ink">What’s inside {product.name}</h3>
            <ul className="mt-4 flex flex-col sm:mt-5">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3.5 border-b border-line py-3.5 text-sm font-semibold text-ink sm:gap-4 sm:py-4 sm:text-base">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-jade-light">
                    <CheckIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-7xl px-4 sm:mt-20 sm:px-6 md:px-10">
          <Reveal className="rounded-[1.75rem] bg-ink p-6 text-white sm:rounded-frame sm:p-8 md:p-12">
            <p className="flex items-center gap-2 text-xs font-semibold text-jade sm:text-sm">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-jade" />
              Included in every Pre Built
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              Core platform capabilities built in.
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {sharedPreBuildFeatures.map((item) => {
                const FeatureIcon = item.icon;
                return (
                  <li key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-jade">
                      <FeatureIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{item.description}</p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <StepsTimeline id="product-steps-heading" label="How it works" title="From demo to deployed." steps={preBuildSteps} tone="canvas" />

      <section aria-labelledby="related-heading" className="bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <SectionHeading
            id="related-heading"
            label="More Pre Builts"
            title="You might also consider."
            action={{ label: 'All Pre Builts', to: '/pre-builts' }}
          />
          <ul className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {related.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={i * 0.05} className="h-full">
                  <ProductCard product={p} showActions={false} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </PageTransition>
  );
}
