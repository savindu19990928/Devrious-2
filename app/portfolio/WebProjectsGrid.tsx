
'use client';

import Link from 'next/link';

export default function WebProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "TutorsHub",
      category: "Web Application",
      description: "Developed TutorsHub, a web app that seamlessly matches students and teachers for personalized learning.",
      image: "/images/tutorshub.png",
      technologies: ["React", "Next.js", "Stripe", "MySQL", "Django"],
      features: ["Tutors Catalog", "Payment Processing", "User Accounts", "Video chat"],
      liveUrl: ["https://www.tutorshub.org"]
    },
    {
      id: 2,
      title: "CarCare by Mortor Elite",
      category: "Branding & E-Commerce Project",
      description: "Built a modern web presence for Motor Elite, including a service-focused site for car care and a full-featured e-commerce shop for auto parts.",
      image: "/images/carcare.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "MySQL", "Django"],
      features: ["Responsive Design", "CMS Integration", "Contact Forms", "SEO Optimized"],
      liveUrl: ["https://carcare.mortorelite.com", "https://www.mortorelite.com"],
    },
    {
      id: 3,
      title: "SilkWok",
      category: "Branding Website",
      description: "Built an elegant online presence for SilkWok, featuring their menu, reservations, and authentic dining experience.",
      image: "/images/silkwok.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      features: ["Responsive Design", "CMS Integration", "Contact Forms", "SEO Optimized"],
      liveUrl: ["https://www.silkwok.lk"]
    }
  ];

  const handleOpenTabs = (urls: string[]) => {
    urls.forEach((url: string) => {
      window.open(url, "_blank", "noopener,noreferrer");
    });
  };

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
                  className="w-full h-96 object-cover object-top rounded-xl shadow-lg hover:shadow-xl transition-shadow"
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
                  <button onClick={() => {handleOpenTabs(project.liveUrl)}} className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
