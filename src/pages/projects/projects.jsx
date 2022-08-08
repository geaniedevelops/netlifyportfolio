import { Link, useParams } from 'react-router-dom'
import { getProjects } from '../../data/data'
import { Window } from '../../elements'
import '../../resources/scss/pages/projects.scss'
import '../../utils/show-more'
import ProjectCard from './ProjectCard'

export default function Projects() {
  let projects = getProjects()
  let params = useParams()

  function buildUrl(slug) {
    return `/projects/${slug.toLowerCase()}`
  }

  return (
    <Window barTitle="Projects">
      <section className="project-content">
        {params.slug ? (
          <ProjectCard projectSlug={params.slug} />
        ) : (
          <>
            <p>Work done for fun, practice, and experimenting.</p>
            {projects.map((project, i) => (
              <Link to={buildUrl(project.slug)} key={i}>
                <h3>{project.name}</h3>
              </Link>
            ))}
          </>
        )}
      </section>
    </Window>
  )
}
