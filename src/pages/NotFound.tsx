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
        title={
        <>
            This page wandered <span className="text-gradient">off the map.</span>
          </>
        }
        description="The link may be outdated or mistyped. Everything else is right where you left it.">
        
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/">Back to home</ButtonLink>
          <ButtonLink to="/pre-builds" variant="secondary">
            Explore Pre Builds
          </ButtonLink>
        </div>
      </PageHero>
    </PageTransition>);

}