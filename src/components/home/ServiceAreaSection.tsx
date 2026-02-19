import Link from 'next/link'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="service-area">
      <div className="container">
        <div className="section-header reveal">
          <h2>Areas We Serve</h2>
          <p>Professional dog training throughout Northeast Florida</p>
        </div>
        <div className="locations-grid">
          <Link href="/locations/jacksonville" className="location-item reveal hover:text-primary"><FaMapMarkerAlt /> Jacksonville</Link>
          <Link href="/locations/ponte-vedra" className="location-item reveal hover:text-primary"><FaMapMarkerAlt /> Ponte Vedra Beach</Link>
          <Link href="/locations/mandarin" className="location-item reveal hover:text-primary"><FaMapMarkerAlt /> Mandarin</Link>
          <div className="location-item reveal"><FaMapMarkerAlt /> Southside</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Riverside</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Avondale</div>
          <Link href="/locations/orange-park" className="location-item reveal hover:text-primary"><FaMapMarkerAlt /> Orange Park</Link>
          <div className="location-item reveal"><FaMapMarkerAlt /> Fleming Island</div>
          <Link href="/locations/st-augustine" className="location-item reveal hover:text-primary"><FaMapMarkerAlt /> St. Augustine</Link>
          <div className="location-item reveal"><FaMapMarkerAlt /> Nocatee</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Fernandina Beach</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Yulee</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Middleburg</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Fruit Cove</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> San Marco</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Neptune Beach</div>
        </div>
      </div>
    </section>
  )
}
