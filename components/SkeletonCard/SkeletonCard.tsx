import styles from './SkeletonCard.module.css'

interface SkeletonCardProps {
  variant?: 'project' | 'testimonial' | 'announcement'
}

export default function SkeletonCard({ variant = 'project' }: SkeletonCardProps) {
  return (
    <div className={`${styles.skeleton} ${styles[variant]}`} aria-hidden="true">
      {variant === 'project' && (
        <>
          <div className={styles.skeletonContent}>
            <div className={`${styles.skeletonLine} ${styles.title}`} />
            <div className={`${styles.skeletonLine} ${styles.description}`} />
            <div className={`${styles.skeletonLine} ${styles.description}`} />
            <div className={styles.skeletonTags}>
              <div className={styles.skeletonTag} />
              <div className={styles.skeletonTag} />
              <div className={styles.skeletonTag} />
            </div>
          </div>
          <div className={styles.skeletonLinks}>
            <div className={styles.skeletonButton} />
            <div className={styles.skeletonButton} />
          </div>
        </>
      )}

      {variant === 'testimonial' && (
        <>
          <div className={styles.skeletonHeader}>
            <div className={styles.skeletonAvatar} />
            <div className={styles.skeletonAuthor}>
              <div className={`${styles.skeletonLine} ${styles.name}`} />
              <div className={`${styles.skeletonLine} ${styles.role}`} />
            </div>
          </div>
          <div className={`${styles.skeletonLine} ${styles.quote}`} />
          <div className={`${styles.skeletonLine} ${styles.quote}`} />
          <div className={styles.skeletonStars} />
        </>
      )}

      {variant === 'announcement' && (
        <>
          <div className={styles.skeletonBadge} />
          <div className={`${styles.skeletonLine} ${styles.title}`} />
          <div className={`${styles.skeletonLine} ${styles.description}`} />
          <div className={`${styles.skeletonLine} ${styles.date}`} />
        </>
      )}
    </div>
  )
}

export function SkeletonGrid({
  count = 3,
  variant = 'project'
}: {
  count?: number
  variant?: SkeletonCardProps['variant']
}) {
  return (
    <div className={styles.skeletonGrid}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} variant={variant} />
      ))}
    </div>
  )
}