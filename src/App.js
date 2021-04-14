import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavTabs from "./components/Nav/NavTabs"
import Home from "./components/Pages/Home"
import Resume from "./components/Pages/Resume"
import Portfolio from "./components/Pages/Portfolio_Projects"

function App() {
    return (
        <Router>
            <div>
                <NavTabs />
                <Route path="/" component={Home} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
            </div>  
        </Router>
    )
}

export default App