import { FaPhone } from 'react-icons/fa'
import { BUSINESS_INFO } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="min-h-[55vh] flex items-center justify-center text-center relative py-20 px-5" style={{ background: 'radial-gradient(circle at top right, var(--earth-surface), var(--earth-dark))' }}>
      <div className="max-w-[800px] px-2 relative z-10">
        <h1 className="text-4xl text-[var(--gold)] mb-1 uppercase md:text-6xl lg:text-[5rem]">Jacksonville Dog Training: Structure, Consistency, Results</h1>
        <p className="text-xl text-[var(--light)] mb-4 font-light md:text-2xl">Professional dog training in Jacksonville, FL</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="btn btn-primary">Request Free Assessment →</a>
          <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="btn btn-secondary">
            <FaPhone /> {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
