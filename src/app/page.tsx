'use client'

import { useEffect, useRef } from 'react'
import { Metadata } from 'next'

export default function HomePage() {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle')
    const navLinks = document.querySelector('.nav-links')
    
    if (menuToggle && navLinks) {
      const handleMenuToggle = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
        menuToggle.setAttribute('aria-expanded', String(!isExpanded))
        navLinks.classList.toggle('active')
        
        // Change icon
        const icon = menuToggle.querySelector('i')
        if (icon) {
          icon.classList.toggle('fa-bars')
          icon.classList.toggle('fa-times')
        }
      }
      
      menuToggle.addEventListener('click', handleMenuToggle)
      
      // Close menu when clicking a link
      const navLinksItems = navLinks.querySelectorAll('a')
      navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active')
          menuToggle.setAttribute('aria-expanded', 'false')
          const icon = menuToggle.querySelector('i')
          if (icon) {
            icon.classList.remove('fa-times')
            icon.classList.add('fa-bars')
          }
        })
      })
    }
    
    // Scroll Reveal Animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    // Observe all elements with .reveal class
    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element)
    })

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
        if (href && href !== '#') {
          e.preventDefault()
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      })
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formRef.current) return
    
    // Show success message using DOM methods for security
    const formContainer = formRef.current.parentElement
    if (!formContainer) return
    
    const successMessage = document.createElement('div')
    successMessage.style.cssText = 'padding: 2rem; background: var(--gold-dk); border-radius: 8px; text-align: center; margin-top: 1rem;'
    successMessage.setAttribute('role', 'status')
    successMessage.setAttribute('aria-live', 'polite')
    
    const heading = document.createElement('h3')
    heading.style.cssText = 'color: var(--gold); margin-bottom: 1rem;'
    heading.textContent = 'Thank you for your interest!'
    
    const paragraph = document.createElement('p')
    paragraph.textContent = 'We will contact you soon. For immediate assistance, please call '
    
    const phoneLink = document.createElement('a')
    phoneLink.href = 'tel:9044587561'
    phoneLink.style.cssText = 'color: var(--gold-lt); font-weight: bold;'
    phoneLink.textContent = '(904) 458-7561'
    
    paragraph.appendChild(phoneLink)
    paragraph.appendChild(document.createTextNode('.'))
    
    successMessage.appendChild(heading)
    successMessage.appendChild(paragraph)
    
    // Hide form visually but keep in DOM for accessibility
    formRef.current.setAttribute('aria-hidden', 'true')
    formRef.current.style.display = 'none'
    formContainer.appendChild(successMessage)
    
    // Focus on success message for screen readers
    successMessage.setAttribute('tabindex', '-1')
    successMessage.focus()
    
    // Scroll to message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <>
      {/* Navigation */}
      <nav role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <span className="logo" aria-label="Axiom Canine Home">AXIOM CANINE</span>
          <button className="menu-toggle" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="main-nav">
            <i className="fas fa-bars"></i>
          </button>
          <ul className="nav-links" id="main-nav">
            <li><a href="#reality">The Reality</a></li>
            <li><a href="#pillars">Our Method</a></li>
            <li><a href="#problems">Common Issues</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Jacksonville Dog Training: Structure, Consistency, Results</h1>
          <p className="hero-subheader">Structure. Consistency. Results.</p>
          <p>Professional dog training in Jacksonville, FL</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Request Free Assessment →</a>
            <a href="tel:9044587561" className="btn btn-secondary"><i className="fas fa-phone"></i> (904) 458-7561</a>
          </div>
        </div>
      </section>

      {/* Reality Section */}
      <section id="reality" className="reality">
        <div className="container">
          <div className="section-header reveal">
            <h2>The Reality</h2>
            <p>Understanding the root of the problem</p>
          </div>
          <div className="reality-grid">
            <div className="reality-column reveal">
              <h3>The Problem</h3>
              <p>Most dog training focuses on symptoms—pulling on the leash, not coming when called, jumping on guests. But these are just the visible signs of a deeper issue.</p>
              <p>Without a clear structure, your dog makes their own rules. Without consistency, they never learn what&apos;s expected. And without proper follow-through, you never see lasting results.</p>
              <p>The cycle continues: frustration builds, trust erodes, and the bond you hoped for remains out of reach.</p>
            </div>
            <div className="reality-column reveal">
              <h3>The Solution</h3>
              <p>Real transformation doesn&apos;t come from tricks or quick fixes. It comes from establishing a foundation built on three essential pillars.</p>
              <p>Structure gives your dog clarity. Consistency builds understanding. Results speak for themselves.</p>
              <p>This isn&apos;t about dominance or force. It&apos;s about clear communication, mutual respect, and building the relationship you and your dog deserve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Quote */}
      <section className="manifesto">
        <blockquote className="reveal">
          &quot;A well-trained dog isn&apos;t the result of chance. It&apos;s the product of structure, consistency, and unwavering commitment to results.&quot;
        </blockquote>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="pillars">
        <div className="container">
          <div className="section-header reveal">
            <h2>The 3-Pillar Method</h2>
            <p>Our proven approach to lasting transformation</p>
          </div>
          <div className="pillars-grid">
            <div className="pillar-card reveal">
              <i className="fas fa-chess-board"></i>
              <h3>Structure</h3>
              <p>Clear boundaries and expectations create a framework your dog can understand. Structure eliminates confusion and builds confidence.</p>
            </div>
            <div className="pillar-card reveal">
              <i className="fas fa-sync-alt"></i>
              <h3>Consistency</h3>
              <p>Repetition builds understanding. Consistency in your approach ensures your dog knows exactly what&apos;s expected every single time.</p>
            </div>
            <div className="pillar-card reveal">
              <i className="fas fa-trophy"></i>
              <h3>Results</h3>
              <p>We measure success by real-world performance. No excuses, no shortcuts—just measurable, lasting behavioral change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="problems">
        <div className="container">
          <div className="section-header reveal">
            <h2>Common Challenges We Solve</h2>
            <p>Transforming problem behaviors into confident obedience</p>
          </div>
          <div className="problems-grid">
            <div className="problem-card reveal">
              <i className="fas fa-directions"></i>
              <h3>Leash Pulling</h3>
              <p>End the tug-of-war and enjoy peaceful walks with a dog that respects your lead.</p>
            </div>
            <div className="problem-card reveal">
              <i className="fas fa-bullhorn"></i>
              <h3>Poor Recall</h3>
              <p>Build reliable off-leash control so your dog comes when called—every time.</p>
            </div>
            <div className="problem-card reveal">
              <i className="fas fa-hand-paper"></i>
              <h3>Jumping</h3>
              <p>Teach your dog proper greeting manners without the chaos of jumping on guests.</p>
            </div>
            <div className="problem-card reveal">
              <i className="fas fa-exclamation-triangle"></i>
              <h3>Aggression</h3>
              <p>Address reactivity and aggression with a structured approach that creates lasting change.</p>
            </div>
            <div className="problem-card reveal">
              <i className="fas fa-heart-broken"></i>
              <h3>Anxiety</h3>
              <p>Build confidence and reduce stress through clear communication and structure.</p>
            </div>
            <div className="problem-card reveal">
              <i className="fas fa-volume-up"></i>
              <h3>Excessive Barking</h3>
              <p>Eliminate nuisance barking while maintaining your dog&apos;s natural alertness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="service-area" className="service-area">
        <div className="container">
          <div className="section-header reveal">
            <h2>Areas We Serve</h2>
            <p>Professional dog training throughout Northeast Florida</p>
          </div>
          <div className="locations-grid">
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Jacksonville</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Ponte Vedra Beach</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Mandarin</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Southside</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Riverside</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Avondale</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Orange Park</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Fleming Island</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> St. Augustine</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Nocatee</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Fernandina Beach</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Yulee</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Middleburg</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Fruit Cove</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> San Marco</div>
            <div className="location-item reveal"><i className="fas fa-map-marker-alt"></i> Neptune Beach</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header reveal">
            <h2>Start Your Transformation</h2>
            <p>Request your free assessment today</p>
          </div>
          <div className="contact-grid">
            <div className="trust-badges">
              <div className="trust-badge reveal">
                <i className="fas fa-certificate"></i>
                <div>
                  <h3>Professional Training</h3>
                  <p>Proven methods backed by years of experience transforming dogs across Jacksonville.</p>
                </div>
              </div>
              <div className="trust-badge reveal">
                <i className="fas fa-users"></i>
                <div>
                  <h3>Personalized Approach</h3>
                  <p>Every dog is unique. We tailor our training to your dog&apos;s specific needs and your goals.</p>
                </div>
              </div>
              <div className="trust-badge reveal">
                <i className="fas fa-chart-line"></i>
                <div>
                  <h3>Measurable Results</h3>
                  <p>We focus on real-world outcomes, not just obedience in controlled environments.</p>
                </div>
              </div>
            </div>
            <div className="contact-form reveal">
              <form ref={formRef} name="contact-form" method="POST" action="#contact" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="challenge">What challenges are you facing?</label>
                  <textarea id="challenge" name="challenge" placeholder="Tell us about your dog's behavior challenges..." required></textarea>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Request My Free Assessment →</button>
                  <a href="tel:9044587561" className="btn btn-secondary"><i className="fas fa-phone"></i> Call Now</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">AXIOM CANINE</span>
            <p>Professional dog training in Jacksonville, FL</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p><i className="fas fa-phone"></i> (904) 458-7561</p>
            <p><i className="fas fa-map-marker-alt"></i> Jacksonville, FL</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://instagram.com/axiomcanine" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com/axiomcanine" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Axiom Canine. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
