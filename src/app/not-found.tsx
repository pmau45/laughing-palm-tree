import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--earth-dark)] px-4 text-center">
      <h1 className="mb-4 font-heading text-6xl text-primary">404</h1>
      <h2 className="mb-6 text-2xl font-semibold text-[var(--light)]">Page Not Found</h2>
      <p className="mb-8 text-[var(--muted)]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  )
}
