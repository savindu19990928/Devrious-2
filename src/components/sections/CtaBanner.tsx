import { motion, useReducedMotion } from 'framer-motion';
import { ButtonLink } from '../ui/ButtonLink';
import { contact } from '../../data/devrious';
import { easeOut } from '../../utils/accent';

export function CtaBanner() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="cta-title" className="bg-canvas px-2 pb-2 sm:px-3 sm:pb-3 md:px-4 md:pb-4">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.3, ease: easeOut }}
        className="rounded-[22px] bg-brand text-white md:rounded-frame">
        
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/70">Purpose in every pixel</p>
            <h2 id="cta-title" className="mt-6 font-display text-[2.6rem] font-medium leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[4.6rem]">
              Have a project in mind?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Tell us where your business is heading. We will come back within one working day with a clear next step.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              <ButtonLink to="/contact" variant="light" arrow={false}>
                Arrange a private consultation
              </ButtonLink>
              <ButtonLink to={contact.whatsappHref} external variant="outlineLight" arrow={false}>
                Message on WhatsApp
              </ButtonLink>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 border-t border-white/25 pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <span className="text-sm text-white/70">Write to us</span>
            <a href={contact.emailHref} className="font-display text-2xl font-bold transition-opacity duration-150 hover:opacity-80">
              {contact.email}
            </a>
            <span className="mt-4 text-sm text-white/70">Call the studio</span>
            <a href={contact.phoneHref} className="font-display text-2xl font-bold transition-opacity duration-150 hover:opacity-80">
              {contact.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </section>);

}