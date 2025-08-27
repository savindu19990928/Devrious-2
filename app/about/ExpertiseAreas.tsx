
'use client';

export default function ExpertiseAreas() {
  const expertiseAreas = [
    {
      title: 'Branding & Identity',
      description: 'Complete brand development from concept to execution',
      image: 'https://readdy.ai/api/search-image?query=Vector%20illustration%20of%20branding%20and%20identity%20design%2C%20flat%20design%20style%20showing%20logo%20creation%20process%2C%20color%20palettes%20and%20brand%20guidelines%2C%20geometric%20shapes%20representing%20design%20elements%2C%20modern%20minimalist%20illustration%20with%20creative%20tools%20and%20brand%20materials%20in%20bright%20colors&width=400&height=300&seq=branding-vector&orientation=landscape'
    },
    {
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that drive results',
      image: 'https://readdy.ai/api/search-image?query=Vector%20illustration%20of%20web%20development%20process%2C%20flat%20design%20showing%20responsive%20website%20layouts%20on%20different%20devices%2C%20coding%20and%20design%20elements%2C%20geometric%20UI%20components%2C%20clean%20modern%20illustration%20style%20with%20technology%20and%20web%20development%20concepts&width=400&height=300&seq=webdev-vector&orientation=landscape'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic campaigns that amplify your reach',
      image: 'https://readdy.ai/api/search-image?query=Vector%20illustration%20of%20digital%20marketing%20concepts%2C%20flat%20design%20showing%20analytics%20charts%20and%20social%20media%20elements%2C%20marketing%20strategy%20visualization%2C%20geometric%20graphs%20and%20data%20representation%2C%20modern%20minimalist%20style%20with%20marketing%20icons%20and%20digital%20campaign%20elements&width=400&height=300&seq=marketing-vector&orientation=landscape'
    },
    {
      title: 'Content Creation',
      description: 'Compelling content that resonates with your audience',
      image: 'https://readdy.ai/api/search-image?query=Vector%20illustration%20of%20content%20creation%20process%2C%20flat%20design%20showing%20video%20production%20and%20creative%20writing%2C%20geometric%20media%20elements%2C%20modern%20illustration%20style%20with%20content%20creation%20tools%2C%20cameras%20and%20writing%20instruments%20in%20minimalist%20vector%20art&width=400&height=300&seq=content-vector&orientation=landscape'
    },
    {
      title: 'Custom Software',
      description: 'Tailored solutions for unique business needs',
      image: 'https://readdy.ai/api/search-image?query=Vector%20illustration%20of%20custom%20software%20development%2C%20flat%20design%20showing%20programming%20and%20coding%20concepts%2C%20geometric%20code%20elements%20and%20software%20architecture%2C%20clean%20modern%20illustration%20style%20with%20development%20tools%20and%20technical%20components&width=400&height=300&seq=software-vector&orientation=landscape'
    },
    {
      title: 'Consulting Services',
      description: 'Expert guidance for your digital transformation',
      image: 'https://readdy.ai/api/search-image?query=Vector%20illustration%20of%20business%20consulting%20and%20strategy%2C%20flat%20design%20showing%20professional%20meeting%20and%20collaboration%2C%20geometric%20business%20elements%2C%20modern%20minimalist%20style%20with%20consulting%20concepts%20and%20strategic%20planning%20visualization&width=400&height=300&seq=consulting-vector&orientation=landscape'
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
