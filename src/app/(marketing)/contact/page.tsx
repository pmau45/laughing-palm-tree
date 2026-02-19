import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Axiom Canine for professional dog training in Jacksonville, FL.',
}

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-heading font-bold text-gray-900 md:text-5xl">
              Contact Us
            </h1>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-600 mb-6">
              Content coming soon. Check back later!
            </p>
            <p className="text-gray-600">
              For immediate assistance, please call us at{' '}
              <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="text-primary hover:underline">
                {BUSINESS_INFO.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
