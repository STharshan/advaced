import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+44 7440 366913";
  const email = "info@advancedautobodysolutions.co.uk";

  const navigate = useNavigate();
  const location = useLocation();

  // Identical routing table as Navbar
  const menuItems = [
    { label: "Home",        type: "hash", target: "/" },
    { label: "Services",    type: "page", target: "/services" },
    { label: "Gallery",     type: "hash", target: "/#gallery" },
    { label: "Testimonial", type: "hash", target: "/#testimonial" },
    { label: "Contact",     type: "hash", target: "/#contact" },
    { label: "FAQ",         type: "hash", target: "/#faq" },
  ];

  const handleNavClick = (item) => {
    // Page route (e.g. /services)
    if (item.type === "page") {
      navigate(item.target);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Home → scroll to top
    if (item.target === "/") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 80);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Hash section (e.g. /#gallery)
    const hash = item.target.split("#")[1];
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#08060F] text-white overflow-hidden border-t border-white/5">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-10">

        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-['Bebas_Neue'] tracking-wider">
            Advanced <br /> Autobody Solutions
          </h2>
          <p className="text-sm text-gray-400 font-['Rajdhani']">
            &copy; {currentYear} Advanced Autobody Solutions. <br />
            All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-['Share_Tech_Mono'] text-[#FF6D00] uppercase tracking-widest mb-6">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm font-['Rajdhani']">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-gray-400 hover:text-[#FFB800] transition-colors bg-transparent border-none cursor-pointer text-sm text-left p-0 font-['Rajdhani']"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-['Share_Tech_Mono'] text-[#FF6D00] uppercase tracking-widest mb-6">
            Contact
          </h3>
          <ul className="space-y-4 text-sm font-['Rajdhani'] text-gray-400">
            <li>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="hover:text-white transition-colors block"
              >
                {phoneNumber}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                className="hover:text-white transition-colors block break-all"
              >
                {email}
              </a>
            </li>
            <li className="leading-relaxed">
              <a
                href="https://maps.google.com/?cid=15493974289278873657&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors block"
              >
                Unit 10, Orchard Sawmills Estate <br />
                Langley Rd S, Salford, Manchester M6 6SD
              </a>
            </li>
            <li className="text-[#FFB800]">Mon–Sun: 7:00AM – 7:00PM</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-['Share_Tech_Mono'] text-[#FF6D00] uppercase tracking-widest mb-6">
            Legal
          </h3>
          <ul className="space-y-3 text-sm font-['Rajdhani'] text-gray-400">
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors block">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-900" />

      {/* Big Watermark Text */}
      <div className="relative flex items-end justify-center overflow-hidden py-6 sm:py-5">
        <h1
          className="font-bold text-center text-white/10 leading-tight select-none"
          style={{ fontSize: "clamp(2.2rem, 15vw, 8rem)", letterSpacing: "-0.02em" }}
        >
          <span className="block md:hidden">Advanced</span>
          <span className="block md:hidden">Autobody</span>
          <span className="block md:hidden">Solutions</span>
          <span className="hidden md:block">Advanced</span>
          <span className="hidden md:block">Autobody Solutions</span>
        </h1>
      </div>

      {/* Credit Footer */}
      <div className="bg-[#05040a] py-6 border-t border-white/5">
        <p className="text-center text-xs font-medium text-gray-500 tracking-widest uppercase">
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6D00] hover:text-[#FFB800] transition-colors"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
}