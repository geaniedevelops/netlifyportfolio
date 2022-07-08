import { Link } from "react-router-dom";

export default function Navigation(){
    return (
        <div className="header-nav">
            <nav className="main-content">
                <Link to="/">LOGO</Link>
                <Link to="/about">About</Link>
                <Link to="/work">Work</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}