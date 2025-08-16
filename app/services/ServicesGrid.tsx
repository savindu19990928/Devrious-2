'use client';

import Link from 'next/link';

export default function ServicesGrid() {
  const services = [
    {
      icon: 'ri-code-box-line',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks like React, Next.js, Vue.js, and Angular.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Cross-browser Compatible'],
      color: 'emerald',
      image: 'https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20showing%20responsive%20website%20designs%20on%20multiple%20devices%2C%20clean%20code%20editor%20interface%2C%20HTML%20CSS%20JavaScript%20frameworks%2C%20professional%20developer%20setup%20with%20multiple%20monitors%2C%20contemporary%20office%20environment&width=400&height=300&seq=web-dev&orientation=landscape'
    },
    {
      icon: 'ri-palette-line',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that provide exceptional user experiences and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'blue',
      image: 'https://readdy.ai/api/search-image?query=UI%20UX%20design%20workspace%20with%20design%20mockups%2C%20color%20palettes%2C%20typography%20samples%2C%20user%20interface%20wireframes%2C%20design%20system%20components%2C%20creative%20design%20studio%20environment%2C%20modern%20graphics%20tablet%20and%20stylus&width=400&height=300&seq=ui-design&orientation=landscape'
    },
    {
      icon: 'ri-share-box-line',
      title: 'API Development',
      description: 'Robust, scalable APIs that enable seamless integration and data exchange between different systems.',
      features: ['RESTful APIs', 'GraphQL', 'Authentication', 'Documentation'],
      color: 'purple',
      image: 'https://readdy.ai/api/search-image?query=API%20development%20environment%20showing%20code%20editor%20with%20API%20endpoints%2C%20JSON%20data%20structures%2C%20database%20connections%2C%20server%20architecture%20diagrams%2C%20technical%20documentation%2C%20professional%20programming%20workspace&width=400&height=300&seq=api-dev&orientation=landscape'
    },
    {
      icon: 'ri-computer-line',
      title: 'Software Development',
      description: 'Custom standalone applications tailored to your specific business requirements and workflows.',
      features: ['Desktop Applications', 'Cross-platform', 'Custom Solutions', 'Integration'],
      color: 'orange',
      image: 'https://readdy.ai/api/search-image?query=Software%20development%20environment%20with%20desktop%20application%20interfaces%2C%20programming%20code%2C%20software%20architecture%20diagrams%2C%20custom%20business%20solutions%2C%20professional%20development%20workstation%20with%20multiple%20screens&width=400&height=300&seq=software-dev&orientation=landscape'
    },
    {
      icon: 'ri-global-line',
      title: 'Web-Based Systems',
      description: 'Comprehensive business systems including CRM, ERP, and custom management platforms.',
      features: ['CRM Solutions', 'ERP Systems', 'Dashboard Analytics', 'User Management'],
      color: 'red',
      image: 'https://readdy.ai/api/search-image?query=Web-based%20business%20system%20interface%20showing%20CRM%20dashboard%2C%20analytics%20charts%2C%20data%20management%20panels%2C%20enterprise%20software%20interface%2C%20professional%20business%20application%20design%2C%20modern%20admin%20dashboard&width=400&height=300&seq=web-systems&orientation=landscape'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Consulting & Support',
      description: 'Expert technical consultation and ongoing support to ensure your solutions deliver continuous value.',
      features: ['Technical Consulting', '24/7 Support', 'Maintenance', 'Training'],
      color: 'green',
      image: 'https://readdy.ai/api/search-image?query=Technical%20consulting%20session%20with%20software%20development%20experts%2C%20professional%20meeting%20room%2C%20technical%20documentation%2C%20project%20planning%2C%20client%20consultation%2C%20modern%20office%20environment%20with%20technology%20displays&width=400&height=300&seq=consulting&orientation=landscape'
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
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
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
                {/* <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full"
                  />
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}