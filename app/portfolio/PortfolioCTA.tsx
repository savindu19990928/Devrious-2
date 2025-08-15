'use client';

import Link from 'next/link';

export default function PortfolioCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Next Project?</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Whether you need a modern website, custom software solution, or specialized business system, our experienced team is ready to bring your vision to life. Let's discuss how we can help transform your ideas into powerful digital solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mx-auto mb-4">
                <i className="ri-discuss-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
              <p className="text-emerald-100 text-sm">Discuss your project requirements and get expert advice</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mx-auto mb-4">
                <i className="ri-file-text-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Proposal</h3>
              <p className="text-emerald-100 text-sm">Receive a detailed proposal tailored to your needs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mx-auto mb-4">
                <i className="ri-rocket-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-emerald-100 text-sm">Begin development within 1-2 weeks of approval</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer text-center whitespace-nowrap"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors cursor-pointer text-center whitespace-nowrap"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}