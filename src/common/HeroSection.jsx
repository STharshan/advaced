import React from "react";
import Config from "../Config";

const HeroSection = ({ data }) => {
  const {
    backgroundImage,
    backLinkLabel,
    backLinkHref,
    title,
    subtitle,
    ctaLabel,
  } = data;

  return (
    <section className="relative bg-[#08060F] h-screen flex flex-col overflow-hidden">
      <div className="mt-10 w-[95%] mx-auto rounded-4xl"></div>

      {/* Background Image */}
      <img
        src={backgroundImage.startsWith('/') || backgroundImage.startsWith('http') ? backgroundImage : '/' + backgroundImage}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-[95%] mx-auto rounded-4xl h-full object-cover"
      />

      {/* Overlays — scoped to image bounds */}
      <div className="absolute inset-0 w-[95%] mx-auto rounded-4xl bg-black/30" />
      <div className="absolute inset-0 w-[95%] mx-auto rounded-4xl bg-linear-to-t from-black/60 via-black/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 mt-auto">
        <div className="max-w-2xl">
          <a
            href={backLinkHref}
            className="inline-flex items-center gap-2 text-white/60 font-semibold hover:text-white mb-6"
          >
            {backLinkLabel}
          </a>

          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00]">
            {title}
          </h1>

          <p className="text-white/75 mb-8 max-w-lg">{subtitle}</p>

          <a
           href={`https://wa.me/${Config.whatsappHref}`}
           target="_blank"
            className="inline-block bg-white text-[#08060F] px-8 py-4 rounded-xl font-bold hover:bg-[#FFB800]"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;