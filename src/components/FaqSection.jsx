import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: "How long does a full body respray take?",
    answer: "A high-quality full respray typically takes between 7 to 14 days. This depends on the level of prep work required, such as dent removal or rust treatment, to ensure a showroom-standard finish."
  },
  {
    question: "Do you offer a warranty on paintwork and repairs?",
    answer: "Yes, we provide a comprehensive warranty on all our paintwork and structural repairs. We take pride in our craftsmanship and use premium materials to ensure long-lasting results."
  },
  {
    question: "Can you match the exact color of my car?",
    answer: "Absolutely. We use advanced computerized color-matching technology alongside manufacturer paint codes to ensure an invisible blend between the new paint and your existing panels."
  },
  {
    question: "Do you work with insurance companies?",
    answer: "We do. We can provide detailed estimates for insurance claims and work directly with your provider to get your vehicle back on the road as quickly as possible."
  },
  {
    question: "Can you repair diamond-cut alloy wheels?",
    answer: "Yes, we have specialized equipment to refurbish diamond-cut alloys, removing scuffs and scratches before re-cutting the face to restore that original factory shine."
  },
  {
    question: "Do I need to book an appointment for a quote?",
    answer: "While you can drop by, we recommend booking a quick slot or sending us photos via WhatsApp (+44 7440 366913) for a faster preliminary estimate."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#08060F] py-12 md:py-24 px-6 md:px-12 lg:px-24 min-h-screen font-['Rajdhani']">
      <div className="max-w-360 mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          
          {/* Left Column: Headline - Sticky on both Mobile and Desktop */}
          <div className="flex flex-col gap-4 md:gap-6 sticky top-0 md:top-32 bg-[#08060F] z-20 py-6 md:py-0 w-full border-b border-white/5 md:border-none">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FF6D00]" />
              <span className="text-[#B8C0CC] text-sm font-['Share_Tech_Mono'] tracking-widest uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] font-['Bebas_Neue'] text-white leading-[0.9] tracking-normal">
              Common <br className="hidden md:block" />
              <span className="text-[#7C2FC0] italic font-['Exo_2'] block text-[1.8rem] md:text-[3.5rem] lg:text-[4.5rem]">
                concerns cleared
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