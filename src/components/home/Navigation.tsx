'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Link href="/" className="logo" aria-label="Axiom Canine Home">AXIOM CANINE</Link>
        <button
          className="menu-toggle"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          onClick={handleToggle}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links${isOpen ? ' active' : ''}`} id="main-nav">
          <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link href="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link href="/services" onClick={handleLinkClick}>Services</Link></li>
          <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
