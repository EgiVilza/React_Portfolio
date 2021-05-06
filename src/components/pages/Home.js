/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import "../scss/style.css"
import ProfileImage from "../Images/ProfilePhoto.jpg"

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
                    <img src={ProfileImage} alt="Profile Photo"></img>
                </div>
                
                <div className="profile__text profile__item">
                    <p>
                        About Me
                    </p>
                    <p>
                    Hi! My name is Egi Vilza. I have recently completed my coding boot camp for the 
                    Technology and Leadership Center at Washington University in St. Louis. 
                    At the moment, I am currently looking for 
                    junior level opportunities in the web development field.
                    To view some of the projects I have been working on, 
                    click on the "Portfolio Projects" link above for project links on github repos, 
                    videos, and pages as well as a description for each project. To view more, click on the
                    link to my GitHub profile below.
                    </p><br></br>
                    <p>GitHub Profile: <a href="https://github.com/EgiVilza" target="_blank" rel="noreferrer">github.com/EgiVilza</a></p>
                </div>
            </section>
        </div>
    )
}

export default Home