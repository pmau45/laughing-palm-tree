import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SERVICES, SITE_URL, BUSINESS_INFO } from '@/lib/constants'
import { JsonLd, generateServiceSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    return {}
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${BUSINESS_INFO.name}`,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.description,
    provider: {
      name: BUSINESS_INFO.name,
      url: SITE_URL,
    },
    areaServed: ['Jacksonville', 'Ponte Vedra', 'Mandarin', 'Orange Park', 'St. Augustine'],
    serviceType: 'Dog Training',
    url: `${SITE_URL}/services/${service.slug}`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Services', url: `${SITE_URL}/services` },
    { name: service.title, url: `${SITE_URL}/services/${service.slug}` },
  ])

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              {' / '}
              <Link href="/services" className="hover:text-primary">
                Services
              </Link>
              {' / '}
              <span className="text-gray-900">{service.title}</span>
            </nav>

            <h1 className="mb-4 text-4xl font-heading font-bold text-gray-900 md:text-5xl">
              {service.title}
            </h1>

            <p className="mb-8 text-xl text-gray-600">{service.description}</p>

            <div className="rounded-lg bg-primary/10 p-6">
              <p className="text-2xl font-bold text-primary">{service.price}</p>
            </div>

            <div className="prose prose-lg text-center">
              <p className="text-xl text-gray-600">
                Content coming soon. Check back later!
              </p>
              <div className="mt-8">
                <Link href="/services" className="text-primary hover:underline">
                  ← Back to Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
