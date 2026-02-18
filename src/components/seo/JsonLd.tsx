import React from 'react'

interface JsonLdProps {
  data: Record<string, any>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Helper functions to generate common schema types
export function generateLocalBusinessSchema(business: {
  name: string
  description?: string
  image?: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  phone: string
  email?: string
  url: string
  coordinates: {
    latitude: number
    longitude: number
  }
  priceRange?: string
  openingHours?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    image: business.image,
    '@id': business.url,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    priceRange: business.priceRange || '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.coordinates.latitude,
      longitude: business.coordinates.longitude,
    },
    openingHoursSpecification: business.openingHours,
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  provider: {
    name: string
    url: string
  }
  areaServed: string[]
  serviceType: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.serviceType,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: service.provider.name,
      url: service.provider.url,
    },
    areaServed: service.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    url: service.url,
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
