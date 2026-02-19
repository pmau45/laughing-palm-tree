import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SERVICE_AREAS, SITE_URL, BUSINESS_INFO } from '@/lib/constants'
import { JsonLd, generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd'

interface LocationPageProps {
  params: Promise<{
    city: string
  }>
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({
    city: area.slug,
  }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city } = await params
  const location = SERVICE_AREAS.find((area) => area.slug === city)

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

export default async function LocationPage({ params }: LocationPageProps) {
  const { city } = await params
  const location = SERVICE_AREAS.find((area) => area.slug === city)

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

          <div className="text-center">
            <p className="text-xl text-gray-600 mb-6">
              Content coming soon. Check back later!
            </p>
            <p className="text-gray-600">
              Serving {location.name} and surrounding areas with professional dog training services.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
