'use client'

import { useState } from 'react'
import styles from './FlippableCard.module.css'

interface FlippableCardProps {
  icon: string
  title: string
  description: string
  backTitle: string
  backContent: string[]
}

export default function FlippableCard({
  icon,
  title,
  description,
  backTitle,
  backContent,
}: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleFlip()
    }
  }

  return (
    <article
      className={`${styles.highlightCard} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleFlip}
      tabIndex={0}
      onKeyPress={handleKeyPress}
      role="button"
      aria-label={`Click to flip card and see more details about ${title}`}
      aria-pressed={isFlipped}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.highlightIcon} aria-hidden="true">
            {icon}
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.cardBack}>
          <h3>{backTitle}</h3>
          <ul className={styles.skillsList}>
            {backContent.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
