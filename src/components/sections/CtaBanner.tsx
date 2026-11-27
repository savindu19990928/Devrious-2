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
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.3, ease: easeOut }}
        className="rounded-[20px] bg-brand text-white sm:rounded-[22px] md:rounded-frame">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-14 sm:gap-12 sm:px-8 sm:py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-[11px] sm:tracking-[0.26em]">
              Purpose in every pixel
            </p>
            <h2
              id="cta-title"
              className="mt-4 font-display text-[2rem] font-medium leading-[1.06] tracking-[-0.02em] xs:text-[2.4rem] sm:mt-6 sm:text-[3rem] sm:leading-[1.06] md:text-[3.75rem] lg:text-[4.6rem]">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
              Tell us where your business is heading. We will come back within one working day with a clear next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <ButtonLink to="/contact" variant="light" arrow={false}>
                Arrange a private consultation
              </ButtonLink>
              <ButtonLink to={contact.whatsappHref} external variant="outlineLight" arrow={false}>
                Message on WhatsApp
              </ButtonLink>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-1.5 border-t border-white/25 pt-6 sm:pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <span className="text-xs text-white/70 sm:text-sm">Write to us</span>
            <a
              href={contact.emailHref}
              className="break-all font-display text-lg font-bold transition-opacity duration-150 hover:opacity-80 sm:break-normal sm:text-2xl lg:text-xl xl:text-2xl">
              {contact.email}
            </a>
            <span className="mt-3 text-xs text-white/70 sm:mt-4 sm:text-sm">Call the studio</span>
            <a href={contact.phoneHref} className="font-display text-lg font-bold transition-opacity duration-150 hover:opacity-80 sm:text-2xl lg:text-xl xl:text-2xl">
              {contact.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
