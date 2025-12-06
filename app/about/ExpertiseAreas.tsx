
'use client';

export default function ExpertiseAreas() {
  const expertiseAreas = [
    {
      title: 'Savindu Warnakulasooriya',
      description: 'Technical Director',
      image: '/images/cc.jpg'
    },
    {
      title: 'Nimesh Munasinghe',
      description: 'Brand & Strategy Director',
      image: '/images/wd.jpg'
    },
    {
      title: 'Tharindu Jayathilake',
      description: 'Creative & Product Designer',
      image: '/images/cs.jpg'
    },
    {
      title: 'Venuja Gamage',
      description: 'Marketing & Operations Manager',
      image: '/images/cos.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals who drive our mission forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 rounded-full"
                />
              </div>
              <h3 className="text-xl text-center font-semibold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600 text-center">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
