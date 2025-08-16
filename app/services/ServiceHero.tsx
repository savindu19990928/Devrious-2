'use client';

import Link from 'next/link';

export default function ServiceHero() {
  return (
    <section 
      className="relative min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/services-hero.jpg")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Complete Digital
            <span className="text-emerald-400 block">Solutions</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            From concept to deployment, we provide comprehensive software development services that transform your ideas into powerful digital solutions. Our expertise spans across all modern technologies and development practices.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer text-center whitespace-nowrap">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer text-center whitespace-nowrap">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}