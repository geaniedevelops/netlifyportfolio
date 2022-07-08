import { getProjects } from "../../data";
import ProjectCard from "./project";
import '../../resources/css/pages/projects.css';

export default function Projects() {
  let projects = getProjects();

  const demoLinkButton = (project) => {
    if(project.demoLink) {
      return (<a className="button" href={project.demoLink}>Demo</a>)
    }
  }

  return (
    <main className="projects">
      <div className="projects__all">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            image={project.image}
            date={project.date}
            descroption={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </main>
  );
}