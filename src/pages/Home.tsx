import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Code,
  Cpu,
  Globe,
  Monitor,
  Terminal,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Users,
  Layout,
  Database,
  Cloud,
  Server,
  MessageSquare,
  Search,
  PenTool,
  Rocket,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-16 pb-20 lg:pt-24 lg:pb-32">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-10 translate-x-1/3 -translate-y-1/4">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#10B981] to-[#FBBF24] blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-5 -translate-x-1/4 translate-y-1/4">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FB7185] to-[#FBBF24] blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* <div className="inline-flex items-center justify-center p-2 mb-8 rounded-full bg-green-50 border border-green-100">
                <span className="px-3 py-1 text-xs font-semibold tracking-wide text-[#10B981] uppercase rounded-full bg-white shadow-sm">
                  New
                </span>
                <span className="ml-2 text-sm text-gray-600">
                  Founded in 2024 — Ready to build.
                </span>
              </div> */}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                Building Reliable{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#059669]">
                  Digital Solutions
                </span>{' '}
                with Precision
              </h1>

              <p className="mt-4 max-w-2xl lg:max-w-none text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                We are a remote IT freelance team delivering scalable web,
                software, and AI-powered solutions tailored to modern
                businesses.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
                <Link to="/portfolio">
                  <Button
                    size="lg"
                    className="min-w-[180px] shadow-lg shadow-green-100"
                  >
                    View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="min-w-[180px]">
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              {/* <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#10B981]" />
                  <span>50+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#10B981]" />
                  <span>30+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#10B981]" />
                  <span>15+ Years Combined Exp</span>
                </div>
              </div> */}
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px]">
                {/* Floating Cards */}
                <div className="absolute top-0 right-0 w-72 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-[#10B981]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Web Development
                      </div>
                      <div className="text-xs text-gray-500">
                        React • Django
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Modern, scalable websites built with cutting-edge
                    technologies.
                  </p>
                </div>

                <div className="absolute top-32 left-0 w-64 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-[#FBBF24]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        AI Solutions
                      </div>
                      <div className="text-xs text-gray-500">
                        Python • OpenAI
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Intelligent automation and chatbot development.
                  </p>
                </div>

                <div className="absolute bottom-0 right-12 w-72 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center">
                      <Terminal className="h-6 w-6 text-[#FB7185]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        Custom Software
                      </div>
                      <div className="text-xs text-gray-500">.NET • C#</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Enterprise solutions tailored to your business needs.
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-20 h-20 bg-[#10B981] rounded-full opacity-10 blur-2xl"></div>
                <div className="absolute bottom-32 left-16 w-16 h-16 bg-[#FBBF24] rounded-full opacity-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-[#10B981] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            {[
              {
                label: 'Projects Completed',
                value: '57+',
              },
              {
                label: 'Happy Clients',
                value: '34+',
              },
              {
                label: 'Team Members',
                value: '4',
              },
              {
                label: 'Years Combined Exp',
                value: '2+',
              },
            ].map((stat, index) => (
              <div key={index} className="p-2">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-green-100 font-medium text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Highlights/Expertise Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical excellence with creative problem-solving to
            deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Web Development',
              icon: Globe,
              desc: 'Modern, responsive websites built with React & Tailwind.',
              color: 'text-blue-500',
              bg: 'bg-blue-50',
            },
            {
              title: 'Software Dev',
              icon: Terminal,
              desc: 'Custom business software tailored to your specific needs.',
              color: 'text-[#10B981]',
              bg: 'bg-green-50',
            },
            {
              title: 'AI & Automation',
              icon: Cpu,
              desc: 'Intelligent chatbots and workflow automation tools.',
              color: 'text-[#FB7185]',
              bg: 'bg-rose-50',
            },
            {
              title: 'POS Systems',
              icon: Monitor,
              desc: 'Ready-to-deploy Point of Sale solutions for retail.',
              color: 'text-[#FBBF24]',
              bg: 'bg-amber-50',
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="h-full flex flex-col items-center text-center p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}
              >
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Devrious */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Devrious
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just write code; we build partnerships and deliver value
              through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                title: 'Quality Code Standards',
                desc: 'We follow strict coding standards and best practices to ensure your software is maintainable, scalable, and bug-free.',
                icon: CheckCircle,
                color: 'text-[#10B981]',
              },
              {
                title: 'Fast & Reliable Delivery',
                desc: 'We respect deadlines. Our agile workflow ensures we deliver features quickly without compromising on quality.',
                icon: Clock,
                color: 'text-[#FBBF24]',
              },
              {
                title: 'Scalable Solutions',
                desc: 'We build with the future in mind. Our architectures are designed to grow with your business needs.',
                icon: Zap,
                color: 'text-[#FB7185]',
              },
              {
                title: '24/7 Support',
                desc: "Our relationship doesn't end at launch. We provide ongoing support and maintenance to keep your systems running.",
                icon: Users,
                color: 'text-blue-500',
              },
              {
                title: 'Competitive Pricing',
                desc: 'Top-tier development quality at freelance rates. We offer transparent pricing with no hidden costs.',
                icon: Shield,
                color: 'text-purple-500',
              },
              {
                title: 'Modern Tech Stack',
                desc: 'We stay updated with the latest technologies to give you a competitive edge in the digital market.',
                icon: Code,
                color: 'text-indigo-500',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className={`flex-shrink-0 mt-1`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Process */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined workflow designed to take your project from concept to
            launch efficiently.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'We analyze your requirements and plan the perfect solution.',
                icon: Search,
                color: 'bg-blue-500',
              },
              {
                step: '02',
                title: 'Design',
                desc: 'We create intuitive UI/UX designs and system architectures.',
                icon: PenTool,
                color: 'bg-[#FBBF24]',
              },
              {
                step: '03',
                title: 'Development',
                desc: 'We build your solution using clean, efficient code.',
                icon: Code,
                color: 'bg-[#10B981]',
              },
              {
                step: '04',
                title: 'Launch',
                desc: 'We deploy, test, and provide ongoing support.',
                icon: Rocket,
                color: 'bg-[#FB7185]',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center bg-white md:bg-transparent p-6 md:p-0 rounded-xl shadow-sm md:shadow-none"
              >
                <div
                  className={`w-24 h-24 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg mb-6 border-4 border-white`}
                >
                  <item.icon className="h-10 w-10" />
                </div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Explore some of our recent work delivering impact for our clients.
            </p>
          </div>
          <Link to="/portfolio">
            <Button variant="outline" className="group">
              View All Projects{' '}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Motor Elite',
              desc: 'A demo project created for showcasing portfolio work. Simulates an e-commerce platform for an auto parts shop with modern design and functionality.',
              tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "MySQL", "Redis", "Django"],
              image: '/mortorelite.png',
              liveUrl: "https://www.mortorelite.com"
            }, {
              title: 'CarCare by Mortor Elite',
              desc: 'A demo project designed for portfolio purposes. Represents a service-focused website for an automobile company, highlighting branding and user engagement.',
              tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "MySQL", "Django"],
              image: '/carcare.png',
              liveUrl: "https://carcare.mortorelite.com"
            }, {
              title: 'Devmart',
              desc: 'A demo full-stack e-commerce application built to demonstrate advanced development skills. Features product listings, shopping cart, checkout, and secure payment integration.',
              tags: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
              image: '/devmart.png',
              liveUrl: "https://devmart.devrious.lk"
            },
          ].map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden p-0 group h-full flex flex-col border-0 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <span className="text-white font-medium px-4 py-2 border border-white rounded-lg">
                    View Project
                  </span>
                  </a>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Technologies We Master
          </h2>
          <p className="mt-4 text-gray-600">
            We use the best tools for the job.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              category: 'Frontend',
              items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
              icon: Layout,
            },
            {
              category: 'Backend',
              items: ['Django', 'Python', '.NET Core', 'Node.js'],
              icon: Server,
            },
            {
              category: 'Database',
              items: ['MySQL', 'PostgreSQL', 'Redis', 'Firebase'],
              icon: Database,
            },
            {
              category: 'Cloud & DevOps',
              items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
              icon: Cloud,
            },
          ].map((stack, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                  <stack.icon className="h-5 w-5" />
                </div>
                <span className="font-bold text-gray-900">
                  {stack.category}
                </span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 flex-1">
                {stack.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100 hover:border-[#10B981] hover:text-[#10B981] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      {/* <Section>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#10B981] rounded-3xl p-10 md:p-16 text-white text-center overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 p-3 rounded-full">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
              </div>

              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 font-serif italic">
                "Devrious transformed our outdated internal systems into a
                modern, efficient workflow. Their attention to detail and
                technical expertise is outstanding."
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="font-bold text-lg">John Doe</div>
                <div className="text-green-100">CTO, TechSolutions Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </Section> */}

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 style={{color:"#10B981"}} className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Let's discuss how we can help transform your business with our
            digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="bg-[#10B981] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#059669] transition-all duration-200 w-full sm:w-auto">
                Get a Free Consultation
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="bg-transparent border-2 border-gray-700 text-gray-800 px-8 py-4 rounded-lg font-bold text-lg hover:text-white hover:bg-gray-800 transition-all duration-200 w-full sm:w-auto">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
