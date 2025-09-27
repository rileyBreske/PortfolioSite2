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
          <h3 className={styles.categoryTitle}>Frontend Development</h3>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Next.js" />
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Backend & Languages</h3>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Node.js" />
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="R" />
            <SkillList src={checkMarkIcon} skill="C++" />
            <SkillList src={checkMarkIcon} skill="SQL" />
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Design & Tools</h3>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Figma" />
            <SkillList src={checkMarkIcon} skill="Adobe Creative Suite" />
            <SkillList src={checkMarkIcon} skill="Canva" />
            <SkillList src={checkMarkIcon} skill="WordPress" />
            <SkillList src={checkMarkIcon} skill="Git" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
