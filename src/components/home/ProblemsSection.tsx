import { FaDirections, FaBullhorn, FaHandPaper, FaExclamationTriangle, FaHeartBroken, FaVolumeUp } from 'react-icons/fa'

export default function ProblemsSection() {
  return (
    <section id="problems" className="problems">
      <div className="container">
        <div className="section-header reveal">
          <h2>Common Challenges We Solve</h2>
          <p>Transforming problem behaviors into confident obedience</p>
        </div>
        <div className="problems-grid">
          <div className="problem-card reveal">
            <FaDirections />
            <h3>Leash Pulling</h3>
            <p>End the tug-of-war and enjoy peaceful walks with a dog that respects your lead.</p>
          </div>
          <div className="problem-card reveal">
            <FaBullhorn />
            <h3>Poor Recall</h3>
            <p>Build reliable off-leash control so your dog comes when called—every time.</p>
          </div>
          <div className="problem-card reveal">
            <FaHandPaper />
            <h3>Jumping</h3>
            <p>Teach your dog proper greeting manners without the chaos of jumping on guests.</p>
          </div>
          <div className="problem-card reveal">
            <FaExclamationTriangle />
            <h3>Aggression</h3>
            <p>Address reactivity and aggression with a structured approach that creates lasting change.</p>
          </div>
          <div className="problem-card reveal">
            <FaHeartBroken />
            <h3>Anxiety</h3>
            <p>Build confidence and reduce stress through clear communication and structure.</p>
          </div>
          <div className="problem-card reveal">
            <FaVolumeUp />
            <h3>Excessive Barking</h3>
            <p>Eliminate nuisance barking while maintaining your dog&apos;s natural alertness.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
