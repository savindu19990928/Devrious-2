
'use client';

import Link from 'next/link';

export default function ServicesGrid() {
  const services = [
    {
      icon: 'ri-code-box-line',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks like React, Next.js, Vue.js, and Angular.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Cross-browser Compatible'],
      color: 'emerald'
    },
    {
      icon: 'ri-palette-line',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that provide exceptional user experiences and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'blue'
    },
    {
      icon: 'ri-share-box-line',
      title: 'API Development',
      description: 'Robust, scalable APIs that enable seamless integration and data exchange between different systems.',
      features: ['RESTful APIs', 'GraphQL', 'Authentication', 'Documentation'],
      color: 'purple'
    },
    {
      icon: 'ri-computer-line',
      title: 'Software Development',
      description: 'Custom standalone applications tailored to your specific business requirements and workflows.',
      features: ['Desktop Applications', 'Cross-platform', 'Custom Solutions', 'Integration'],
      color: 'orange'
    },
    {
      icon: 'ri-global-line',
      title: 'Web-Based Systems',
      description: 'Comprehensive business systems including CRM, ERP, and custom management platforms.',
      features: ['CRM Solutions', 'ERP Systems', 'Dashboard Analytics', 'User Management'],
      color: 'red'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Consulting & Support',
      description: 'Expert technical consultation and ongoing support to ensure your solutions deliver continuous value.',
      features: ['Technical Consulting', '24/7 Support', 'Maintenance', 'Training'],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', hover: 'hover:bg-emerald-600' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-600' },
      red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-600' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of software development services to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            return (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 flex items-center justify-center ${colorClasses.bg} rounded-xl flex-shrink-0`}>
                    <i className={`${service.icon} text-2xl ${colorClasses.text}`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className={`inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg ${colorClasses.hover} hover:text-white transition-colors cursor-pointer whitespace-nowrap`}>
                      Get Started
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
