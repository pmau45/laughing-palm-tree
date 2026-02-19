import { FaChessBoard, FaSyncAlt, FaTrophy } from 'react-icons/fa'

export default function PillarsSection() {
  return (
    <section id="pillars" className="pillars">
      <div className="container">
        <div className="section-header reveal">
          <h2>The 3-Pillar Method</h2>
          <p>Our proven approach to lasting transformation</p>
        </div>
        <div className="pillars-grid">
          <div className="pillar-card reveal">
            <FaChessBoard />
            <h3>Structure</h3>
            <p>Clear boundaries and expectations create a framework your dog can understand. Structure eliminates confusion and builds confidence.</p>
          </div>
          <div className="pillar-card reveal">
            <FaSyncAlt />
            <h3>Consistency</h3>
            <p>Repetition builds understanding. Consistency in your approach ensures your dog knows exactly what&apos;s expected every single time.</p>
          </div>
          <div className="pillar-card reveal">
            <FaTrophy />
            <h3>Results</h3>
            <p>We measure success by real-world performance. No excuses, no shortcuts—just measurable, lasting behavioral change.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
