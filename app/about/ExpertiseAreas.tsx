'use client';

export default function ExpertiseAreas() {
  const expertiseAreas = [
    {
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that drive results',
      image: 'https://readdy.ai/api/search-image?query=Web%20development%20and%20design%20process%20showing%20multiple%20screens%20with%20responsive%20website%20layouts%2C%20modern%20UI%2FUX%20design%2C%20clean%20code%20on%20monitors%2C%20contemporary%20development%20workspace%2C%20professional%20web%20design%20tools%20and%20wireframes&width=400&height=300&seq=webdev&orientation=landscape'
    },
    {
      title: 'Custom Software',
      description: 'Tailored solutions for unique business needs',
      image: 'https://readdy.ai/api/search-image?query=Custom%20software%20development%20with%20multiple%20monitors%20showing%20code%2C%20database%20architecture%2C%20API%20development%2C%20modern%20programming%20workspace%2C%20clean%20development%20environment%20with%20technical%20documentation&width=400&height=300&seq=software&orientation=landscape'
    },
    {
      title: 'Consulting Services',
      description: 'Expert guidance for your digital transformation',
      image: 'https://readdy.ai/api/search-image?query=Professional%20consulting%20meeting%20with%20business%20professionals%20discussing%20digital%20strategy%2C%20modern%20conference%20room%2C%20laptops%20and%20charts%2C%20collaborative%20business%20environment%2C%20strategic%20planning%20session&width=400&height=300&seq=consulting&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our collective spans diverse disciplines, allowing us to deliver comprehensive solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}