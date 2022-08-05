import React from 'react'
import { getResume } from "../../../data"
import { Link } from 'react-router-dom'

export default function About() {
  let resume = getResume();

  return (
    <section className='about'>
      <div className='about-content'>
        <h2>A bit about me...</h2>
        <p>
          I enjoy creating beautiful and accessible user experiences for product and e-commerce.
          <a
            href="https://drive.google.com/file/d/1QVle4JwI-Kj5hS5gMOi4ptpSKgma8h0p/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            className='button'
          >
            Download my resume
          </a>
        </p>
        <div>
          {resume[0].experience.map((position, i) => (
            <div
                className="resume-card"
                key={i}>
                <h4>{position.companyName},
                    <span> {position.position}</span>
                </h4>
                <p className="resume-card__dates">
                    {position.startDate} - {position.endDate}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
