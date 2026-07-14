import { Metadata } from 'next'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import StructuredData from '@/components/StructuredData/StructuredData'
import styles from './page.module.css'
import ResumeDownload from '@/components/ResumeDownload/ResumeDownload'
import NewsletterSubscribe from '@/components/NewsletterSubscribe/NewsletterSubscribe'
import Testimonials from '@/components/Testimonials/Testimonials'
import FlippableCard from '@/components/FlippableCard/FlippableCard'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://yourwebsite.com',
  },
}

export default function Home() {
  const structuredData = {
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
  }

  return (
    <div className={styles.home}>
      <StructuredData id="structured-data-service" data={structuredData} />
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
            <ResumeDownload variant="secondary" />
            <Link href="/contact" className="btn btn-secondary" aria-label="Get in touch with me">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionTitle title="What I Do" titleId="services-title" />
          <div className={styles.highlightsGrid}>
            <FlippableCard
              icon="💻"
              title="Web Development"
              description="Building responsive, performant web applications using modern technologies and best practices."
              backTitle="Technologies & Skills"
              backContent={[
                'React.js & Next.js',
                'TypeScript & JavaScript',
                'HTML5 & CSS3',
                'Responsive Design',
                'Progressive Web Apps',
                'RESTful APIs',
              ]}
            />
            <FlippableCard
              icon="🎨"
              title="UI/UX Design"
              description="Creating intuitive and beautiful user interfaces that provide exceptional user experiences."
              backTitle="Design Expertise"
              backContent={[
                'User-Centered Design',
                'Wireframing & Prototyping',
                'Design Systems',
                'Accessibility (WCAG)',
                'Figma & Adobe XD',
                'Color Theory & Typography',
              ]}
            />
            <FlippableCard
              icon="⚡"
              title="Performance Optimization"
              description="Optimizing applications for speed, accessibility, and search engine visibility."
              backTitle="Optimization Focus"
              backContent={[
                'Core Web Vitals',
                'Code Splitting & Lazy Loading',
                'Image Optimization',
                'SEO Best Practices',
                'Lighthouse Audits',
                'Caching Strategies',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" aria-labelledby="testimonials-title">
        <div className="container">
          <SectionTitle 
            title="What Clients Say" 
            subtitle="Don't just take my word for it - hear from people I've worked with"
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