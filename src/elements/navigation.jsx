import { Link } from "react-router-dom";

export default function Navigation(){
    return (
        <nav className="header-nav">
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}