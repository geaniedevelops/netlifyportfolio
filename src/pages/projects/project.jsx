import { useParams, Link } from "react-router-dom";
import { getProjectBySlug, getProjects } from "../../data";

function Project() {
    let params = useParams();
    let activeProject = getProjectBySlug(params.slug);
    let allProjects = getProjects;

    return (
        <section className="project">
            <a href="/projects">Back</a>
            <nav className="projects__nav js-project-nav">
                {allProjects.map((project) => (
                <Link
                    to={`/projects/${project.slug}`}
                    key={project.key}
                >
                    {project.name}
                </Link>
                ))}
            </nav>
            <article className="project-detail">
                <h2>{activeProject.name}</h2>
                <img src={activeProject.image} alt=""/>
                <p><span>Created: </span>{activeProject.date}</p>
                <p>{activeProject.description}</p>
                <div className="project-detail__ctas">
                    <a className="button" href={activeProject.githubLink}>Github</a>
                    <a className="button" href={activeProject.demoLink}>Demo</a>
                </div>
            </article>
        </section>
    );
  }

  export default Project;