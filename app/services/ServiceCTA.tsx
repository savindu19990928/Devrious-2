'use client';

import Link from 'next/link';

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join 200+ satisfied clients who have trusted Devrious with their digital transformation. 
            Let's discuss how we can help accelerate your business growth with cutting-edge technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link href="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors cursor-pointer whitespace-nowrap">
              View Our Work
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
                <i className="ri-time-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-emerald-100">Projects delivered on time, every time</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-emerald-100">100% satisfaction with quality assurance</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-4">
                <i className="ri-customer-service-2-line text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-emerald-100">Dedicated support and maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}