import { useParams } from 'react-router-dom'
import { getWorkBySlug } from '../../data/data'

export default function WorkCard() {
  let params = useParams()
  let work = getWorkBySlug(params.slug)

  return (
    <article className="work-detail">
      <h3>{work.companyName}</h3>
      <img src={work.image} alt="" />
      <p>
        <span>Created: </span>
        {work.date}
      </p>
      <p>{work.description}</p>
      <div className="work-detail__ctas">
        <a className="button" href={work.githubLink}>
          Github
        </a>
        <a className="button" href={work.demoLink}>
          Demo
        </a>
      </div>
    </article>
  )
}
