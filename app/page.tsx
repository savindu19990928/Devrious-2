
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly']
    },
    {
      icon: 'ri-palette-line',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love to interact with',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      icon: 'ri-server-line',
      title: 'API Development',
      description: 'Robust backend systems and APIs for seamless data integration',
      features: ['RESTful APIs', 'Database Design', 'Security']
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      features: ['Desktop Apps', 'System Integration', 'Maintenance']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/homeHero.jpg")`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className={`w-full max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
              Build Your
              <span className="text-emerald-400 block">Digital Future</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl leading-relaxed drop-shadow-lg">
              Professional software development agency specializing in web applications, 
              custom software solutions, and digital transformation for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link 
                href="/contact" 
                className="bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer text-center whitespace-nowrap shadow-xl"
              >
                Get Started Today
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer text-center whitespace-nowrap shadow-xl"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions to help your business thrive in the modern world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-lg mb-6 group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                  <i className={`${service.icon} text-2xl text-emerald-600 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-check-line text-emerald-600"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg group-hover:text-gray-900 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Devrious?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Since 2019, we've been delivering exceptional digital solutions that combine 
                technical excellence with creative innovation. Our team is committed to 
                transforming your ideas into powerful digital experiences.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: 'ri-rocket-line',
                    title: 'Fast Delivery',
                    description: 'Quick turnaround times without compromising quality'
                  },
                  {
                    icon: 'ri-shield-check-line',
                    title: 'Reliable & Secure',
                    description: 'Built with security and reliability as top priorities'
                  },
                  {
                    icon: 'ri-customer-service-2-line',
                    title: '24/7 Support',
                    description: 'Ongoing support and maintenance for all projects'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-lg group-hover:bg-emerald-600 transition-colors duration-300 flex-shrink-0">
                      <i className={`${feature.icon} text-emerald-600 group-hover:text-white text-xl transition-colors duration-300`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/about" 
                  className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer whitespace-nowrap"
                >
                  Learn More About Us
                  <div className="w-5 h-5 flex items-center justify-center ml-2">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/home1.jpg"
                alt="Why Choose Us"
                className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Since 2019</div>
                <div className="text-emerald-100">Delivering Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your ideas and create something amazing together. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
