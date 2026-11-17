import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { ScrollRevealText } from '../ui/ScrollRevealText';
import { aboutStatement, homeImages, principles } from '../../data/home';

export function AboutIntro() {
  const imageRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section aria-labelledby="about-title" className="bg-canvas py-24 md:py-36">
      <div className="mx-auto grid max-w-[1320px] gap-y-14 px-6 md:px-10 lg:grid-cols-12 lg:gap-x-10">
        <Reveal className="lg:col-span-3">
          <h2 id="about-title" className="flex items-center gap-2.5 font-sans text-sm font-semibold text-ink/60">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
            About us
          </h2>
        </Reveal>
        <div className="lg:col-span-9">
          <ScrollRevealText
            text={aboutStatement}
            className="font-display text-[1.85rem] font-medium leading-[1.22] tracking-[-0.01em] text-ink md:text-[2.75rem] lg:text-[3.1rem]" />
          
        </div>

        <div ref={imageRef} className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-wine-deep lg:col-span-4 lg:col-start-4">
          <motion.img
            src={homeImages.about}
            alt="Two Devrious team members reviewing a website design at a studio desk"
            style={{ y: reduce ? 0 : y }}
            className="absolute -inset-y-[10%] inset-x-0 h-[120%] w-full object-cover" />
          
        </div>

        <div className="flex flex-col justify-end lg:col-span-5">
          <ul className="flex flex-col">
            {principles.map((p, i) =>
            <motion.li
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-[1fr] gap-2 border-t border-line py-6 sm:grid-cols-[180px_1fr] sm:gap-6">
              
                <h3 className="font-sans text-lg font-bold text-ink">{p.title}</h3>
                <p className="leading-relaxed text-muted">{p.body}</p>
              </motion.li>
            )}
          </ul>
          <Reveal delay={0.1} className="border-t border-line pt-8">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-[15px] font-semibold text-ink transition-colors duration-150 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              
              Our story
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-transform duration-200 ease-out group-hover:rotate-45">
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>);

}