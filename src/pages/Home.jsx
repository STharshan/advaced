import React from 'react'
import FeaturesSection from '../components/FeatureSection'
import ServicesSection from '../components/ServiceSection'
import ContactSection from '../components/ContactSection'
import FAQSection from '../components/FaqSection'
import GallerySection from '../components/GallerySection'
import TestimonialsSection from '../components/Testimonial/TestimonialSection'
import ScrollingTestimonials from '../components/Testimonial/ScrollTest'
import Findus from '../components/Findus'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturesSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ScrollingTestimonials />
      <ContactSection />
      <Findus />
      <FAQSection />
    </div>
  )
}

export default Home
