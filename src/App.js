import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Clock, Grid, MainNavigation, OptionsBar } from './elements'
import './resources/scss/app.scss'

export default function App() {
  let location = useLocation()

  const getPageName = () => {
    let pageName
    if (location.pathname.includes('about')) pageName = 'about'
    if (location.pathname.includes('projects')) pageName = 'projects'
    if (location.pathname.includes('work')) pageName = 'work'
    if (location.pathname.includes('contact')) pageName = 'contact'
    if (location.pathname.includes('welcome')) pageName = 'homepage'
    return pageName
  }
  return (
    <>
      <header>
        <OptionsBar type={getPageName()} />
      </header>
      <main className={getPageName()}>
        <Outlet />
      </main>
      <footer>
        <MainNavigation active={getPageName()} />
      </footer>
      <Grid />
      <Clock />
    </>
  )
}
