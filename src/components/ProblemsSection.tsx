import { FaDirections, FaBullhorn, FaHandPaper, FaExclamationTriangle, FaHeartBroken, FaVolumeUp } from 'react-icons/fa'

export default function ProblemsSection() {
  return (
    <section id="problems" className="bg-[var(--ink-2)] py-10 px-5">
      <div className="container">
        <div className="section-header reveal">
          <h2>Common Challenges We Solve</h2>
          <p>Transforming problem behaviors into confident obedience</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="reveal bg-[var(--ink-3)] p-5 border border-[var(--rule)] min-h-[44px] transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
            <FaDirections className="text-4xl text-[var(--gold)] mb-2" />
            <h3 className="text-2xl text-[var(--light)] mb-2">Leash Pulling</h3>
            <p className="text-[var(--muted)] text-[0.95rem]">End the tug-of-war and enjoy peaceful walks with a dog that respects your lead.</p>
          </div>
          <div className="reveal bg-[var(--ink-3)] p-5 border border-[var(--rule)] min-h-[44px] transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
            <FaBullhorn className="text-4xl text-[var(--gold)] mb-2" />
            <h3 className="text-2xl text-[var(--light)] mb-2">Poor Recall</h3>
            <p className="text-[var(--muted)] text-[0.95rem]">Build reliable off-leash control so your dog comes when called—every time.</p>
          </div>
          <div className="reveal bg-[var(--ink-3)] p-5 border border-[var(--rule)] min-h-[44px] transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
            <FaHandPaper className="text-4xl text-[var(--gold)] mb-2" />
            <h3 className="text-2xl text-[var(--light)] mb-2">Jumping</h3>
            <p className="text-[var(--muted)] text-[0.95rem]">Teach your dog proper greeting manners without the chaos of jumping on guests.</p>
          </div>
          <div className="reveal bg-[var(--ink-3)] p-5 border border-[var(--rule)] min-h-[44px] transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
            <FaExclamationTriangle className="text-4xl text-[var(--gold)] mb-2" />
            <h3 className="text-2xl text-[var(--light)] mb-2">Aggression</h3>
            <p className="text-[var(--muted)] text-[0.95rem]">Address reactivity and aggression with a structured approach that creates lasting change.</p>
          </div>
          <div className="reveal bg-[var(--ink-3)] p-5 border border-[var(--rule)] min-h-[44px] transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
            <FaHeartBroken className="text-4xl text-[var(--gold)] mb-2" />
            <h3 className="text-2xl text-[var(--light)] mb-2">Anxiety</h3>
            <p className="text-[var(--muted)] text-[0.95rem]">Build confidence and reduce stress through clear communication and structure.</p>
          </div>
          <div className="reveal bg-[var(--ink-3)] p-5 border border-[var(--rule)] min-h-[44px] transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
            <FaVolumeUp className="text-4xl text-[var(--gold)] mb-2" />
            <h3 className="text-2xl text-[var(--light)] mb-2">Excessive Barking</h3>
            <p className="text-[var(--muted)] text-[0.95rem]">Eliminate nuisance barking while maintaining your dog&apos;s natural alertness.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
