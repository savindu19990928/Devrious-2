'use client';

import Link from 'next/link';

export default function PortfolioHero() {
  return (
    <section 
      className="relative min-h-[70vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://readdy.ai/api/search-image?query=Modern%20web%20development%20portfolio%20showcase%20with%20multiple%20website%20mockups%20and%20digital%20interfaces%20displayed%20on%20screens%2C%20professional%20tech%20workspace%20with%20clean%20design%2C%20contemporary%20office%20environment%2C%20coding%20and%20design%20elements%2C%20vibrant%20colors%20representing%20creativity%20and%20innovation%20in%20web%20development&width=1920&height=1080&seq=portfolio-hero&orientation=landscape")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our Web
            <span className="text-emerald-400 block">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            Explore our selected web development projects that showcase our expertise in creating modern, responsive, and engaging digital experiences. Each project represents our commitment to quality and innovation.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer text-center whitespace-nowrap">
              Start Your Project
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer text-center whitespace-nowrap">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}