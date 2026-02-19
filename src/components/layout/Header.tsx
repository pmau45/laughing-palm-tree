import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--rule)] bg-[#0c0c0c]/95 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="logo text-2xl">
            {BUSINESS_INFO.name}
          </span>
        </Link>

        <div className="hidden items-center space-x-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--light)] transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-[var(--light)] transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-[var(--light)] transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-[var(--light)] transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="btn btn-primary text-sm"
          >
            {BUSINESS_INFO.phone}
          </a>
        </div>

        {/* Mobile menu button - placeholder */}
        <button className="text-[var(--light)] md:hidden" aria-label="Open menu">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
