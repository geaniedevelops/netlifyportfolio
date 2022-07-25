import React from 'react'
import { Work, Hero, About, Footer } from './components';
import '../../resources/scss/pages/main.scss'

export default function Main() {
  return (
    <main className='main'>
        <div className='construction-banner'>
            <p>
                <span>Pardon the appearance....</span>
                Currently under construction!
            </p>
        </div>
        <Hero/>
        <About/>
        <Work/>
        <Footer/>
    </main>
  )
}
