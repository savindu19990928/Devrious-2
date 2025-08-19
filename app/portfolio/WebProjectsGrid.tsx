'use client';

import Link from 'next/link';

export default function WebProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "TechFlow Solutions",
      category: "Corporate Website",
      description: "Modern corporate website for a technology consulting firm featuring responsive design, interactive portfolio showcase, and integrated CRM system.",
      image: "https://readdy.ai/api/search-image?query=Modern%20corporate%20technology%20website%20design%20with%20clean%20professional%20layout%2C%20blue%20and%20white%20color%20scheme%2C%20technology%20consulting%20company%20homepage%20with%20hero%20section%2C%20navigation%20menu%2C%20service%20cards%2C%20and%20professional%20business%20imagery%2C%20responsive%20web%20design%20showcase&width=800&height=600&seq=project-1&orientation=landscape",
      technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
      features: ["Product Catalog", "Payment Processing", "User Accounts", "Order Tracking"],
      liveUrl: "#"
    },
    {
      id: 2,
      title: "CarCare by Motor Elite",
      category: "Branding Website",
      description: "Designed and built a responsive website for Car Care by Motor Elite, highlighting their premium auto repair services.",
      image: "/images/carcare.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      features: ["Responsive Design", "CMS Integration", "Contact Forms", "SEO Optimized"],
      liveUrl: "https://carcare.mortorelite.com"
    },
    {
      id: 3,
      title: "HealthCare Connect",
      category: "Web Application",
      description: "Patient management web application for healthcare providers with appointment scheduling, medical records, and telemedicine capabilities.",
      image: "https://readdy.ai/api/search-image?query=Healthcare%20web%20application%20interface%20design%20with%20medical%20theme%2C%20clean%20professional%20layout%20for%20patient%20management%20system%2C%20appointment%20scheduling%20interface%2C%20medical%20records%20dashboard%2C%20blue%20and%20white%20medical%20color%20scheme%2C%20professional%20healthcare%20website%20design&width=800&height=600&seq=project-3&orientation=landscape",
      technologies: ["React", "TypeScript", "Express.js", "MongoDB"],
      features: ["Appointment System", "Patient Records", "Video Calls", "Secure Messaging"],
      liveUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Web Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of our selected web development projects that demonstrate our expertise in creating modern, functional, and beautiful digital experiences.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 max-w-4xl mx-auto text-left">
            <div className="flex items-start">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="ri-information-line text-blue-600 text-xl"></i>
              </div>
              <div className="ml-3">
                <p className="text-blue-800 font-medium">Portfolio Note:</p>
                <p className="text-blue-700 text-sm mt-1">
                  This portfolio showcases only our web development projects. We also create custom POS systems, stock management systems, finance management systems, and other tailored business solutions for our clients. These non-web projects are not displayed here due to client confidentiality agreements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
            >
              <div className="flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover object-top rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-check-line text-emerald-600 text-sm"></i>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link
                    href="/contact"
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Start Similar Project
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap inline-block"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}