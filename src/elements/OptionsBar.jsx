import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getProjects, getResume } from '../data/data'
import '../resources/scss/elements/_options-bar.scss'

export default function OptionsBar(props) {
  const pageType = props.type
  const [optionNavVisible, setOptionNavVisible] = useState(false)
  const [viewNavVisible, setViewNavVisible] = useState(false)

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
    return (
      <ul
        className="submenu js-view-menu"
        isvisible={viewNavVisible ? 'true' : 'false'}
      >
        {links}
      </ul>
    )
  }

  const handleMenuClick = (trigger) => {
    if (trigger.dataset.target === 'options') {
      if (optionNavVisible) setOptionNavVisible(false)
      else {
        setOptionNavVisible(true)
        setViewNavVisible(false)
      }
    }

    if (trigger.dataset.target === 'view') {
      if (viewNavVisible) setViewNavVisible(false)
      else {
        setViewNavVisible(true)
        setOptionNavVisible(false)
      }
    }
  }

  return (
    <ul className="options-nav">
      <li>
        <ul className="options-nav_option">
          <li>
            <button
              className="js-options-trigger"
              onClick={(e) => handleMenuClick(e.target)}
              data-target="options"
            >
              <span>O</span>ptions
            </button>
          </li>
          <li>
            <ul
              className="submenu hidden js-options-menu"
              isvisible={optionNavVisible ? 'true' : 'false'}
            >
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
              onClick={(e) => handleMenuClick(e.target)}
              data-target="view"
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
