
'use client';

export default function ExpertiseAreas() {
  const expertiseAreas = [
    {
      title: 'UI/UX Design',
      description: 'User interfaces that provide exceptional drive engagement.',
      image: '/images/cc.jpg'
    },
    {
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that drive results',
      image: '/images/wd.jpg'
    },
    {
      title: 'Custom Software',
      description: 'Tailored solutions for unique business needs',
      image: '/images/cs.jpg'
    },
    {
      title: 'Consulting Services',
      description: 'Expert guidance for your digital transformation',
      image: '/images/cos.jpg'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
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
