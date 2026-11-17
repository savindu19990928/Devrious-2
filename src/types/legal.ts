export type PolicySlug = 'privacy-policy' | 'terms-and-conditions' | 'refund-policy' | 'cookie-policy';

export interface Policy {
  slug: PolicySlug;
  title: string;
  navLabel: string;
  summary: string;
  lastUpdated: string;
  body: string;
}

export type PolicyBlock =
{type: 'h2';id: string;text: string;} |
{type: 'h3';id: string;text: string;} |
{type: 'p';text: string;} |
{type: 'ul';items: string[];};

export interface PolicyHeading {
  id: string;
  text: string;
}