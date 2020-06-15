import React from "react"
import Resume from "../resume/lukewilliams2020.pdf"
//import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="index.html" title="Home">J.Luke Williams</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" title="About Me">About Me <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" title="Contact">Contact</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" title="Portfolio">Portfolio</a>
                    </li>
                     <li className="nav-item active">
                        <a className="nav-link" href="https://www.linkedin.com/in/jlukewilliams94">LinkedIn</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href={Resume}>Resume</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;