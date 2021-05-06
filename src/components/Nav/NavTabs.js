/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from "react"
import { Link } from "react-router-dom"
import "../scss/style.css"
import JsScript from  "../Scripts/script"

function NavTabs() {

    useEffect(() => {
        JsScript()
    }, [])

    return (
        <header className="header">
        <div className="overlay has-fade"></div>
    
        <nav className="container container--pall flex flex-jc-sb flex-ai-c">
          <Link to="/" className="header__logo">
                Home Page
          </Link>
    
          <Link id="btnHamburger" to="#" className="header__toggle hide-for-desktop">
            <span></span>
            <span></span>
            <span></span>
          </Link>
    
    
          <div className="header__links hide-for-mobile">
            <Link to="/resume">
                Resume
            </Link>
            <Link to="/portfolio">
                Portfolio Projects
            </Link>
          </div>
    
        </nav>
    
          <div className="header__menu has-fade">
              <Link to="/">
                    Home Page
              </Link>
              <Link to="/resume">
                Resume
              </Link>
              <Link to="/portfolio">
                Portfolio Projects
              </Link>
          </div>
      </header>
    )
}

export default NavTabs