import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://picsum.photos/seed/project1/400/250',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates.',
    tags: ['React', 'Firebase', 'Tailwind'],
    image: 'https://picsum.photos/seed/project2/400/250',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with location-based forecasts.',
    tags: ['JavaScript', 'API', 'CSS'],
    image: 'https://picsum.photos/seed/project3/400/250',
  },
];

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
