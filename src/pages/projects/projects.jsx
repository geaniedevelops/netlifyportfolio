import { getProjects } from "../../data";
import ProjectCard from "./Project";
import '../../resources/scss/pages/projects.scss';
import '../../utils/show-more';
import AppTemplate from "../AppTemplate";

export default function Projects() {
  let projects = getProjects();

  return (
    <AppTemplate pageName="projects">
      <h1>Projects</h1>
      <p>Work done for fun, practice, and experimenting.</p>
      <section className="projects__all grid--responsive">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            image={project.image}
            date={project.date}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </section>
    </AppTemplate>
  );
}