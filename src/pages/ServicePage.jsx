import React from 'react'
import HeroSection from '../components/SingleServiceSection/HeroSection'
import BenefitsSection from '../components/SingleServiceSection/BenefitSection'
import WhatsIncluded from '../components/SingleServiceSection/Include'
import PricingSection from '../components/SingleServiceSection/Pricing'
import TestimonialSection from '../components/SingleServiceSection/TestimonialSection'
import RepairCases from '../components/SingleServiceSection/RepairCases'
import Banner from '../components/SingleServiceSection/Banner'
import FAQSection from '../components/SingleServiceSection/FaqSection'

const ServicePage = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <WhatsIncluded />
      <PricingSection />
      <TestimonialSection />
      <RepairCases />
      <Banner />
      <FAQSection />
    </div>
  )
}

export default ServicePage
