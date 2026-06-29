import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Languages</h3>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="JavaScript" styles={styles} />
            <SkillList src={checkMarkIcon} skill="TypeScript" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Python" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Java" styles={styles} />
            <SkillList src={checkMarkIcon} skill="C / C++" styles={styles} />
            <SkillList src={checkMarkIcon} skill="SQL" styles={styles} />
            <SkillList src={checkMarkIcon} skill="R" styles={styles} />
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Frameworks & Databases</h3>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Next.js" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Node.js" styles={styles} />
            <SkillList src={checkMarkIcon} skill="NestJS" styles={styles} />
            <SkillList src={checkMarkIcon} skill="PostgreSQL" styles={styles} />
            <SkillList src={checkMarkIcon} skill="MySQL" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Supabase" styles={styles} />
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Cloud & Tools</h3>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="AWS" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Docker" styles={styles} />
            <SkillList src={checkMarkIcon} skill="GitHub Actions" styles={styles} />
            <SkillList src={checkMarkIcon} skill="CI/CD" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Git" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Linux" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Figma" styles={styles} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
