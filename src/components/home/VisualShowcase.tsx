import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ShowcaseTile } from './ShowcaseTile';
import { projects } from '../../data/projects';

export function VisualShowcase() {
  const [first, second, third, fourth] = projects;

  return (
    <section aria-labelledby="work-title" className="bg-canvas pb-16 sm:pb-24 md:pb-36">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-10">
        <SectionHeading
          id="work-title"
          label="Selected work"
          title="Work that carries the brand."
          action={{ label: 'View portfolio', to: '/portfolio' }}
        />

        <div className="mt-10 grid gap-3 sm:mt-14 md:grid-cols-2 md:gap-4 lg:grid-cols-12">
          {first && (
            <Reveal className="h-full lg:col-span-7">
              <ShowcaseTile
                to={`/portfolio/${first.slug}`}
                image={first.image}
                desktopImage={first.desktopImage}
                desktopVideo={first.desktopVideo}
                mobileImage={first.mobileImage}
                externalUrl={first.url}
                confidentialUi={first.confidentialUi}
                title={first.title}
                meta={first.category}
                className="h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]"
              />
            </Reveal>
          )}
          {second && (
            <Reveal delay={0.05} className="h-full lg:col-span-5">
              <ShowcaseTile
                to={`/portfolio/${second.slug}`}
                image={second.image}
                desktopImage={second.desktopImage}
                desktopVideo={second.desktopVideo}
                mobileImage={second.mobileImage}
                externalUrl={second.url}
                confidentialUi={second.confidentialUi}
                title={second.title}
                meta={second.category}
                className="h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]"
              />
            </Reveal>
          )}
          {third && (
            <Reveal delay={0.08} className="h-full lg:col-span-5">
              <ShowcaseTile
                to={`/portfolio/${third.slug}`}
                image={third.image}
                desktopImage={third.desktopImage}
                desktopVideo={third.desktopVideo}
                mobileImage={third.mobileImage}
                externalUrl={third.url}
                confidentialUi={third.confidentialUi}
                title={third.title}
                meta={third.category}
                className="h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]"
              />
            </Reveal>
          )}
          {fourth && (
            <Reveal delay={0.12} className="h-full lg:col-span-7">
              <ShowcaseTile
                to={`/portfolio/${fourth.slug}`}
                image={fourth.image}
                desktopImage={fourth.desktopImage}
                desktopVideo={fourth.desktopVideo}
                mobileImage={fourth.mobileImage}
                externalUrl={fourth.url}
                confidentialUi={fourth.confidentialUi}
                title={fourth.title}
                meta={fourth.category}
                className="h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]"
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
