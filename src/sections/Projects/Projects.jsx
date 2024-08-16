import styles from "./ProjectsStyles.module.css";
import mash from "../../assets/mash.png";
import rise from "../../assets/rise.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={mash} link="https://www.mashelite.com/" h3="Mash Elite" p="Wordpress Dev" />
        <ProjectCard src={rise} link="https://www.riseindoorsports.com/" h3="Rise Indoor" p="Wordpress Dev" />
        <ProjectCard src={hipsster} link="https://github.com/Ade-mir/company-landing-page-2" h3="Airline EDA" p="R programming" />
        <ProjectCard src={fitLift} link="https://github.com/Ade-mir/company-landing-page-2" h3="Ran. Forest Model" p="R programming" />
      </div>
    </section>
  );
}

export default Projects;
