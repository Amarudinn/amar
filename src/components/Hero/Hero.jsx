import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" 
            alt="Profile Avatar"
          />
        </div>
        <h1 className={styles.title}>Hi, I'm John Doe</h1>
        <p className={styles.subtitle}>Full Stack Developer</p>
        <p className={styles.description}>
          Passionate developer with 5+ years of experience building web applications.
          I love creating clean, efficient, and user-friendly solutions.
        </p>
        <div className={styles.buttons}>
          <a href="#contact" className={styles.btnPrimary}>Get In Touch</a>
          <a href="#projects" className={styles.btnSecondary}>View Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
