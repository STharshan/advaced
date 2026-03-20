import React from "react";
import HeroSection from "../common/HeroSection.jsx";
import BenefitsSection from "../common/BenefitsSection.jsx";
import WhatsIncluded from "../common/WhatsIncluded.jsx";
import PricingSection from "../common/PricingSection.jsx";
import TestimonialSection from "../common/TestimonialSection.jsx";
import RepairCases from "../common/RepairCases.jsx";
import Banner from "../common/Banner.jsx";
import FAQSection from "../common/FAQSection.jsx";

// Switch this import to change which service is shown
import BumperRepairData from "../data/BumperRepairs.js";

const BumperRepairPage = () => {
  return (
    <div>
      <HeroSection data={BumperRepairData.hero} />
      <BenefitsSection data={BumperRepairData.benefits} />
      <WhatsIncluded data={BumperRepairData.included} />
      <PricingSection data={BumperRepairData.pricing} />
      <TestimonialSection data={BumperRepairData.testimonials} />
      <RepairCases data={BumperRepairData.repairCases} />
      <Banner data={BumperRepairData.banner} />
      <FAQSection data={BumperRepairData.faq} />
    </div>
  );
};

export default BumperRepairPage;