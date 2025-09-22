
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-2 mb-4 group">
              <img 
                src="/images/logo.jfif" 
                alt="Devrious Logo" 
                className="w-8 h-8 object-contain rounded-full group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="text-xl font-bold group-hover:text-emerald-400 transition-colors duration-300">Devrious</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional software development agency founded in 2019. We specialize in creating innovative digital solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'ri-linkedin-fill', href: '#' },
                { icon: 'ri-facebook-fill', href: '#' },
                { icon: 'ri-instagram-fill', href: '#' }
              ].map((social, index) => (
                <div 
                  key={index}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-emerald-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                >
                  <i className={`${social.icon} text-lg group-hover:rotate-12 transition-transform duration-300`}></i>
                </div>
              ))}
            </div>
          </div>
          
          <div className="transform hover:translate-x-2 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'UI/UX Design', 'API Development', 'Software Development', 'Web-Based Systems'].map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services" 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 cursor-pointer inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="transform hover:translate-x-2 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Contact', href: '/contact' },
                { name: 'Get Quote', href: '/contact' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 cursor-pointer inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
              2025 Devrious. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* <Link href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer hover:scale-105 transform transition-all duration-300">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer hover:scale-105 transform transition-all duration-300">Terms of Service</Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}