
'use client';

export default function PortfolioHero() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://readdy.ai/api/search-image?query=Creative%20flat%20vector%20illustration%20of%20design%20portfolio%20showcase%2C%20abstract%20floating%20screens%20and%20devices%20displaying%20colorful%20web%20interfaces%2C%20geometric%20design%20elements%20and%20wireframe%20sketches%2C%20modern%20illustration%20style%20with%20vibrant%20pink%20and%20blue%20gradient%20colors%2C%20contemporary%20creative%20workspace%20concept%20with%20artistic%20composition%20and%20flowing%20design%20elements&width=1920&height=1080&seq=portfolio-hero-creative-illustration&orientation=landscape")`
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
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">200+</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Projects Completed</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">50+</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Happy Clients</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">15+</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}