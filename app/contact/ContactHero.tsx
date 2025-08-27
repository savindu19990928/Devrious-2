
'use client';

export default function ContactHero() {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://readdy.ai/api/search-image?query=Modern%20flat%20vector%20illustration%20of%20customer%20communication%20and%20support%20concept%2C%20abstract%20geometric%20shapes%20representing%20connection%20and%20dialogue%2C%20floating%20message%20bubbles%20and%20communication%20icons%2C%20minimalist%20design%20with%20green%20and%20yellow%20gradient%20colors%2C%20contemporary%20contact%20and%20support%20illustration%20with%20clean%20flowing%20lines%20and%20friendly%20atmosphere&width=1920&height=1080&seq=contact-hero-communication-illustration&orientation=landscape")`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            Contact
            <span className="text-emerald-400 block">Devrious</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-4xl leading-relaxed drop-shadow-lg">
            Ready to start your next project? Get in touch with our team of experts. 
            We're here to help transform your ideas into powerful digital solutions 
            that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">24/7</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Support Available</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">Free</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Initial Consultation</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 drop-shadow-lg">Fast</div>
              <div className="text-white text-sm sm:text-base drop-shadow-lg">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}