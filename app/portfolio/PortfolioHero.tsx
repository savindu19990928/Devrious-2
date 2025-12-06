
'use client';

export default function PortfolioHero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/images/222.jpeg")`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            Our
            <span className="text-emerald-400 block">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl leading-relaxed drop-shadow-lg">
            Explore our carefully selected projects that showcase our expertise in web development,
            software solutions, and digital innovation. Each project represents our commitment to
            delivering exceptional results that exceed client expectations.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">13+</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Projects Completed</div>
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">4+</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Happy Clients</div>
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">3+</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}