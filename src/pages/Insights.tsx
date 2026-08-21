import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { InsightCard } from '../components/insights/InsightCard';
import { InsightCover } from '../components/insights/InsightCover';
import { AISection } from '../components/AISection';
import { CTASection } from '../components/CTASection';
import { Reveal } from '../components/motion/Reveal';
import { FEATURED_INSIGHT, INSIGHTS, TOPICS } from '../data/insights';
import { DUR, EASE } from '../utils/motion';

export function InsightsPage() {
  const [topic, setTopic] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const reduce = useReducedMotion();

  const articles = useMemo(
    () => topic === 'All' ? INSIGHTS : INSIGHTS.filter((a) => a.topic === topic),
    [topic]
  );

  return (
    <>
      <PageHero
        eyebrow="Insights · Point of view"
        lines={['What we', 'have learned', 'building systems.']}
        copy="Short, practical writing about technology decisions inside real businesses — where AI belongs, when to replace a process, and what makes software survive its second year."
        index={[
        { label: 'Featured piece', href: '#featured' },
        { label: 'All writing', href: '#articles' },
        { label: 'Get new pieces', href: '#subscribe' }]
        }
        stats={[
        { value: '7', label: 'Pieces published' },
        { value: '4', label: 'Topics covered' },
        { value: 'Regular', label: 'Publishing rhythm' },
        { value: '0', label: 'Buzzwords allowed' }]
        } />
      

      <section id="featured" className="w-full scroll-mt-28 bg-ink py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading
            eyebrow="Featured"
            lines={['Start here.']}
            copy="The piece we send to every client considering an AI project." />
          

          <Reveal>
            <article className="mt-12 grid grid-cols-1 items-center gap-8 rounded-2xl border border-white/12 bg-graphite p-6 md:p-9 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="aspect-[4/3]">
                  <InsightCover variant={FEATURED_INSIGHT.variant} />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                  <span className="rounded-full border border-accent/50 px-2.5 py-1 text-accent">
                    {FEATURED_INSIGHT.topic}
                  </span>
                  <span>{FEATURED_INSIGHT.date}</span>
                </div>
                <h3 className="mt-5 font-display text-[clamp(1.9rem,5vw,3.25rem)] font-extrabold uppercase leading-[0.95] tracking-tightest text-paper">
                  {FEATURED_INSIGHT.title}
                </h3>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ash md:text-lg">
                  {FEATURED_INSIGHT.excerpt}
                </p>
                <ul className="mt-7 space-y-3 border-t border-white/12 pt-6">
                  {FEATURED_INSIGHT.takeaways.map((point, i) =>
                  <motion.li
                    key={point}
                    className="flex gap-3 text-[14px] leading-relaxed text-paper/85 md:text-[15px]"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: DUR.base, ease: EASE, delay: i * 0.05 }}>
                    
                      <ArrowRightIcon
                      className="mt-1 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true" />
                    
                      {point}
                    </motion.li>
                  )}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <AISection />

      <section id="articles" className="w-full scroll-mt-28 border-t border-white/10 bg-ink py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <SectionHeading
            eyebrow="All writing"
            lines={['Everything', 'else.']}
            copy="Filter by topic. Open any piece for the key points without leaving the page." />
          

          <Reveal>
            <ul className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1">
              {TOPICS.map((item) => {
                const active = topic === item;
                return (
                  <li key={item} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setTopic(item)}
                      aria-pressed={active}
                      className={`rounded-full border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      active ?
                      'border-accent bg-accent text-ink' :
                      'border-white/15 text-ash hover:border-white/35 hover:text-paper'}`
                      }>
                      
                      {item}
                    </button>
                  </li>);

              })}
            </ul>
          </Reveal>

          <ul key={topic} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((insight, i) =>
            <motion.li
              key={insight.slug}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.slow, ease: EASE, delay: i % 3 * 0.05 }}>
              
                <InsightCard insight={insight} />
              </motion.li>
            )}
          </ul>
        </div>
      </section>

      <section id="subscribe" className="w-full scroll-mt-28 bg-paper py-14 text-ink md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-10 rounded-2xl bg-ink p-8 text-paper md:p-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="font-display text-[clamp(1.9rem,5vw,3.25rem)] font-extrabold uppercase leading-[0.95] tracking-tightest">
                One useful email
                <br />
                <span className="text-accent">at a time.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ash">
                New writing, the occasional teardown of a system we built, and nothing
                else. Unsubscribe in one click.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              {subscribed ?
              <motion.div
                className="flex items-center gap-4 rounded-xl border border-accent bg-accent/10 p-6"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: DUR.base, ease: EASE }}>
                
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent">
                    <CheckIcon className="h-5 w-5 text-ink" aria-hidden="true" />
                  </span>
                  <p className="text-[15px] text-paper">
                    You're on the list. The next piece lands straight in your inbox.
                  </p>
                </motion.div> :

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSubscribed(true);
                }}
                className="flex flex-col gap-3 sm:flex-row">
                
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-white/20 bg-ink px-5 py-4 text-[15px] text-paper placeholder:text-ash focus:border-accent focus:outline-none" />
                
                  <button
                  type="submit"
                  className="shrink-0 rounded-full bg-accent px-7 py-4 font-display text-[15px] font-semibold text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5">
                  
                    Subscribe
                  </button>
                </form>
              }
            </div>
          </div>
        </div>
      </section>

      <CTASection
        lines={['Reading is', 'not building.']}
        copy="If something here matched a problem you have, the next step is a conversation, not another article." />
      
    </>);

}