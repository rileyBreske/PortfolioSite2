import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Get In Touch</h1>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📧</div>
            <div>
              <h3 className={styles.contactLabel}>Email</h3>
              <p className={styles.contactValue}>rileybreske@outlook.com</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📍</div>
            <div>
              <h3 className={styles.contactLabel}>Location</h3>
              <p className={styles.contactValue}>Santa Rosa, FL</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>💼</div>
            <div>
              <h3 className={styles.contactLabel}>Availability</h3>
              <p className={styles.contactValue}>Open to opportunities</p>
            </div>
          </div>
        </div>
        <form action="https://formspree.io/f/mblrkkjz" method="post" className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input type="text" name="name" id="name" placeholder="Your name" className={styles.formInput} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input type="email" name="email" id="email" placeholder="your.email@example.com" className={styles.formInput} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Message
            </label>
            <textarea name="message" id="message" placeholder="Tell me whats up!" className={styles.formTextarea} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
