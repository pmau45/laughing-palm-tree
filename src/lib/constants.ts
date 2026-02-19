export const BUSINESS_INFO = {
  name: 'Axiom Canine',
  tagline: 'Professional Dog Training in Jacksonville, FL',
  phone: '(904) 458-7561',
  phoneTel: '9044587561',
  email: 'info@axiomcanine.com',
  address: {
    street: '123 Training Way',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32202',
    country: 'US',
  },
  hours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
  social: {
    facebook: 'https://facebook.com/axiomcanine',
    instagram: 'https://instagram.com/axiomcanine',
    twitter: 'https://twitter.com/axiomcanine',
  },
  coordinates: {
    latitude: 30.3322,
    longitude: -81.6557,
  },
}

export const SERVICE_AREAS = [
  { name: 'Jacksonville', slug: 'jacksonville' },
  { name: 'Ponte Vedra', slug: 'ponte-vedra' },
  { name: 'Mandarin', slug: 'mandarin' },
  { name: 'Orange Park', slug: 'orange-park' },
  { name: 'St. Augustine', slug: 'st-augustine' },
]

export const SERVICES = [
  {
    title: 'Obedience Training',
    slug: 'obedience-training',
    description: 'Foundational commands and behavioral training for dogs of all ages.',
    price: 'Starting at $500',
  },
  {
    title: 'Behavioral Modification',
    slug: 'behavioral-modification',
    description: 'Address specific behavioral issues like aggression, anxiety, and fear.',
    price: 'Starting at $750',
  },
  {
    title: 'Puppy Training',
    slug: 'puppy-training',
    description: 'Early socialization and training for puppies 8 weeks to 6 months.',
    price: 'Starting at $400',
  },
]

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://axiomcanine.com'
