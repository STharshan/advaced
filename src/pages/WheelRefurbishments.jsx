import React from "react";
import HeroSection from "../common/HeroSection.jsx";
import BenefitsSection from "../common/BenefitsSection.jsx";
import WhatsIncluded from "../common/WhatsIncluded.jsx";
import PricingSection from "../common/PricingSection.jsx";
import TestimonialSection from "../common/TestimonialSection.jsx";
import RepairCases from "../common/RepairCases.jsx";
import Banner from "../common/Banner.jsx";
import FAQSection from "../common/FAQSection.jsx";

import WheelRefurbishmentData from "../data/WheelRefurbishment.js";

const WheelRefurbishmentPage = () => {
  return (
    <div>
      <HeroSection data={WheelRefurbishmentData.hero} />
      <BenefitsSection data={WheelRefurbishmentData.benefits} />
      <WhatsIncluded data={WheelRefurbishmentData.included} />
      <PricingSection data={WheelRefurbishmentData.pricing} />
      <TestimonialSection data={WheelRefurbishmentData.testimonials} />
      <RepairCases data={WheelRefurbishmentData.repairCases} />
      <Banner data={WheelRefurbishmentData.banner} />
      <FAQSection data={WheelRefurbishmentData.faq} />
    </div>
  );
};

export default WheelRefurbishmentPage;