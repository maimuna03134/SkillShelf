import CategoriesSection from '@/components/categories/CategoriesSection'
import CTABtnSection from '@/components/ctaButton/CTABtnSection'
import FeaturesSection from '@/components/features/FeaturesSection'
import HeroSection from '@/components/hero/HeroSection'
import HowItWorksSection from '@/components/howToWork/HowItWorksSection'
import StatsSection from '@/components/stats/StatsSection'
import TestimonialsSection from '@/components/testtimonials/TestimonialsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CategoriesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CTABtnSection/>
    </div>
  )
}
