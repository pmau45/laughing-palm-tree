import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SERVICE_AREAS, SERVICES, SITE_URL, BUSINESS_INFO } from '@/lib/constants'
import { JsonLd, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd'

interface LocationPageProps {
  params: {
    city: string
  }
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({
    city: area.slug,
  }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = SERVICE_AREAS.find((area) => area.slug === params.city)

  if (!location) {
    return {}
  }

  return {
    title: `Dog Training in ${location.name}, FL | ${BUSINESS_INFO.name}`,
    description: `Professional dog training services in ${location.name}, FL. Expert obedience training, behavioral modification, and puppy training. Serving ${location.name} and surrounding areas.`,
    openGraph: {
      title: `Dog Training in ${location.name}, FL | ${BUSINESS_INFO.name}`,
      description: `Professional dog training services in ${location.name}, FL. Transform your dog with proven methods.`,
      url: `${SITE_URL}/locations/${location.slug}`,
    },
  }
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = SERVICE_AREAS.find((area) => area.slug === params.city)

  if (!location) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema({
    name: `${BUSINESS_INFO.name} - ${location.name}`,
    description: `Professional dog training services in ${location.name}, FL`,
    image: `${SITE_URL}/images/logo.png`,
    address: {
      ...BUSINESS_INFO.address,
      city: location.name,
    },
    phone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: `${SITE_URL}/locations/${location.slug}`,
    coordinates: BUSINESS_INFO.coordinates,
    priceRange: '$$',
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Locations', url: `${SITE_URL}` },
    { name: location.name, url: `${SITE_URL}/locations/${location.slug}` },
  ])

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="section-padding">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            {' / '}
            <span className="text-gray-900">{location.name}</span>
          </nav>

          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-heading font-bold text-gray-900 md:text-5xl">
              Dog Training in {location.name}, FL
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Professional dog training services serving {location.name} and the surrounding areas. 
              Transform your dog with proven, science-based methods.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-3xl font-heading font-bold text-gray-900">
              Services in {location.name}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          </div>

          {/* About the Area */}
          <div className="mb-16 rounded-lg bg-gray-50 p-8">
            <h2 className="mb-4 text-2xl font-heading font-bold text-gray-900">
              Why Choose Us in {location.name}?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                We're proud to serve the {location.name} community with professional dog training services. 
                Our experienced trainers understand the unique needs of dogs and their owners in the area.
              </p>
              <ul className="list-disc pl-6">
                <li>Local expertise and knowledge</li>
                <li>Certified professional trainers</li>
                <li>Proven training methods</li>
                <li>Flexible scheduling</li>
                <li>Ongoing support</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
            <h2 className="mb-4 text-3xl font-heading font-bold">
              Ready to Get Started in {location.name}?
            </h2>
            <p className="mb-6 text-lg text-blue-100">
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
        </div>
      </div>
    </>
  )
}
