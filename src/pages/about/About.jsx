import { useParams } from 'react-router-dom'
import { Window } from '../../elements'
import {
  Experience,
  Awards,
  Blurb,
  Skills,
  Education,
} from './sections/sections'
import '../../resources/scss/pages/about.scss'

export default function About() {
  let params = useParams()

  const renderAboutSection = () => {
    if (params.slug === 'experience') return <Experience />
    if (params.slug === 'awards') return <Awards />
    if (params.slug === 'skills') return <Skills />
    if (params.slug === 'education') return <Education />
    if (params.slug === null || params.slug === undefined) return <Blurb />
  }

  return (
    <Window barTitle={params.slug ? params.slug.toUpperCase() : 'About Me'}>
      {renderAboutSection()}
    </Window>
  )
}
