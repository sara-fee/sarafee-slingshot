import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import styles from './page.module.css'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://yourwebsite.com',
  },
}

export default function Home() {
  return (
    <div className={styles.home}>
      {/* JSON-LD Structured Data for ProfessionalService */}
      <Script
        id="structured-data-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Your Name - Web Development Services',
            description: 'Full Stack Web Development, UI/UX Design, and Performance Optimization Services',
            url: 'https://yourwebsite.com',
            image: 'https://yourwebsite.com/og-image.jpg',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'San Francisco',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '37.7749',
              longitude: '-122.4194',
            },
            priceRange: '$$',
            areaServed: [
              {
                '@type': 'Country',
                name: 'United States',
              },
              {
                '@type': 'Country',
                name: 'Canada',
              },
              'Worldwide',
            ],
            serviceType: [
              'Web Development',
              'UI/UX Design',
              'Performance Optimization',
              'Full Stack Development',
            ],
            provider: {
              '@type': 'Person',
              name: 'Your Name',
              jobTitle: 'Full Stack Developer',
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className="container">
          <h1 id="hero-title" className={styles.heroTitle}>
            Hi, I'm <span className={styles.highlight}>Your Name</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Full Stack Developer | Creative Problem Solver | Tech Enthusiast
          </p>
          <p className={styles.heroDescription}>
            I build modern web applications with a focus on user experience,
            performance, and clean code. Welcome to my digital space.
          </p>
          <div className={styles.heroCta}>
            <Link href="/projects" className="btn btn-primary" aria-label="View my portfolio projects">
              View My Work
            </Link>
            <Link href="/contact" className="btn btn-secondary" aria-label="Get in touch with me">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title" className={styles.sectionTitle}>What I Do</h2>
          <div className={styles.highlightsGrid}>
            <article className={styles.highlightCard}>
              <div className={styles.highlightIcon} aria-hidden="true">💻</div>
              <h3>Web Development</h3>
              <p>
                Building responsive, performant web applications using modern
                technologies and best practices.
              </p>
            </article>
            <article className={styles.highlightCard}>
              <div className={styles.highlightIcon} aria-hidden="true">🎨</div>
              <h3>UI/UX Design</h3>
              <p>
                Creating intuitive and beautiful user interfaces that provide
                exceptional user experiences.
              </p>
            </article>
            <article className={styles.highlightCard}>
              <div className={styles.highlightIcon} aria-hidden="true">⚡</div>
              <h3>Performance Optimization</h3>
              <p>
                Optimizing applications for speed, accessibility, and search
                engine visibility.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}