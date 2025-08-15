'use client';

export default function ProcessSection() {
  const processes = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, requirements, and target audience to create a comprehensive project roadmap.',
      icon: 'ri-search-line',
      color: 'bg-emerald-500'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team creates detailed designs and technical architecture that align with your vision and best practices.',
      icon: 'ri-draft-line',
      color: 'bg-blue-500'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies with continuous testing to ensure quality and reliability.',
      icon: 'ri-code-line',
      color: 'bg-purple-500'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'We handle the complete deployment process and ensure your solution goes live smoothly and securely.',
      icon: 'ri-rocket-line',
      color: 'bg-orange-500'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and maintenance to keep your solution running optimally and securely.',
      icon: 'ri-customer-service-line',
      color: 'bg-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures successful project delivery from concept to completion
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {processes.map((process, index) => (
            <div key={index} className="flex items-start mb-12 last:mb-0">
              <div className="flex-shrink-0 mr-8">
                <div className={`w-16 h-16 ${process.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                  {process.step}
                </div>
                <div className={`w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md ml-2`}>
                  <i className={`${process.icon} text-xl text-gray-600`}></i>
                </div>
              </div>
              <div className="flex-1 bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 text-lg">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}