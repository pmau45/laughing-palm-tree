import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Axiom Canine and our professional dog training approach in Jacksonville, FL.',
}

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            {' / '}
            <span className="text-[var(--light)]">About</span>
          </nav>

          <h1 className="mb-6 text-4xl font-heading font-bold text-primary md:text-5xl">
            About Axiom Canine
          </h1>

          <div className="prose prose-lg text-center">
            <p className="text-xl text-[var(--muted)]">
              Content coming soon. Check back later!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
