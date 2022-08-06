import { Link } from 'react-router-dom'
import '../resources/scss/elements/_main-nav.scss'

export default function MainNavigation() {
  return (
    <div className="main-nav">
      <nav className="main-content">
        <Link to="/welcome">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}
