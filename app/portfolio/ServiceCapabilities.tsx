'use client';

export default function ServiceCapabilities() {
  const capabilities = [
    {
      icon: "ri-computer-line",
      title: "Custom POS Systems",
      description: "Tailored point-of-sale systems designed specifically for your business needs, integrating inventory, sales, and customer management.",
      color: "emerald"
    },
    {
      icon: "ri-archive-line",
      title: "Stock Management Systems",
      description: "Comprehensive inventory management solutions that track stock levels, automate reordering, and provide detailed analytics.",
      color: "blue"
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "Finance Management Systems",
      description: "Custom financial management platforms for accounting, budgeting, reporting, and financial analysis tailored to your business.",
      color: "purple"
    },
    {
      icon: "ri-settings-3-line",
      title: "Custom Business Solutions",
      description: "Bespoke software solutions designed to streamline your specific business processes and improve operational efficiency.",
      color: "orange"
    },
    {
      icon: "ri-database-2-line",
      title: "Data Management Systems",
      description: "Secure and scalable database solutions for managing, storing, and analyzing your business-critical information.",
      color: "indigo"
    },
    {
      icon: "ri-shield-check-line",
      title: "Enterprise Software",
      description: "Robust enterprise-level applications with advanced security, scalability, and integration capabilities.",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: "bg-emerald-100 text-emerald-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600",
      red: "bg-red-100 text-red-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Beyond Web Development</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            While our portfolio showcases web projects, we specialize in creating comprehensive custom software solutions for businesses across various industries.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 max-w-4xl mx-auto text-left">
            <div className="flex items-start">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="ri-eye-off-line text-amber-600 text-xl"></i>
              </div>
              <div className="ml-3">
                <p className="text-amber-800 font-medium">Confidential Projects:</p>
                <p className="text-amber-700 text-sm mt-1">
                  Many of our custom software solutions, including POS systems, inventory management platforms, and financial software, are developed under strict confidentiality agreements and cannot be displayed publicly. However, we're happy to discuss our capabilities and share relevant case studies during consultation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div key={capability.title} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 flex items-center justify-center ${getColorClasses(capability.color)} rounded-lg mb-6`}>
                <i className={`${capability.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{capability.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Discuss Your Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Whether you need a custom POS system, inventory management platform, or any other tailored business solution, we're here to help. Our team specializes in creating software that perfectly fits your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/contact" 
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer text-center whitespace-nowrap"
              >
                Schedule Consultation
              </a>
              <a 
                href="/services" 
                className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors cursor-pointer text-center whitespace-nowrap"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}