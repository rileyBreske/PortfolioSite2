import styles from "./ProjectsStyles.module.css";
import mash from "../../assets/mash.png";
import rise from "../../assets/rise.png";
import eda from "../../assets/graph.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={mash} link="https://www.mashelite.com/" h3="Mash Elite" p="Wordpress Dev" />
        <ProjectCard src={rise} link="https://www.riseindoorsports.com/" h3="Rise Indoor" p="Wordpress Dev" />
        <ProjectCard src={eda} link="" h3="Airline EDA" p="R programming" />
        <ProjectCard src={fitLift} link="" h3="Ran. Forest Model" p="R programming" />
      </div>
    </section>
  );
}

export default Projects;
