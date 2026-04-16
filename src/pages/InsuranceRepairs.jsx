import React from "react";
import HeroSection from "../common/HeroSection.jsx";
import BenefitsSection from "../common/BenefitsSection.jsx";
import WhatsIncluded from "../common/WhatsIncluded.jsx";
import PricingSection from "../common/PricingSection.jsx";
import TestimonialSection from "../common/TestimonialSection.jsx";
import RepairCases from "../common/RepairCases.jsx";
import Banner from "../common/Banner.jsx";
import FAQSection from "../common/FAQSection.jsx";

import InsuranceRepairsData from "../data/InsuranceRepair.js";

const InsuranceRepairsPage = () => {
  return (
    <div>
      <HeroSection data={InsuranceRepairsData.hero} />
      <BenefitsSection data={InsuranceRepairsData.benefits} />
      <WhatsIncluded data={InsuranceRepairsData.included} />
      <PricingSection data={InsuranceRepairsData.pricing} />
      <TestimonialSection data={InsuranceRepairsData.testimonials} />
      <RepairCases data={InsuranceRepairsData.repairCases} />
      <Banner data={InsuranceRepairsData.banner} />
      <FAQSection data={InsuranceRepairsData.faq} />
    </div>
  );
};

export default InsuranceRepairsPage;