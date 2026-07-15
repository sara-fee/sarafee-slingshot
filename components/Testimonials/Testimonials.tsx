'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
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
  const swiperRef = useRef<SwiperType | null>(null)

  const handleNext = () => {
    swiperRef.current?.slideNext()
  }

  const handlePrev = () => {
    swiperRef.current?.slidePrev()
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

  // If showAll is true, display all testimonials in a grid
  if (showAll) {
    return (
      <div className={`${styles.testimonials} ${styles[variant]} ${styles.showAll}`}>
        <div className={styles.testimonialsList}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className={styles.testimonialCard}
              aria-labelledby={`testimonial-${testimonial.id}-name`}
            >
              <div className={styles.quoteIcon} aria-hidden="true">
                "
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
      </div>
    )
  }

  // Use Swiper for carousel mode
  return (
    <div className={`${styles.testimonials} ${styles[variant]}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        a11y={{
          prevSlideMessage: 'Previous testimonial',
          nextSlideMessage: 'Next testimonial',
          paginationBulletMessage: 'Go to testimonial {{index}}',
        }}
        className={styles.swiperContainer}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <article
              className={styles.testimonialCard}
              aria-labelledby={`testimonial-${testimonial.id}-name`}
            >
              <div className={styles.quoteIcon} aria-hidden="true">
                "
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
          </SwiperSlide>
        ))}
      </Swiper>

      {testimonials.length > 1 && (
        <div className={styles.controls}>
          <button
            onClick={handlePrev}
            className={styles.controlButton}
            aria-label="Previous testimonial"
            type="button"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            onClick={handleNext}
            className={styles.controlButton}
            aria-label="Next testimonial"
            type="button"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  )
}