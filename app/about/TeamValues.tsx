'use client';

export default function TeamValues() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Strategic Insight',
      description: 'We deeply understand our clients\' goals, industries, and audiences to craft solutions that drive real results.',
      color: 'emerald'
    },
    {
      icon: 'ri-palette-line',
      title: 'Imaginative Execution',
      description: 'Our creative approach ensures every project is visually stunning and functionally exceptional.',
      color: 'blue'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaborative Spirit',
      description: 'Each project is driven by seamless collaboration between creativity, strategy, and technical expertise.',
      color: 'purple'
    },
    {
      icon: 'ri-target-line',
      title: 'Measurable Results',
      description: 'We don\'t just create beautiful work — we ensure it delivers engagement, builds brand equity, and generates growth.',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-600',
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            By deeply understanding our clients' needs, we deliver custom solutions that drive engagement and generate growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 flex items-center justify-center rounded-lg mb-6 ${getColorClasses(value.color)}`}>
                <i className={`${value.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}