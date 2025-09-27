import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="https://linkedin.com/in/riley-breske-1a0370198" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            LinkedIn
          </a>
          <a href="https://github.com/rileyBreske" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
            GitHub
          </a>
          <a href="mailto:rileybreske@outlook.com" className={styles.footerLink}>
            Email
          </a>
        </div>
        <p className={styles.footerText}>&copy; 2024 Riley Breske. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
