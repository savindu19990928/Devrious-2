import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { contact, navLinks } from '../../data/devrious';
import { showcaseServices } from '../../data/home';
import { easeOut } from '../../utils/accent';

interface MenuOverlayProps {
  isActive: (to: string) => boolean;
}

export function MenuOverlay({ isActive }: MenuOverlayProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      id="site-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: easeOut }}
      className="fixed inset-2 z-40 overflow-y-auto rounded-[20px] bg-wine-deep text-white sm:inset-3 sm:rounded-[24px] md:inset-4 md:rounded-frame">
      <div className="mx-auto grid min-h-full max-w-[1320px] gap-8 px-5 pb-8 pt-20 sm:gap-10 sm:px-8 sm:pb-10 sm:pt-28 md:px-10 md:pt-28 lg:grid-cols-12 lg:gap-12">
        <motion.ul
          className="flex flex-col lg:col-span-7"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}>
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <motion.li
                key={link.to}
                variants={{
                  hidden: { opacity: 0, y: reduce ? 0 : 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: easeOut } }
                }}>
                <Link
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  className="group flex items-center justify-between border-b border-white/10 py-3 font-display text-2xl font-bold tracking-tight transition-colors duration-150 hover:text-jade xs:text-3xl sm:py-4 sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className={active ? 'text-jade' : ''}>{link.label}</span>
                  <ArrowUpRightIcon
                    className="h-5 w-5 shrink-0 text-white/30 transition-transform duration-200 ease-out group-hover:rotate-45 group-hover:text-jade sm:h-6 sm:w-6 md:h-8 md:w-8"
                    aria-hidden="true"
                  />
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="flex flex-col gap-7 sm:gap-10 lg:col-span-4 lg:col-start-9"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.15, ease: easeOut }}>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1 lg:gap-10">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50 sm:text-sm sm:normal-case sm:tracking-normal">
                Services
              </h2>
              <ul className="mt-3 flex flex-col gap-2 sm:mt-4 sm:gap-2.5">
                {showcaseServices.map((s) => (
                  <li key={s.number}>
                    <Link to={s.to} className="text-base text-white/80 transition-colors duration-150 hover:text-white sm:text-lg">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-white/50 sm:text-sm sm:normal-case sm:tracking-normal">
                Get in touch
              </h2>
              <div className="mt-3 flex flex-col gap-1.5 text-base sm:mt-4 sm:gap-2 sm:text-lg">
                <a href={contact.emailHref} className="break-all text-white/80 transition-colors duration-150 hover:text-white sm:break-normal">
                  {contact.email}
                </a>
                <a href={contact.phoneHref} className="text-white/80 transition-colors duration-150 hover:text-white">
                  {contact.phone}
                </a>
                <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-white/50 sm:mt-2 sm:text-sm">{contact.address}</p>
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-center text-sm font-semibold text-ink transition-colors duration-150 hover:bg-jade-light sm:w-auto sm:px-7 sm:py-4 sm:text-[15px]">
            Arrange a private consultation
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
