'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://readdy.ai/api/search-image?query=Diverse%20team%20of%20creative%20professionals%20working%20together%20in%20modern%20bright%20office%20space%2C%20collaborative%20workspace%20with%20designers%20and%20developers%2C%20natural%20lighting%20through%20large%20windows%2C%20contemporary%20furniture%2C%20laptops%20and%20creative%20tools%2C%20inspiring%20work%20environment%20with%20plants%20and%20artwork%2C%20professional%20yet%20creative%20atmosphere&width=1920&height=1080&seq=about-hero&orientation=landscape")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="w-full max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About
            <span className="text-emerald-400 block">Devrious</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
            A collective of experienced freelancers united by a shared vision: to transform ideas into impactful digital experiences. Since 2019, we've been delivering comprehensive solutions that blend creativity, strategy, and technical expertise.
          </p>
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">200+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}