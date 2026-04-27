import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: "Can you match car’s exact paint?",
    answer: "When we repair and repaint a panel on your vehicle, we don’t paint that panel in isolation. Even using the exact manufacturer’s paint code, slight colour variations can occur due to age, sunlight exposure, and normal production differences. To achieve a perfect finish, we blend the new paint into the adjacent panels. This allows the colour to transition gradually, rather than stopping sharply at the edge of the repair. Blending ensures there’s no visible difference between panels and gives a seamless, factory quality result. Without this step, a colour mismatch can sometimes be noticeable, particularly in certain lighting. It’s a standard professional refinishing process and key to making the repair completely invisible. Condense this to it and also mention they use a spectrometer."
  },
  {
    question: "How long wil it take?",
    answer: "mart repairs are completed in a day or few hours - bigger jobs 2-3 days we will tell u so not left guessing."
  },
  {
    question: "Guarantee?",
    answer: "life time ownership guarantee."
  },
  {
    question: "Do I need to go through my insurance?",
    answer: "If at fault you can chose us as your chosen repairer or if it it’s non fault then we can deal with your full claim through 3rd part accident manangent company."
  },
  {
    question: "How do I get a quote?",
    answer: "add the cta to form Fill."
  },
  {
    question: "Price match guarantee?",
    answer: "We offer the best price for the best quality - we won’t price match if it means quality is compromised."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#08060F] py-12 md:py-24 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-360 mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          
          {/* Left Column: Headline - Sticky on both Mobile and Desktop */}
          <div className="flex flex-col gap-4 md:gap-6 sticky top-0 md:top-32 bg-[#08060F] z-20 py-6 md:py-0 w-full border-b border-white/5 md:border-none">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FF6D00]" />
              <span className="text-[#B8C0CC] text-sm  tracking-widest uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] text-white leading-[0.9] tracking-normal">
             Questions, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00] italic block text-[1.8rem] md:text-[3.5rem] lg:text-[4.5rem]">
                Answered With Honesty
              </span>
            </h2>
          </div>

          {/* Right Column: Accordion - Scrolls while heading stays fixed */}
          <div className="flex flex-col gap-4 w-full pt-4 md:pt-0">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`group border transition-all duration-300 rounded-2xl overflow-hidden ${
                  openIndex === index 
                    ? 'border-[#7C2FC0] bg-[#7C2FC0]/5' 
                    : 'border-white/5 bg-white/5 hover:border-[#FF6D00]/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-8 text-left transition-colors"
                >
                  <span className={`text-lg md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                    openIndex === index ? 'text-[#FFB800]' : 'text-[#B8C0CC]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    openIndex === index ? 'bg-[#FF6D00] rotate-45 shadow-[0_0_20px_rgba(255,109,0,0.4)]' : 'bg-white/5'
                  }`}>
                    <Plus size={18} className={openIndex === index ? 'text-[#08060F]' : 'text-[#FF6D00]'} />
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-8 pb-8">
                    <p className="text-[#B8C0CC] text-base md:text-lg leading-relaxed max-w-[95%] font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;