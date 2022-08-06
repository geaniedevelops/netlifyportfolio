import React from 'react'
import { useParams } from 'react-router-dom'
import { getResumeSectionByName } from '../../../data/data'

export default function Skills() {
  let params = useParams()
  let skills = getResumeSectionByName(params.slug)

  return (
    <article className="about-content skills">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
