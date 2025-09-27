import styles from "./SkillList.module.css";

function SkillList({ src, skill }) {
  return (
    <div className={styles.skillItem}>
      <img src={src} alt="Checkmark icon" className={styles.skillIcon} />
      <p className={styles.skillName}>{skill}</p>
    </div>
  );
}

export default SkillList;
