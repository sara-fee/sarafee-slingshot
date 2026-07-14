'use client'

import { useState, FormEvent } from 'react'
import styles from './NewsletterSubscribe.module.css'

interface NewsletterSubscribeProps {
  variant?: 'inline' | 'card'
}

export default function NewsletterSubscribe({ variant = 'card' }: NewsletterSubscribeProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    try {
      // Track subscription event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'newsletter_signup', {
          event_category: 'Newsletter',
          event_label: 'Newsletter Subscription',
        })
      }

      // TODO: Replace with your actual newsletter API endpoint
      // Example: Mailchimp, ConvertKit, Buttondown, etc.
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you for subscribing! Check your email to confirm.')
        setEmail('')
      } else {
        const data = await response.json()
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <div className={`${styles.newsletter} ${styles[variant]}`}>
      <div className={styles.content}>
        <h3 className={styles.title}>Stay Updated</h3>
        <p className={styles.description}>
          Get the latest articles, tutorials, and project updates delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.inputGroup}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="newsletter-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            required
            disabled={status === 'loading' || status === 'success'}
            className={styles.input}
            aria-describedby={message ? 'newsletter-message' : undefined}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={styles.button}
            aria-label="Subscribe to newsletter"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
          </button>
        </div>

        {message && (
          <p
            id="newsletter-message"
            className={`${styles.message} ${styles[status]}`}
            role={status === 'error' ? 'alert' : 'status'}
            aria-live="polite"
          >
            {message}
          </p>
        )}
      </form>

      <p className={styles.privacy}>
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  )
}
