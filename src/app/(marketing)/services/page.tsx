import { Metadata } from 'next'
import { FaPaw, FaBrain, FaHeart, FaLeaf, FaUsers } from 'react-icons/fa'
import { IconType } from 'react-icons'

export const metadata: Metadata = {
  title: 'Dog Training Services',
  description: 'Professional dog training services in Jacksonville, FL. Obedience training, behavioral modification, and puppy training.',
}

interface Service {
  icon: IconType
  name: string
  tagline: string
  features: string[]
}

const services: Service[] = [
  {
    icon: FaPaw,
    name: 'Puppy Foundation',
    tagline:
      'Set your pup up for a lifetime of great behavior with early socialization, bite inhibition, and essential obedience.',
    features: [
      'Potty & crate training',
      'Leash manners from day one',
      'Bite inhibition & impulse control',
      'Family & kid introductions',
    ],
  },
  {
    icon: FaBrain,
    name: 'Obedience & Manners',
    tagline:
      'From basic sits to off-leash reliability — we teach dogs to choose good behavior, not just comply under pressure.',
    features: [
      'Reliable sit, stay, recall',
      'Loose-leash walking',
      'Door & greeting manners',
      'Off-leash confidence',
    ],
  },
  {
    icon: FaHeart,
    name: 'Behavior Rehabilitation',
    tagline:
      'Anxiety, reactivity, aggression — we address the root cause, not just the symptoms, with science-backed methods.',
    features: [
      'Leash reactivity & lunging',
      'Separation anxiety support',
      'Resource guarding',
      'Fear & confidence rebuilding',
    ],
  },
  {
    icon: FaLeaf,
    name: 'Senior Dog Care',
    tagline:
      'Old dogs absolutely learn new tricks. We meet seniors where they are with gentle, effective methods.',
    features: [
      'Gentle, low-impact training',
      'Cognitive enrichment',
      'Arthritic & mobility-aware',
      'Comfort & calm focus',
    ],
  },
  {
    icon: FaUsers,
    name: 'Family Integration',
    tagline:
      'We train the whole family — kids included. Because consistency is the secret to lasting results.',
    features: [
      'Kid-safe interactions',
      'Consistent household rules',
      'New baby introductions',
      'Multi-dog household harmony',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="services-page-header">
          <h1>Our Training Services</h1>
          <p>Professional dog training programs tailored to your specific needs</p>
        </div>

        <ul className="services-grid">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <li key={service.name} className="service-card">
                <div className="service-icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3>{service.name}</h3>
                <p className="service-tagline">{service.tagline}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-check" aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
