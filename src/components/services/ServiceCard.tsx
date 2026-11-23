import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { ServiceIllustration } from './ServiceIllustration';
import type { Service } from '../../types/content';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
  basePath?: string;
}

export function ServiceCard({ service, featured = false, basePath = '/services' }: ServiceCardProps) {
  return (
    <Link
      to={`${basePath}/${service.slug}`}
      className="gradient-ring group flex h-full flex-col rounded-3xl border border-line bg-white p-3 shadow-soft transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
      
      <ServiceIllustration service={service} />
      <div className={`flex flex-1 flex-col ${featured ? 'p-6 md:p-8' : 'p-6'}`}>
        <div className="flex items-start justify-between gap-4">
          <h3 className={`font-extrabold tracking-tight text-ink ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {service.title}
          </h3>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas text-ink transition-[transform,background-color] duration-200 ease-out group-hover:rotate-45 group-hover:bg-jade">
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 max-w-md leading-relaxed text-muted">{service.description}</p>
        <p className="mt-auto pt-6 text-sm font-bold text-ink/70 transition-colors duration-150 group-hover:text-brand">Learn more</p>
      </div>
    </Link>);

}