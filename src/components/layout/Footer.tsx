import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BUSINESS_INFO } from '@/lib/constants'

const socialIconClass =
  'flex h-10 w-10 items-center justify-center border border-[var(--rule)] bg-[var(--earth-surface)] text-primary transition-colors hover:bg-primary hover:text-[var(--ink)]'

export function Footer() {
  return (
    <footer className="border-t border-[var(--rule)] bg-[var(--earth-muted)]">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-heading font-bold text-primary">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-sm text-[var(--muted)]">{BUSINESS_INFO.tagline}</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Jacksonville, FL
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[var(--muted)] hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-[var(--muted)] hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[var(--muted)] hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Service Areas
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/locations/jacksonville"
                  className="text-sm text-[var(--muted)] hover:text-primary"
                >
                  Jacksonville
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/ponte-vedra"
                  className="text-sm text-[var(--muted)] hover:text-primary"
                >
                  Ponte Vedra
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/mandarin"
                  className="text-sm text-[var(--muted)] hover:text-primary"
                >
                  Mandarin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="text-sm text-[var(--muted)] hover:text-primary"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-3">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--rule)] pt-8 text-center">
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
