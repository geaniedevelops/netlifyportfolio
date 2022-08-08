import React from 'react'
import { useParams } from 'react-router-dom'
import { getResumeSectionByName } from '../../../data/data'

export default function Experience() {
  let params = useParams()
  let experience = getResumeSectionByName(params.slug)

  const showExperienceList = () => {
    return experience.map((position, i) => (
      <article className="resume-card" key={i}>
        <h4>
          {position.companyName},<span> {position.position}</span>
        </h4>
        <p className="resume-card__dates">
          {position.startDate} - {position.endDate}
        </p>
      </article>
    ))
  }

  return (
    <>
      {showExperienceList()}
      <button
        href="https://drive.google.com/file/d/1QVle4JwI-Kj5hS5gMOi4ptpSKgma8h0p/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
      >
        download my resume.
      </button>
    </>
  )
}
