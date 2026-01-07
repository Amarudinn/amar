import styles from './Skills.module.css';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'CSS/SCSS', level: 85 },
  { name: 'Python', level: 70 },
];

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercent}>{skill.level}%</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progress} 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
