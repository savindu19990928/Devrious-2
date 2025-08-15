'use client';

export default function TechnologyStack() {
  const technologies = {
    'Frontend': [
      { name: 'React', icon: 'ri-reactjs-line' },
      { name: 'Next.js', icon: 'ri-nextjs-line' },
      { name: 'Vue.js', icon: 'ri-vuejs-line' },
      { name: 'Angular', icon: 'ri-angularjs-line' },
      { name: 'TypeScript', icon: 'ri-javascript-line' },
      { name: 'Tailwind CSS', icon: 'ri-css3-line' }
    ],
    'Backend': [
      { name: 'Node.js', icon: 'ri-nodejs-line' },
      { name: 'Python', icon: 'ri-code-line' },
      { name: 'Java', icon: 'ri-java-line' },
      { name: 'PHP', icon: 'ri-code-s-slash-line' },
      { name: '.NET', icon: 'ri-microsoft-line' },
      { name: 'Go', icon: 'ri-code-box-line' }
    ],
    'Database': [
      { name: 'PostgreSQL', icon: 'ri-database-line' },
      { name: 'MongoDB', icon: 'ri-database-2-line' },
      { name: 'MySQL', icon: 'ri-database-line' },
      { name: 'Redis', icon: 'ri-database-2-line' },
      { name: 'Firebase', icon: 'ri-firebase-line' },
      { name: 'Supabase', icon: 'ri-supabase-line' }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', icon: 'ri-amazon-line' },
      { name: 'Google Cloud', icon: 'ri-google-line' },
      { name: 'Docker', icon: 'ri-container-line' },
      { name: 'Kubernetes', icon: 'ri-settings-3-line' },
      { name: 'GitHub Actions', icon: 'ri-github-line' },
      { name: 'Vercel', icon: 'ri-upload-cloud-line' }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with cutting-edge technologies and tools to deliver robust, scalable, and future-proof solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{category}</h3>
              <div className="space-y-3">
                {techs.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg">
                      <i className={`${tech.icon} text-lg text-gray-600`}></i>
                    </div>
                    <span className="text-gray-700 font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}