import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className={`group flex flex-col gap-2 p-5 rounded-[14px] bg-[#08060F] border transition-all duration-300 cursor-pointer ${
        isOpen ? "border-[#7C2FC0]" : "border-[rgba(184,192,204,0.25)] hover:border-[#7C2FC0]"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-white text-[15px] font-medium leading-6">{question}</span>
        <div className={`w-8 h-8 min-w-8 rounded-full border flex items-center justify-center transition-colors duration-200 ${
          isOpen ? "bg-[#7C2FC0] border-[#7C2FC0] text-white" : "border-[rgba(184,192,204,0.35)] text-[#B8C0CC]"
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </div>
      
      {/* Responsive Answer Transition */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-50 opacity-100 mt-2" : "max-h-0 opacity-0"
      }`}>
        <p className="text-[#B8C0CC] text-[14px] leading-6 pb-2">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = ({ data }) => {
  const {
    heading,
    headingHighlight,
    subheading,
    ctaLabel,
    ctaHref,
    itemsLeft,
    itemsRight,
  } = data;

  return (
    <section className="bg-[#08060F] py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-white leading-[1.15] tracking-[-1px] mb-4">
            {heading} <br />
            <span className="text-[#7C2FC0]">{headingHighlight}</span>
          </h2>
          <p className="text-[#B8C0CC] text-[15px] leading-6 mb-7">{subheading}</p>
          <a
            href={ctaHref}
            className="inline-block bg-[#7C2FC0] text-white py-3 px-8 rounded-xl text-[14px] font-semibold hover:bg-opacity-90 transition-all"
          >
            {ctaLabel}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-10 items-start">
          <div className="flex flex-col gap-4">
            {itemsLeft.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {itemsRight.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;