import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ src, link, h3, p, description, external = true }) {
  const cardContent = (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={src} alt={`${h3} project screenshot`} />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <span className={styles.viewText}>View Project</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3>{h3}</h3>
        <p className={styles.tech}>{p}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target={external ? "_blank" : "_self"} rel={external ? "noopener noreferrer" : ""} className={styles.link}>
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export default ProjectCard;
