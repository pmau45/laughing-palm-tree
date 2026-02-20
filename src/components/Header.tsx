'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--rule)] bg-[#0c0c0c]/95 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl tracking-widest text-primary">
            {BUSINESS_INFO.name}
          </span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex" aria-label="Main navigation">
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
          </nav>

        <button
          className="text-[var(--light)] md:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-[var(--rule)] bg-[#0c0c0c] md:hidden" aria-label="Mobile navigation">
          <div className="container-custom space-y-1 py-4">
            <Link
              href="/"
              className="block rounded px-3 py-2 text-base font-medium text-[var(--light)] hover:bg-[var(--earth-surface)] hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block rounded px-3 py-2 text-base font-medium text-[var(--light)] hover:bg-[var(--earth-surface)] hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block rounded px-3 py-2 text-base font-medium text-[var(--light)] hover:bg-[var(--earth-surface)] hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block rounded px-3 py-2 text-base font-medium text-[var(--light)] hover:bg-[var(--earth-surface)] hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="btn btn-primary mt-4 block text-center"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
