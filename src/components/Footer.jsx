import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-[#08060F] text-white overflow-hidden">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold">Motorium</h2>
          <p className="text-sm text-gray-400 mt-2">
            <p>&copy; {new Date().getFullYear()} Motorium. All rights reserved. </p>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Before & After</li>
            <li className="hover:text-gray-300 cursor-pointer">Repair Cases</li>
            <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>+971 52 000 4321</li>
            <li>info@motorium.com</li>
            <li>Al Quoz Industrial Area 2, Dubai, UAE</li>
            <li>Mon–Sat: 9:00 – 20:00</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Big Background Text */}
      <div className="relative h-45 md:h-65 flex items-end justify-center">
        <h1 className="text-[90px] md:text-[180px] lg:text-[260px] font-bold text-white/10 leading-none select-none whitespace-nowrap">
          Motorium
        </h1>
      </div>

    </footer>
  );
}