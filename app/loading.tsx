import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <LoadingSpinner size="large" label="Loading page..." />
    </div>
  )
}