import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const phoneNumber = "+447440366913";
  const formattedPhone = "+44 7440 366913";

  // type "hash"  → scroll to a section on the homepage
  // type "page"  → navigate to a separate route
  const menuItems = [
    { label: 'Home', type: 'hash', target: '/' },
    { label: 'Services', type: 'page', target: '/services' },
    { label: 'Gallery', type: 'hash', target: '/#gallery' },
    { label: 'Testimonial', type: 'hash', target: '/#testimonial' },
    { label: 'Contact', type: 'hash', target: '/#contact' },
    { label: 'FAQ', type: 'hash', target: '/#faq' },
  ];

  const handleNavClick = (item) => {
    setIsOpen(false);

    // ── Page link (e.g. /services) ──
    if (item.type === 'page') {
      navigate(item.target);
      return;
    }

    // ── "Home" → scroll to very top ──
    if (item.target === '/') {
      if (location.pathname !== '/') {
        navigate('/');
        // scrollTo after navigation settles
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // ── Hash section link (e.g. /#gallery) ──
    const hash = item.target.split('#')[1];
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-9999 bg-[#08060F] py-2 border-b border-white/5 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group transition-transform duration-300"
        >
          {/* Logo Image */}
          <img
            src="/logo.png"
            alt="Advanced Autobody Solutions Logo"
            className="w-25 h-20 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-10  font-medium text-[#B8C0CC]">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="hover:text-[#FFB800] transition-colors duration-300 bg-transparent border-none cursor-pointer text-base font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href={`tel:${phoneNumber}`}
            className="p-3 rounded-full border border-white/10 text-white bg-gray-800 hover:bg-[#7C2FC0] transition-all"
            title="Call Us"
          >
            <Phone size={18} />
          </a>
          <a
            href={`https://wa.me/${phoneNumber.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6D00] text-[#08060F]  px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#FFB800] transition-all"
          >
            Ask on WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#08060F] border-b border-white/10 px-8 py-6 flex flex-col gap-5  text-white shadow-2xl">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="w-full text-left py-2 border-b border-white/5 text-lg hover:text-[#FFB800] transition-colors duration-300 bg-transparent cursor-pointer"
              style={{ border: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {item.label}
            </button>
          ))}

          <div className="flex flex-col gap-4 pt-2">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-3 border border-white/20 py-3 rounded-full font-bold uppercase tracking-wider text-sm"
            >
              <Phone size={16} /> {formattedPhone}
            </a>
            <a
              href={`https://wa.me/${phoneNumber.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6D00] text-[#08060F] flex items-center justify-center py-4 rounded-full font-bold uppercase tracking-wider text-sm"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;