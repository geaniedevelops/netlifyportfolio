import React, { useEffect, useState } from 'react'
import '../resources/scss/elements/_clock.scss'

export default function Clock() {
  const currentDate = new Date(Date.now())
  const [date, setDate] = useState()
  const [hours, setHour] = useState(currentDate.getHours())
  const [minutes, setMinutes] = useState(currentDate.getMinutes())
  const [seconds, setSeconds] = useState(currentDate.getSeconds())

  const clearState = () => {
    setHour()
    setMinutes()
    setSeconds()
  }

  setInterval(() => {
    clearState()
    setHour(new Date(Date.now()).getHours())
  }, 3600000)

  setInterval(() => {
    clearState()
    setMinutes(new Date(Date.now()).getMinutes())
  }, 60000)

  setInterval(() => {
    clearState()
    setSeconds(new Date(Date.now()).getSeconds())
  }, 1000)

  return (
    <div className="clock">
      <div className="clock-face-outer">
        <div className="clock-face-inner">
          <div className="hand hand-hour" id={hours}></div>
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
