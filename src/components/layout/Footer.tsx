import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { companyLinks, contact, legalLinks } from '../../data/devrious';
import { products } from '../../data/products';
import { services } from '../../data/services';

const linkClass =
'text-[15px] text-white/60 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:underline';

export function Footer() {
  return (
    <footer className="bg-canvas px-2 pb-2 sm:px-3 sm:pb-3 md:px-4 md:pb-4">
      <div className="relative overflow-hidden rounded-[22px] bg-ink text-white md:rounded-frame">
        <div className="mx-auto max-w-[1320px] px-6 pb-10 pt-16 md:px-10 md:pt-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Link
                to="/"
                aria-label="Devrious home"
                className="inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                
                <Logo inverted />
              </Link>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
                Design-led websites, business systems and AI tools — crafted in Colombo, Sri Lanka, since 2024.
              </p>
              <div className="mt-8 flex flex-col gap-1.5">
                <a href={contact.emailHref} className="font-display text-xl font-bold text-white transition-colors duration-150 hover:text-jade">
                  {contact.email}
                </a>
                <a href={contact.phoneHref} className={linkClass}>
                  {contact.phone}
                </a>
              </div>
            </div>

            <nav aria-label="Company" className="lg:col-span-2">
              <h2 className="text-sm font-semibold text-white">Company</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {companyLinks.map((link) =>
                <li key={link.label}>
                    <Link to={link.to} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            <nav aria-label="Services" className="lg:col-span-3">
              <h2 className="text-sm font-semibold text-white">Services</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {services.map((service) =>
                <li key={service.slug}>
                    <Link to={`/services/${service.slug}`} className={linkClass}>
                      {service.title}
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            <nav aria-label="Pre Builds" className="lg:col-span-3">
              <h2 className="text-sm font-semibold text-white">Pre Builds</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {products.slice(0, 6).map((product) =>
                <li key={product.slug}>
                    <Link to={`/pre-builds/${product.slug}`} className={linkClass}>
                      {product.name}
                    </Link>
                  </li>
                )}
                <li>
                  <Link to="/pre-builds" className="text-[15px] font-semibold text-jade hover:text-white">
                    View all systems
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <p
            aria-hidden="true"
            className="mt-20 select-none font-display text-[23vw] font-bold italic lowercase leading-[0.85] tracking-[-0.04em] text-white/[0.06] transition-colors duration-300 hover:text-brand lg:text-[17rem]">
            
            devrious
          </p>

          <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) =>
              <li key={link.to}>
                  <Link
                  to={link.to}
                  className="text-sm text-white/50 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:underline">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
            <p className="text-sm text-white/50">© 2026 Devrious. Tech crafted with empathy.</p>
          </div>
        </div>
      </div>
    </footer>);

}