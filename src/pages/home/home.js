import React from "react";
import Overlay from "../../components/overlay/overlay.js"
import "./home.css"
import ProfilePic from "../../components/profilepic/lukewilliamsprofilepic.png"


const Home = () => {
    return (
        <header className="about-me-background">
            <Overlay />
            <div role="main" className="container">
                <div className="jumtron text-center">
                <h1 className="jumtron-title">About Me</h1>
                </div>
                <div className="container about-me-container universal-font">
                    <img src={ProfilePic} alt="luke williams profile pic" title="Luke Williams" className="about-me-profile-img"></img>
                    <p> Coder that was born and raised in Wales, UK. Currently live in Charlotte, NC and attend University of North Carolina-Charlotte Coding Camp.</p>
                    <p>Contact: luke.williams@vigilmobile.com </p>
                    <p> Co-Founder and Head of Applicatin Development at <a href="https://vigilmobile.com/">Vigil</a></p>
                </div>
            </div>
        </header>


    )
}

export default Home;