import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded bg-white p-0.5">
                <img src="/WhatsApp_Image_2025-03-25_at_16.31.59_c4698d8d.jpg" alt="Devrious Logo" className="w-full h-full object-cover rounded-sm" />
              </div>
              <span className="text-xl font-bold">Devrious</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building Reliable Digital Solutions with Precision. A remote IT
              freelance team delivering scalable web, software, and AI-powered
              solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#10B981] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FB7185] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/devrious/" className="text-gray-400 hover:text-[#FBBF24] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map(item => <li key={item}>
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-[#10B981] transition-colors text-sm">
                      {item}
                    </Link>
                  </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Software Solutions', 'AI & Automation', 'POS Systems'].map(item => <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-[#10B981] transition-colors text-sm">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-[#10B981] shrink-0" />
                <span>info@devrious.lk</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-[#10B981] shrink-0" />
                <span>+94 75 574-6933</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-[#10B981] shrink-0" />
                <span>Remote Team</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            {new Date().getFullYear()} Made by Devrious
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* <a href="#" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </a> */}
          </div>
        </div>
      </div>
    </footer>;
}