/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import "../scss/style.css"

function Home() {
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Egi Vilza</h1>
                    <p>Aspiring Web Developer</p>
                </div>
            </div>

            
            <section className="profile__grid">
                <div className="profile__picture profile__item">
                    <img src="../Images/ProfilePhoto.jpg" alt="Profile Photo"></img>
                </div>
                
                <div className="profile__text profile__item">
                    <p>
                        About Me
                    </p>
                    <p>
                        Hi! My Name is Egi Vilza and I am currently working through a web development bootcamp through trilogy 
                        where I am building my skills in javascript using jQuery, node, npm, sql and nosql databases, react.js and more!
                        To view some of the projects I have been working on, click on the "Portfolio Projects" link for project links on
                        github repos, videos, and pages as well as a description for each project.
                        At the moment, I am working as an Application Analyst at Washington University in St. Louis, but open for any exciting opportunities 
                        in the web development market.
                    </p><br></br>
                </div>
            </section>
        </div>
    )
}

export default Home