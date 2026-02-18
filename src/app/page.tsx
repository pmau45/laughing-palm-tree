import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Jacksonville Dog Training: Expert Training & Behavioral Modification',
  description:
    'Professional dog training in Jacksonville, FL. Expert obedience training, behavioral modification, and puppy training. Transform your dog today!',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 text-white md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-heading font-bold leading-tight md:text-6xl">
              Jacksonville Dog Training: Expert Training & Behavioral Modification
            </h1>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Transform your dog with proven, science-based training methods. Serving Jacksonville and surrounding areas with professional, compassionate care.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Get Started Today
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
              >
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-heading font-bold text-gray-900 md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Professional dog training services tailored to your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-heading font-bold text-gray-900 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <p className="font-semibold text-primary">{service.price}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-heading font-bold text-gray-900 md:text-4xl">
              Service Areas
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Proudly serving Jacksonville and the surrounding communities
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="text-lg font-heading font-bold text-gray-900 hover:text-primary">
                  {area.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">
            Ready to Transform Your Dog?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Contact us today for a free consultation
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Schedule Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
