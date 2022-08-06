import React from 'react'
import '../resources/scss/elements/_window.scss'

export default function Window(props) {
  return (
    <div className="window">
      <div className="window__bar">
        <div className="window__bar-text">
          <p>{props.barTitle.toUpperCase()}</p>
        </div>
        <div className="window__bar-icons">
          <div className="min"></div>
          <div className="max"></div>
          <div className="close"></div>
        </div>
      </div>
      <div className="window__content">{props.children}</div>
    </div>
  )
}
