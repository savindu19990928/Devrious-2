export type ProcessStep = {
  num: string;
  title: string;
  copy: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
{
  num: '01',
  title: 'Understand',
  copy: 'We learn how your business works, what is slowing it down, and what you want to achieve.'
},
{
  num: '02',
  title: 'Shape',
  copy: 'We turn the idea into a clear product, system, or technology roadmap.'
},
{
  num: '03',
  title: 'Design',
  copy: 'We design the experience, workflows, interfaces, and architecture.'
},
{
  num: '04',
  title: 'Build',
  copy: 'We engineer the product using modern technologies and practical development practices.'
},
{
  num: '05',
  title: 'Improve',
  copy: 'We launch, learn, optimize, and continue improving the system as your business grows.'
}];