import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.highlight}>Your Name</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Full Stack Developer | Creative Problem Solver | Tech Enthusiast
          </p>
          <p className={styles.heroDescription}>
            I build modern web applications with a focus on user experience,
            performance, and clean code. Welcome to my digital space.
          </p>
          <div className={styles.heroCta}>
            <Link href="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>What I Do</h2>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>💻</div>
              <h3>Web Development</h3>
              <p>
                Building responsive, performant web applications using modern
                technologies and best practices.
              </p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>🎨</div>
              <h3>UI/UX Design</h3>
              <p>
                Creating intuitive and beautiful user interfaces that provide
                exceptional user experiences.
              </p>
            </div>
            <div className={styles.highlightCard}>
              <div className={styles.highlightIcon}>⚡</div>
              <h3>Performance Optimization</h3>
              <p>
                Optimizing applications for speed, accessibility, and search
                engine visibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}