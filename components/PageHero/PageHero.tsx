'use client'

import styles from './PageHero.module.css'

interface PageHeroProps {
  title: string
  subtitle?: string
  titleId?: string
  className?: string
}

export default function PageHero({ title, subtitle, titleId, className = '' }: PageHeroProps) {
  return (
    <section className={`${styles.hero} ${className}`} aria-labelledby={titleId || 'page-title'}>
      <div className="container">
        <h1 id={titleId || 'page-title'} className={styles.pageTitle}>
          {title}
        </h1>
        {subtitle && (
          <p className={styles.pageSubtitle}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}