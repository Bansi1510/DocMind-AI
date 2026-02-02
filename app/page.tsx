"use client"

import CTAsection from '@/components/Home/CTAsection'
import DemoSection from '@/components/Home/Demo-section'
import HeroSection from '@/components/Home/Hero-section'
import HowItWork from '@/components/Home/how-it-work'
import PricingSection from '@/components/Home/pricing-section'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col space-y-20">
      <HeroSection />
      <DemoSection />
      <HowItWork />
      <PricingSection />
      <CTAsection />
    </div>
  )
}

export default Page

