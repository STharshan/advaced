import React, { useRef } from "react";
import { testimonials } from "../Testimonial/TestimonialData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ScrollingTestimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    // This calculates the width of one card to scroll exactly one at a time
    const cardWidth = container.offsetWidth; 
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#08060F] py-10 overflow-hidden">
      
      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 
        bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 
        bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md"
      >
        <ChevronRight size={20} />
      </button>

      {/* Shadows */}
      <div className="absolute left-0 top-0 h-full w-16 sm:w-24 bg-linear-to-r from-[#08060F] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-16 sm:w-24 bg-linear-to-l from-[#08060F] to-transparent z-10 pointer-events-none"></div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="
          flex px-10
          overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {/* We use a wrapper for the cards to define the grid logic */}
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="
              snap-center shrink-0 p-3
              /* Mobile: 1 card (100% width) */
              w-full 
              /* Tablet: 2 cards (50% width) */
              md:w-1/2 
              /* Desktop: 3 cards (33.33% width) */
              xl:w-1/3
            "
          >
            <div className="
              h-full
              bg-white/5 border border-[#7C2FC0]/20
              text-[#B8C0CC]
              p-6 sm:p-8
              rounded-2xl
              shadow-xl
            ">
              <p className="text-sm sm:text-base md:text-lg mb-6 italic leading-relaxed font-medium">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#FF6D00] rounded-full"></div>
                <p className="font-bold text-xs sm:text-sm uppercase tracking-widest text-[#FFB800]">
                  {t.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;