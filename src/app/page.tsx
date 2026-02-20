import HeroSection from '@/components/HeroSection'
import RealitySection from '@/components/RealitySection'
import ManifestoQuote from '@/components/ManifestoQuote'
import PillarsSection from '@/components/PillarsSection'
import ProblemsSection from '@/components/ProblemsSection'
import ServiceAreaSection from '@/components/ServiceAreaSection'
import ContactSection from '@/components/ContactSection'
import ScrollEffects from '@/components/ScrollEffects'

export default function HomePage() {
  return (
    <>
      <ScrollEffects />
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

