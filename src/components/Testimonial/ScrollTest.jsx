import React from "react";
import { testimonials } from "../Testimonial/TestimonialData";

const ScrollingTestimonials = () => {
  return (
    <section
      className="relative bg-black/90 py-26 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Left Shadow */}
      <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-black/90 to-transparent pointer-events-none z-10"></div>

      {/* Right Shadow */}
      <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-l from-black/90 to-transparent pointer-events-none z-10"></div>

      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-75 sm:min-w-88 md:min-w-100 bg-black text-white p-6 rounded shadow-md"
          >
            <p className="text-sm mb-4">"{t.quote}"</p>
            <p className="font-bold text-sm uppercase">{t.author}</p>
            <p className="text-xs text-gray-400">
              Google Reviews
            </p>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;
