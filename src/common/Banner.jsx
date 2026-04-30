import React from "react";
import { ArrowRight } from "lucide-react";
import Config from "../Config";

const Banner = ({ data }) => {
  const { backgroundImage, heading, subheading, ctaLabel } = data;
  const src = backgroundImage.startsWith('/') || backgroundImage.startsWith('http')
    ? backgroundImage
    : '/' + backgroundImage;

  return (
    <section className="bg-[#08060F] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-center">

        {/* Main Card */}
        <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl group">

          {/* Image — defines container height, never cropped */}
          <img
            src={src}
            alt=""
            className="w-full h-auto block"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-[#08060F]/90 via-[#08060F]/40 to-[#08060F]/10 transition-opacity duration-500 group-hover:opacity-70" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16 max-w-2xl z-10 space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-tight whitespace-pre-line">
              {heading}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#B8C0CC] max-w-xl opacity-90 leading-relaxed">
              {subheading}
            </p>

            <a
              href={`https://wa.me/${Config.whatsappHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#FF6D00] text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#D4187A] transition-colors shadow-lg"
            >
              <span className="mr-2">{ctaLabel}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
