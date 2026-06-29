import styles from "./ProjectsStyles.module.css";
import mash from "../../assets/mash.png";
import profilerV2 from "../../assets/profilerV2.png";
import eda from "../../assets/eda.png";
import edaPDF from "../../assets/Exploratory Data Analysis_ Airline Delays.pdf";
import ranforestPDF from "../../assets/Political Party Classification Using Random Forest.pdf";
import ranforest from "../../assets/ranforest.png";
import rosterrecap from "../../assets/rosterrecap.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mash}
          h3="Mash Elite"
          p="WordPress · WooCommerce · AWS S3"
          description="E-commerce redesign driving a 250% month-over-month sales increase."
        />
        <ProjectCard
          src={profilerV2}
          link="https://profilerv2.vercel.app/"
          h3="ProfilerV2"
          p="Next.js · TypeScript · Supabase"
          description="Real-time athlete readiness dashboards with PostgreSQL RLS and Vercel CI/CD."
        />
        <ProjectCard
          src={rosterrecap}
          link="https://rosterrecap.com"
          h3="RosterRecap"
          p="Next.js · Supabase · Vercel Cron"
          description="Serverless fantasy sports platform syncing the Sleeper API via Edge Functions."
        />
        <a href={edaPDF} target="_blank" rel="noopener noreferrer">
          <ProjectCard
            src={eda}
            h3="Airline EDA"
            p="R · ggplot2 · Regression"
            description="Identified 97% correlation (R²=0.95) between day-of-week and flight delays."
          />
        </a>
        <a href={ranforestPDF} target="_blank" rel="noopener noreferrer">
          <ProjectCard
            src={ranforest}
            h3="Random Forest Model"
            p="R · Random Forest · Cross-Validation"
            description="Political party classifier achieving 99.8% accuracy and AUC = 1.0."
          />
        </a>
      </div>
    </section>
  );
}

export default Projects;
