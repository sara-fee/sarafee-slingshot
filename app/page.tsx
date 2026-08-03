'use client'

import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import StructuredData from '@/components/StructuredData/StructuredData'
import styles from './page.module.css'
import ResumeDownload from '@/components/ResumeDownload/ResumeDownload'
import NewsletterSubscribe from '@/components/NewsletterSubscribe/NewsletterSubscribe'
import Testimonials from '@/components/Testimonials/Testimonials'
import FlippableCard from '@/components/FlippableCard/FlippableCard'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Sara Fee - Web Development Services',
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
      name: 'Sara Fee',
      jobTitle: 'Full Stack Developer',
    },
  }

  return (
    <div className={styles.home}>
      <StructuredData id="structured-data-service" data={structuredData} />
      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className="container">
          <h1 id="hero-title" className={styles.heroTitle}>
            Hi, I'm <span className={styles.highlight}>Sara Fee.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Young Adult SFF Writer | Software Engineer | Crafter
          </p>
          <p className={styles.heroDescription}>
            I write fiction, code, and the occasional crochet pattern.
          </p>
          <div className={styles.heroCta}>
            <Link href="/projects" className="btn btn-primary" aria-label="View my work">
              View My Work
            </Link>
            {/* <ResumeDownload variant="secondary" /> */}
            <Link href="/contact" className="btn btn-secondary" aria-label="Get in touch with me">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionTitle title="Current Writing Projects" titleId="services-title" />
          <div className={styles.highlightsGrid}>
            <FlippableCard
              icon="💻"
              title="Savant"
              subtitle="Status: Querying"
              description="Dystopian Adventure"
              backTitle="Technologies & Skills"
              backContent={[
                'Word Count: 70k',
                'Genre',
                'Comps',
                'Standalone with series potential'
              ]}
            />
            <FlippableCard
              icon="🎨"
              title="Wild Rust"
              subtitle="Status: Drafting"
              description="Martian Western"
              backTitle="Design Expertise"
              backContent={[
                '25% progress on draft 1',
                'Wireframing & Prototyping',
                'Design Systems',
              ]}
            />
            <FlippableCard
              icon="⚡"
              title="Duel Wielding"
              subtitle="Status: Daydreaming"
              description="In a world where magic requires partnership, two childhood best friends are separated when their magics are determined to beyond incompatible."
              backTitle="Optimization Focus"
              backContent={[
                'No words just vibes',
                'Code Splitting & Lazy Loading',
                'Image Optimization',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" aria-labelledby="testimonials-title">
        <div className="container">
          <SectionTitle 
            title="Savant" 
            subtitle="More on my current project"
            titleId="testimonials-title"
          />
          <div style={{ maxWidth: '900px', margin: '2rem auto 0' }}>
            <Testimonials variant="default" showAll={false} />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section" aria-labelledby="newsletter-title" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <NewsletterSubscribe variant="card" />
          </div>
        </div>
      </section>
    </div>
  )
}