import React from 'react'
import { useParams } from 'react-router-dom'
import { getResumeSectionByName } from '../../../data/data'

export default function Awards() {
  let params = useParams()
  let awards = getResumeSectionByName(params.slug)

  const showAwardList = () => {
    return awards.map((award, i) => (
      <div className="resume-card" key={i}>
        <h4>{award.awardName}</h4>
        <p className="resume-card__dates">
          {award.event}, {award.date}
        </p>
      </div>
    ))
  }

  return <article className="about-content awards">{showAwardList()}</article>
}
