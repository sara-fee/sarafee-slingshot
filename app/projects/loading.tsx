import { SkeletonGrid } from '@/components/SkeletonCard/SkeletonCard'
import styles from './loading.module.css'

export default function ProjectsLoading() {
  return (
    <div className={styles.projectsLoading}>
      {/* Hero Section Skeleton */}
      <section className={styles.heroSkeleton}>
        <div className="container">
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonSubtitle} />
        </div>
      </section>

      {/* Projects Grid Skeleton */}
      <section className="section">
        <div className="container">
          <SkeletonGrid count={6} variant="project" />
        </div>
      </section>
    </div>
  )
}