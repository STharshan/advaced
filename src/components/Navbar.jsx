import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed z-99 bg-[#08060F] border-b border-white/5 px-6 md:px-12 py-6">
      <div className="max-w-360 mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white text-2xl font-['Bebas_Neue'] tracking-wider">
          Motorium
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-['Rajdhani'] font-medium text-[#B8C0CC]">
          {['Services', 'Cases', 'Before & After', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ & /g, '-')}`} 
              className="hover:text-[#FFB800] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-3 rounded-full border border-white/10 text-white hover:bg-[#7C2FC0] transition-all">
            <Phone size={18} />
          </button>
          <button className="bg-[#FF6D00] text-[#08060F] font-['Share_Tech_Mono'] px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#FFB800] transition-all">
            Ask on WhatsApp
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#08060F] border-b border-white/5 p-6 flex flex-col gap-6 font-['Rajdhani'] text-lg text-white z-50">
          {['Services', 'Cases', 'Before & After', 'Contact'].map((item) => (
            <a key={item} href="#" className="block py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
          <button className="bg-[#FF6D00] text-[#08060F] font-bold py-3 rounded-full uppercase tracking-wider">
            Ask on WhatsApp
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;