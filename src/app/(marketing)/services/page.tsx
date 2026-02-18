import { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Dog Training Services',
  description: 'Professional dog training services in Jacksonville, FL. Obedience training, behavioral modification, and puppy training.',
}

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-heading font-bold text-gray-900 md:text-5xl">
            Our Training Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Professional dog training programs tailored to your specific needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-lg border border-gray-200 p-8 transition-all hover:border-primary hover:shadow-xl"
            >
              <h2 className="mb-4 text-2xl font-heading font-bold text-gray-900 group-hover:text-primary">
                {service.title}
              </h2>
              <p className="mb-6 text-gray-600">{service.description}</p>
              <p className="text-lg font-semibold text-primary">{service.price}</p>
              <div className="mt-4 text-sm font-medium text-primary group-hover:underline">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-gray-50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-heading font-bold text-gray-900">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="mb-6 text-gray-600">
            Contact us for a free consultation and we'll help you choose the best training program for your dog.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}
