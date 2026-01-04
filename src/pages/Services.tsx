import React from 'react';
import { Bot, Code, Database, Globe, LayoutTemplate, Settings, ShoppingCart, Wrench } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
export function Services() {
  const services = [{
    title: 'Web Development',
    description: 'Modern, scalable, and responsive websites built with the latest technologies like React, Next.js, and Tailwind CSS.',
    icon: Globe,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  }, {
    title: 'Software Development',
    description: 'Custom business and enterprise software solutions designed to streamline your operations and boost productivity.',
    icon: Code,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  }, {
    title: 'Web-Based Systems',
    description: 'Comprehensive ERPs, management systems, and interactive dashboards for data-driven decision making.',
    icon: LayoutTemplate,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }, {
    title: 'AI Chatbot Development',
    description: 'Intelligent chatbots for customer support and automation, powered by advanced NLP and machine learning.',
    icon: Bot,
    color: 'text-[#10B981]',
    bg: 'bg-green-50'
  }, {
    title: 'Automation Tools',
    description: 'Workflow automation and productivity tools to eliminate repetitive tasks and reduce human error.',
    icon: Settings,
    color: 'text-[#FB7185]',
    bg: 'bg-rose-50'
  }, {
    title: 'Consulting & Support',
    description: 'Expert technical consulting, system optimization, and ongoing maintenance to keep your digital assets running smoothly.',
    icon: Wrench,
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  }, {
    title: 'Pre-Built POS Systems',
    description: 'Ready-to-deploy Point of Sale solutions for businesses, featuring inventory management and sales reporting.',
    icon: ShoppingCart,
    color: 'text-[#FBBF24]',
    bg: 'bg-amber-50'
  }];
  return <>
      <div className="bg-gray-50 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Comprehensive digital solutions tailored to your business needs.
        </p>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="h-full flex flex-col p-8">
              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6`}>
                <service.icon className={`h-7 w-7 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              {/* <Link to="/contact" className="inline-flex items-center text-[#10B981] font-medium hover:underline">
                Learn more
              </Link> */}
            </Card>)}
        </div>
      </Section>

      <Section background="gray">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Need a custom solution?
            </h2>
            <p className="text-gray-600">
              We love solving complex problems. Let's talk about your specific
              requirements.
            </p>
          </div>
          <Link to="/contact">
            <Button size="lg">Contact Our Team</Button>
          </Link>
        </div>
      </Section>
    </>;
}