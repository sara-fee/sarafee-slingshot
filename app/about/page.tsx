import { Metadata } from 'next'
import PageHero from '@/components/PageHero/PageHero'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Full Stack Developer with 5+ years of experience in React, Next.js, TypeScript, Node.js, and modern web technologies. Based in San Francisco, CA. Specializing in scalable web applications and user-friendly solutions.',
  keywords: ['full stack developer', 'web developer experience', 'React developer', 'Next.js expert', 'TypeScript developer', 'Node.js', 'San Francisco developer', 'developer skills', 'web development portfolio'],
  openGraph: {
    title: 'About Your Name | Full Stack Developer',
    description: 'Learn about my 5+ years of experience building modern web applications with React, Next.js, and TypeScript.',
    type: 'profile',
    url: 'https://yourwebsite.com/about',
  },
  alternates: {
    canonical: 'https://yourwebsite.com/about',
  },
}

export default function About() {
  return (
    <div className={styles.about}>
      <PageHero 
        title="About Me" 
        subtitle="Passionate developer crafting digital experiences"
      />

      {/* Bio Section */}
      <section className="section">
        <div className="container">
          <div className={styles.bioSection}>
            <div className={styles.bioImage}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageIcon}>👤</span>
              </div>
            </div>
            <div className={styles.bioContent}>
              <h2>Hello, I'm Your Name</h2>
              <p>
                I'm a passionate full-stack developer with over 5 years of
                experience building modern web applications. I specialize in
                creating scalable, user-friendly solutions that solve real-world
                problems.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                things work on the internet. Today, I work with cutting-edge
                technologies to bring ideas to life, focusing on clean code,
                performance, and exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <SectionTitle title="Skills & Technologies" titleId="skills-title" />
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Frontend</h3>
              <ul className={styles.skillList}>
                <li>React.js / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>HTML5 / CSS3</li>
                <li>Tailwind CSS</li>
                <li>Redux / Context API</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Backend</h3>
              <ul className={styles.skillList}>
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>PostgreSQL / MongoDB</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Tools & Others</h3>
              <ul className={styles.skillList}>
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>AWS / Vercel</li>
                <li>Jest / Testing Library</li>
                <li>Figma / Design Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Experience" titleId="experience-title" />
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2021 - Present</div>
              <div className={styles.timelineContent}>
                <h3>Senior Full Stack Developer</h3>
                <h4 className={styles.company}>Tech Company Inc.</h4>
                <p>
                  Leading development of enterprise web applications using React,
                  Node.js, and cloud technologies. Mentoring junior developers
                  and establishing best practices for the team.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2019 - 2021</div>
              <div className={styles.timelineContent}>
                <h3>Full Stack Developer</h3>
                <h4 className={styles.company}>Digital Agency Ltd.</h4>
                <p>
                  Developed and maintained multiple client projects, focusing on
                  responsive design and performance optimization. Collaborated
                  with designers and stakeholders to deliver high-quality
                  solutions.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2018 - 2019</div>
              <div className={styles.timelineContent}>
                <h3>Junior Web Developer</h3>
                <h4 className={styles.company}>Startup Ventures</h4>
                <p>
                  Built and maintained web applications using modern JavaScript
                  frameworks. Gained experience in agile development and
                  collaborative coding practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}