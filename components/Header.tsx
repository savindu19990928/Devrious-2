
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/d7419ef3b32b2a1fbf12b42a8a916efb.jfif" 
              alt="Devrious Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-gray-800">Devrious</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer whitespace-nowrap">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer whitespace-nowrap">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer whitespace-nowrap">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer whitespace-nowrap">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer whitespace-nowrap">
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 cursor-pointer">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-emerald-600 cursor-pointer">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 cursor-pointer">About</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-emerald-600 cursor-pointer">Portfolio</Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 cursor-pointer">Contact</Link>
              <Link href="/contact" className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer text-center whitespace-nowrap">
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
