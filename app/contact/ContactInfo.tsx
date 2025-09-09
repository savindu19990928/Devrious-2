
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      info: 'info@devrious.com',
      description: 'Send us your project details',
      href: "mailto:info@devrious.com"
    },
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      info: '+94 75 574-6933',
      description: 'Mon-Fri from 8am to 6pm',
      href: "tel:+94755746933"
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      info: 'Remote Team',
      description: 'Serving clients worldwide',
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-fill', label: 'LinkedIn', href: '#' },
    { icon: 'ri-twitter-fill', label: 'Twitter', href: '#' },
    { icon: 'ri-github-fill', label: 'GitHub', href: '#' },
    { icon: 'ri-facebook-fill', label: 'Facebook', href: '#' }
  ];

  return (
    <section id="contact-info" className="bg-gray-50 py-16 px-6 lg:px-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We're here to help transform your ideas into reality. Reach out through any of these channels.
        </p>

        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-lg">
                <i className={`${method.icon} text-emerald-600 text-xl`}></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{method.title}</h3>
                <p className="text-emerald-600 font-medium mb-1"><a href={method.href}>{method.info}</a></p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer"
                aria-label={social.label}
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Devrious?</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                <i className="ri-check-line text-emerald-600"></i>
              </div>
              <span className="text-gray-600">5+ years of experience since 2019</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                <i className="ri-check-line text-emerald-600"></i>
              </div>
              <span className="text-gray-600">Experienced collective of freelancers</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                <i className="ri-check-line text-emerald-600"></i>
              </div>
              <span className="text-gray-600">Strategic insight with creative execution</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                <i className="ri-check-line text-emerald-600"></i>
              </div>
              <span className="text-gray-600">Measurable results and growth focus</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-emerald-50 rounded-lg border border-emerald-100">
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">Quick Response Promise</h3>
          <p className="text-emerald-700">
            We respond to all inquiries within 24 hours and provide project proposals within 2-3 business days.
          </p>
        </div>
      </div>
    </section>
  );
}
