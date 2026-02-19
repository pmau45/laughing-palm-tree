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
          <div className="location-item reveal"><FaMapMarkerAlt /> Jacksonville</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Ponte Vedra Beach</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Mandarin</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Southside</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Riverside</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Avondale</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Orange Park</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> Fleming Island</div>
          <div className="location-item reveal"><FaMapMarkerAlt /> St. Augustine</div>
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
