import { Link, useParams } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeftIcon, ArrowUpRightIcon, CheckIcon, QuoteIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { ButtonLink } from '../components/ui/ButtonLink';
import { CtaBanner } from '../components/sections/CtaBanner';
import { NotFound } from './NotFound';
import { projects } from '../data/projects';
import { testimonials } from '../data/devrious';
import { easeOut } from '../utils/accent';
import { usePageMeta } from '../hooks/usePageMeta';

export function ProjectDetail() {
  const { slug } = useParams();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -60]);
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  usePageMeta(project ? `${project.client} — ${project.type}` : 'Project not found', project?.brief ?? 'This project could not be found.');

  if (!project) return <NotFound />;

  const next = projects[(index + 1) % projects.length];
  const quote = testimonials[0];

  return (
    <PageTransition>
      <PageHero eyebrow={`Case study · ${project.type}`} title={project.client} description={project.brief} orbs={false}>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-ink/70 transition-colors duration-150 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> All projects
        </Link>
      </PageHero>

      <section aria-label="Project preview" className="bg-canvas">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={reduce ? false : { clipPath: 'inset(10% 6% 10% 6% round 32px)', opacity: 0.5 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0% round 32px)', opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15, ease: easeOut }}
            className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-line shadow-lift">
            
            <motion.img
              src={project.image}
              alt={`${project.client} ${project.type} preview`}
              style={{ y: imageY }}
              className="h-[115%] w-full object-cover" />
            
          </motion.div>

          <dl className="grid gap-6 border-b border-line py-10 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-semibold text-muted">Client</dt>
              <dd className="mt-1 font-bold text-ink">{project.client}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">Project</dt>
              <dd className="mt-1 font-bold text-ink">{project.type}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted">Scope</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) =>
                <span key={tag} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink/70">
                    {tag}
                  </span>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section aria-label="Case study" className="bg-canvas py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-sm font-bold text-brand">The challenge</h2>
            <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-ink md:text-3xl">{project.challenge}</p>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-sm font-bold text-brand">Our approach</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.approach}</p>
            <ul className="mt-8 flex flex-col">
              {project.highlights.map((h) =>
              <li key={h} className="flex items-center gap-4 border-b border-line py-4 font-bold text-ink">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-jade-light">
                    <CheckIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  </span>
                  {h}
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-label="Client testimonial" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <figure>
              <QuoteIcon className="h-8 w-8 text-violet" aria-hidden="true" />
              <blockquote className="mt-6 text-xl font-bold leading-relaxed text-ink md:text-2xl">“{quote.quote}”</blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-3">
                <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-jade" />
                <span className="font-bold text-ink">{quote.name}</span>
                <span className="text-muted">
                  {quote.role}, {quote.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section aria-label="Next project" className="bg-canvas py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            to={`/portfolio/${next.slug}`}
            className="group grid items-center gap-8 rounded-[2rem] border border-line bg-white p-4 shadow-soft transition-shadow duration-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:grid-cols-12 md:p-6">
            
            <div className="overflow-hidden rounded-2xl md:col-span-5">
              <img
                src={next.image}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]" />
              
            </div>
            <div className="flex items-center justify-between gap-6 md:col-span-7 md:pr-6">
              <div>
                <p className="text-sm font-semibold text-muted">Next project</p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">{next.client}</p>
                <p className="mt-2 text-muted">{next.type}</p>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-jade text-ink transition-transform duration-200 ease-out group-hover:rotate-45">
                <ArrowUpRightIcon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
          </Link>
          <div className="mt-10 flex justify-center">
            <ButtonLink to="/contact?service=custom-web-development" variant="secondary">
              Start a similar project
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageTransition>);

}