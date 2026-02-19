'use client'

import HeroSection from '@/components/home/HeroSection'
import RealitySection from '@/components/home/RealitySection'
import ManifestoQuote from '@/components/home/ManifestoQuote'
import PillarsSection from '@/components/home/PillarsSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import ServiceAreaSection from '@/components/home/ServiceAreaSection'
import ContactSection from '@/components/home/ContactSection'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function HomePage() {
  useScrollReveal()
  useSmoothScroll()

  return (
    <>
      <HeroSection />
      <RealitySection />
      <ManifestoQuote />
      <PillarsSection />
      <ProblemsSection />
      <ServiceAreaSection />
      <ContactSection />
    </>
  )
}

