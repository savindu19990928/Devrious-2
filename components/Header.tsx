
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <img 
              src="/images/logo.jfif" 
              alt="Devrious Logo" 
              className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">Devrious</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item, index) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-gray-700 hover:text-emerald-600 transition-all duration-300 cursor-pointer whitespace-nowrap relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 hover:scale-105 transform transition-all duration-300 cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg">
              Call Us Now
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden w-6 h-6 flex items-center justify-center cursor-pointer transform transition-all duration-300 ${
              isMenuOpen ? 'rotate-90' : 'rotate-0'
            }`}
          >
            <i className={`text-xl transition-all duration-300 ${
              isMenuOpen ? 'ri-close-line' : 'ri-menu-line'
            }`}></i>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 py-4 border-t border-gray-200' : 'max-h-0 py-0'
        }`}>
          <nav className="flex flex-col space-y-4">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item, index) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-gray-700 hover:text-emerald-600 cursor-pointer transform transition-all duration-300 hover:translate-x-2 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className={`bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer text-center whitespace-nowrap transform hover:scale-105 duration-300 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? '250ms' : '0ms'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Call Us Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}