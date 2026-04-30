import React from "react";
import Config from "../Config";

const PricingCard = ({ title, description, price, priceFrom, priceTo, duration, features, popular }) => {
  const renderPrice = () => {
    if (priceFrom) {
      return (
        <div className="flex flex-col items-center gap-0.5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-semibold text-[#B8C0CC] uppercase tracking-wider">from</span>
            <span className="text-3xl font-bold text-[#FFB800]">£{priceFrom}</span>
          </div>
          {priceTo && (
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs font-semibold text-[#B8C0CC] uppercase tracking-wider">to</span>
              <span className="text-3xl font-bold text-[#FFB800]">£{priceTo}</span>
            </div>
          )}
        </div>
      );
    }
    const isSpecial = !price || price === "POA" || price === "EXCESS";
    return (
      <span className="text-3xl font-bold text-[#FFB800]">
        {isSpecial ? price : `£${price}`}
      </span>
    );
  };

  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col justify-between border transition-all duration-300 ${popular
          ? "bg-[#08060F] border-[#7C2FC0] scale-[1.03] shadow-lg"
          : "bg-[#08060F] border-[#B8C0CC]/20"
        }`}
    >
      {popular && (
        <span className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full bg-[#D4187A] text-white">
          Popular
        </span>
      )}

      <div>
        <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
        <p className="text-[#B8C0CC] mt-1 mb-6 text-sm text-center">{description}</p>

        <div className="flex flex-col items-center gap-1 mb-6">
          {renderPrice()}
          {duration && <span className="text-[#B8C0CC] text-sm">{duration.replace(/^\s*\|\s*/, '')}</span>}
        </div>

        <p className="text-[#FF6D00] font-medium mb-3">Includes:</p>
        <ul className="space-y-2 text-[#B8C0CC] text-sm">
          {features.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      </div>

      <a
        href={`https://wa.me/${Config.whatsappHref}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <button className="mt-8 w-full py-3 rounded-xl font-semibold text-white bg-[#FF6D00] hover:bg-[#D4187A] transition-all cursor-pointer">
          Ask on WhatsApp
        </button>
      </a>
    </div>
  );
};

const PricingSection = ({ data }) => {
  const { subheading, plans } = data;

  return (
    <section className="py-20 px-4 bg-[#08060F]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Transparent <span className="text-[#7C2FC0]">Pricing</span></h2>
        <p className="text-[#B8C0CC] mb-14">{subheading}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
