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
    <section id="faq" className="bg-[#08060F] px-4 py-10 md:px-12 md:py-24 lg:px-24 md:min-h-screen">
      <div className="max-w-360 mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          
          {/* Left Column: Keep desktop sticky, let mobile flow naturally */}
          <div className="flex w-full flex-col gap-4 border-b border-white/5 pb-6 md:gap-6 md:border-none md:pb-0 lg:sticky lg:top-32 lg:bg-[#08060F] lg:z-20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FF6D00]" />
              <span className="text-[#B8C0CC] text-sm  tracking-widest uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-[2rem] leading-[0.95] tracking-normal text-white sm:text-[2.4rem] md:text-[4.5rem] lg:text-[6rem]">
             Questions, <br className="hidden md:block" />
              <span className="block text-[1.45rem] italic text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] via-[#D4187A] to-[#FF6D00] sm:text-[1.8rem] md:text-[3.5rem] lg:text-[4.5rem]">
                Answered With Honesty
              </span>
            </h2>
          </div>

          {/* Right Column: Accordion - Scrolls while heading stays fixed */}
          <div className="flex w-full flex-col gap-3 pt-2 md:gap-4 md:pt-0">
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
                  className="flex w-full items-start justify-between gap-4 p-4 text-left transition-colors md:items-center md:p-8"
                >
                  <span className={`pr-2 text-base leading-snug font-semibold tracking-wide transition-colors duration-300 sm:text-lg md:text-2xl ${
                    openIndex === index ? 'text-[#FFB800]' : 'text-[#B8C0CC]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-500 md:mt-0 md:h-10 md:w-10 ${
                    openIndex === index ? 'bg-[#FF6D00] rotate-45 shadow-[0_0_20px_rgba(255,109,0,0.4)]' : 'bg-white/5'
                  }`}>
                    <Plus size={18} className={openIndex === index ? 'text-[#08060F]' : 'text-[#FF6D00]'} />
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-[36rem] opacity-100 md:max-h-80' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-5 md:px-8 md:pb-8">
                    <p className="max-w-full text-sm leading-7 font-medium text-[#B8C0CC] sm:text-base md:max-w-[95%] md:text-lg">
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
