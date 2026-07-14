'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Navigation.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/announcements', label: 'Announcements' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} aria-label="Home">
          <span className={styles.logoText}>Sara Fee</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.active : ''
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.hamburger} aria-hidden="true"></span>
          <span className={styles.hamburger} aria-hidden="true"></span>
          <span className={styles.hamburger} aria-hidden="true"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div id="mobile-menu" className={styles.mobileMenu} role="navigation" aria-label="Mobile navigation">
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.mobileNavLink} ${
                    pathname === link.href ? styles.active : ''
                  }`}
                  onClick={closeMenu}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}