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
        <div className="text-center mb-10">
          <h1 className="text-[3.5rem] text-[var(--gold)] mb-2 uppercase">Our Training Services</h1>
          <p className="text-[1.1rem] text-[var(--muted)] max-w-[600px] mx-auto">Professional dog training programs tailored to your specific needs</p>
        </div>

        <ul className="grid grid-cols-1 gap-6 list-none p-0 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <li key={service.name} className="bg-[var(--ink-3)] p-6 border border-[var(--rule)] rounded flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_8px_24px_rgba(200,150,46,0.15)]">
                <div className="text-4xl text-[var(--gold)] mb-4 leading-none" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="text-[1.75rem] text-[var(--gold)] mb-2 uppercase">{service.name}</h3>
                <p className="text-[var(--muted)] text-[0.95rem] leading-relaxed mb-5 grow">{service.tagline}</p>
                <ul className="list-none p-0 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-[var(--light)] text-[0.9rem] py-[0.3rem] flex items-start gap-2 border-t border-[var(--rule)] last:border-b last:border-[var(--rule)]">
                      <span className="text-[var(--gold)] shrink-0 mt-[0.1rem]" aria-hidden="true">✓</span>
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
