
'use client';

export default function ServiceHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/serviceHero.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Digital Solutions
            <span className="block text-emerald-400">That Drive Results</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-4xl drop-shadow-lg">
            From concept to launch, we create powerful digital experiences that help your business thrive in the modern world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-xl">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-xl">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}