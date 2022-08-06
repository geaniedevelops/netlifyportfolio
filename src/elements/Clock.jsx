import React from 'react'
import '../resources/scss/elements/_clock.scss'

export default function Clock() {
  return (
    <div className="clock">
      <div className="clock-face-outer">
        <div className="clock-face-inner">
          <div className="hand hand-hour"></div>
          <div className="hand hand-min"></div>
          <div className="hand hand-sec"></div>
        </div>
        <div className="marking marking-one"></div>
        <div className="marking marking-two"></div>
        <div className="marking marking-three"></div>
        <div className="marking marking-four"></div>
      </div>
    </div>
  )
}
