import { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { industries } from '../../data/home';

export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="industries-title" className="bg-canvas pb-24 md:pb-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <SectionHeading
          id="industries-title"
          label="Industries"
          title="Sectors we know from the inside."
          description="We have shipped for factory floors, front desks and fleets — and we bring that context to every new brief." />
        

        <Reveal className="mt-14">
          <div className="hidden h-[560px] gap-3 lg:flex">
            {industries.map((industry, i) => {
              const isActive = i === active;
              return (
                <button
                  key={industry.name}
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  style={{ flexGrow: isActive ? 3.2 : 1 }}
                  className="group relative basis-0 overflow-hidden rounded-[22px] bg-wine-deep text-left transition-[flex-grow] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
                  
                  <img
                    src={industry.image}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out ${isActive ? 'scale-100' : 'scale-110'}`} />
                  
                  <span aria-hidden="true" className={`absolute inset-0 transition-colors duration-300 ${isActive ? 'bg-black/30' : 'bg-wine-deep/60'}`} />
                  <span className="absolute left-6 top-6 text-sm tabular-nums text-white/70">0{i + 1}</span>
                  <span className="absolute inset-x-6 bottom-6 block">
                    <span className="block font-display text-2xl font-bold text-white xl:text-3xl">{industry.name}</span>
                    <span
                      className={`mt-3 block max-w-sm transition-opacity duration-200 ${isActive ? 'opacity-100 delay-100' : 'opacity-0'}`}>
                      
                      <span className="block text-sm font-semibold text-jade-light">{industry.clients}</span>
                      <span className="mt-1.5 block leading-relaxed text-white/80">{industry.description}</span>
                    </span>
                  </span>
                </button>);

            })}
          </div>

          <ul className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 lg:hidden">
            {industries.map((industry) =>
            <li key={industry.name} className="relative aspect-[3/4] w-[78%] shrink-0 snap-start overflow-hidden rounded-[22px] sm:w-[46%]">
                <img src={industry.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <span aria-hidden="true" className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-jade-light">{industry.clients}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{industry.description}</p>
                </div>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>);

}