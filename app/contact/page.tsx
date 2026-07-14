import { Metadata } from 'next'
import PageHero from '@/components/PageHero/PageHero'
import StructuredData from '@/components/StructuredData/StructuredData'
import ContactForm from '@/components/ContactForm/ContactForm'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch for web development projects, freelance opportunities, and collaborations. Based in San Francisco, CA. Available for remote work worldwide.',
  keywords: ['contact developer', 'hire developer', 'freelance developer', 'web development services', 'San Francisco developer contact', 'project inquiry'],
  openGraph: {
    title: 'Contact Sara Fee | Full Stack Developer',
    description: 'Get in touch for web development projects and collaborations.',
    type: 'website',
    url: 'https://yourwebsite.com/contact',
  },
  alternates: {
    canonical: 'https://yourwebsite.com/contact',
  },
}

export default function Contact() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Sara Fee',
    description: 'Get in touch for web development projects and collaborations',
    url: 'https://yourwebsite.com/contact',
    mainEntity: {
      '@type': 'Person',
      name: 'Sara Fee',
      email: 'your.email@example.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Professional Services',
        email: 'your.email@example.com',
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
      },
    },
  }

  return (
    <div className={styles.contact}>
      <StructuredData id="structured-data-contact" data={structuredData} />
      <PageHero 
        title="Get In Touch" 
        subtitle="Let's discuss your project and bring your ideas to life"
      />

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2>Contact Information</h2>
              <p className={styles.infoDescription}>
                Feel free to reach out through any of the following channels.
                I'll get back to you as soon as possible.
              </p>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📧</div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:your.email@example.com">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <h3>Location</h3>
                    <p>San Francisco, CA</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🔗</div>
                  <div>
                    <h3>Social Media</h3>
                    <div className={styles.socialLinks}>
                      <a
                        href={process.env.NEXT_PUBLIC_GITHUB_URL || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      <a
                        href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={process.env.NEXT_PUBLIC_TWITTER_URL || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2>Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}