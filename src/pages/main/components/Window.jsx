import React from 'react'
import { Close, Max, Min } from '../../../resources/images/icons/icons'
import '../../../resources/scss/elements/_window.scss'

export default function Window(props) {
  return (
    <div className="window">
      <div className="window__bar">
        <div className="window__bar-text">
          <p>Some Text</p>
        </div>
        <div className="window__bar-icons">
          <div className="box">
            <img src={Min} alt="" />
          </div>
          <div className="box">
            <img src={Max} alt="" />
          </div>
          <div className="box">
            <img src={Close} alt="" />
          </div>
        </div>
      </div>
      <div className="window__content">{props.children}</div>
    </div>
  )
}
