import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Have a project in mind? Let's work together!
        </p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Your Name" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <input type="email" placeholder="Your Email" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <textarea 
              placeholder="Your Message" 
              rows={5} 
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
        <div className={styles.socials}>
          <a href="#" className={styles.socialLink}>GitHub</a>
          <a href="#" className={styles.socialLink}>LinkedIn</a>
          <a href="#" className={styles.socialLink}>Twitter</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
