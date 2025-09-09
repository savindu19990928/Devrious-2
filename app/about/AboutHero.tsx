
'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/images/aboutHero.jpg")`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            About
            <span className="text-emerald-400 block">Devrious</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl leading-relaxed drop-shadow-lg">
            A collective of experienced freelancers united by a shared vision: to transform ideas into impactful digital experiences. Since 2019, we've been delivering comprehensive solutions that blend creativity, strategy, and technical expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">200+</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Projects Delivered</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">5+</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Years Experience</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">100%</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}