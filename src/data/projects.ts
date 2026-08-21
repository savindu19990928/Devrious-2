export type ProjectVariant = 'ems' | 'pos' | 'docai' | 'web' | 'crm' | 'portal';

export type Project = {
  name: string;
  industry: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  challenge: string;
  built: string;
  stack: string[];
  metrics: {value: string;label: string;}[];
  variant: ProjectVariant;
};

export const PROJECTS: Project[] = [
{
  name: 'Employee Management System',
  industry: 'Business Operations',
  category: 'Custom Software',
  location: 'Colombo, Sri Lanka',
  year: '2025',
  summary:
  'A centralized system designed to simplify employee management, workflows, and operational visibility.',
  challenge:
  'Attendance, leave, payroll inputs and approvals lived in four disconnected spreadsheets.',
  built:
  'One operations platform with role-based access, approval workflows, and a live view of every team.',
  stack: ['React', 'Node.js', 'PostgreSQL', 'Role-based access'],
  metrics: [
  { value: '4 → 1', label: 'Systems replaced' },
  { value: '−62%', label: 'Manual admin steps' },
  { value: 'Full', label: 'Team adoption' }],

  variant: 'ems'
},
{
  name: 'Retail POS & Inventory Platform',
  industry: 'Retail',
  category: 'Business Systems',
  location: 'Kandy, Sri Lanka',
  year: '2025',
  summary:
  'Point of sale, stock and supplier ordering connected into a single operational loop across six outlets.',
  challenge:
  'Outlets reported stock on their own schedule, so purchasing decisions were always made on old numbers.',
  built:
  'Offline-capable POS with live inventory sync, automatic reorder points, and one consolidated finance view.',
  stack: ['React', 'Offline sync', 'Reporting engine', 'Integrations'],
  metrics: [
  { value: '6', label: 'Outlets connected' },
  { value: 'Live', label: 'Stock visibility' },
  { value: '−38%', label: 'Stock-outs' }],

  variant: 'pos'
},
{
  name: 'Document Intelligence Assistant',
  industry: 'Professional Services',
  category: 'AI Systems',
  location: 'Dubai, UAE',
  year: '2026',
  summary:
  'An AI layer that reads incoming documents, extracts what matters, and routes the work to the right person.',
  challenge:
  'A team of nine spent most of each morning reading contracts and retyping the same fields.',
  built:
  'Document ingestion, structured extraction with confidence scoring, and human review before anything is committed.',
  stack: ['LLM pipeline', 'Vector search', 'Review workflow', 'Audit trail'],
  metrics: [
  { value: '−80%', label: 'Manual re-typing' },
  { value: '96%', label: 'Extraction accepted as-is' },
  { value: '100%', label: 'Decisions auditable' }],

  variant: 'docai'
},
{
  name: 'Corporate Brand Platform',
  industry: 'Manufacturing',
  category: 'Websites & Digital Experiences',
  location: 'Colombo, Sri Lanka',
  year: '2025',
  summary:
  'A brand-led website and content platform that gives a 30-year-old manufacturer a modern digital presence.',
  challenge:
  'The old site could not be updated internally and said nothing about what the company actually makes.',
  built:
  'An editorial website, a product catalogue, and a content model the marketing team maintains on their own.',
  stack: ['React', 'Headless CMS', 'Design system', 'Performance'],
  metrics: [
  { value: '0.9s', label: 'Median load time' },
  { value: '3×', label: 'Enquiries received' },
  { value: 'In-house', label: 'Content updates' }],

  variant: 'web'
},
{
  name: 'Client & Pipeline CRM',
  industry: 'Logistics',
  category: 'Business Systems',
  location: 'Negombo, Sri Lanka',
  year: '2026',
  summary:
  'A sales and account system shaped around how freight actually gets quoted, won, and serviced.',
  challenge:
  'Quotes were tracked in personal inboxes, so nobody could answer where a deal stood without asking three people.',
  built:
  'A pipeline built on the real quoting workflow, with automated follow-ups and a shared account history.',
  stack: ['React', 'Workflow engine', 'Email integration', 'Reporting'],
  metrics: [
  { value: '1 view', label: 'Of every deal' },
  { value: '−45%', label: 'Quote turnaround' },
  { value: '+38%', label: 'Follow-up rate' }],

  variant: 'crm'
},
{
  name: 'Learning & Onboarding Portal',
  industry: 'Education',
  category: 'Digital Products',
  location: 'Colombo, Sri Lanka',
  year: '2026',
  summary:
  'A portal that takes new joiners from paperwork to productive without a single printed handbook.',
  challenge:
  'Onboarding depended on one coordinator, and new staff waited on that one person for access and answers.',
  built:
  'Structured learning paths, progress tracking, automated access requests, and a searchable knowledge base.',
  stack: ['React', 'Content model', 'SSO', 'Progress analytics'],
  metrics: [
  { value: '−70%', label: 'Coordinator hours' },
  { value: 'Self-serve', label: 'Access requests' },
  { value: '480+', label: 'Staff onboarded' }],

  variant: 'portal'
}];