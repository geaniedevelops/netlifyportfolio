import { Outlet, Link } from "react-router-dom";
import { getProjects } from "../data";

export default function Projects() {
  let projects = getProjects();
  return (
    <main>
      <nav>
        {projects.map((project) => (
          <Link
            to={`/projects/${project.slug}`}
            key={project.key}
          >
            {project.name}
          </Link>
        ))}
      </nav>
      <Outlet/>
    </main>
  );
}