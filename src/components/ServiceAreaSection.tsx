import Link from 'next/link'
import { FaMapMarkerAlt } from 'react-icons/fa'

const locationItemClass =
  'reveal flex items-center justify-center bg-[var(--ink-3)] border border-[var(--rule)] p-3 min-h-[44px] text-center transition-colors duration-300'
const linkItemClass = `${locationItemClass} hover:bg-[var(--gold)] hover:text-[var(--ink)]`

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="bg-[var(--ink)] py-10 px-5">
      <div className="container">
        <div className="section-header reveal">
          <h2>Areas We Serve</h2>
          <p>Professional dog training throughout Northeast Florida</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          <Link href="/locations/jacksonville" className={linkItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Jacksonville</Link>
          <Link href="/locations/ponte-vedra" className={linkItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Ponte Vedra Beach</Link>
          <Link href="/locations/mandarin" className={linkItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Mandarin</Link>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Southside</div>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Riverside</div>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Avondale</div>
          <Link href="/locations/orange-park" className={linkItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Orange Park</Link>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Fleming Island</div>
          <Link href="/locations/st-augustine" className={linkItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> St. Augustine</Link>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Nocatee</div>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Fernandina Beach</div>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Yulee</div>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Middleburg</div>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Fruit Cove</div>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> San Marco</div>
          <div className={locationItemClass}><FaMapMarkerAlt className="mr-2 text-[var(--gold)]" /> Neptune Beach</div>
        </div>
      </div>
    </section>
  )
}
