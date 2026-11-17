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
      className="fixed inset-2 z-40 overflow-y-auto rounded-[22px] bg-wine-deep text-white md:inset-4 md:rounded-frame">
      
      <div className="mx-auto grid min-h-full max-w-[1320px] gap-12 px-6 pb-10 pt-28 md:px-10 md:pt-36 lg:grid-cols-12">
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
                  className="group flex items-center justify-between border-b border-white/10 py-4 font-display text-4xl font-bold tracking-tight transition-colors duration-150 hover:text-jade md:text-6xl">
                  
                  <span className={active ? 'text-jade' : ''}>{link.label}</span>
                  <ArrowUpRightIcon
                    className="h-6 w-6 text-white/30 transition-transform duration-200 ease-out group-hover:rotate-45 group-hover:text-jade md:h-8 md:w-8"
                    aria-hidden="true" />
                  
                </Link>
              </motion.li>);

          })}
        </motion.ul>

        <motion.div
          className="flex flex-col gap-10 lg:col-span-4 lg:col-start-9"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.15, ease: easeOut }}>
          
          <div>
            <h2 className="text-sm font-semibold text-white/50">Services</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {showcaseServices.map((s) =>
              <li key={s.number}>
                  <Link to={s.to} className="text-lg text-white/80 transition-colors duration-150 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white/50">Get in touch</h2>
            <div className="mt-4 flex flex-col gap-2 text-lg">
              <a href={contact.emailHref} className="text-white/80 transition-colors duration-150 hover:text-white">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="text-white/80 transition-colors duration-150 hover:text-white">
                {contact.phone}
              </a>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/50">{contact.address}</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-jade-light">
            
            Arrange a private consultation
          </Link>
        </motion.div>
      </div>
    </motion.div>);

}