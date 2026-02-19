import Link from 'next/link'
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { BUSINESS_INFO } from '@/lib/constants'

export default function HomeFooter() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo">AXIOM CANINE</span>
          <p>Professional dog training in Jacksonville, FL</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p><FaPhone /> {BUSINESS_INFO.phone}</p>
          <p><FaMapMarkerAlt /> Jacksonville, FL</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Areas We Serve</h4>
          <ul className="footer-links">
            <li><Link href="/locations/jacksonville">Jacksonville</Link></li>
            <li><Link href="/locations/ponte-vedra">Ponte Vedra</Link></li>
            <li><Link href="/locations/mandarin">Mandarin</Link></li>
            <li><Link href="/locations/orange-park">Orange Park</Link></li>
            <li><Link href="/locations/st-augustine">St. Augustine</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Axiom Canine. All rights reserved.</p>
      </div>
    </footer>
  )
}
