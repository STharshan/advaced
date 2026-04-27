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
import ScratchRepairData from "../data/SmartRepair.js";

const ScratchRepairPage = () => {
  return (
    <div>
      <HeroSection data={ScratchRepairData.hero} />
      <BenefitsSection data={ScratchRepairData.benefits} />
      <WhatsIncluded data={ScratchRepairData.included} />
      <PricingSection data={ScratchRepairData.pricing} />
      <TestimonialSection data={ScratchRepairData.testimonials} />
      <RepairCases data={ScratchRepairData.repairCases} />
      <Banner data={ScratchRepairData.banner} />
      <FAQSection data={ScratchRepairData.faq} />
    </div>
  );
};

export default ScratchRepairPage;