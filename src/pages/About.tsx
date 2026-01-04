import React from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Code2, Database, Globe, Layout, Server, Shield, Smartphone, Terminal } from 'lucide-react';
export function About() {
  const team = [{
    name: 'Savindu Warnakulasooriya',
    role: 'Back-End Developer, Pentester & Project Lead',
    image: 'https://ui-avatars.com/api/?name=Savindu+Warnakulasooriya&background=10B981&color=fff&size=256',
    initials: 'SW'
  }, {
    name: 'Nimesh Munasinghe',
    role: 'Business Analyst & UI Designer',
    image: 'https://ui-avatars.com/api/?name=Nimesh+Munasinghe&background=FBBF24&color=fff&size=256',
    initials: 'NM'
  }, {
    name: 'Tharindu Jayathilake',
    role: 'Front-End Developer & QA Tester',
    image: 'https://ui-avatars.com/api/?name=Tharindu+Jayathilake&background=FB7185&color=fff&size=256',
    initials: 'TJ'
  }, {
    name: 'Venuja Gamage',
    role: 'Mobile App Developer & Graphic Designer',
    image: 'https://ui-avatars.com/api/?name=Venuja+Gamage&background=6366F1&color=fff&size=256',
    initials: 'VG'
  }];
  const techStack = [{
    category: 'Backend',
    items: ['Django', '.NET', 'Python'],
    icon: Server
  }, {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: Layout
  }, {
    category: 'Database',
    items: ['MySQL', 'Redis', 'Firebase'],
    icon: Database
  }, {
    category: 'DevOps & Cloud',
    items: ['GCP', 'AWS', 'Azure', 'Docker', 'K8s'],
    icon: Globe
  }];
  return <>
      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Devrious
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Devrious is a remote IT freelance team founded in 2024, focused on
            delivering high-quality digital solutions using modern technologies.
            We believe in clean architecture, performance, and long-term
            scalability.
          </p>
        </div>
      </div>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Meet The Team</h2>
          <p className="mt-4 text-gray-600">
            The experts behind our digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => <Card key={index} className="text-center p-6 border-t-4 border-t-[#10B981]">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gray-50">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-[#10B981] font-medium uppercase tracking-wide">
                {member.role}
              </p>
            </Card>)}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Technologies We Use
          </h2>
          <p className="mt-4 text-gray-600">
            We use the latest tools to build robust applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {techStack.map((stack, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-50 rounded-lg mr-4">
                  <stack.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {stack.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {stack.items.map(tech => <span key={tech} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100">
                    {tech}
                  </span>)}
              </div>
            </div>)}
        </div>
      </Section>
    </>;
}