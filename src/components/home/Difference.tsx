import { CheckIcon, MinusIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { differences } from '../../data/home';

export function Difference() {
  return (
    <section aria-labelledby="difference-title" className="bg-canvas pb-16 sm:pb-24 md:pb-36">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <SectionHeading
          id="difference-title"
          label="The difference"
          title="Why brands choose Devrious."
          description="The quiet details that decide whether a digital product keeps paying for itself."
        />

        <Reveal className="mt-10 sm:mt-14">
          <div className="hidden overflow-hidden rounded-[22px] border border-line bg-white md:block">
            <table className="w-full text-left">
              <caption className="sr-only">Typical agency compared with Devrious</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[22%] px-6 py-5 text-sm font-semibold text-muted lg:px-8 lg:py-6">
                    What matters
                  </th>
                  <th scope="col" className="w-[39%] px-6 py-5 text-sm font-semibold text-muted lg:px-8 lg:py-6">
                    Typical agency
                  </th>
                  <th
                    scope="col"
                    className="w-[39%] bg-wine-deep px-6 py-5 font-display text-lg font-bold italic lowercase text-white lg:px-8 lg:py-6">
                    devrious
                  </th>
                </tr>
              </thead>
              <tbody>
                {differences.map((row) => (
                  <tr key={row.topic} className="border-t border-line">
                    <th scope="row" className="px-6 py-5 font-display text-base font-bold text-ink lg:px-8 lg:py-6 lg:text-lg">
                      {row.topic}
                    </th>
                    <td className="px-6 py-5 text-sm text-muted lg:px-8 lg:py-6 lg:text-base">
                      <span className="flex items-start gap-3">
                        <MinusIcon className="mt-1 h-4 w-4 shrink-0 text-ink/30" aria-hidden="true" />
                        {row.typical}
                      </span>
                    </td>
                    <td className="bg-wine-deep px-6 py-5 text-sm text-white lg:px-8 lg:py-6 lg:text-base">
                      <span className="flex items-start gap-3">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-jade" aria-hidden="true" />
                        {row.devrious}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 md:hidden">
            {differences.map((row) => (
              <li key={row.topic} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
                <p className="px-4 pt-4 font-display text-base font-bold text-ink sm:px-5 sm:pt-5 sm:text-lg">{row.topic}</p>
                <div className="flex items-start gap-2.5 px-4 py-3.5 text-sm text-muted sm:px-5 sm:py-4">
                  <MinusIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink/30" aria-hidden="true" />
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-ink/40">Typical agency</span>
                    <span>{row.typical}</span>
                  </div>
                </div>
                <div className="mt-auto flex items-start gap-2.5 bg-wine-deep px-4 py-3.5 text-sm text-white sm:px-5 sm:py-4">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-jade" aria-hidden="true" />
                  <div>
                    <span className="block font-display text-[11px] font-bold italic lowercase tracking-wide text-jade">devrious</span>
                    <span>{row.devrious}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
