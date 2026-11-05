import styles from "./ProjectsStyles.module.css";
import mash from "../../assets/mash.png";
import profilerV2 from "../../assets/profilerV2.png";
import eda from "../../assets/eda.png";
import edaPDF from "../../assets/Exploratory Data Analysis_ Airline Delays.pdf";
import ranforestPDF from "../../assets/Political Party Classification Using Random Forest.pdf";
import ranforest from "../../assets/ranforest.png";
import rosterrecap from "../../assets/rosterrecap.png";
import ProjectCard from "../../common/ProjectCard";
import FeaturedProject from "../../common/FeaturedProject";
import poolsharkHero from "../../assets/poolshark-hero.jpg";
import poolsharkCrew from "../../assets/poolshark-crew.jpg";
import poolsharkAdmin from "../../assets/poolshark-admin.jpg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <FeaturedProject
        eyebrow="Live in production"
        title="Pool Shark"
        subtitle="Field operations app for a Florida pool service company"
        tech="Next.js · TypeScript · Cloudflare Workers · D1 (SQLite) · Drizzle · Better Auth · Resend"
        description="Saw a business need and built the fix: one mobile-first app that replaced text messages and a paper notebook for the owner and four technicians, covering about 300 pools."
        images={[
          { src: poolsharkHero, label: "Overview", alt: "Pool Shark on three phones: live time clock, pool details, and the owner's overview with open repairs" },
          { src: poolsharkCrew, label: "Crew", alt: "Pool Shark crew screens: today's route and a pool's details with notes and repairs" },
          { src: poolsharkAdmin, label: "Owner", alt: "Pool Shark owner screens: crew status with repairs triage and the route editor" },
        ]}
        highlights={[
          { icon: "clock", title: "Time clock", text: "with a live timer, missed-punch warnings and one-tap timesheets texted to the owner." },
          { icon: "route", title: "Route planning", text: "for two-day routes, per-day stops and one-date changes, without breaking the printed order." },
          { icon: "mail", title: "Customer service reports", text: "emailed with a photo, with idempotent retries so a bad connection never sends twice." },
          { icon: "wrench", title: "Repair tracking", text: "techs flag broken equipment and the owner triages Open, Waiting and Fixed from his overview." },
        ]}
        stats={[
          { value: "~300", label: "pools managed" },
          { value: "5", label: "person crew" },
          { value: "136", label: "automated tests" },
        ]}
        footnote="Private internal app. Screenshots use demo data."
      />
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
