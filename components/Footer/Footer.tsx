import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Your Name</h3>
            <p className={styles.footerDescription}>
              Building modern web experiences with passion and precision.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/" className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className={styles.footerLink}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Connect</h4>
            <div className={styles.socialLinks}>
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
              >
                GitHub
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a
                href={process.env.NEXT_PUBLIC_TWITTER_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter Profile"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}