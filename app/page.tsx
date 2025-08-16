
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://readdy.ai/api/search-image?query=Modern%20software%20development%20office%20with%20clean%20minimalist%20design%2C%20bright%20natural%20lighting%2C%20computers%20and%20coding%20screens%2C%20professional%20tech%20workspace%20environment%2C%20glass%20windows%2C%20contemporary%20architecture%2C%20soft%20blue%20and%20green%20color%20palette&width=1920&height=1080&seq=hero-main&orientation=landscape")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="w-full max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Crafting Digital
              <span className="text-emerald-400 block">Excellence</span>
              Since 2019
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Professional software development agency specializing in web development, UI design, API solutions, and custom software systems that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/portfolio" className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer text-center whitespace-nowrap">
                View Our Work
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer text-center whitespace-nowrap">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-lg mb-6">
                <i className="ri-code-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600">
                Modern, responsive websites and web applications using cutting-edge technologies like React, Next.js, and Node.js.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-lg mb-6">
                <i className="ri-palette-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-600">
                Beautiful, intuitive user interfaces that enhance user experience and drive engagement for your digital products.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-lg mb-6">
                <i className="ri-share-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">API Development</h3>
              <p className="text-gray-600">
                Robust, scalable APIs that connect your applications and enable seamless data integration across platforms.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-lg mb-6">
                <i className="ri-settings-3-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Software Development</h3>
              <p className="text-gray-600">
                Custom standalone applications tailored to your specific business requirements and workflows.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-lg mb-6">
                <i className="ri-global-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web-Based Systems</h3>
              <p className="text-gray-600">
                Comprehensive web-based business systems including CRM, ERP, and custom management platforms.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-lg mb-6">
                <i className="ri-customer-service-2-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consulting & Support</h3>
              <p className="text-gray-600">
                Expert technical consultation and ongoing support to ensure your digital solutions continue to deliver value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Devrious?</h2>
            <p className="text-xl text-gray-600">5+ years of delivering exceptional digital solutions</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-lg flex-shrink-0">
                    <i className="ri-trophy-line text-xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">Since 2019, we've delivered 200+ successful projects across various industries.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                    <i className="ri-rocket-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-600">We stay ahead of technology trends to deliver future-proof solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                    <i className="ri-team-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our skilled developers and designers bring years of experience to every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg flex-shrink-0">
                    <i className="ri-time-line text-xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                    <p className="text-gray-600">We pride ourselves on meeting deadlines without compromising quality.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/home1.jpg"
                alt="Devrious Team"
                className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Get Free Quote
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors cursor-pointer whitespace-nowrap">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
