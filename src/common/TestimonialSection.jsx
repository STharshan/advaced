import { useState } from "react";

const TestimonialSection = ({ data }) => {
  const { items } = data;
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  const testimonial = items[index];

  return (
    <section className="bg-[#08060F] px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#111018] rounded-3xl p-10 md:p-16 text-center border border-[#7C2FC0]/20">

          {/* Stars */}
          <div className="flex justify-center mb-6 text-[#FFB800] text-xl">★★★★★</div>

          {/* Review */}
          <h3 className="text-xl md:text-3xl font-semibold text-white leading-relaxed max-w-3xl mx-auto">
            {testimonial.review}
          </h3>

          {/* Profile */}
          <div className="mt-10 flex flex-col items-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              className="w-14 h-14 rounded-full object-cover border-2 border-[#FF6D00]"
            />
            <p className="mt-4 font-semibold text-white">{testimonial.name}</p>
            <p className="text-[#B8C0CC] text-sm">{testimonial.role}</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-[#FF6D00]" : "bg-[#B8C0CC]/40"
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="px-4 py-2 rounded-lg bg-[#7C2FC0] text-white hover:bg-[#D4187A]"
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 rounded-lg bg-[#FF6D00] text-white hover:bg-[#D4187A]"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;