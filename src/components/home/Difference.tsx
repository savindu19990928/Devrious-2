import { CheckIcon, MinusIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { differences } from '../../data/home';

export function Difference() {
  return (
    <section aria-labelledby="difference-title" className="bg-canvas pb-24 md:pb-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <SectionHeading
          id="difference-title"
          label="The difference"
          title="Why brands choose Devrious."
          description="The quiet details that decide whether a digital product keeps paying for itself." />
        

        <Reveal className="mt-14">
          <div className="hidden overflow-hidden rounded-[22px] border border-line bg-white md:block">
            <table className="w-full text-left">
              <caption className="sr-only">Typical agency compared with Devrious</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[22%] px-8 py-6 text-sm font-semibold text-muted">
                    What matters
                  </th>
                  <th scope="col" className="w-[39%] px-8 py-6 text-sm font-semibold text-muted">
                    Typical agency
                  </th>
                  <th scope="col" className="w-[39%] bg-wine-deep px-8 py-6 font-display text-lg font-bold italic lowercase text-white">
                    devrious
                  </th>
                </tr>
              </thead>
              <tbody>
                {differences.map((row) =>
                <tr key={row.topic} className="border-t border-line">
                    <th scope="row" className="px-8 py-6 font-display text-lg font-bold text-ink">
                      {row.topic}
                    </th>
                    <td className="px-8 py-6 text-muted">
                      <span className="flex items-start gap-3">
                        <MinusIcon className="mt-1 h-4 w-4 shrink-0 text-ink/30" aria-hidden="true" />
                        {row.typical}
                      </span>
                    </td>
                    <td className="bg-wine-deep px-8 py-6 text-white">
                      <span className="flex items-start gap-3 border-t border-white/0">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-jade" aria-hidden="true" />
                        {row.devrious}
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <ul className="flex flex-col gap-3 md:hidden">
            {differences.map((row) =>
            <li key={row.topic} className="overflow-hidden rounded-2xl border border-line bg-white">
                <p className="px-5 pt-5 font-display text-lg font-bold text-ink">{row.topic}</p>
                <p className="flex items-start gap-3 px-5 py-4 text-[15px] text-muted">
                  <MinusIcon className="mt-1 h-4 w-4 shrink-0 text-ink/30" aria-hidden="true" />
                  <span>
                    <span className="sr-only">Typical agency: </span>
                    {row.typical}
                  </span>
                </p>
                <p className="flex items-start gap-3 bg-wine-deep px-5 py-4 text-[15px] text-white">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-jade" aria-hidden="true" />
                  <span>
                    <span className="sr-only">Devrious: </span>
                    {row.devrious}
                  </span>
                </p>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </section>);

}