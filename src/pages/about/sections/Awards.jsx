import React from 'react'
import { useParams } from 'react-router-dom'
import { getResumeSectionByName } from '../../../data/data'

export default function Awards() {
  let params = useParams()
  let awards = getResumeSectionByName(params.slug)

  const showAwardList = () => {
    return awards.map((award, i) => (
      <article key={i}>
        <h4>{award.awardName}</h4>
        <p className="resume-card__dates">
          {award.event}, {award.date}
        </p>
      </article>
    ))
  }

  return showAwardList()
}
