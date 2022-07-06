import { Link } from "react-router-dom";
import { getProjects } from "../../data";
import '../../resources/css/projects.css';

export default function Projects() {
  let projects = getProjects();

  return (
    <main className="projects">
      <div className="projects__all js-project-nav">
        {projects.map((project) => (
          <div className="projects__preview">
            <img src={project.image} alt=""/>
            <Link
              to={`/projects/${project.slug}`}
              key={project.key}
            >
              {project.name}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}