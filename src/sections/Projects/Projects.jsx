import styles from "./ProjectsStyles.module.css";
import mash from "../../assets/mash.png";
import profilerV2 from "../../assets/profilerV2.png";
import eda from "../../assets/eda.png";
import edaPDF from "../../assets/Exploratory Data Analysis_ Airline Delays.pdf";
import ranforestPDF from "../../assets/Political Party Classification Using Random Forest.pdf";
import ranforest from "../../assets/ranforest.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={mash} link="https://www.mashelite.com/" h3="Mash Elite" p="Wordpress Dev" />
        <ProjectCard src={profilerV2} link="https://profilerv2.vercel.app/" h3="ProfilerV2" p="Next.js/ Supabase" />
        <a href={edaPDF} target="_blank" rel="noopener noreferrer">
          <ProjectCard src={eda} h3="Airline EDA" p="R programming" />
        </a>
        <a href={ranforestPDF} target="_blank" rel="noopener noreferrer">
          <ProjectCard src={ranforest} h3="Ran. Forest Model" p="R programming" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
