import React from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ExternalLink, Quote } from 'lucide-react';
export function Portfolio() {
  const projects = [{
    title: 'Motor Elite',
    category: 'E-Commerce Project',
    description: 'A demo project created for showcasing portfolio work. Simulates an e-commerce platform for an auto parts shop with modern design and functionality.',
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe", "MySQL", "Redis", "Django"],
    image: '/mortorelite.png',
    type: 'Pre Built Template',
    liveUrl: "https://www.mortorelite.com"
  }, {
    title: 'CarCare by Mortor Elite',
    category: 'Branding Website',
    description: 'A demo project designed for portfolio purposes. Represents a service-focused website for an automobile company, highlighting branding and user engagement.',
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe", "MySQL", "Django"],
    image: '/carcare.png',
    type: 'Pre Built Template',
    liveUrl: "https://carcare.mortorelite.com"
  }, {
    title: 'Devmart',
    category: 'E-Commerce Project',
    description: 'A demo full-stack e-commerce application built to demonstrate advanced development skills. Features product listings, shopping cart, checkout, and secure payment integration.',
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
    image: '/devmart.png',
    type: 'Pre Built Template',
    liveUrl: "https://devmart.devrious.lk"
  }, {
    title: 'Star Hotels',
    category: 'Online Booking Website',
    description: 'An online hotel booking website built with Django and DTL, allowing users to search hotels, view room details, check availability, and book rooms securely, with an admin panel for managing hotels and bookings.',
    tech: ["Tailwind CSS", "MySQL", "Django"],
    image: '/starhotels.png',
    type: 'Pre Built Template',
    liveUrl: "https://starhotels-708852150124.us-central1.run.app",
  }];
  const clientProject = {
    title: 'Smart Park and Fly',
    client: 'Smart Park and Fly LTD',
    problem: 'The client needed a scalable solution to manage and offer online parking reservations across multiple airports in the UK, while giving travelers a simple and reliable booking experience.',
    solution: 'We built Smart Park and Fly, a web-based platform that enables users to search, compare, and book parking slots across multiple UK airports in real time, with centralized reservation management and a smooth end-to-end booking flow.',
    tech: ['Django', 'React', 'NextJS', 'MySQL', 'Stripe'],
    image: '/spaf.png',
    url: 'https://www.smartparkandfly.co.uk'
  };
  return <>
    <div className="bg-gray-50 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
        A showcase of our technical capabilities and successful deliveries.
      </p>
    </div>

    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => <Card key={index} className="overflow-hidden p-0 group h-full flex flex-col">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider rounded-full text-gray-800">
                {project.type}
              </span>
            </div>
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <Button
                onClick={() => window.open(project.liveUrl, "_blank")}
                variant="primary"
                size="sm"
                className="w-full"
              >
                View Details
              </Button>
            </div>
          </div>
          <div className="p-6 flex-grow flex flex-col">
            <div className="text-sm text-[#10B981] font-medium mb-2">
              {project.category}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map(t => <span key={t} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                {t}
              </span>)}
            </div>
          </div>
        </Card>)}
      </div>
    </Section>

    <Section background="gray">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#10B981] font-bold tracking-wider uppercase text-sm">
            Featured Case Study
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Client Success Story
          </h2>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto relative">
              <img src={clientProject.image} alt={clientProject.title} />
            </div>
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {clientProject.title}
              </h3>
              <p className="text-gray-500 mb-6">
                Client: {clientProject.client}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    The Challenge
                  </h4>
                  <p className="text-gray-600">{clientProject.problem}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Our Solution
                  </h4>
                  <p className="text-gray-600">{clientProject.solution}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {clientProject.tech.map(t => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-green-50 text-[#10B981] text-sm font-medium rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href={clientProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-6 px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-300 bg-[#10B981] hover:bg-[#0f9d75] text-center"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section>
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-[#10B981] rounded-2xl p-10 md:p-16 text-white text-center overflow-hidden">
          <Quote className="absolute top-8 left-8 h-12 w-12 text-white/20" />
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "We at Smart Park and Fly had the pleasure of working with Savindu from Devrious on an airport car parking website project, and we were very satisfied with his work. He demonstrated strong planning skills and consistently provided helpful input throughout the project. His can-do attitude made collaboration smooth, and he was always willing to find solutions to challenges. Savindu was punctual, eager to learn, and a reliable professional. We would happily recommend him for future projects."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                SS
              </div>
              <div className="text-left">
                <div className="font-bold">Sivanenthiran Sivapathem</div>
                <div className="text-green-100 text-sm">
                  Smart Park and Fly LTD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>;
}