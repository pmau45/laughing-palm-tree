'use client'

import { useState } from 'react'
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
        <span className="logo" aria-label="Axiom Canine Home">AXIOM CANINE</span>
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
          <li><a href="#reality" onClick={handleLinkClick}>The Reality</a></li>
          <li><a href="#pillars" onClick={handleLinkClick}>Our Method</a></li>
          <li><a href="#problems" onClick={handleLinkClick}>Common Issues</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
