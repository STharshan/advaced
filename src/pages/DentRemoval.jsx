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
import DentRemovalData from "../data/DentRemoval.js";

const DentRemovalPage = () => {
  return (
    <div>
      <HeroSection data={DentRemovalData.hero} />
      <BenefitsSection data={DentRemovalData.benefits} />
      <WhatsIncluded data={DentRemovalData.included} />
      <PricingSection data={DentRemovalData.pricing} />
      <TestimonialSection data={DentRemovalData.testimonials} />
      <RepairCases data={DentRemovalData.repairCases} />
      <Banner data={DentRemovalData.banner} />
      <FAQSection data={DentRemovalData.faq} />
    </div>
  );
};

export default DentRemovalPage;