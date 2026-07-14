'use client'

import styles from './LoadingSpinner.module.css'

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'white'
  label?: string
}

export default function LoadingSpinner({
  size = 'medium',
  color = 'primary',
  label = 'Loading...'
}: LoadingSpinnerProps) {
  return (
    <div className={styles.container} role="status" aria-live="polite">
      <div
        className={`${styles.spinner} ${styles[size]} ${styles[color]}`}
        aria-hidden="true"
      />
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export function InlineSpinner({ size = 'small' }: Pick<LoadingSpinnerProps, 'size'>) {
  return (
    <div className={styles.inline} role="status" aria-label="Loading">
      <div className={`${styles.spinner} ${styles[size]} ${styles.primary}`} />
    </div>
  )
}