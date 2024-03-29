import { Link, useParams } from 'react-router-dom'
import { getWork } from '../../data/data'
import { Window } from '../../elements'
import WorkCard from './WorkCard'
import '../../resources/scss/pages/work.scss'

export default function Work() {
  let companies = getWork()
  let params = useParams()

  function buildUrl(slug) {
    return `/work/${slug.toLowerCase()}`
  }
  return (
    <Window barTitle="work">
      <section className="work-content">
        {!params.slug ? (
          <ul className="projects__nav js-project-nav">
            {companies.map((company, i) => (
              <li key={i}>
                <Link to={buildUrl(company.slug)}>{company.companyName}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <WorkCard />
        )}
      </section>
    </Window>
  )
}
