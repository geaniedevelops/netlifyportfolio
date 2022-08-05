import React from 'react'
import Window from './components/Window'
import { Shapes } from '../../resources/images/home'
import '../../resources/scss/pages/main.scss'

export default function Main() {
  return (
    <section className="homepage">
      <Window>
        <article className="homepage-content">
          <h1>Geanie Blanco</h1>
          <h2>Frontend & Product Developer</h2>
          <img
            src={Shapes}
            alt="blue outlined triangle overlapped by purple and pink gradiated circle"
            className="homepage-content_background"
          />
        </article>
      </Window>
    </section>
  )
}
