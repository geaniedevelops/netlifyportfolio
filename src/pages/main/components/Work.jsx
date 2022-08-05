import React from 'react'
import { getProjects } from '../../../data'

export default function Work() {
  let projects = getProjects()

  return (
    <section className="work">
      <div className="work-content">
        <h2>Featured work & projects:</h2>
        <ul className="project-list">
          {projects.map((project, i) => (
            <li key={i}>
              <div className="projects">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="ctas">
                  <a
                    className="button"
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    className="button"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
                <p>Created: {project.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
