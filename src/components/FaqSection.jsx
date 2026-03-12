import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: "Can I customize Studio 35 to fit my brand?",
    answer: "Yes. Studio 35 is fully customizable — colors, typography, layouts, and components can be adapted to match your brand identity. Our system is built with modularity in mind, so scaling your design is simple."
  },
  {
    question: "Does Studio 35 include VIP booking management?",
    answer: "Absolutely. We provide integrated systems for managing VIP tables, guest lists, and bottle service requests, ensuring your staff can handle high-demand nights without friction."
  },
  {
    question: "Is this platform suitable for smaller venues?",
    answer: "Yes. While designed for high-end clubs, the modular structure makes it flexible enough for lounges, bars, or pop-up event spaces that want a premium digital presence."
  },
  {
    question: "How difficult is it to update event schedules?",
    answer: "It’s beginner-friendly. Our dashboard allows you to update DJ lineups, ticket links, and gallery photos instantly without touching a single line of code."
  },
  {
    question: "Is the design optimized for mobile users?",
    answer: "Yes. Over 80% of nightlife discovery happens on mobile. Our design is mobile-first, ensuring smooth ticket purchases and table bookings on any device."
  },
  {
    question: "Can I use the system for multiple venue locations?",
    answer: "Our enterprise license supports multi-venue management, allowing you to toggle between different locations while maintaining a unified brand aesthetic."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#08060F] py-20 px-6 md:px-12 lg:px-24 min-h-screen flex items-center font-['Rajdhani']">
      <div className="max-w-360 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Headline */}
          <div className="flex flex-col gap-6 sticky top-24">
            <div className="flex items-center gap-3">
              {/* Using Sunset Orange for the dot */}
              <div className="w-2 h-2 rounded-full bg-[#FF6D00]" />
              <span className="text-[#B8C0CC] text-sm font-['Share_Tech_Mono'] tracking-widest uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] font-['Bebas_Neue'] text-white leading-[0.9] tracking-normal">
              Questions, <br />
              <span className="text-[#7C2FC0] italic font-['Exo_2'] block text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem]">
                answered with clarity
              </span>
            </h2>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col gap-4 w-full">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`group border transition-all duration-300 rounded-2xl overflow-hidden ${
                  openIndex === index 
                    ? 'border-[#7C2FC0] bg-[#7C2FC0]/5' 
                    : 'border-white/5 bg-white/5 hover:border-[#D4187A]/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
                >
                  <span className={`text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                    openIndex === index ? 'text-[#FFB800]' : 'text-[#B8C0CC]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Icon box using Hot Magenta / Orange accents */}
                  <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    openIndex === index ? 'bg-[#FF6D00] rotate-45 shadow-[0_0_20px_rgba(255,109,0,0.4)]' : 'bg-white/5'
                  }`}>
                    <Plus size={20} className={openIndex === index ? 'text-[#08060F]' : 'text-[#D4187A]'} />
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-8">
                    <p className="text-[#B8C0CC] text-lg leading-relaxed max-w-[90%] font-medium">
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