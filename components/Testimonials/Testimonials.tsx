'use client'

import { useState } from 'react'
import styles from './Testimonials.module.css'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image?: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Innovations Inc.',
    text: 'Working with Sara Fee was an absolute pleasure. They delivered a high-quality web application that exceeded our expectations. Their attention to detail and commitment to best practices is outstanding.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupHub',
    text: 'Sara Fee transformed our vision into reality with exceptional skill and professionalism. The performance optimizations they implemented reduced our load times by 60%. Highly recommend!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    company: 'Creative Studios',
    text: 'The collaboration was seamless from start to finish. Sara Fee has a rare combination of technical expertise and design sensibility. They brought our designs to life perfectly.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'CTO',
    company: 'Digital Solutions Ltd.',
    text: 'Exceptional developer with deep knowledge of modern web technologies. Sara Fee delivered clean, maintainable code and was always available for questions and iterations.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Park',
    role: 'Founder',
    company: 'E-Commerce Ventures',
    text: 'Our e-commerce platform is now faster, more accessible, and converting better than ever. Sara Fee\'s expertise in Next.js and performance optimization made all the difference.',
    rating: 5,
  },
]

interface TestimonialsProps {
  variant?: 'default' | 'compact'
  showAll?: boolean
}

export default function Testimonials({ variant = 'default', showAll = false }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const displayTestimonials = showAll ? testimonials : [testimonials[currentIndex]]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating: number) => {
    return (
      <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < rating ? styles.starFilled : styles.starEmpty}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className={`${styles.testimonials} ${styles[variant]}`}>
      <div className={styles.testimonialsList}>
        {displayTestimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className={styles.testimonialCard}
            aria-labelledby={`testimonial-${testimonial.id}-name`}
          >
            <div className={styles.quoteIcon} aria-hidden="true">
              “
            </div>
            {renderStars(testimonial.rating)}
            <blockquote className={styles.testimonialText}>
              <p>{testimonial.text}</p>
            </blockquote>
            <div className={styles.testimonialAuthor}>
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                  className={styles.authorImage}
                />
              ) : (
                <div className={styles.authorImagePlaceholder} aria-hidden="true">
                  {testimonial.name.charAt(0)}
                </div>
              )}
              <div className={styles.authorInfo}>
                <cite id={`testimonial-${testimonial.id}-name`} className={styles.authorName}>
                  {testimonial.name}
                </cite>
                <p className={styles.authorRole}>
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {!showAll && testimonials.length > 1 && (
        <div className={styles.controls}>
          <button
            onClick={handlePrev}
            className={styles.controlButton}
            aria-label="Previous testimonial"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-selected={index === currentIndex}
                role="tab"
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className={styles.controlButton}
            aria-label="Next testimonial"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  )
}
