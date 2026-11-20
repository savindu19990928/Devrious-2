import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { companyLinks, contact, legalLinks } from '../../data/devrious';
import { products } from '../../data/products';
import { services } from '../../data/services';

const linkClass =
  'text-sm sm:text-[15px] text-white/60 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:underline';

export function Footer() {
  return (
    <footer className="bg-canvas px-2 pb-2 sm:px-3 sm:pb-3 md:px-4 md:pb-4">
      <div className="relative overflow-hidden rounded-[20px] bg-ink text-white sm:rounded-[22px] md:rounded-frame">
        <div className="mx-auto max-w-[1320px] px-5 pb-8 pt-12 sm:px-8 sm:pt-16 md:px-10 md:pb-10 md:pt-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-4">
              <Link
                to="/"
                aria-label="Devrious home"
                className="inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                <Logo inverted />
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-[15px]">
                Design-led websites, business systems and AI tools — crafted in Colombo, Sri Lanka, since 2024.
              </p>
              <div className="mt-6 flex flex-col gap-1.5 sm:mt-8">
                <a
                  href={contact.emailHref}
                  className="break-all font-display text-lg font-bold text-white transition-colors duration-150 hover:text-jade sm:break-normal sm:text-xl">
                  {contact.email}
                </a>
                <a href={contact.phoneHref} className={linkClass}>
                  {contact.phone}
                </a>
              </div>
            </div>

            <nav aria-label="Company" className="lg:col-span-2">
              <h2 className="text-sm font-semibold text-white">Company</h2>
              <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Services" className="lg:col-span-3">
              <h2 className="text-sm font-semibold text-white">Services</h2>
              <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link to={`/services/${service.slug}`} className={linkClass}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Pre Builts" className="sm:col-span-2 lg:col-span-3">
              <h2 className="text-sm font-semibold text-white">Pre Builts</h2>
              <ul className="mt-4 grid gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1">
                {products.slice(0, 6).map((product) => (
                  <li key={product.slug}>
                    <Link to={`/pre-builts/${product.slug}`} className={linkClass}>
                      {product.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/pre-builts" className="text-sm font-semibold text-jade hover:text-white sm:text-[15px]">
                    View all systems
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <p
            aria-hidden="true"
            className="mt-12 select-none overflow-hidden font-display text-[19vw] font-bold italic lowercase leading-[0.85] tracking-[-0.04em] text-white/[0.06] transition-colors duration-300 hover:text-brand sm:mt-16 sm:text-[21vw] lg:mt-20 lg:text-[17rem]">
            devrious
          </p>

          <div className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-8 sm:pt-8 md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-xs text-white/50 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:underline sm:text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/50 sm:text-sm">© 2026 Devrious. Tech crafted with empathy.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
