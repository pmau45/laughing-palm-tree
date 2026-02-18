import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Axiom Canine and our professional dog training approach in Jacksonville, FL.',
}

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-heading font-bold text-gray-900 md:text-5xl">
            About Axiom Canine
          </h1>
          
          <div className="prose prose-lg">
            <p className="text-lg text-gray-600">
              At {BUSINESS_INFO.name}, we believe that every dog has the potential to be well-behaved and happy. 
              Our mission is to help you build a stronger relationship with your dog through proven, science-based training methods.
            </p>

            <h2 className="mt-8 text-2xl font-heading font-bold text-gray-900">Our Approach</h2>
            <p className="text-gray-600">
              We use positive reinforcement techniques combined with structure and consistency to create lasting behavioral changes. 
              Our trainers are certified professionals with years of experience working with dogs of all breeds, ages, and temperaments.
            </p>

            <h2 className="mt-8 text-2xl font-heading font-bold text-gray-900">Why Choose Us?</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Certified professional trainers</li>
              <li>Proven, science-based methods</li>
              <li>Customized training programs</li>
              <li>Ongoing support and guidance</li>
              <li>Serving Jacksonville and surrounding areas</li>
            </ul>

            <div className="mt-12">
              <Link href="/contact" className="btn-primary">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
