'use client'

import HeroSection from '@/components/HeroSection'
import RealitySection from '@/components/RealitySection'
import ManifestoQuote from '@/components/ManifestoQuote'
import PillarsSection from '@/components/PillarsSection'
import ProblemsSection from '@/components/ProblemsSection'
import ServiceAreaSection from '@/components/ServiceAreaSection'
import ContactSection from '@/components/ContactSection'
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

