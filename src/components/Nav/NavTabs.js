/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../scss/style.css"

function NavTabs() {
    const location = useLocation()

    return (
        <header className="header">
        <div className="overlay has-fade"></div>
    
        <nav className="container container--pall flex flex-jc-sb flex-ai-c">
          <a href="index.html" className="header__logo">
            Egi Vilza Portfolio
          </a>
    
          <a id="btnHamburger" a href="#" className="header__toggle hide-for-desktop">
            <span></span>
            <span></span>
            <span></span>
          </a>
    
    
          <div className="header__links hide-for-mobile">
            <a href="./Assets/Resume.html">Resume</a><a href="./Assets/Portfolio_Projects.html">Portfolio Projects</a>
          </div>
    
        </nav>
    
          <div className="header__menu has-fade">
              <a href="./Assets/Resume.html">Resume</a>
              <a href="./Assets/Portfolio_Projects.html">Portfolio Projects</a>
          </div>
    
      </header>
    )
}

export default NavTabs