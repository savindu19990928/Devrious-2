export type Engagement = {
  num: string;
  name: string;
  bestFor: string;
  copy: string;
  includes: string[];
  scope: string;
};

export const ENGAGEMENTS: Engagement[] = [
{
  num: '01',
  name: 'Discovery Sprint',
  bestFor: 'Ideas that need shape before budget',
  copy: 'A short, focused engagement that turns an ambition into a defined system: scope, workflows, architecture, and a build plan you can act on with or without us.',
  includes: [
  'Business & workflow mapping',
  'Solution architecture',
  'Interface concepts',
  'Delivery roadmap & estimate'],

  scope: 'Fixed fee'
},
{
  num: '02',
  name: 'Product Build',
  bestFor: 'A system that has to go live',
  copy: 'Design and engineering as one team, shipping in short cycles with a working demo at the end of every cycle, until the product is in real hands.',
  includes: [
  'UX/UI design system',
  'Full-stack engineering',
  'Integrations & data migration',
  'Launch, training & handover'],

  scope: 'Quoted per phase'
},
{
  num: '03',
  name: 'Ongoing Partnership',
  bestFor: 'Systems that keep evolving',
  copy: 'A standing team that keeps the system healthy and moving — improvements, new modules, and technical decisions made with your business in mind.',
  includes: [
  'Rolling roadmap & priorities',
  'Feature development',
  'Monitoring & maintenance',
  'Advisory on new technology'],

  scope: 'Retainer'
}];


export const INDUSTRIES = [
'Retail & Distribution',
'Manufacturing',
'Professional Services',
'Logistics',
'Education',
'Healthcare Operations',
'Hospitality',
'Finance Operations',
'Construction',
'Non-profit'];


export const CAPABILITIES = [
{
  group: 'Product',
  items: ['Discovery', 'Workflow mapping', 'UX/UI design', 'Design systems', 'Prototyping']
},
{
  group: 'Engineering',
  items: ['React & TypeScript', 'Node.js', 'PostgreSQL', 'APIs & integrations', 'Cloud infrastructure']
},
{
  group: 'Intelligence',
  items: ['LLM pipelines', 'Document extraction', 'Vector search', 'Automation', 'Assistants']
},
{
  group: 'Operations',
  items: ['Data migration', 'Monitoring', 'Security practices', 'Training', 'Support']
}];


export const RITUALS = [
{
  title: 'A working demo, always',
  copy: 'Every cycle ends with the real thing running, not a status document.'
},
{
  title: 'One shared board',
  copy: 'Scope, priorities, and blockers live in one place both teams can read.'
},
{
  title: 'Decisions written down',
  copy: 'Every meaningful decision is recorded with the reasoning behind it.'
},
{
  title: 'Release notes, always',
  copy: 'Each release ships with what changed, what to test, and what comes next.'
}];