import { PageTransition } from '../components/layout/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { ButtonLink } from '../components/ui/ButtonLink';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFound() {
  usePageMeta('Page not found', 'The page you were looking for could not be found.');
  return (
    <PageTransition>
      <PageHero
        eyebrow="404"
        bannerImage="/banners/legal-banner.jpg"
        title={
        <>
            This page wandered <span className="text-[#ff5c78]">off the map.</span>
          </>
        }
        description="The link may be outdated or mistyped. Everything else is right where you left it.">
        
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/" variant="light">Back to home</ButtonLink>
          <ButtonLink to="/pre-builts" variant="outlineLight">
            Explore Pre Builts
          </ButtonLink>
        </div>
      </PageHero>
    </PageTransition>);

}