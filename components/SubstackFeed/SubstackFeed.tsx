'use client'
import { useEffect, useState } from 'react'
import styles from './SubstackFeed.module.css'

interface SubstackPost {
  id: string
  title: string
  subtitle: string
  url: string
  publishedAt: string
  coverImage?: string
}

interface SubstackFeedProps {
  substackUrl?: string
  limit?: number
  variant?: 'list' | 'grid'
}

export default function SubstackFeed({ 
  substackUrl = 'sarafee.substack.com',
  limit = 3,
  variant = 'list'
}: SubstackFeedProps) {
  const [posts, setPosts] = useState<SubstackPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Substack provides RSS feeds at: https://sarafee.substack.com/feed
    // You can parse the RSS feed or use Substack's embed widget
    const fetchPosts = async () => {
      try {
        // Option 1: Use RSS feed parser (requires backend API route)
        const response = await fetch(`/api/substack?url=${substackUrl}&limit=${limit}`)
        const data = await response.json()
        setPosts(data.posts)
        
        // Option 2: Use placeholder data (replace with actual implementation)
        // const placeholderPosts: SubstackPost[] = Array.from({ length: limit }, (_, i) => ({
        //   id: `post-${i}`,
        //   title: `Sample Substack Article ${i + 1}`,
        //   subtitle: 'A brief description of this interesting article that you should definitely read...',
        //   url: `https://${substackUrl}/p/sample-post-${i}`,
        //   publishedAt: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toISOString(),
        //   coverImage: `https://via.placeholder.com/800x400?text=Article+${i + 1}`,
        // }))
        
        // setPosts(placeholderPosts)
        setLoading(false)
      } catch (err) {
        setError('Failed to load Substack feed')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [substackUrl, limit])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  // Decode HTML entities (e.g., &#8217; to ', &#8212; to —)
  const decodeHtmlEntities = (text: string): string => {
    if (typeof window === 'undefined') return text
    const textarea = document.createElement('textarea')
    textarea.innerHTML = text
    return textarea.value
  }

  if (loading) {
    return (
      <div className={styles.feedContainer}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading latest articles...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.feedContainer}>
        <div className={styles.error}>
          <p>{error}</p>
          <a 
            href={`https://${substackUrl}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.fallbackLink}
          >
            Visit Substack →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.feedContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <span className={styles.icon}>✍️</span>
          Latest from Substack
        </h3>
        <a 
          href={`https://${substackUrl}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.subscribeButton}
          aria-label="Subscribe on Substack"
        >
          Subscribe
        </a>
      </div>

      <div className={`${styles.posts} ${variant === 'grid' ? styles.grid : styles.list}`}>
        {posts.map((post) => (
          <article key={post.id} className={styles.postCard}>
            {post.coverImage && (
              <a 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.imageLink}
              >
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className={styles.coverImage}
                  loading="lazy"
                />
              </a>
            )}
            <div className={styles.content}>
              <time className={styles.date} dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <h4 className={styles.postTitle}>
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.titleLink}
                >
                  {decodeHtmlEntities(post.title)}
                </a>
              </h4>
              <p className={styles.subtitle}>{decodeHtmlEntities(post.subtitle)}</p>
              <a 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.readMore}
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.footer}>
        <a 
          href={`https://${substackUrl}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.viewAllLink}
        >
          View All Articles →
        </a>
      </div>
    </div>
  )
}