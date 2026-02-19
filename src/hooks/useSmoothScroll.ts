import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (href && href !== '#') {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])
}
