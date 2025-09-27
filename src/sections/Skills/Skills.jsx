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
            <SkillList src={checkMarkIcon} skill="HTML" styles={styles} />
            <SkillList src={checkMarkIcon} skill="CSS" styles={styles} />
            <SkillList src={checkMarkIcon} skill="JavaScript" styles={styles} />
            <SkillList src={checkMarkIcon} skill="React" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Next.js" styles={styles} />
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Backend & Languages</h3>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Node.js" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Python" styles={styles} />
            <SkillList src={checkMarkIcon} skill="R" styles={styles} />
            <SkillList src={checkMarkIcon} skill="C++" styles={styles} />
            <SkillList src={checkMarkIcon} skill="SQL" styles={styles} />
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Design & Tools</h3>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Figma" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Adobe Creative Suite" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Canva" styles={styles} />
            <SkillList src={checkMarkIcon} skill="WordPress" styles={styles} />
            <SkillList src={checkMarkIcon} skill="Git" styles={styles} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
