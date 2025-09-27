function SkillList({ src, skill, styles }) {
  return (
    <div className={styles.skillItem}>
      <img src={src} alt="Checkmark icon" className={styles.skillIcon} />
      <p className={styles.skillName}>{skill}</p>
    </div>
  );
}

export default SkillList;
