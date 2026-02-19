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
