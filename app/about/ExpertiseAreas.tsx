'use client';

export default function ExpertiseAreas() {
  const expertiseAreas = [
    {
      title: 'Branding & Identity',
      description: 'Complete brand development from concept to execution',
      image: 'https://readdy.ai/api/search-image?query=Professional%20branding%20and%20identity%20design%20workspace%20with%20color%20palettes%2C%20logo%20sketches%2C%20brand%20guidelines%2C%20modern%20design%20tools%2C%20clean%20minimalist%20aesthetic%2C%20creative%20branding%20materials%20spread%20on%20desk%2C%20inspiring%20design%20environment&width=400&height=300&seq=branding&orientation=landscape'
    },
    {
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that drive results',
      image: 'https://readdy.ai/api/search-image?query=Web%20development%20and%20design%20process%20showing%20multiple%20screens%20with%20responsive%20website%20layouts%2C%20modern%20UI%2FUX%20design%2C%20clean%20code%20on%20monitors%2C%20contemporary%20development%20workspace%2C%20professional%20web%20design%20tools%20and%20wireframes&width=400&height=300&seq=webdev&orientation=landscape'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic campaigns that amplify your reach',
      image: 'https://readdy.ai/api/search-image?query=Digital%20marketing%20analytics%20dashboard%20with%20charts%20and%20graphs%2C%20social%20media%20campaigns%2C%20marketing%20strategy%20planning%2C%20modern%20workspace%20with%20multiple%20screens%20showing%20marketing%20data%2C%20professional%20marketing%20environment&width=400&height=300&seq=marketing&orientation=landscape'
    },
    {
      title: 'Content Creation',
      description: 'Compelling content that resonates with your audience',
      image: 'https://readdy.ai/api/search-image?query=Content%20creation%20workspace%20with%20video%20equipment%2C%20cameras%2C%20lighting%20setup%2C%20modern%20content%20studio%2C%20creative%20writing%20and%20video%20production%20tools%2C%20professional%20content%20creation%20environment%20with%20bright%20lighting&width=400&height=300&seq=content&orientation=landscape'
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
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
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