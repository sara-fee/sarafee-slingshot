'use client'

import { useState } from 'react'
import styles from './ResumeDownload.module.css'

interface ResumeDownloadProps {
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function ResumeDownload({ variant = 'primary', className = '' }: ResumeDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      // Track download event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download', {
          event_category: 'Resume',
          event_label: 'Resume PDF Download',
        })
      }

      // Create a link and trigger download
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'YourName_Resume.pdf'
      link.click()
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setTimeout(() => setIsDownloading(false), 1000)
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`${styles.downloadButton} ${styles[variant]} ${className}`}
      aria-label="Download resume as PDF"
    >
      <span className={styles.icon} aria-hidden="true">
        {isDownloading ? '⏳' : '📄'}
      </span>
      <span className={styles.text}>
        {isDownloading ? 'Downloading...' : 'Download Resume'}
      </span>
    </button>
  )
}
