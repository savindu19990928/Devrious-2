import { useSEO, type SEOProps } from './useSEO';

export function usePageTitle(title: string, options?: Partial<Omit<SEOProps, 'title'>>): void {
  useSEO({
    title,
    description: options?.description,
    canonicalPath: options?.canonicalPath,
    image: options?.image,
    type: options?.type,
    schema: options?.schema,
    noindex: options?.noindex,
  });
}