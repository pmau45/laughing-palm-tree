import { Metadata } from 'next'

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

        <div className="text-center">
          <p className="text-xl text-gray-600">
            Content coming soon. Check back later!
          </p>
        </div>
      </div>
    </div>
  )
}
