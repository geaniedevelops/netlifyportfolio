import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import AppTemplate from './pages/AppTemplate'
import './resources/scss/app.scss'

export default function App() {
  let params = useParams()
  console.log(params)

  return (
    <AppTemplate pageName="">
      <Outlet />
    </AppTemplate>
  )
}
