import { Link, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, ArrowUpRightIcon, CheckIcon, InfoIcon, LockIcon, QuoteIcon } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { ButtonLink } from '../components/ui/ButtonLink';
import { ProjectDevices } from '../components/portfolio/ProjectDevices';
import { formatProjectHost } from '../utils/url';
import { CtaBanner } from '../components/sections/CtaBanner';
import { NotFound } from './NotFound';
import { projects } from '../data/projects';
import { testimonials } from '../data/devrious';
import { easeOut } from '../utils/accent';
import { usePageMeta } from '../hooks/usePageMeta';

export function ProjectDetail() {
  const { slug } = useParams();
  const reduce = useReducedMotion();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const heading = project ? (project.subtitle ?? project.title) : 'Project not found';
  usePageMeta(
    project ? `${heading} — ${project.category}` : 'Project not found',
    project?.description ?? project?.brief ?? 'This project could not be found.'
  );

  if (!project) return <NotFound />;

  const next = projects[(index + 1) % projects.length];
  const matchedQuote = project.clientRep
    ? testimonials.find((t) => t.name === project.clientRep)
    : undefined;
  const host = project.url ? formatProjectHost(project.url) : undefined;

  return (
    <PageTransition>
      <PageHero
        eyebrow={project.confidentialUi ? `Case study · ${project.category} · Confidential UI` : `Case study · ${project.category}`}
        bannerImage="/banners/portfolio-banner.jpg"
        title={heading}
        description={project.description ?? project.brief}
        orbs={false}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          {project.url && host ? (
            <ButtonLink to={project.url} external variant="light">
              Visit {host}
            </ButtonLink>
          ) : (
            <ButtonLink to="/contact" variant="light">
              Discuss a similar system
            </ButtonLink>
          )}
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white/80 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:justify-start">
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> All projects
          </Link>
        </div>
      </PageHero>

      <section aria-label="Project preview" className="bg-canvas pt-6 sm:pt-8 md:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: easeOut }}>
            <ProjectDevices
              client={project.title}
              desktopImage={project.desktopImage}
              desktopVideo={project.desktopVideo}
              mobileImage={project.mobileImage}
              url={project.url}
              badge={project.category}
              layout="split"
            />
          </motion.div>

          {project.confidentialUi && (
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-brand/20 bg-white px-4 py-3 text-xs font-semibold text-ink shadow-soft sm:text-sm">
              <LockIcon className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>Confidential UI — illustrative interface preview shown; the live client system UI is private.</span>
            </div>
          )}

          {project.statusNote && (
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50/90 px-4 py-3 text-xs font-semibold text-amber-900 sm:text-sm">
              <InfoIcon className="h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
              <span>{project.statusNote}</span>
            </div>
          )}

          <dl className="grid gap-5 border-b border-line py-8 sm:grid-cols-2 sm:gap-6 sm:py-10 lg:grid-cols-4">
            <div>
              <dt className="text-xs font-semibold text-muted sm:text-sm">Client</dt>
              <dd className="mt-1 font-bold text-ink">{project.client}</dd>
              {project.clientRep && (
                <dd className="mt-0.5 text-xs font-medium text-muted">Rep: {project.clientRep}</dd>
              )}
            </div>
            <div>
              <dt className="text-xs font-semibold text-muted sm:text-sm">Category & Industry</dt>
              <dd className="mt-1 font-bold text-ink">{project.category}</dd>
              {project.industry && (
                <dd className="mt-0.5 text-xs font-medium text-muted">{project.industry}</dd>
              )}
            </div>
            <div>
              <dt className="text-xs font-semibold text-muted sm:text-sm">
                {project.url ? 'Live site' : 'Deployment'}
              </dt>
              <dd className="mt-1">
                {project.url && host ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-brand transition-colors duration-150 hover:text-ink">
                    <span>{host}</span>
                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="font-bold text-ink">{project.type}</span>
                )}
              </dd>
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
            <h2 className="text-sm font-bold text-brand">Overview & challenge</h2>
            <p className="mt-3 text-xl font-bold leading-snug tracking-tight text-ink sm:mt-4 sm:text-2xl md:text-3xl">{project.challenge}</p>
            {project.description && (
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>
            )}
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-sm font-bold text-brand">Key areas & approach</h2>
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

      {matchedQuote && (
        <section aria-label="Client testimonial" className="bg-white py-16 sm:py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-10">
            <Reveal>
              <figure>
                <QuoteIcon className="h-7 w-7 text-violet sm:h-8 sm:w-8" aria-hidden="true" />
                <blockquote className="mt-5 text-lg font-bold leading-relaxed text-ink sm:mt-6 sm:text-xl md:text-2xl">“{matchedQuote.quote}”</blockquote>
                <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mt-8">
                  <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-jade" />
                  <span className="font-bold text-ink">{matchedQuote.name}</span>
                  <span className="text-sm text-muted sm:text-base">
                    {matchedQuote.role}, {matchedQuote.company}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      <section aria-label="Next project" className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <Link
            to={`/portfolio/${next.slug}`}
            className="group grid items-center gap-5 rounded-[1.5rem] border border-line bg-white p-3.5 shadow-soft transition-shadow duration-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:gap-8 sm:rounded-[2rem] sm:p-4 md:grid-cols-12 md:p-6">
            <div className="overflow-hidden rounded-2xl bg-wine-deep p-3 sm:p-4 md:col-span-5">
              {next.desktopVideo ? (
                <video
                  src={next.desktopVideo}
                  poster={next.desktopImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="block h-auto w-full rounded-xl object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              ) : (
                <img
                  src={next.desktopImage}
                  alt={`${next.title} desktop view`}
                  loading="lazy"
                  className="block h-auto w-full rounded-xl object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              )}
            </div>
            <div className="flex items-center justify-between gap-4 px-1 pb-1 sm:gap-6 sm:px-0 sm:pb-0 md:col-span-7 md:pr-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-muted sm:text-sm">Next project</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2.5 sm:mt-2">
                  <p className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
                    {next.subtitle ?? next.title}
                  </p>
                  {next.confidentialUi && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-brand/25 bg-brand/[0.08] px-2.5 py-1 text-xs font-bold text-brand">
                      <LockIcon className="h-3 w-3 shrink-0" aria-hidden="true" />
                      Confidential UI
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted sm:mt-2 sm:text-base">{next.category}</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-jade text-ink transition-transform duration-200 ease-out group-hover:rotate-45 sm:h-14 sm:w-14">
                <ArrowUpRightIcon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </span>
            </div>
          </Link>
          <div className="mt-8 flex justify-center sm:mt-10">
            <ButtonLink to="/contact" variant="secondary">
              Start a similar project
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageTransition>
  );
}
