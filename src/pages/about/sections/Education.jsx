import React from 'react'
import { useParams } from 'react-router-dom'
import { getResumeSectionByName } from '../../../data/data'

export default function Education() {
  let params = useParams()
  let education = getResumeSectionByName(params.slug)

  return (
    <article className="about-content education">
      <h3>Education</h3>
      {education.map((school, i) => (
        <div className="resume-card" key={i}>
          <h4>{school.schoolName}</h4>
          <p>{school.focus}</p>
          <p className="resume-card__dates">
            {school.startDate} - {school.endDate}
          </p>
        </div>
      ))}
    </article>
  )
}
