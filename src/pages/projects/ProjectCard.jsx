import { getProjectBySlug } from '../../data/data'
import '../../resources/scss/elements/_project-card.scss'

export default function ProjectCard(props) {
  const project = getProjectBySlug(props.projectSlug)

  const DemoLinkButton = () => {
    if (project.demoLink) {
      return (
        <a className="button" href={project.demoLink}>
          Demo
        </a>
      )
    }
  }
  return (
    <article className="project-card">
      <h3>{project.name}</h3>
      <p className="date">
        <span>Created: </span>
        {project.date}
      </p>
      <img src={project.image} alt="" />
      <p className="js-about-project">{project.description}</p>
      <div className="ctas">
        <a className="button" href={project.githubLink}>
          Github
        </a>
        {DemoLinkButton(project)}
      </div>
    </article>
  )
}
