export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  initials: string;
};

export const TEAM: TeamMember[] = [
{
  name: 'Founding Partner',
  role: 'Strategy & Product',
  focus: 'Frames the problem, shapes the roadmap, and stays close to the business case.',
  initials: 'DV'
},
{
  name: 'Design Lead',
  role: 'Experience & Interface',
  focus: 'Turns workflows into interfaces people can use without being trained twice.',
  initials: 'DS'
},
{
  name: 'Engineering Lead',
  role: 'Architecture & Delivery',
  focus: 'Owns the system design, the code standard, and the path to production.',
  initials: 'EN'
},
{
  name: 'AI Engineer',
  role: 'Applied Intelligence',
  focus: 'Builds extraction, automation, and assistant layers that stay accountable.',
  initials: 'AI'
},
{
  name: 'Systems Engineer',
  role: 'Integrations & Cloud',
  focus: 'Connects the tools a business already runs on and keeps them in sync.',
  initials: 'SY'
},
{
  name: 'Client Partner',
  role: 'Operations & Support',
  focus: 'Keeps delivery visible — working demos, clear decisions, no surprises.',
  initials: 'CP'
}];


export const MILESTONES = [
{
  year: '2024',
  title: 'Devrious is founded',
  copy: 'Started with one belief: ambitious ideas deserve technology built around them, not templates adapted to them.'
},
{
  year: '2024',
  title: 'First business systems shipped',
  copy: 'Operations platforms for teams who had outgrown spreadsheets and disconnected tools.'
},
{
  year: '2025',
  title: 'AI practice established',
  copy: 'Document intelligence and automation added as a discipline, always attached to a measurable outcome.'
},
{
  year: '2025',
  title: 'Work crosses borders',
  copy: 'Projects delivered for clients in Sri Lanka and the UAE, with remote-first delivery rituals.'
},
{
  year: '2026',
  title: 'Client portal launched',
  copy: 'Every engagement gets a shared workspace for progress, decisions, releases, and documents.'
}];


export const LOCATIONS = [
{ city: 'Colombo', country: 'Sri Lanka', note: 'Studio & delivery' },
{ city: 'Dubai', country: 'UAE', note: 'Client partnerships' },
{ city: 'Remote', country: 'Global', note: 'Async by default' }];