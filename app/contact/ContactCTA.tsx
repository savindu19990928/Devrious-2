
'use client';

import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Digital Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join hundreds of satisfied clients who have transformed their ideas into successful digital experiences with our expert team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-emerald-600 rounded-full mx-auto mb-4">
              <i className="ri-lightbulb-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
            <p className="text-gray-400">Free project consultation and strategy session</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-emerald-600 rounded-full mx-auto mb-4">
              <i className="ri-settings-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-gray-400">Expert development with modern technologies</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-emerald-600 rounded-full mx-auto mb-4">
              <i className="ri-rocket-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Launch</h3>
            <p className="text-gray-400">Successful deployment and ongoing support</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/services" 
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap font-semibold"
          >
            View Our Services
          </Link>
          <Link 
            href="/about" 
            className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap font-semibold"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
