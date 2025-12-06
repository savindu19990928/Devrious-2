'use client';

export default function TeamStats() {
  const stats = [
    { number: '13+', label: 'Projects Completed', icon: 'ri-checkbox-circle-line' },
    { number: '4+', label: 'Happy Clients', icon: 'ri-heart-line' },
    { number: '1+', label: 'Years of Excellence', icon: 'ri-time-line' },
    { number: '4+', label: 'Team Members', icon: 'ri-group-line' },
    { number: '100%', label: 'Client Satisfaction', icon: 'ri-star-line' },
    { number: '24/7', label: 'Support Available', icon: 'ri-customer-service-line' }
  ];

  return (
    <section className="py-20 bg-emerald-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-emerald-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}