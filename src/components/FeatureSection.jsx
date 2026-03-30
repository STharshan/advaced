import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandFeaturesSection = () => {
  const containerRef = useRef(null);

  // Track scroll progress for the 200vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animations: Text slides UP, Images/Video slide DOWN
  const textTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const mediaTranslateY = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  const content = [
    {
      id: 1,
      title: "About Us",
      desc: "Advanced Auto Body Solutions was built on one simple belief, every vehicle deserves a repair done properly. Based in the heart of Manchester, we've spent years perfecting our craft, working on everything from everyday family cars to prestige vehicles, always delivering results that speak for themselves.",
      bgColor: "bg-[#7C2FC0]",
      textColor: "text-white",
      labelColor: "text-[#FFB800]",
      type: "image",
      src: "/a1.jpg"
    },
    {
      id: 2,
      label: "SECONDARY BRAND // 02",
      title: "WHY US",
      desc: "Every job comes with a 100% Satisfaction Guarantee and our Price Match Promise, backed by hundreds of 5-star reviews across Manchester.",
      bgColor: "bg-[#D4187A]",
      textColor: "text-white",
      labelColor: "text-[#FF6D00]",
      type: "video",
      src: "/about.mp4",
      poster: "/fall.png"
    }
  ];

  return (
    <div id='/' className="bg-[#08060F] text-[#B8C0CC] selection:bg-[#FF6D00] selection:text-black">

      {/* Header Section */}
      <header className="relative h-screen px-8 md:px-20 border-b border-white/5 overflow-hidden flex items-end">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/fall.png"
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 pb-24">
          <h1 className="text-7xl md:text-9xl text-white leading-[0.8]">
            Advanced <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00] italic">
              Autobody Solutions
            </span>
          </h1>
        </div>

      </header>

      {/* Interactive Scroll Section */}
      <div ref={containerRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row">

          {/* LEFT SIDE: Text Panels */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden border-r border-white/5">
            <motion.div
              style={{ y: textTranslateY }}
              className="absolute top-0 left-0 w-full h-full"
            >
              {content.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center px-10 md:px-24 pt-12 h-full bg-[#08060F] transition-colors duration-500"
                >
                  <h2 className="text-6xl md:text-8xl text-white mb-4">{item.title}</h2>
                  <p className="font-medium text-[#B8C0CC] text-lg md:text-2xl max-w-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE: Media Panels */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden bg-[#08060F]">
            <motion.div
              style={{ y: mediaTranslateY }}
              className="absolute top-0 left-0 w-full h-full"
            >
              {[...content].reverse().map((item) => (
                <div key={item.id} className="h-full w-full relative group">
                  {/* Subtle Brand Color Overlay */}
                  <div
                    className={`absolute inset-0 ${item.bgColor} opacity-20 group-hover:opacity-0 transition-opacity duration-1000 mix-blend-color`}
                  ></div>

                  {/* Render image or video */}
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-1000"
                    />
                  ) : (
                    <video
                      src={item.src}
                      poster={item.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-1000"
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BrandFeaturesSection;