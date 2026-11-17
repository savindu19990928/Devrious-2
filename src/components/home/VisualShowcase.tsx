import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ShowcaseTile } from './ShowcaseTile';
import { projects } from '../../data/projects';
import { homeImages } from '../../data/home';

export function VisualShowcase() {
  const [first, second] = projects;

  return (
    <section aria-labelledby="work-title" className="bg-canvas pb-24 md:pb-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <SectionHeading
          id="work-title"
          label="Selected work"
          title="Work that carries the brand."
          action={{ label: 'View portfolio', to: '/portfolio' }} />
        

        <div className="mt-14 grid gap-3 md:grid-cols-12 md:gap-4">
          {first &&
          <Reveal className="md:col-span-7">
              <ShowcaseTile
              to={`/portfolio/${first.slug}`}
              image={first.image}
              title={first.client}
              meta={first.type}
              className="aspect-[4/5] md:aspect-auto md:h-[680px]" />
            
            </Reveal>
          }
          <div className="grid gap-3 md:col-span-5 md:gap-4">
            {second &&
            <Reveal delay={0.05}>
                <ShowcaseTile
                to={`/portfolio/${second.slug}`}
                image={second.image}
                title={second.client}
                meta={second.type}
                className="aspect-[4/3] md:aspect-auto md:h-[392px]" />
              
              </Reveal>
            }
            <Reveal delay={0.1}>
              <ShowcaseTile
                to="/services"
                image={homeImages.aiMedia}
                title="AI Media studio"
                meta="Imagery, motion & 3D for brands"
                className="aspect-[4/3] md:aspect-auto md:h-[272px]" />
              
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}