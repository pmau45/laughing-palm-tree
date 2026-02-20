import { FaChessBoard, FaSyncAlt, FaTrophy } from 'react-icons/fa'

export default function PillarsSection() {
  return (
    <section id="pillars" className="bg-[var(--ink)] py-10 px-5">
      <div className="container">
        <div className="section-header reveal">
          <h2>The 3-Pillar Method</h2>
          <p>Our proven approach to lasting transformation</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="reveal bg-[var(--ink-3)] p-5 border border-[var(--rule)] text-center transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
            <FaChessBoard className="text-5xl text-[var(--gold)] mb-2 mx-auto" />
            <h3 className="text-3xl text-[var(--gold)] mb-2 uppercase">Structure</h3>
            <p className="text-[var(--light)] leading-relaxed">Clear boundaries and expectations create a framework your dog can understand. Structure eliminates confusion and builds confidence.</p>
          </div>
          <div className="reveal bg-[var(--ink-3)] p-5 border border-[var(--rule)] text-center transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
            <FaSyncAlt className="text-5xl text-[var(--gold)] mb-2 mx-auto" />
            <h3 className="text-3xl text-[var(--gold)] mb-2 uppercase">Consistency</h3>
            <p className="text-[var(--light)] leading-relaxed">Repetition builds understanding. Consistency in your approach ensures your dog knows exactly what&apos;s expected every single time.</p>
          </div>
          <div className="reveal bg-[var(--ink-3)] p-5 border border-[var(--rule)] text-center transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
            <FaTrophy className="text-5xl text-[var(--gold)] mb-2 mx-auto" />
            <h3 className="text-3xl text-[var(--gold)] mb-2 uppercase">Results</h3>
            <p className="text-[var(--light)] leading-relaxed">We measure success by real-world performance. No excuses, no shortcuts—just measurable, lasting behavioral change.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
