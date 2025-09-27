import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.heroContent}>
        <div className={styles.colorModeContainer}>
          <img className={styles.hero} src={heroImg} alt="profile picture of Riley Breske" />
          <div className={styles.colorMode} onClick={toggleTheme}>
            <img src={themeIcon} alt="color mode icon" />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            <h1>Riley Breske</h1>
            <h2 className={styles.title}>Computer Science Student</h2>
          </div>
          <p className={styles.location}>
            <span>📍</span>
            Santa Rosa Beach, FL
          </p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com/in/riley-breske-1a0370198" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/rileyBreske" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          <p className={styles.description}>
            Passionate about web development and data science. Building innovative solutions and exploring the intersection of technology and
            creativity.
          </p>
          <div className={styles.ctaButton}>
            <a href={CV} download>
              <button>Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
