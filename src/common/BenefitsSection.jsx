import React from "react";

const BenefitsSection = ({ data }) => {
  const { heading, headingHighlight , subheading, items } = data;

  return (
    <section className="bg-[#08060F] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-white mb-4">
            {heading}
            <span className="text-[#D4187A]">
              {headingHighlight}
            </span>
          </h2>

          <p className="text-[#B8C0CC] text-lg md:text-xl">
            {subheading}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-[#16141D] hover:border-[#FF6D00] transition-colors"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl mb-6">
                  <Icon size={32} className="text-[#D4187A]" />
                </div>

                {/* Title (Gradient like SERVICES) */}
                <h3 className="text-2xl mb-2 uppercase tracking-wide text-transparent bg-clip-text bg-linear-to-r from-[#7C2FC0] to-[#D4187A]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#FF6D00]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;