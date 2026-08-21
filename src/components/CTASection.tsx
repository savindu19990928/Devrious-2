import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRightIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { MaskLines } from './motion/MaskLines';
import { Reveal } from './motion/Reveal';
import { CONTACT, PORTAL_URL } from '../data/site';

const OUTLINE: React.CSSProperties = {
  WebkitTextStroke: '1px rgba(244,243,239,0.14)',
  color: 'transparent'
};

type CTASectionProps = {
  lines?: string[];
  copy?: string;
};

export function CTASection({
  lines = ['Have an idea?', "Let's build it."],
  copy = "Tell us what you're trying to build, improve, or solve. We'll help you figure out the next step."
}: CTASectionProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const xLeft = useTransform(scrollYProgress, [0, 1], ['4%', '-16%']);
  const xRight = useTransform(scrollYProgress, [0, 1], ['-16%', '4%']);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative w-full overflow-hidden border-t border-white/10 bg-ink py-12 md:py-16 lg:py-20">
      
      <div
        className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-4"
        aria-hidden="true">
        
        <motion.p
          style={reduce ? undefined : { x: xLeft }}
          className="whitespace-nowrap font-display text-[18vw] font-extrabold uppercase leading-none tracking-tightest">
          
          <span style={OUTLINE}>Where ambition becomes digital</span>
        </motion.p>
        <motion.p
          style={reduce ? undefined : { x: xRight }}
          className="whitespace-nowrap font-display text-[18vw] font-extrabold uppercase leading-none tracking-tightest">
          
          <span style={OUTLINE}>Where ambition becomes digital</span>
        </motion.p>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <h2 className="font-display text-[clamp(2.8rem,11vw,8rem)] font-extrabold uppercase leading-[0.86] tracking-tightest text-paper">
          <MaskLines lines={lines} />
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="max-w-md text-[15px] leading-relaxed text-ash md:text-lg">{copy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-6 rounded-full bg-accent px-8 py-4 font-display text-base font-semibold text-ink transition-transform duration-150 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink">
                
                Start a Project
                <ArrowUpRightIcon
                  className="h-5 w-5 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true" />
                
              </Link>
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between gap-6 rounded-full border border-white/20 px-8 py-4 font-display text-base font-semibold text-paper transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
                
                Client Portal
                <ArrowUpRightIcon
                  className="h-5 w-5 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true" />
                
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <ul className="border-t border-white/12">
              <li className="border-b border-white/12">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-4 py-5 transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:text-accent">
                  
                  <MailIcon className="h-5 w-5 text-ash" aria-hidden="true" />
                  <span className="font-display text-lg font-semibold tracking-tight text-paper group-hover:text-accent md:text-xl">
                    {CONTACT.email}
                  </span>
                  <ArrowUpRightIcon
                    className="ml-auto h-4 w-4 text-ash transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true" />
                  
                </a>
              </li>
              <li className="border-b border-white/12">
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="group flex items-center gap-4 py-5 transition-colors duration-150 ease-out hover:text-accent focus:outline-none focus-visible:text-accent">
                  
                  <PhoneIcon className="h-5 w-5 text-ash" aria-hidden="true" />
                  <span className="font-display text-lg font-semibold tracking-tight text-paper group-hover:text-accent md:text-xl">
                    {CONTACT.phone}
                  </span>
                  <ArrowUpRightIcon
                    className="ml-auto h-4 w-4 text-ash transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true" />
                  
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>);

}