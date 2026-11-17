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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <motion.div
            initial={reduce ? false : { clipPath: 'inset(10% 6% 10% 6% round 32px)', opacity: 0.5 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0% round 32px)', opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15, ease: easeOut }}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-line shadow-lift sm:aspect-[16/9] sm:rounded-[2rem]">
            <motion.img
              src={project.image}
              alt={`${project.client} ${project.type} preview`}
              style={{ y: imageY }}
              className="h-[115%] w-full object-cover"
            />
          </motion.div>

          <dl className="grid gap-5 border-b border-line py-8 sm:grid-cols-3 sm:gap-6 sm:py-10">
            <div>
              <dt className="text-xs font-semibold text-muted sm:text-sm">Client</dt>
              <dd className="mt-1 font-bold text-ink">{project.client}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-muted sm:text-sm">Project</dt>
              <dd className="mt-1 font-bold text-ink">{project.type}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-muted sm:text-sm">Scope</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-semibold text-ink/70 sm:px-3 sm:text-xs">
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section aria-label="Case study" className="bg-canvas py-16 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-16 sm:px-6 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-sm font-bold text-brand">The challenge</h2>
            <p className="mt-3 text-xl font-bold leading-snug tracking-tight text-ink sm:mt-4 sm:text-2xl md:text-3xl">{project.challenge}</p>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-sm font-bold text-brand">Our approach</h2>
            <p className="mt-3 text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">{project.approach}</p>
            <ul className="mt-6 flex flex-col sm:mt-8">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3.5 border-b border-line py-3.5 text-sm font-bold text-ink sm:gap-4 sm:py-4 sm:text-base">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-jade-light">
                    <CheckIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-label="Client testimonial" className="bg-white py-16 sm:py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-10">
          <Reveal>
            <figure>
              <QuoteIcon className="h-7 w-7 text-violet sm:h-8 sm:w-8" aria-hidden="true" />
              <blockquote className="mt-5 text-lg font-bold leading-relaxed text-ink sm:mt-6 sm:text-xl md:text-2xl">“{quote.quote}”</blockquote>
              <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mt-8">
                <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-jade" />
                <span className="font-bold text-ink">{quote.name}</span>
                <span className="text-sm text-muted sm:text-base">
                  {quote.role}, {quote.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section aria-label="Next project" className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <Link
            to={`/portfolio/${next.slug}`}
            className="group grid items-center gap-5 rounded-[1.5rem] border border-line bg-white p-3.5 shadow-soft transition-shadow duration-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:gap-8 sm:rounded-[2rem] sm:p-4 md:grid-cols-12 md:p-6">
            <div className="overflow-hidden rounded-2xl md:col-span-5">
              <img
                src={next.image}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-1 pb-1 sm:gap-6 sm:px-0 sm:pb-0 md:col-span-7 md:pr-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-muted sm:text-sm">Next project</p>
                <p className="mt-1.5 text-2xl font-extrabold tracking-tight text-ink sm:mt-2 sm:text-3xl md:text-5xl">{next.client}</p>
                <p className="mt-1 text-sm text-muted sm:mt-2 sm:text-base">{next.type}</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-jade text-ink transition-transform duration-200 ease-out group-hover:rotate-45 sm:h-14 sm:w-14">
                <ArrowUpRightIcon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </span>
            </div>
          </Link>
          <div className="mt-8 flex justify-center sm:mt-10">
            <ButtonLink to="/contact?service=custom-web-development" variant="secondary">
              Start a similar project
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageTransition>
  );
}
