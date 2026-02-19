'use client'

import { useRef } from 'react'
import { FaPhone, FaCertificate, FaUsers, FaChartLine } from 'react-icons/fa'
import { BUSINESS_INFO } from '@/lib/constants'

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)

  const showErrorMessage = (container: HTMLElement, message: string) => {
    const errorMessage = document.createElement('div')
    errorMessage.style.cssText = 'padding: 1rem; background: #dc2626; border-radius: 8px; text-align: center; margin-top: 1rem; color: white;'
    errorMessage.setAttribute('role', 'alert')
    errorMessage.setAttribute('aria-live', 'assertive')
    errorMessage.textContent = message

    container.appendChild(errorMessage)

    setTimeout(() => {
      errorMessage.remove()
    }, 5000)
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    const formContainer = formRef.current.parentElement
    if (!formContainer) return

    const formData = new FormData(formRef.current)

    const params = new URLSearchParams()
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        params.append(key, value)
      }
    })

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })

      if (response.ok) {
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
        phoneLink.href = `tel:${BUSINESS_INFO.phoneTel}`
        phoneLink.style.cssText = 'color: var(--gold-lt); font-weight: bold;'
        phoneLink.textContent = BUSINESS_INFO.phone

        paragraph.appendChild(phoneLink)
        paragraph.appendChild(document.createTextNode('.'))

        successMessage.appendChild(heading)
        successMessage.appendChild(paragraph)

        formRef.current.setAttribute('aria-hidden', 'true')
        formRef.current.style.display = 'none'
        const inputs = formRef.current.querySelectorAll('input, textarea, button')
        inputs.forEach((input) => {
          (input as HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement).disabled = true
        })

        formContainer.appendChild(successMessage)

        successMessage.setAttribute('tabindex', '-1')
        successMessage.focus()

        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else {
        showErrorMessage(formContainer, `Failed to submit form (Status: ${response.status}). Please try again or call us at ${BUSINESS_INFO.phone}.`)
      }
    } catch {
      showErrorMessage(formContainer, `An error occurred. Please try again later or call us at ${BUSINESS_INFO.phone}.`)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header reveal">
          <h2>Start Your Transformation</h2>
          <p>Request your free assessment today</p>
        </div>
        <div className="contact-grid">
          <div className="trust-badges">
            <div className="trust-badge reveal">
              <FaCertificate />
              <div>
                <h3>Professional Training</h3>
                <p>Proven methods backed by years of experience transforming dogs across Jacksonville.</p>
              </div>
            </div>
            <div className="trust-badge reveal">
              <FaUsers />
              <div>
                <h3>Personalized Approach</h3>
                <p>Every dog is unique. We tailor our training to your dog&apos;s specific needs and your goals.</p>
              </div>
            </div>
            <div className="trust-badge reveal">
              <FaChartLine />
              <div>
                <h3>Measurable Results</h3>
                <p>We focus on real-world outcomes, not just obedience in controlled environments.</p>
              </div>
            </div>
          </div>
          <div className="contact-form reveal">
            <form ref={formRef} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleFormSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <input name="bot-field" className="hidden" aria-hidden="true" tabIndex={-1} />
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
                <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="btn btn-secondary"><FaPhone /> Call Now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
