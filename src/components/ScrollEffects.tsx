'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function ScrollEffects() {
  useScrollReveal()
  useSmoothScroll()
  return null
}
