import { Metadata } from 'next'
import PageHero from '@/components/PageHero/PageHero'
import StructuredData from '@/components/StructuredData/StructuredData'
import styles from './announcements.module.css'

export const metadata: Metadata = {
  title: 'Announcements',
  description: 'Latest updates, news, and announcements from Your Name. Stay informed about new projects, blog posts, and professional updates.',
  openGraph: {
    title: 'Announcements | Your Name',
    description: 'Latest updates, news, and announcements from Your Name',
    url: 'https://yourwebsite.com/announcements',
  },
  alternates: {
    canonical: 'https://yourwebsite.com/announcements',
  },
}

interface Announcement {
  id: number
  date: string
  category: 'project' | 'blog' | 'update' | 'event'
  title: string
  description: string
  link?: string
  linkText?: string
}

const announcements: Announcement[] = [
  {
    id: 1,
    date: '2024-01-15',
    category: 'project',
    title: 'New E-Commerce Platform Launched',
    description: 'Excited to announce the launch of a fully responsive e-commerce platform built with Next.js 14, featuring real-time inventory management and seamless checkout experience.',
    link: '/projects',
    linkText: 'View Project',
  },
  {
    id: 2,
    date: '2024-01-10',
    category: 'blog',
    title: 'Blog Post: Optimizing React Performance',
    description: 'Published a comprehensive guide on React performance optimization techniques, covering memoization, code splitting, and lazy loading strategies.',
    link: '#',
    linkText: 'Read Article',
  },
  {
    id: 3,
    date: '2024-01-05',
    category: 'update',
    title: 'Portfolio Website Redesign',
    description: 'Completely redesigned my portfolio with enhanced accessibility features, improved SEO, and a more welcoming, organic design aesthetic.',
  },
  {
    id: 4,
    date: '2023-12-20',
    category: 'event',
    title: 'Speaking at Tech Conference 2024',
    description: 'Honored to be selected as a speaker at the upcoming Tech Conference 2024. Will be presenting on "Building Scalable Web Applications with Next.js".',
    link: '#',
    linkText: 'Event Details',
  },
  {
    id: 5,
    date: '2023-12-15',
    category: 'update',
    title: 'Open Source Contribution Milestone',
    description: 'Reached 100+ contributions to open source projects this year! Grateful for the amazing developer community and excited to continue contributing.',
  },
  {
    id: 6,
    date: '2023-12-01',
    category: 'project',
    title: 'Healthcare Dashboard Application',
    description: 'Developed a comprehensive healthcare dashboard for patient management with real-time data visualization and secure authentication.',
    link: '/projects',
    linkText: 'View Project',
  },
]

const categoryLabels = {
  project: 'Project',
  blog: 'Blog',
  update: 'Update',
  event: 'Event',
}

const categoryIcons = {
  project: '🚀',
  blog: '📝',
  update: '📢',
  event: '🎤',
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Announcements() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Your Name - Announcements',
    description: 'Latest updates, news, and announcements',
    url: 'https://yourwebsite.com/announcements',
    author: {
      '@type': 'Person',
      name: 'Your Name',
    },
    blogPost: announcements.map((announcement) => ({
      '@type': 'BlogPosting',
      headline: announcement.title,
      description: announcement.description,
      datePublished: announcement.date,
      author: {
        '@type': 'Person',
        name: 'Your Name',
      },
    })),
  }

  return (
    <div className={styles.announcements}>
      <StructuredData id="structured-data-announcements" data={structuredData} />
      <PageHero 
        title="Announcements" 
        subtitle="Stay updated with my latest projects, blog posts, and professional milestones"
        titleId="announcements-title"
      />

      {/* Announcements List */}
      <section className="section" aria-label="Announcements list">
        <div className="container">
          <div className={styles.announcementsList}>
            {announcements.map((announcement) => (
              <article
                key={announcement.id}
                className={styles.announcementCard}
                aria-labelledby={`announcement-${announcement.id}-title`}
              >
                <div className={styles.announcementHeader}>
                  <span
                    className={`${styles.category} ${styles[announcement.category]}`}
                    aria-label={`Category: ${categoryLabels[announcement.category]}`}
                  >
                    <span aria-hidden="true">{categoryIcons[announcement.category]}</span>
                    {categoryLabels[announcement.category]}
                  </span>
                  <time
                    dateTime={announcement.date}
                    className={styles.date}
                  >
                    {formatDate(announcement.date)}
                  </time>
                </div>
                <h2 id={`announcement-${announcement.id}-title`} className={styles.announcementTitle}>
                  {announcement.title}
                </h2>
                <p className={styles.announcementDescription}>
                  {announcement.description}
                </p>
                {announcement.link && announcement.linkText && (
                  <a
                    href={announcement.link}
                    className={styles.announcementLink}
                    aria-label={`${announcement.linkText} for ${announcement.title}`}
                  >
                    {announcement.linkText}
                    <span aria-hidden="true"> →</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
