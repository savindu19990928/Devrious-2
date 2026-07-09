import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white shadow-sm group-hover:shadow-md transition-all">
            <img src="/WhatsApp_Image_2025-03-25_at_16.31.59_c4698d8d.jpg" alt="Devrious Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Devrious
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path) ? 'text-[#10B981]' : 'text-gray-600 hover:text-[#10B981]'}`}>
            {link.name}
          </Link>)}
          <a href="tel:+94706611936">
            <Button size="sm" variant="primary">
              Contact Us
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
      <div className="px-4 pt-2 pb-6 space-y-1">
        {navLinks.map(link => <Link key={link.name} to={link.path} className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-green-50 text-[#10B981]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#10B981]'}`}>
          {link.name}
        </Link>)}
      </div>
    </div>}
  </nav>;
}