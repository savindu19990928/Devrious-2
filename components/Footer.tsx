
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-60">
          <div className="col-span-1 md:col-span-2 ml-0 md:ml-12">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://static.readdy.ai/image/7287dcd8714649f87b3169e43a183267/d7419ef3b32b2a1fbf12b42a8a916efb.jfif"
                alt="Devrious Logo"
                className="w-8 h-8 object-contain rounded-full"
              />
              <span className="text-xl font-bold">Devrious</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional software development agency founded in 2019. We specialize in creating innovative digital solutions for businesses worldwide.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-lg"></i>
                </div>
              </a>

              <a
                href="https://www.facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-lg"></i>
                </div>
              </a>

              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer">
                  <i className="ri-github-fill text-lg"></i>
                </div>
              </a>
            </div> */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white cursor-pointer">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white cursor-pointer">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white cursor-pointer">API Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white cursor-pointer">Software Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white cursor-pointer">Web-Based Systems</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white cursor-pointer">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white cursor-pointer">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white cursor-pointer">Get Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-gray-400 text-sm">
              2025 Devrious. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4">
      <Link href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">Privacy Policy</Link>
      <Link href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">Terms of Service</Link>
    </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
