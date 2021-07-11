/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import "../scss/style.css"
import ProfileImage from "../Images/ProfilePhoto.jpg"

function Home() {
    const text1 = `Hi Employer, Welcome to my Portfolio Website! Here you will find examples of my programming projects as well as my resume.`
    const text2 = "Employer: Great! Can you tell us more about yourself and your programming skills?"
    const text3 = `Of course! Scroll down to learn more about me and some of the projects that I have worked on.`
    
    function homepageAnimation() {
        const egi = (
            `<div class="homepage__gridPhoto">
                <div class="homepage__picture homepage__item popout">
                    <img src=${ProfileImage} alt="Profile Photo"></img>
                </div>
                <div class="homepage__text homepage__item popout">
                    <p>${text1}</p>
                </div>
            </div>`
        )
        const employer = (
            `<div class="homepage__gridText">
                <div id="a" class="homepage__text homepage__item homepage__text2 popout">
                    <p>${text2}</p>
                </div>
                <div id="b" class="homepage__picture homepage__item popout">
                    <img src=${ProfileImage} alt="Profile Photo"></img>
                </div>
            </div>`
        )
        const egi2 = (
            `<div class="homepage__gridPhoto">
                <div class="homepage__picture homepage__item popout">
                    <img src=${ProfileImage} alt="Profile Photo"></img>
                </div>
                <div class="homepage__text homepage__item popout">
                    <p>${text3}</p>
                </div>
            </div>`
        )

        const heroText = document.querySelector(".hero-text")
        heroText.remove()

        //Add the animation elements
        const testText = document.querySelector(".test")
        testText.insertAdjacentHTML('beforeend',egi)

        //Delay
        setTimeout(function () {
            testText.insertAdjacentHTML('beforeend',employer)
        }, 2500);
        
        //Delay
        setTimeout(function () {
            testText.insertAdjacentHTML('beforeend',egi2)
        }, 5000);
    }

    return (
        <div>
            {/* Make is look like what it should after the animation is done, then add the animation stuff on scss */}
                <section className="homepage__border hero-image test">
                    <div className="hero-text">
                        <h1>Egi Vilza</h1>
                        <p>Aspiring Web Developer</p>
                        <button onClick={homepageAnimation}>Start Animation</button>
                    </div>
                </section>

            
            <section className="profile__grid">
                <div className="profile__picture profile__item">
                    <img src={ProfileImage} alt="Profile Photo"></img>
                </div>
                
                <div className="profile__text profile__item">
                    <h2>
                        Hi! 👋
                    </h2>
                    <p>
                    My name is Egi Vilza and I have recently relocated to the Dallas-Fort Worth area after completing my coding boot camp for the 
                    Technology and Leadership Center at Washington University in St. Louis. 
                    At the moment, I am currently looking for 
                    junior level opportunities in the web development field.
                    To view some of the projects I have been working on, 
                    click on the "Portfolio Projects" link above for project links on github repos, 
                    videos, and pages as well as a description for each project. To view more, click on the
                    link to my GitHub profile below.
                    </p>
                    <p>GitHub Profile: <a href="https://github.com/EgiVilza" target="_blank" rel="noreferrer">github.com/EgiVilza</a></p>
                </div>
            </section>
        </div>
    )
}

export default Home