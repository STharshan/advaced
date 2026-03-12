import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandFeaturesSection = () => {
  const containerRef = useRef(null);

  // Track scroll progress for the 200vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animations: Text slides UP, Images slide DOWN
  const textTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const imageTranslateY = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  const content = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet,",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor netus mauris velit vulputate lectus aliquam. Faucibus posuere at euismod turpis feugiat porta vestibulum.",
      bgColor: "bg-[#7C2FC0]",
      textColor: "text-white",
      labelColor: "text-[#FFB800]", // Chrome Gold highlight
      img: "https://cdn.prod.website-files.com/62f3719eed276382ac6eeb38/62f37fe8c69d4a2a27b7430d_Footer%20Image.jpg"
    },
    {
      id: 2,
      label: "SECONDARY BRAND // 02",
      title: "HOT MAGENTA",
      hex: "#D4187A",
      desc: "A bold statement of energy and modern aesthetics designed to stand out in the digital landscape.",
      bgColor: "bg-[#D4187A]",
      textColor: "text-white",
      labelColor: "text-[#FF6D00]", // Sunset Orange accent
      img: "https://cdn.prod.website-files.com/62f3719eed276382ac6eeb38/62f3a7570d180f5af9147f37_Hero%20Image.jpg"
    }
  ];

  return (
    <div className="bg-[#08060F] text-[#B8C0CC] selection:bg-[#FF6D00] selection:text-black">

      {/* Header Section */}
      <header className="py-24 px-8 md:px-20 border-b border-white/5">
        <h1 className="font-['Bebas_Neue'] pt-10 text-7xl md:text-9xl text-white leading-[0.8]">
          Features of <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00] font-['Exo_2'] italic">
            Our Products
          </span>
        </h1>
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
                  className={`flex flex-col justify-center px-10 md:px-24 h-full bg-[#08060F] transition-colors duration-500`}
                >
                  <h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl text-white mb-4">
                    {item.title}
                  </h2>
                  <p className="font-['Rajdhani'] font-medium text-[#B8C0CC] text-lg md:text-2xl max-w-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE: Image Panels */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden bg-[#08060F]">
            <motion.div
              style={{ y: imageTranslateY }}
              className="absolute top-0 left-0 w-full h-full"
            >
              {[...content].reverse().map((item) => (
                <div key={item.id} className="h-full w-full relative group">
                  {/* Subtle Brand Color Overlay */}
                  <div className={`absolute inset-0 ${item.bgColor} opacity-20 group-hover:opacity-0 transition-opacity duration-1000 mix-blend-color`}></div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-1000"
                  />
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