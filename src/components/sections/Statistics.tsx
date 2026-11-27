import { Reveal } from '../ui/Reveal';
import { CountUp } from '../ui/CountUp';
import { stats } from '../../data/devrious';

interface StatisticsProps {
  heading?: boolean;
}

export function Statistics({ heading = true }: StatisticsProps) {
  return (
    <section
      aria-label="Company statistics"
      className={`bg-canvas ${heading ? 'pb-16 sm:pb-24 md:pb-36' : 'py-16 sm:py-20 md:py-28'}`}>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <div className="grid gap-10 border-t border-line pt-10 sm:gap-12 sm:pt-14 lg:grid-cols-12">
          {heading && (
            <Reveal className="lg:col-span-3">
              <h2 className="font-display text-xl font-bold leading-snug text-ink sm:text-2xl">Grounded in real work.</h2>
              <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted sm:mt-3 sm:text-[15px]">
                A young studio with systems already running in production.
              </p>
            </Reveal>
          )}
          <dl className={`grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-8 xl:gap-10 ${heading ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="flex flex-col">
                  <dt className="order-2 mt-3 font-semibold text-ink sm:mt-4">{stat.label}</dt>
                  <dd className="order-1 whitespace-nowrap font-display text-4xl font-bold leading-none tracking-[-0.03em] text-ink xs:text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                    {stat.countTo !== undefined ? (
                      <CountUp to={stat.countTo} from={stat.countTo > 1000 ? stat.countTo - 24 : 0} />
                    ) : (
                      stat.value
                    )}
                  </dd>
                  <dd className="order-3 mt-1 text-sm text-muted sm:text-[15px]">{stat.detail}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
