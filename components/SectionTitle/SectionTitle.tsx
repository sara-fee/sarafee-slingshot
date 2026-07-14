import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  title: string
  subtitle?: string
  titleId?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  titleId, 
  align = 'center',
  className = '' 
}: SectionTitleProps) {
  return (
    <div className={`${styles.sectionHeader} ${styles[align]} ${className}`}>
      <h2 id={titleId} className={styles.sectionTitle}>
        {title}
      </h2>
      {subtitle && (
        <p className={styles.sectionSubtitle}>
          {subtitle}
        </p>
      )}
    </div>
  )
}