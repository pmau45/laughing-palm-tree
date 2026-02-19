import { FaPhone } from 'react-icons/fa'
import { BUSINESS_INFO } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Jacksonville Dog Training: Structure, Consistency, Results</h1>
        <p>Professional dog training in Jacksonville, FL</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">Request Free Assessment →</a>
          <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="btn btn-secondary">
            <FaPhone /> {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
