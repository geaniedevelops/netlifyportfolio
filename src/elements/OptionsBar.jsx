import React from 'react'
import { Link } from 'react-router-dom'
import { getProjects, getResume } from '../data/data'
import '../resources/scss/elements/_options-bar.scss'

export default function OptionsBar(props) {
  const pageType = props.type

  function buildUrl(slug) {
    return `/${pageType}/${slug.toLowerCase()}`
  }

  const viewMenu = () => {
    let links

    if (pageType === 'about') {
      links = getResume().map((section, i) => (
        <li key={i}>
          <Link to={buildUrl(section.name)}>{section.name}</Link>
        </li>
      ))
    }

    if (pageType === 'projects') {
      links = getProjects().map((project, i) => (
        <li key={i}>
          <Link to={buildUrl(project.slug)}>{project.name}</Link>
        </li>
      ))
    }
    return <ul className="submenu hidden js-view-menu">{links}</ul>
  }

  const handleMenuTrigger = (e) => {
    e.preventDefault()
    const submenu = document.querySelector(`.${e.target.dataset.target}`)
    if (submenu.classList.contains('hidden')) {
      submenu.classList.remove('hidden')
    }
  }

  return (
    <ul className="options-nav">
      <li>
        <ul className="options-nav_option">
          <li>
            <button
              className="js-options-trigger"
              onClick={handleMenuTrigger}
              data-target="js-options-menu"
            >
              <span>O</span>ptions
            </button>
          </li>
          <li>
            <ul className="submenu hidden js-options-menu">
              <li>
                <p className="js-darkmode">Dark Mode</p>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <ul className="options-nav_option">
          <li>
            <button
              className="js-view-trigger"
              onClick={handleMenuTrigger}
              data-target="js-view-menu"
            >
              <span>V</span>iew
            </button>
          </li>
          <li>{viewMenu()}</li>
        </ul>
      </li>
    </ul>
  )
}
