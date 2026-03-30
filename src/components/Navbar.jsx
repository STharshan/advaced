import React, { useState, useEffect, useRef } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Config from "../Config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Navigation Logic
  const performNav = (target, closeMobile = true) => {
    if (closeMobile) setIsOpen(false);

    if (target.includes("#")) {
      const [path, hash] = target.split("#");

      if (
        location.pathname === path ||
        (path === "" && location.pathname === "/")
      ) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(path || "/");
        setTimeout(() => {
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      navigate(target);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

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

  // ✅ Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // ✅ Click Outside Close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-9999 bg-[#08060F] py-2 border-b border-white/5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            loading="lazy"
            alt="Advanced Autobody Solutions"
            className="w-25 h-20 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-10 font-medium text-[#B8C0CC]">
          <button
            onClick={() => {
              setServicesOpen(false);
              performNav("/");
            }}
            className="hover:text-[#FFB800] transition-colors"
          >
            Home
          </button>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-[#FFB800] transition-colors py-4"
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
              <div className="absolute top-full left-0 w-56 bg-[#0F0D16] border border-white/10 rounded-xl py-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
                {serviceItems.map((s) => (
                  <button
                    key={s.target}
                    onClick={() => {
                      setServicesOpen(false);
                      performNav(s.target);
                    }}
                    className="w-full text-left px-6 py-3 hover:bg-[#FF6D00] hover:text-white transition-all"
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
              onClick={() => {
                setServicesOpen(false);
                performNav(item.target);
              }}
              className="hover:text-[#FFB800] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href={`tel:${Config.phoneHref}`}
            className="p-3 rounded-full border border-white/10 text-white bg-white/5 hover:bg-[#7C2FC0] transition-all"
          >
            <Phone size={18} />
          </a>

          <a
            href={`https://wa.me/${Config.whatsappHref}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6D00] text-[#08060F] px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
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
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#08060F] border-b border-white/10 px-8 py-6 flex flex-col gap-2 text-white shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          
          <button
            onClick={() => performNav("/")}
            className="text-left py-4 border-b border-white/5 text-lg"
          >
            Home
          </button>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() =>
                setMobileServicesOpen((prev) => !prev)
              }
              className="flex items-center justify-between w-full py-4 border-b border-white/5 text-lg"
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
              <div className="bg-white/5 rounded-xl my-2 overflow-hidden">
                {serviceItems.map((s) => (
                  <button
                    key={s.target}
                    onClick={() => {
                      setMobileServicesOpen(false);
                      performNav(s.target);
                    }}
                    className="w-full text-left px-6 py-4 text-gray-300 border-b border-white/5 last:border-0 active:bg-[#FF6D00]"
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
              className="text-left py-4 border-b border-white/5 text-lg"
            >
              {item.label}
            </button>
          ))}

          {/* Mobile CTA */}
          <div className="flex flex-col gap-4 mt-8 pb-10">
            <a
              href={`tel:${Config.phoneHref}`}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold"
            >
              <Phone size={20} /> Call Us Now
            </a>

            <a
              href={`https://wa.me/${Config.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#FF6D00] text-[#08060F] py-4 rounded-xl font-bold"
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