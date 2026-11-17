import { Reveal } from '../ui/Reveal';
import { CountUp } from '../ui/CountUp';
import { stats } from '../../data/devrious';

interface StatisticsProps {
  heading?: boolean;
}

export function Statistics({ heading = true }: StatisticsProps) {
  return (
    <section aria-label="Company statistics" className={`bg-canvas ${heading ? 'pb-24 md:pb-36' : 'py-20 md:py-28'}`}>
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-12 border-t border-line pt-14 lg:grid-cols-12">
          {heading &&
          <Reveal className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold leading-snug text-ink">Grounded in real work.</h2>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted">A young studio with systems already running in production.</p>
            </Reveal>
          }
          <dl className={`grid gap-10 sm:grid-cols-3 ${heading ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
            {stats.map((stat, i) =>
            <Reveal key={stat.label} delay={i * 0.06}>
                <div className="flex flex-col">
                  <dt className="order-2 mt-4 font-semibold text-ink">{stat.label}</dt>
                  <dd className="order-1 font-display text-6xl font-bold tracking-[-0.03em] text-ink md:text-7xl">
                    {stat.countTo !== undefined ?
                  <CountUp to={stat.countTo} from={stat.countTo > 1000 ? stat.countTo - 24 : 0} /> :

                  stat.value
                  }
                  </dd>
                  <dd className="order-3 mt-1 text-[15px] text-muted">{stat.detail}</dd>
                </div>
              </Reveal>
            )}
          </dl>
        </div>
      </div>
    </section>);

}