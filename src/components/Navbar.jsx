import React, { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Config from "../Config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const performNav = (target, closeMobile = true) => {
    if (closeMobile) setIsOpen(false);
    setServicesOpen(false); // Ensure dropdown closes on selection

    if (target.includes("#")) {
      const [path, hash] = target.split("#");
      if (location.pathname === path || (path === "" && location.pathname === "/")) {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(path || "/");
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      navigate(target);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const serviceItems = [
    { label: "Paintless Dent Repair", target: "/paintless-dent-repairs" },
    { label: "Bumper Repair", target: "/bumper-repair" },
    { label: "Smart repair", target: "/scratch-repair" },
    { label: "Insurance Repair", target: "/insurance-repairs" },
    { label: "Wheel Refurbishment", target: "/wheel-refurbishments" },
  ];

  const menuItems = [
    { label: "Home", target: "/" },
    { label: "Gallery", target: "/#gallery" },
    { label: "Testimonial", target: "/#testimonial" },
    { label: "Contact", target: "/#contact" },
    { label: "FAQ", target: "/#faq" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-9999 transition-all duration-300 px-6 md:px-12 ${
        scrolled 
          ? "bg-[#08060F] py-2 border-b border-white/5 shadow-lg" 
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className={`transition-all duration-300 object-contain ${
              scrolled ? "w-20 h-16" : "w-24 h-20"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-10 font-medium text-[#B8C0CC]">
          <button onClick={() => performNav("/")} className="hover:text-[#FFB800] transition-colors">
            Home
          </button>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-[#FFB800] transition-colors py-4"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-64 bg-[#0F0D16] border border-white/10 rounded-xl py-2 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                {serviceItems.map((s) => (
                  <button
                    key={s.target}
                    onClick={() => performNav(s.target)}
                    className="w-full text-left px-6 py-3 hover:bg-[#FF6D00] hover:text-white transition-all text-sm"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {menuItems.slice(1).map((item) => (
            <button
              key={item.label}
              onClick={() => performNav(item.target)}
              className="hover:text-[#FFB800] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <a href={`tel:${Config.phoneHref}`} className="p-3 rounded-full border border-white/10 text-white bg-white/5 hover:bg-[#7C2FC0] transition-all">
            <Phone size={18} />
          </a>
          <a href={`https://wa.me/${Config.whatsappHref}`} target="_blank" rel="noopener noreferrer" className="bg-[#FF6D00] text-[#08060F] px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Ask on WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="xl:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#08060F] border-b border-white/10 px-8 py-6 flex flex-col gap-2 text-white shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <button onClick={() => performNav("/")} className="text-left py-4 border-b border-white/5 text-lg">Home</button>
          
          <div>
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full py-4 border-b border-white/5 text-lg"
            >
              Services <ChevronDown size={20} className={mobileServicesOpen ? "rotate-180" : ""} />
            </button>
            {mobileServicesOpen && (
               <div className="bg-white/5 rounded-xl my-2">
                {serviceItems.map((s) => (
                  <button key={s.target} onClick={() => performNav(s.target)} className="w-full text-left px-6 py-4 text-gray-300 border-b border-white/5 last:border-0">{s.label}</button>
                ))}
               </div>
            )}
          </div>

          {menuItems.slice(1).map((item) => (
            <button key={item.label} onClick={() => performNav(item.target)} className="text-left py-4 border-b border-white/5 text-lg">{item.label}</button>
          ))}
          
          <div className="flex flex-col gap-4 mt-8 pb-10">
            <a href={`tel:${Config.phoneHref}`} className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold"><Phone size={20} /> Call Us Now</a>
            <a href={`https://wa.me/${Config.whatsappHref}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-[#FF6D00] text-[#08060F] py-4 rounded-xl font-bold">Ask on WhatsApp</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;