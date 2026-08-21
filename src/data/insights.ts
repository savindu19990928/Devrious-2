export type InsightVariant = 'grid' | 'flow' | 'stack' | 'orbit' | 'bars' | 'nodes';

export type Insight = {
  slug: string;
  title: string;
  topic: string;
  date: string;
  excerpt: string;
  takeaways: string[];
  variant: InsightVariant;
};

export const TOPICS = ['All', 'AI', 'Systems', 'Product', 'Engineering'];

export const FEATURED_INSIGHT: Insight = {
  slug: 'ai-is-not-the-product',
  title: "AI isn't the product. The outcome is.",
  topic: 'AI',
  date: 'August 2026',
  excerpt:
  'Most AI projects fail because they start with the model instead of the work. Here is the sequence we use to decide where AI actually earns its place inside a business system.',
  takeaways: [
  'Start from the task that costs the most human hours, not the technology that sounds most impressive.',
  'Every AI step needs a human checkpoint until its accuracy is boring.',
  'If you cannot describe the outcome in one sentence of business language, it is not ready to build.'],

  variant: 'flow'
};

export const INSIGHTS: Insight[] = [
{
  slug: 'spreadsheet-ceiling',
  title: 'The spreadsheet ceiling',
  topic: 'Systems',
  date: 'July 2026',
  excerpt:
  'Every growing business hits a point where the spreadsheet that saved them starts to cost them. Here is how to spot it early.',
  takeaways: [
  'The warning sign is not size, it is the number of people who must be asked before a number is trusted.',
  'Replace the workflow, not the file — copying a spreadsheet into software keeps the same problem.'],

  variant: 'grid'
},
{
  slug: 'build-around-the-workflow',
  title: 'Build around the workflow, not the feature list',
  topic: 'Product',
  date: 'July 2026',
  excerpt:
  'Feature lists describe software. Workflows describe work. The difference decides whether a system gets used after launch.',
  takeaways: [
  'Map the day of the person who will live in the system before writing any requirement.',
  'A feature nobody can place inside a workflow is a feature nobody will open twice.'],

  variant: 'stack'
},
{
  slug: 'document-intelligence-in-practice',
  title: 'Document intelligence, in practice',
  topic: 'AI',
  date: 'June 2026',
  excerpt:
  'What actually happens between an incoming PDF and a decision someone can defend — extraction, confidence, and human review.',
  takeaways: [
  'Confidence scoring matters more than raw accuracy — it tells you what a human still needs to see.',
  'Keep the original document one click away from every extracted field.'],

  variant: 'nodes'
},
{
  slug: 'mvp-without-regret',
  title: 'Shipping an MVP you will not regret',
  topic: 'Product',
  date: 'June 2026',
  excerpt:
  'A first version should be small in scope and serious in structure. The parts you must not cut, and the ones you should.',
  takeaways: [
  'Cut features, never cut data structure, access control, or the ability to observe what is happening.',
  'A narrow product used daily beats a broad product demoed once.'],

  variant: 'bars'
},
{
  slug: 'integrations-are-the-product',
  title: 'Integrations are the product',
  topic: 'Engineering',
  date: 'May 2026',
  excerpt:
  'The value of a business system is rarely in one screen. It is in the boring plumbing that keeps two systems telling the same truth.',
  takeaways: [
  'Decide which system owns each piece of data before writing a single line of sync code.',
  'Design for the failed sync — it will happen, and silence is the worst outcome.'],

  variant: 'orbit'
},
{
  slug: 'designing-for-the-second-year',
  title: 'Designing for the second year',
  topic: 'Engineering',
  date: 'April 2026',
  excerpt:
  'Software gets harder to change exactly when the business starts depending on it. What we do at the start to keep change cheap later.',
  takeaways: [
  'Write down the decisions, not just the code — future changes are blocked by missing context, not missing skill.',
  'A design system pays for itself the first time a new module has to look like it belongs.'],

  variant: 'flow'
}];