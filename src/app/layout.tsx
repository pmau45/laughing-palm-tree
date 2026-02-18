import type { Metadata } from 'next'
import './globals.css'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd, generateLocalBusinessSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: {
    default: 'Axiom Canine - Professional Dog Training in Jacksonville, FL',
    template: '%s | Axiom Canine',
  },
  description:
    'Expert dog training services in Jacksonville, FL. Obedience training, behavioral modification, and puppy training. Transform your dog with proven methods.',
  keywords: [
    'dog training',
    'Jacksonville',
    'dog trainer',
    'obedience training',
    'puppy training',
    'behavioral modification',
  ],
  authors: [{ name: 'Axiom Canine' }],
  creator: 'Axiom Canine',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: BUSINESS_INFO.name,
    title: 'Axiom Canine - Professional Dog Training in Jacksonville, FL',
    description:
      'Expert dog training services in Jacksonville, FL. Transform your dog with proven methods.',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Axiom Canine Dog Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axiom Canine - Professional Dog Training in Jacksonville, FL',
    description:
      'Expert dog training services in Jacksonville, FL. Transform your dog with proven methods.',
    images: [`${SITE_URL}/images/og-image.jpg`],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = generateLocalBusinessSchema({
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.tagline,
    image: `${SITE_URL}/images/logo.png`,
    address: BUSINESS_INFO.address,
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: SITE_URL,
    coordinates: BUSINESS_INFO.coordinates,
    priceRange: '$$',
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 10:00-16:00',
    ],
  })

  return (
    <html lang="en">
      <head>
        <JsonLd data={localBusinessSchema} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
