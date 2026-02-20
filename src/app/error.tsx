'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--earth-dark)] px-4 text-center">
      <h2 className="mb-4 font-heading text-4xl text-primary">Something went wrong!</h2>
      <p className="mb-8 text-[var(--muted)]">
        We encountered an unexpected error. Please try again.
      </p>
      <button onClick={reset} className="btn btn-primary">
        Try again
      </button>
    </div>
  )
}
