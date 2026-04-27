import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandFeaturesSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animations: Desktop Only
  const textTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const mediaTranslateY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const content = [
    {
      id: 1,
      title: "About Us",
      desc: "Advanced Autobody Solutions was built on one simple belief, every vehicle deserves a repair done properly. Based in the heart of Manchester, we've spent years perfecting our craft, working on everything from everyday family cars to prestige vehicles, always delivering results that speak for themselves.",
      bgColor: "bg-[#7C2FC0]",
      type: "image",
      src: "/a1.jpg"
    },
    {
      id: 2,
      title: "WHY US",
      desc: "We are committed to exceptional workmanship on every repair, giving you complete peace of mind. All work is backed by our lifetime ownership guarantee, using high end products and following manufacturer guidelines. We never compromise on quality, ensuring your vehicle is restored to the highest standard!",
      author: "Wes - Advanced Autobody Solutions",
      bgColor: "bg-[#D4187A]",
      type: "video",
      src: "/about.mp4",
      poster: "/fall.png"
    }
  ];

  return (
    <div className="bg-[#08060F] text-[#B8C0CC] selection:bg-[#FF6D00] selection:text-black">

      {/* MOBILE LAYOUT: Text next to Image/Video (Visible only on mobile) */}
      <div className="flex flex-col lg:hidden">
        {content.map((item) => (
          <div key={`mobile-${item.id}`} className="flex flex-col">
            {/* Text Area */}
            <div className="flex flex-col justify-center px-10 py-20 bg-[#08060F]">
              <h2 className="text-6xl text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00] mb-4">{item.title}</h2>
              <p className="font-medium text-[#B8C0CC] text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
            {/* Media Area */}
            <div className="h-[50vh] w-full relative">
              <div className={`absolute inset-0 ${item.bgColor} opacity-20 mix-blend-color`}></div>
              {item.type === "image" ? (
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              ) : (
                <video src={item.src} poster={item.poster} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP LAYOUT: Interactive Scroll (Hidden on mobile) */}
      <div ref={containerRef} className="hidden lg:block relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-row">

          {/* LEFT SIDE: Text Panels */}
          <div className="relative w-1/2 h-full overflow-hidden border-r border-white/5">
            <motion.div
              style={{ y: textTranslateY }}
              className="absolute top-0 left-0 w-full h-[200%]"
            >
              {content.map((item) => (
                <div key={item.id} className="flex flex-col justify-center px-24 h-1/2 bg-[#08060F]">
                  <h2 className="text-8xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00]">{item.title}</h2>
                  <p className="font-medium text-[#B8C0CC] text-2xl max-w-lg leading-relaxed">
                    {item.desc}
                  </p>
                  <p className='mt-5'>{item.author}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE: Media Panels */}
          <div className="relative w-1/2 h-full overflow-hidden bg-[#08060F]">
            <motion.div
              style={{ y: mediaTranslateY }}
              className="absolute top-0 left-0 w-full h-[200%]"
            >
              {[...content].reverse().map((item) => (
                <div key={item.id} className="h-1/2 w-full relative group">
                  <div className={`absolute inset-0 ${item.bgColor} opacity-20 group-hover:opacity-0 transition-opacity duration-1000 mix-blend-color`}></div>
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-1000"
                    />
                  ) : (
                    <video
                      src={item.src}
                      poster={item.poster}
                      autoPlay loop muted playsInline
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