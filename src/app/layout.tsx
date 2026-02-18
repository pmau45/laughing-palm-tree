import type { Metadata } from 'next'
import './globals.css'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd, generateLocalBusinessSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Axiom Canine | Dog Training Jacksonville FL | Structure. Consistency. Results.',
  description:
    'Transform your dog with Jacksonville\'s proven 3-pillar training method. Professional, results-driven dog training serving Jacksonville, Ponte Vedra & Northeast FL.',
  keywords: [
    'dog training Jacksonville',
    'dog trainer Jacksonville FL',
    'puppy training',
    'obedience training',
    'behavior modification',
    'Jacksonville dog training',
  ],
  authors: [{ name: 'Axiom Canine' }],
  creator: 'Axiom Canine',
  themeColor: '#C8962E',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: BUSINESS_INFO.name,
    title: 'Axiom Canine | Dog Training Jacksonville FL',
    description:
      'Transform your dog with Jacksonville\'s proven 3-pillar training method. Professional, results-driven dog training.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axiom Canine | Dog Training Jacksonville FL',
    description:
      'Transform your dog with Jacksonville\'s proven 3-pillar training method. Professional, results-driven dog training.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
  alternates: {
    canonical: 'https://axiomcanine.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Axiom Canine",
    "description": "Professional dog training services in Jacksonville, FL",
    "url": "https://axiomcanine.com",
    "telephone": "(904) 458-7561",
    "image": "https://axiomcanine.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.3322",
      "longitude": "-81.6557"
    },
    "areaServed": [
      "Jacksonville, FL",
      "Ponte Vedra Beach, FL",
      "Mandarin, FL",
      "Orange Park, FL",
      "St. Augustine, FL"
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://instagram.com/axiomcanine",
      "https://facebook.com/axiomcanine"
    ]
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Axiom Canine Dog Training",
    "description": "Professional dog training services specializing in obedience training, behavior modification, and puppy training",
    "url": "https://axiomcanine.com",
    "telephone": "(904) 458-7561",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Jacksonville"
    },
    "serviceType": [
      "Dog Training",
      "Obedience Training",
      "Behavior Modification",
      "Puppy Training"
    ]
  }

  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
          crossOrigin="anonymous" 
        />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐕</text></svg>" />
        
        {/* Structured Data */}
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={professionalServiceSchema} />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
