import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { timeline } from '../../data/about';

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section aria-labelledby="timeline-heading" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading id="timeline-heading" label="Our journey" title="Small team, steady direction." />
        <ol ref={ref} className="relative mt-14 ml-3 md:ml-0">
          <span aria-hidden="true" className="absolute bottom-2 left-0 top-2 w-px bg-line md:left-1/2" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : progress }}
            className="absolute bottom-2 left-0 top-2 w-px origin-top bg-tri-gradient md:left-1/2" />
          
          {timeline.map((item, i) => {
            const right = i % 2 === 1;
            return (
              <li key={item.title} className="relative pb-14 pl-10 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white shadow-soft md:left-1/2 ${
                  i === 0 || i === timeline.length - 1 ? 'bg-jade' : 'bg-brand'}`
                  } />
                
                <Reveal className={right ? 'md:col-start-2' : 'md:text-right'}>
                  <p className="text-sm font-extrabold text-brand">{item.marker}</p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">{item.title}</h3>
                  <p className={`mt-2 max-w-md leading-relaxed text-muted ${right ? '' : 'md:ml-auto'}`}>{item.description}</p>
                </Reveal>
              </li>);

          })}
        </ol>
      </div>
    </section>);

}