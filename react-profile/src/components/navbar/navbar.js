import React from "react"
//import Resume from "../images/"

function Navbar() {
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="https://github.com/jlukewilliams94" className="brand-logo center">J Luke Williams Profile</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="https://github.com/jlukewilliams94">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/jlukewilliams94">LinkedIn</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;