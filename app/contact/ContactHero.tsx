
'use client';

export default function ContactHero() {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20professional%20office%20workspace%20with%20clean%20design%2C%20natural%20lighting%20streaming%20through%20large%20windows%2C%20minimalist%20desk%20setup%20with%20computer%20and%20plants%2C%20contemporary%20business%20environment%20with%20warm%20welcoming%20atmosphere%2C%20professional%20consultation%20space&width=1200&height=600&seq=contact-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Let's Build Something
          <span className="block text-emerald-400">Amazing Together</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your ideas into impactful digital experiences? 
          Our team of experienced professionals is here to help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact-form" 
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap font-semibold"
          >
            Start Your Project
          </a>
          <a 
            href="#contact-info" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
