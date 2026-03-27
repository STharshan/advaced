import React, { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Config from "../Config"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const serviceItems = [
    { label: "Dent Removal", target: "/dent-removal" },
    { label: "Bumper Repair", target: "/bumper-repair" },
    { label: "Scratch Repair", target: "/scratch-repair" },
  ];

  const menuItems = [
    { label: "Home", target: "/" },
    { label: "Gallery", target: "/#gallery" },
    { label: "Testimonial", target: "/#testimonial" },
    { label: "Contact", target: "/#contact" },
    { label: "FAQ", target: "/#faq" },
  ];

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (target) => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);

    // hash links
    if (target.includes("#")) {
      const hash = target.split("#")[1];

      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    navigate(target);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-9999 bg-[#08060F] py-2 border-b border-white/5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-25 h-20 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-10 font-medium text-[#B8C0CC]">

          <button
            onClick={() => handleNavClick("/")}
            className="hover:text-[#FFB800]"
          >
            Home
          </button>

          {/* Services */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-[#FFB800]"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-4 w-56 bg-[#0F0D16] border border-white/10 rounded-xl py-2 shadow-2xl">
                {serviceItems.map((s) => (
                  <button
                    key={s.target}
                    onClick={() => handleNavClick(s.target)}
                    className="w-full text-left px-6 py-3 text-sm hover:bg-[#FF6D00] hover:text-white"
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
              onClick={() => handleNavClick(item.target)}
              className="hover:text-[#FFB800]"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href={`tel:${Config.phoneHref}`}
            className="p-3 rounded-full border border-white/10 text-white bg-gray-800 hover:bg-[#7C2FC0]"
          >
            <Phone size={18} />
          </a>

          <a
            href={`https://wa.me/${Config.whatsappHref}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6D00] text-[#08060F] px-6 py-3 rounded-full font-bold text-sm"
          >
            Ask on WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#08060F] border-b border-white/10 px-8 py-6 flex flex-col gap-2 text-white">

          <button
            onClick={() => handleNavClick("/")}
            className="text-left py-3 border-b border-white/5 text-lg"
          >
            Home
          </button>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-left py-3 border-b border-white/5 text-lg"
            >
              Services
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="bg-white/5 rounded-lg mt-2">
                {serviceItems.map((s) => (
                  <button
                    key={s.target}
                    onClick={() => handleNavClick(s.target)}
                    className="w-full text-left px-6 py-3 text-gray-300 hover:text-white"
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
              onClick={() => handleNavClick(item.target)}
              className="text-left py-3 border-b border-white/5 text-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;