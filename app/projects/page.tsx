import Link from 'next/link'
import styles from './projects.module.css'

export const metadata = {
  title: 'Projects | Your Name',
  description: 'Explore my portfolio of web development projects',
}

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'Interactive weather dashboard with forecasts, maps, and location-based alerts.',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description:
      'Analytics platform for social media insights with data visualization and reporting.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: 5,
    title: 'Blog CMS',
    description:
      'Content management system for blogs with markdown support and SEO optimization.',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description:
      'Mobile-first fitness tracking app with workout plans and progress visualization.',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
]

export default function Projects() {
  return (
    <div className={styles.projects}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.pageTitle}>My Projects</h1>
          <p className={styles.pageSubtitle}>
            A showcase of my recent work and side projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.projectLinks}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.primary}`}
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label={`View source code of ${project.title} on GitHub`}
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.cta}>
            <h2>Interested in working together?</h2>
            <p>Let's discuss your project and bring your ideas to life.</p>
            <Link href="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}